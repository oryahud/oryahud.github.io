(function(t){function e(e){for(var a,r,c=e[0],i=e[1],l=e[2],d=0,f=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0a39":function(t,e,n){"use strict";var a=n("c60d"),o=n.n(a);o.a},1:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},6:function(t,e){},6340:function(t,e,n){"use strict";var a=n("8a27"),o=n.n(a);o.a},"6d64":function(t,e,n){"use strict";var a=n("70ee"),o=n.n(a);o.a},"70ee":function(t,e,n){},"77e9":function(t,e,n){"use strict";var a=n("9e3a"),o=n.n(a);o.a},"807d":function(t,e,n){"use strict";var a=n("bd41"),o=n.n(a);o.a},"8a27":function(t,e,n){},"9e3a":function(t,e,n){},bd41:function(t,e,n){},c60d:function(t,e,n){},c94f:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a,o,s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Main")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"main"},[n("SettingsEditor",{on:{change:t.settingsChanged},model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}}),n("MqttStatusBadge",{model:{value:t.mqttStatus,callback:function(e){t.mqttStatus=e},expression:"mqttStatus"}}),n("div",{staticClass:"actual-temp"},[n("div",{staticClass:"temp-text"},[n("i",{staticClass:"flaticon-house-outline"}),n("span",[t._v(t._s(t.actualTemp))])])]),n("hr"),n("div",{staticClass:"remoteDisplay"},[n("div",{staticClass:"desired-temp"},[n("div",{staticClass:"temp-text"},[n("i",{staticClass:"flaticon-thermometer"}),t._v(" "),n("span",[t._v(t._s(t.acState.temperature))])]),n("v-btn",{staticClass:"temp-change-button",attrs:{icon:""},on:{click:function(e){t.acState.temperature++}}},[n("v-icon",{attrs:{large:""}},[t._v("fa-arrow-up")])],1),n("v-btn",{staticClass:"temp-change-button",attrs:{icon:""},on:{click:function(e){t.acState.temperature--}}},[n("v-icon",{attrs:{large:""}},[t._v("fa-arrow-down")])],1)],1)]),n("div",{staticClass:"remoteKeypads"},[n("hr"),n("v-btn",{staticClass:"power-button",class:{on:t.acState.power},on:{click:function(e){t.acState.power=!t.acState.power}}},[n("v-icon",[t._v("fa-power-off")])],1),n("fan-control",{on:{change:function(e){t.acState.fan=e}},model:{value:t.acState.fan,callback:function(e){t.$set(t.acState,"fan",e)},expression:"acState.fan"}}),n("mode-control",{on:{change:function(e){t.acState.mode=e}},model:{value:t.acState.mode,callback:function(e){t.$set(t.acState,"mode",e)},expression:"acState.mode"}}),n("div",{staticClass:"send-container"},[n("v-btn",{staticClass:"send-button red",attrs:{icon:"",large:"",disabled:t.mqttStatus!==t.MqttStatusEnum.connected},on:{click:function(e){return t.sendStateToMqttServer()}}},[n("v-icon",[t._v("fa-wifi")])],1)],1)],1)],1)])},l=[];n("99af"),n("d3b7"),n("25f0");(function(t){t[t["auto"]=0]="auto",t[t["cool"]=1]="cool",t[t["dry"]=2]="dry",t[t["fan"]=3]="fan",t[t["heat"]=4]="heat"})(a||(a={})),function(t){t[t["disconnected"]=0]="disconnected",t[t["connecting"]=1]="connecting",t[t["connected"]=2]="connected",t[t["error"]=3]="error"}(o||(o={}));var u=n("e7fc"),d=n.n(u),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fan-control-wrapper"},[n("i",{staticClass:"flaticon-vehicle fan-icon"}),n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.localSpeed,callback:function(e){t.localSpeed=e},expression:"localSpeed"}},[n("v-btn",{staticClass:"fan-speed-button",attrs:{text:""}},[n("i",{staticClass:"flaticon-magic-wand"})]),n("v-btn",{staticClass:"fan-speed-button",attrs:{text:""}},[t._v(" 1 ")]),n("v-btn",{staticClass:"fan-speed-button",attrs:{text:""}},[t._v(" 2 ")]),n("v-btn",{staticClass:"fan-speed-button",attrs:{text:""}},[t._v(" 3 ")])],1)],1)},v=[],p={components:{},props:["value"],computed:{localSpeed:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},m=p,b=(n("77e9"),n("2877")),g=n("6544"),h=n.n(g),S=n("8336"),w=n("a609"),x=Object(b["a"])(m,f,v,!1,null,null,null),q=x.exports;h()(x,{VBtn:S["a"],VBtnToggle:w["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mode-control-wrapper"},[n("i",{staticClass:"flaticon-mode-circular-button mode-icon"}),n("v-btn-toggle",{model:{value:t.localMode,callback:function(e){t.localMode=e},expression:"localMode"}},[n("v-btn",{staticClass:"mode-button",attrs:{text:""}},[n("i",{staticClass:"flaticon-magic-wand"})]),n("v-btn",{staticClass:"mode-button",attrs:{text:""}},[n("i",{staticClass:"flaticon-snowflake"})]),n("v-btn",{staticClass:"mode-button",attrs:{text:""}},[n("i",{staticClass:"flaticon-drought"})]),n("v-btn",{staticClass:"mode-button",attrs:{text:""}},[n("i",{staticClass:"flaticon-vehicle"})]),n("v-btn",{staticClass:"mode-button",attrs:{text:""}},[n("i",{staticClass:"flaticon-sun"})])],1)],1)},_=[],M={components:{},props:["value"],computed:{localMode:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},T=M,y=(n("0a39"),Object(b["a"])(T,C,_,!1,null,null,null)),k=y.exports;h()(y,{VBtn:S["a"],VBtnToggle:w["a"]});var I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{staticClass:"settings-button",class:{attention:t.requiresAttention},attrs:{icon:"",type:"button"},on:{click:function(e){t.showDialog=!0}}},[n("v-icon",{attrs:{large:""}},[t._v("fa-cog")])],1),n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[n("div",{staticClass:"settings-modal"},[n("v-toolbar",{attrs:{color:"white",flat:""}},[n("v-btn",{attrs:{icon:"",light:""},on:{click:function(e){return t.onBackButtonClicked()}}},[n("v-icon",{attrs:{color:"grey darken-2"}},[t._v(" mdi-arrow-left ")])],1),n("v-toolbar-title",{staticClass:"grey--text text--darken-4"},[t._v(" Settings ")])],1),n("v-container",[n("MqttServerInfoEditor",{on:{input:t.onMqttServerInfoChanged},model:{value:t.value.mqttServerInfo,callback:function(e){t.$set(t.value,"mqttServerInfo",e)},expression:"value.mqttServerInfo"}})],1)],1)])],1)},j=[],O=(n("45fc"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mqtt-info-editor"},[n("v-text-field",{attrs:{label:"MQTT server address","hide-details":"auto",rules:[t.rules.Required]},on:{input:function(e){return t.onInput()}},model:{value:t.value.address,callback:function(e){t.$set(t.value,"address",e)},expression:"value.address"}}),n("v-text-field",{attrs:{label:"MQTT server username","hide-details":"auto",rules:[t.rules.Required]},on:{input:function(e){return t.onInput()}},model:{value:t.value.user,callback:function(e){t.$set(t.value,"user",e)},expression:"value.user"}}),n("v-text-field",{attrs:{label:"MQTT server password","hide-details":"auto","append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password",rules:[t.rules.Required]},on:{"click:append":function(e){t.showPassword=!t.showPassword},input:function(e){return t.onInput()}},model:{value:t.value.password,callback:function(e){t.$set(t.value,"password",e)},expression:"value.password"}}),n("v-text-field",{attrs:{label:"MQTT subject prefix (optional)","hide-details":"auto"},on:{input:function(e){return t.onInput()}},model:{value:t.value.mqttSubjectPrefix,callback:function(e){t.$set(t.value,"mqttSubjectPrefix",e)},expression:"value.mqttSubjectPrefix"}})],1)}),$=[],P=function(t){return!!t||"Required."},V={Required:P},E=s["default"].extend({name:"MqttServerInfoEditor",props:["value"],data:function(){return{showPassword:!1,rules:V,address:""}},methods:{onInput:function(){this.$emit("input",this.value)}}}),B=E,A=n("8654"),D=Object(b["a"])(B,O,$,!1,null,"3805fc3a",null),N=D.exports;function Q(t){return["address","user","password"].some((function(e){return!Object.hasOwnProperty.call(t,e)||""===t[e]}))}h()(D,{VTextField:A["a"]});var J=s["default"].extend({name:"SettingsEditor",components:{MqttServerInfoEditor:N},props:{value:{type:Object}},data:function(){return{requiresAttention:!1,showDialog:!1}},created:function(){this.value.mqttServerInfo=JSON.parse(localStorage.getItem("mqttServerInfo")||"{}"),this.requiresAttention=Q(this.value.mqttServerInfo),this.$emit("change",this.value)},methods:{onMqttServerInfoChanged:function(t){localStorage.setItem("mqttServerInfo",JSON.stringify(t)),this.requiresAttention=Q(this.value.mqttServerInfo)},onBackButtonClicked:function(){this.showDialog=!1,this.$emit("change",this.value)}}}),R=J,U=(n("807d"),n("a523")),F=n("169a"),L=n("132d"),K=n("71d9"),z=n("2a7f"),G=Object(b["a"])(R,I,j,!1,null,"633cab12",null),H=G.exports;h()(G,{VBtn:S["a"],VContainer:U["a"],VDialog:F["a"],VIcon:L["a"],VToolbar:K["a"],VToolbarTitle:z["a"]});var W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mqtt-status-badge"},[n("h6",[t._v("MQTT:")]),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.value===t.MqttStatus.connected,expression:"value === MqttStatus.connected"}],attrs:{large:"",color:"green"}},[t._v("fa-link")]),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.value===t.MqttStatus.connecting,expression:"value === MqttStatus.connecting"}],attrs:{large:"",color:"orange"}},[t._v("fa-ellipsis-v")]),n("v-icon",{directives:[{name:"show",rawName:"v-show",value:t.value===t.MqttStatus.disconnected,expression:"value === MqttStatus.disconnected"}],attrs:{large:"",color:"red"}},[t._v("fa-unlink")])],1)},X=[],Y=(n("a9e3"),s["default"].extend({name:"MqttStatusBadge",props:{value:{type:Number}},data:function(){return{MqttStatus:o}}})),Z=Y,tt=(n("6340"),Object(b["a"])(Z,W,X,!1,null,"65fdf1f2",null)),et=tt.exports;h()(tt,{VIcon:L["a"]});n("c94f");var nt,at=s["default"].extend({components:{FanControl:q,ModeControl:k,SettingsEditor:H,MqttStatusBadge:et},data:function(){return{actualTemp:0,acState:{fan:0,mode:a.auto,temperature:26,power:!1},ambientTemperatureLastUpdatedAt:new Date,isConnectedToMqttServer:!1,settings:{},mqttStatus:o.disconnected,MqttStatusEnum:o}},methods:{sendStateToMqttServer:function(){console.log(JSON.stringify(this.acState));var t="".concat(this.acState.power?1:0,",").concat(this.acState.temperature,"\n        ,").concat(this.acState.mode,",").concat(this.acState.fan);nt.publish("".concat(this.settings.mqttServerInfo.mqttSubjectPrefix,"ac/set"),t)},settingsChanged:function(t){var e=this;console.log("Settings changed",t);var n=t.mqttServerInfo,a=n.address,s=n.user,r=n.password;console.log("will connect",{address:a,user:s,password:r}),nt=d.a.connect(a,{username:s,password:r}),nt.on("connect",(function(){e.mqttStatus=o.connected,console.log("Connected to MQTT server");var t="".concat(e.settings.mqttServerInfo.mqttSubjectPrefix,"ac/ambianceTemp");console.log("Subscribing to topic",t),nt.subscribe(t)})),nt.on("message",(function(t,n){console.log("got MQTT msg",t,n.toString()),t==="".concat(e.settings.mqttServerInfo.mqttSubjectPrefix,"ac/ambianceTemp")&&(e.actualTemp=parseInt(n.toString(),0))}))}},computed:{lastUpdateTime:function(){return"fixme"},isArduinoUpdating:function(){return!((new Date).getTime()-this.ambientTemperatureLastUpdatedAt.getTime()>3e4)}}}),ot=at,st=(n("6d64"),n("7496")),rt=Object(b["a"])(ot,i,l,!1,null,null,null),ct=rt.exports;h()(rt,{VApp:st["a"],VBtn:S["a"],VIcon:L["a"]});var it=s["default"].extend({name:"App",components:{Main:ct},data:function(){return{}}}),lt=it,ut=Object(b["a"])(lt,r,c,!1,null,null,null),dt=ut.exports;h()(ut,{VApp:st["a"]});var ft=n("ce5b"),vt=n.n(ft);s["default"].use(vt.a);var pt=new vt.a({});s["default"].config.productionTip=!1,new s["default"]({vuetify:pt,render:function(t){return t(dt)}}).$mount("#app")}});
//# sourceMappingURL=app.9a820c80.js.map