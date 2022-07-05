#include <PubSubClient.h>
#include <IRremoteESP8266.h>
#include <IRsend.h>
#include <Tadiran.h>
#include <ESP8266WiFi.h>
#include <stdio.h>
#include <OneWire.h> // use for digital read
#include <DallasTemperature.h> // use for digital read

#include "config.h"

WiFiClient espClient;
PubSubClient client(espClient);

OneWire oneWire(TEMP_SENSOR_PIN); // use for digital read 
DallasTemperature tempSensor(&oneWire); // use for digital read

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);
  pinMode(STATUS_LED, OUTPUT);
  pinMode(IR_LED_PIN, OUTPUT);
    
  setupWifi();

  client.setServer(MQTT_SERVER, MQTT_PORT);
  client.setCallback(mqttCallback);
  
  digitalWrite(STATUS_LED,LOW);
}

int loopCounter = 0;
void loop() {
  // put your main code here, to run repeatedly:
  Serial.print("oOo.");
  digitalWrite(STATUS_LED,HIGH);
 
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  if (loopCounter == 5) {
    loopCounter = 0;
    sendTempratureUpdate();
  }
  else {
    loopCounter++;
  }
  
  digitalWrite(STATUS_LED,LOW);
  delay(1000);
}

void setupWifi() {
  delay(10);
  // We start by connecting to a WiFi network
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);
  
  bool wasLit = false;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  if (!wasLit) {
    digitalWrite(STATUS_LED,HIGH);
    wasLit = true;
  }
  else {
    digitalWrite(STATUS_LED,LOW);
    wasLit = false;
  }
  
  randomSeed(micros());

  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  // Loop until we're reconnected
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Create a random client ID
    String clientId = "ESP8266Client-";
    clientId += String(random(0xffff), HEX);
    // Attempt to connect
    if (client.connect(clientId.c_str(), MQTT_USERNAME,MQTT_PASS)) {
      Serial.println("connected");
      
      client.subscribe(strcat(MQTT_SUBJECT,"set"));
    } 
    else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Wait 5 seconds before retrying
      delay(5000);
    }
  }
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message arrived [");
  Serial.print(topic);
  Serial.print("] ");
  Serial.println();
  
  char strPayload[length +1];
  strPayload[length] = '\0';
  for (int i=0; i<length; i++) {
    strPayload[i] = payload[i];
  }

  if (strcmp(topic, strcat(MQTT_SUBJECT, "set")) == 0) {
    executeCommand(String(strPayload));
  }
}

void executeCommand(String command){
  IRsend irsend(IR_LED_PIN);    
  Tadiran tadiran(1, 1, 26, 0);

  char* comma = ",";
  
  char cmdBuf[50];
  command.toCharArray(cmdBuf, 50);
  int power = atoi(strtok(cmdBuf, comma));
  int temp = atoi(strtok(NULL, comma));
  int acMode = atoi(strtok(NULL, comma));
  int fan = atoi(strtok(NULL, comma));
      
  tadiran.setMode(acMode);
  tadiran.setTemeprature(temp);
  tadiran.setFan(fan);
  tadiran.setState(power);

  irsend.sendRaw(tadiran.codes, TADIRAN_BUFFER_SIZE, 38);
  delay(500);
  irsend.sendRaw(tadiran.codes, TADIRAN_BUFFER_SIZE, 38);
  delay(500);
  irsend.sendRaw(tadiran.codes, TADIRAN_BUFFER_SIZE, 38);
  //send 3 times to decrease chances of AC not getting msg

  Serial.println("Executed command");    
}

void sendTempratureUpdate() {
  char cstr[16];
  itoa(getTempAnalog(), cstr, 10);
  client.publish(strcat(MQTT_SUBJECT, "ambianceTemp"), cstr);
}

// Analog read
int getTempAnalog() {
    int reading = analogRead(TEMP_SENSOR_PIN);  
    
    // converting that reading to voltage
    float voltage = reading * TEMP_SENSOR_VOLTAGE;
    voltage /= 1024.0;     
    float tempratureC = (voltage - 0.5) * 100 ;
    return round(tempratureC);    
}

// Digital read 
int getTempDigital() {
  Serial.print("Requesting temperatures...");
  tempSensor.requestTemperatures();
  Serial.println("DONE");

  float tempC = tempSensor.getTempCByIndex(0); // make sure you don't have multiple sensors

  if (tempC == DEVICE_DISCONNECTED_C) {
    Serial.println("Error: Could not read temperature data");
    return 0;
  }

  Serial.print("Temperature for the device 1 (index 0) is: ");
  Serial.println(tempC);
  return round(tempC);    
}