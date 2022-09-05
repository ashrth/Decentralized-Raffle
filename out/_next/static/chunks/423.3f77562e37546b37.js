"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{94423:function(o,c,a){a.r(c),a.d(c,{SolanaWalletAdapter:function(){return Z}});var d=a(4942),p=a(59917),g=a(22782),q=a(20917),e=a(95844),r=a(79826),s=a(24970),h=a(74286),t=a.n(h),i=a(2043),j=a.n(i),k=a(64063),u=a.n(k),v=a(48764).Buffer,w={errors:{disconnected:()=>"Torus: Lost connection to Torus.",permanentlyDisconnected:()=>"Torus: Disconnected from iframe. Page reload required.",unsupportedSync:a=>"Torus: The Torus Ethereum provider does not support synchronous methods like ".concat(a," without a callback parameter."),invalidDuplexStream:()=>"Must provide a Node.js-style duplex stream.",invalidOptions:a=>"Invalid options. Received: { maxEventListeners: ".concat(a,"}"),invalidRequestArgs:()=>"Expected a single, non-array, object argument.",invalidRequestMethod:()=>"'args.method' must be a non-empty string.",invalidRequestParams:()=>"'args.params' must be an object or array if provided.",invalidLoggerObject:()=>"'args.logger' must be an object if provided.",invalidLoggerMethod:a=>"'args.logger' must include required method '".concat(a,"'.")},info:{connected:a=>'Torus: Connected to chain with ID "'.concat(a,'".')},warnings:{}};const x={BOTTOM_LEFT:"bottom-left",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",TOP_RIGHT:"top-right"},b={GOOGLE:"google",FACEBOOK:"facebook",REDDIT:"reddit",DISCORD:"discord",TWITCH:"twitch",APPLE:"apple",LINE:"line",GITHUB:"github",KAKAO:"kakao",LINKEDIN:"linkedin",TWITTER:"twitter",WEIBO:"weibo",WECHAT:"wechat",EMAIL_PASSWORDLESS:"email_passwordless"};var y={supportedVerifierList:[b.GOOGLE,b.REDDIT,b.DISCORD],api:"https://api.tor.us",translations:{en:{embed:{continue:"Continue",actionRequired:"Authorization required",pendingAction:"Click continue to proceed with your request in a popup",cookiesRequired:"Cookies Required",enableCookies:"Please enable cookies in your browser preferences to access Torus",clickHere:"More Info"}},de:{embed:{continue:"Fortsetzen",actionRequired:"Autorisierung erforderlich",pendingAction:"Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",cookiesRequired:"Cookies ben\xf6tigt",enableCookies:"Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",clickHere:"Mehr Info"}},ja:{embed:{continue:"\u7D99\u7D9A\u3059\u308B",actionRequired:"\u8A8D\u8A3C\u304C\u5FC5\u8981\u3067\u3059",pendingAction:"\u7D9A\u884C\u3092\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u3001\u30DD\u30C3\u30D7\u30A2\u30C3\u30D7\u3067\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u7D9A\u884C\u3057\u307E\u3059",cookiesRequired:"\u5FC5\u8981\u306A\u30AF\u30C3\u30AD\u30FC",enableCookies:"Torus\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u306B\u306F\u3001\u30D6\u30E9\u30A6\u30B6\u306E\u8A2D\u5B9A\u3067Cookie\u3092\u6709\u52B9\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",clickHere:"\u8A73\u3057\u304F\u306F"}},ko:{embed:{continue:"\uACC4\uC18D\uD558\uB2E4",actionRequired:"\uC2B9\uC778 \uD544\uC694",pendingAction:"\uD31D\uC5C5\uC5D0\uC11C \uC694\uCCAD\uC744 \uC9C4\uD589\uD558\uB824\uBA74 \uACC4\uC18D\uC744 \uD074\uB9AD\uD558\uC2ED\uC2DC\uC624.",cookiesRequired:"\uCFE0\uD0A4 \uD544\uC694",enableCookies:"\uBE0C\uB77C\uC6B0\uC800 \uD658\uACBD \uC124\uC815\uC5D0\uC11C \uCFE0\uD0A4\uB97C \uD65C\uC131\uD654\uD558\uC5EC Torus\uC5D0 \uC561\uC138\uC2A4\uD558\uC2ED\uC2DC\uC624.",clickHere:"\uB354 \uB9CE\uC740 \uC815\uBCF4"}},zh:{embed:{continue:"\u7EE7\u7EED",actionRequired:"\u9700\u8981\u6388\u6743",pendingAction:"\u5355\u51FB\u7EE7\u7EED\u4EE5\u5728\u5F39\u51FA\u7A97\u53E3\u4E2D\u7EE7\u7EED\u60A8\u7684\u8BF7\u6C42",cookiesRequired:"\u5FC5\u586BCookie",enableCookies:"\u8BF7\u5728\u60A8\u7684\u6D4F\u89C8\u5668\u9996\u9009\u9879\u4E2D\u542F\u7528cookie\u4EE5\u8BBF\u95EETorus\u3002",clickHere:"\u66F4\u591A\u4FE1\u606F"}}},prodTorusUrl:"",localStorageKey:"torus-".concat(window.location.hostname)},z=j().getLogger("solana-embed");const A=()=>Math.random().toString(36).slice(2),B=async c=>{let a,b;switch(c){case"testing":a="https://solana-testing.tor.us",b="debug";break;case"development":a="http://localhost:8080",b="debug";break;default:a="https://solana.tor.us",b="error";break}return{torusUrl:a,logLevel:b}},C={height:660,width:375},D={height:740,width:1315},E={height:600,width:400};function F(c){let{width:a,height:b}=c;const d=void 0!==window.screenLeft?window.screenLeft:window.screenX,e=void 0!==window.screenTop?window.screenTop:window.screenY,f=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:window.screen.width,g=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:window.screen.height,h="titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(b/1,",width=").concat(a/1,",top=").concat(Math.abs((g-b)/2/1+e),",left=").concat(Math.abs((f-a)/2/1+d));return h}class f extends e.Ue{constructor(c,h){let{maxEventListeners:i=100,jsonRpcStreamName:j="provider"}=h;if(super(),(0,d.Z)(this,"isTorus",void 0),(0,d.Z)(this,"_rpcEngine",void 0),(0,d.Z)(this,"jsonRpcConnectionEvents",void 0),(0,d.Z)(this,"_state",void 0),!(0,s.duplex)(c))throw new Error(w.errors.invalidDuplexStream());this.isTorus=!0,this.setMaxListeners(i),this._handleConnect=this._handleConnect.bind(this),this._handleDisconnect=this._handleDisconnect.bind(this),this._handleStreamDisconnect=this._handleStreamDisconnect.bind(this),this._rpcRequest=this._rpcRequest.bind(this),this._initializeState=this._initializeState.bind(this),this.request=this.request.bind(this),this.sendAsync=this.sendAsync.bind(this);const f=new e.O4;t()(c,f,c,this._handleStreamDisconnect.bind(this,"Torus")),f.ignoreStream("phishing");const b=(0,e.AP)();t()(b.stream,f.createStream(j),b.stream,this._handleStreamDisconnect.bind(this,"Torus RpcProvider"));const a=new e.eI;a.push((0,e.Rq)()),a.push((a,b,c)=>{"string"==typeof a.method&&a.method||(b.error=r.ethErrors.rpc.invalidRequest({message:"The request 'method' must be a non-empty string.",data:a})),c(c=>{const{error:a}=b;return a&&z.error("Torus - RPC Error: ".concat(a.message),a),c()})}),a.push((0,g.yh)({origin:location.origin})),a.push(b.middleware),this._rpcEngine=a,this.jsonRpcConnectionEvents=b.events}async request(a){if(!a||"object"!=typeof a||Array.isArray(a))throw r.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestArgs(),data:a});const{method:c,params:b}=a;if("string"!=typeof c||0===c.length)throw r.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestMethod(),data:a});if(void 0!==b&&!Array.isArray(b)&&("object"!=typeof b||null===b))throw r.ethErrors.rpc.invalidRequest({message:w.errors.invalidRequestParams(),data:a});return new Promise((a,d)=>{this._rpcRequest({method:c,params:b},(0,e.nE)(a,d))})}send(a,b){this._rpcRequest(a,b)}sendAsync(a){return new Promise((b,c)=>{this._rpcRequest(a,(0,e.nE)(b,c))})}_handleStreamDisconnect(f,d){var e,a,b;let c;e=f,a=d,b=this,c='Torus: Lost connection to "'.concat(e,'".'),null!=a&&a.stack&&(c+="\n".concat(a.stack)),z.warn(c),b&&b.listenerCount("error")>0&&b.emit("error",c),this._handleDisconnect(!1,d?d.message:void 0)}}const G=function(c,d,g){for(var b=arguments.length,e=new Array(b>3?b-3:0),a=3;a<b;a++)e[a-3]=arguments[a];const f=()=>{g(...e),c.removeEventListener(d,f)};c.addEventListener(d,f)};async function H(){return new Promise(a=>{"loading"!==document.readyState?a():G(document,"DOMContentLoaded",a)})}const I=b=>{const a=window.document.createElement("template"),c=b.trim();return a.innerHTML=c,a.content.firstChild};class J extends e.Ue{constructor(a){let{url:b,target:c,features:e}=a;super(),(0,d.Z)(this,"url",void 0),(0,d.Z)(this,"target",void 0),(0,d.Z)(this,"features",void 0),(0,d.Z)(this,"window",void 0),(0,d.Z)(this,"windowTimer",void 0),(0,d.Z)(this,"iClosedWindow",void 0),this.url=b,this.target=c||"_blank",this.features=e||F({height:700,width:1200}),this.window=void 0,this.windowTimer=void 0,this.iClosedWindow=!1,this._setupTimer()}_setupTimer(){this.windowTimer=Number(setInterval(()=>{this.window&&this.window.closed&&(clearInterval(this.windowTimer),this.iClosedWindow||this.emit("close"),this.iClosedWindow=!1,this.window=void 0),void 0===this.window&&clearInterval(this.windowTimer)},500))}open(){var a;return this.window=window.open(this.url.href,this.target,this.features),null!==(a=this.window)&& void 0!==a&&a.focus&&this.window.focus(),Promise.resolve()}close(){this.iClosedWindow=!0,this.window&&this.window.close()}redirect(a){a?window.location.replace(this.url.href):window.location.href=this.url.href}}function K(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}class l extends f{constructor(a,b){let{maxEventListeners:c=100,jsonRpcStreamName:e="provider"}=b;super(a,{maxEventListeners:c,jsonRpcStreamName:e}),(0,d.Z)(this,"embedTranslations",void 0),(0,d.Z)(this,"torusUrl",void 0),(0,d.Z)(this,"dappStorageKey",void 0),(0,d.Z)(this,"windowRefs",void 0),(0,d.Z)(this,"tryWindowHandle",void 0),(0,d.Z)(this,"torusAlertContainer",void 0),(0,d.Z)(this,"torusIframe",void 0),this._state=function(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?K(Object(b),!0).forEach(function(a){(0,d.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):K(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}({},l._defaultState),this.torusUrl="",this.dappStorageKey="";const f=y.translations[(()=>{let a=window.navigator.language||"en-US";const b=a.split("-");return a=Object.prototype.hasOwnProperty.call(y.translations,b[0])?b[0]:"en"})()];this.embedTranslations=f.embed,this.windowRefs={},this.on("connect",()=>{this._state.isConnected=!0}),this.jsonRpcConnectionEvents.on("notification",c=>{const{method:a,params:b}=c;if(a===g.Nb.IFRAME_STATUS){const{isFullScreen:d,rid:e}=b;this._displayIframe({isFull:d,rid:e})}else if(a===g.Nb.CREATE_WINDOW){const{windowId:f,url:h}=b;this._createPopupBlockAlert(f,h)}else if(a===g.Nb.CLOSE_WINDOW)this._handleCloseWindow(b);else if(a===g.Nb.USER_LOGGED_IN){const{currentLoginProvider:i}=b;this._state.isLoggedIn=!0,this._state.currentLoginProvider=i}else a===g.Nb.USER_LOGGED_OUT&&(this._state.isLoggedIn=!1,this._state.currentLoginProvider=null,this._displayIframe())})}get isLoggedIn(){return this._state.isLoggedIn}get isIFrameFullScreen(){return this._state.isIFrameFullScreen}isConnected(){return this._state.isConnected}async _initializeState(a){try{const{torusUrl:b,dappStorageKey:c,torusAlertContainer:d,torusIframe:e}=a;this.torusUrl=b,this.dappStorageKey=c,this.torusAlertContainer=d,this.torusIframe=e,this.torusIframe.addEventListener("load",()=>{this._state.isIFrameFullScreen||this._displayIframe()});const{currentLoginProvider:f,isLoggedIn:h}=await this.request({method:g.vU.GET_PROVIDER_STATE,params:[]});this._handleConnect(f,h)}catch(i){z.error("Torus: Failed to get initial state. Please report this bug.",i)}finally{z.info("initialized communication state"),this._state.initialized=!0,this.emit("_initialized")}}_handleWindow(b){let{url:d,target:e,features:f}=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};const a=new URL(d||"".concat(this.torusUrl,"/redirect?windowId=").concat(b));this.dappStorageKey&&(a.hash?a.hash+="&dappStorageKey=".concat(this.dappStorageKey):a.hash="#dappStorageKey=".concat(this.dappStorageKey));const c=new J({url:a,target:e,features:f});if(c.open(),!c.window){this._createPopupBlockAlert(b,a.href);return}this.windowRefs[b]=c,this.request({method:g.vU.OPENED_WINDOW,params:{windowId:b}}),c.once("close",()=>{delete this.windowRefs[b],this.request({method:g.vU.CLOSED_WINDOW,params:{windowId:b}})})}_displayIframe(){let{isFull:b=!1,rid:c=""}=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};const a={};if(b)a.display="block",a.width="100%",a.height="100%",a.top="0px",a.right="0px",a.left="0px",a.bottom="0px";else switch(a.display=this._state.torusWidgetVisibility?"block":"none",a.height="70px",a.width="70px",this._state.buttonPosition){case x.TOP_LEFT:a.top="0px",a.left="0px",a.right="auto",a.bottom="auto";break;case x.TOP_RIGHT:a.top="0px",a.right="0px",a.left="auto",a.bottom="auto";break;case x.BOTTOM_RIGHT:a.bottom="0px",a.right="0px",a.top="auto",a.left="auto";break;case x.BOTTOM_LEFT:default:a.bottom="0px",a.left="0px",a.top="auto",a.right="auto";break}Object.assign(this.torusIframe.style,a),this._state.isIFrameFullScreen=b,this.request({method:g.vU.IFRAME_STATUS,params:{isIFrameFullScreen:b,rid:c}})}hideTorusButton(){this._state.torusWidgetVisibility=!1,this._displayIframe()}showTorusButton(){this._state.torusWidgetVisibility=!0,this._displayIframe()}_rpcRequest(b,c){const a=b;Array.isArray(a)||a.jsonrpc||(a.jsonrpc="2.0"),this.tryWindowHandle(a,c)}_handleConnect(a,b){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{currentLoginProvider:a,isLoggedIn:b}),z.debug(w.info.connected(a)))}_handleDisconnect(b,c){if(this._state.isConnected|| !this._state.isPermanentlyDisconnected&&!b){this._state.isConnected=!1;let a;b?(a=new r.EthereumRpcError(1013,c||w.errors.disconnected()),z.debug(a)):(a=new r.EthereumRpcError(1011,c||w.errors.permanentlyDisconnected()),z.error(a),this._state.currentLoginProvider=null,this._state.isLoggedIn=!1,this._state.torusWidgetVisibility=!1,this._state.isIFrameFullScreen=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",a)}}_handleCloseWindow(b){const{windowId:a}=b;this.windowRefs[a]&&(this.windowRefs[a].close(),delete this.windowRefs[a])}async _createPopupBlockAlert(e,f){const b=this.getLogoUrl(),c=I('<div id="torusAlert" class="torus-alert--v2">'+'<div id="torusAlert__logo"><img src="'.concat(b,'" /></div>')+"<div>"+'<h1 id="torusAlert__title">'.concat(this.embedTranslations.actionRequired,"</h1>")+'<p id="torusAlert__desc">'.concat(this.embedTranslations.pendingAction,"</p>")+"</div></div>"),d=I('<div><a id="torusAlert__btn">'.concat(this.embedTranslations.continue,"</a></div>")),a=I('<div id="torusAlert__btn-container"></div>');a.appendChild(d),c.appendChild(a),await H(),(()=>{this.torusAlertContainer.appendChild(c)})(),(()=>{d.addEventListener("click",()=>{this._handleWindow(e,{url:f,target:"_blank",features:F(E)}),c.remove(),0===this.torusAlertContainer.children.length&&(this.torusAlertContainer.style.display="none")})})(),this.torusAlertContainer.style.display="block"}getLogoUrl(){const a="".concat(this.torusUrl,"/images/torus_icon-blue.svg");return a}}function L(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}(0,d.Z)(l,"_defaultState",{buttonPosition:"bottom-left",currentLoginProvider:null,isIFrameFullScreen:!1,hasEmittedConnection:!1,torusWidgetVisibility:!1,initialized:!1,isLoggedIn:!1,isPermanentlyDisconnected:!1,isConnected:!1});class m extends f{constructor(a,b){let{maxEventListeners:c=100,jsonRpcStreamName:e="provider"}=b;super(a,{maxEventListeners:c,jsonRpcStreamName:e}),(0,d.Z)(this,"chainId",void 0),(0,d.Z)(this,"selectedAddress",void 0),(0,d.Z)(this,"tryWindowHandle",void 0),this._state=function(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?L(Object(b),!0).forEach(function(a){(0,d.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):L(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}({},m._defaultState),this.selectedAddress=null,this.chainId=null,this._handleAccountsChanged=this._handleAccountsChanged.bind(this),this._handleChainChanged=this._handleChainChanged.bind(this),this._handleUnlockStateChanged=this._handleUnlockStateChanged.bind(this),this.on("connect",()=>{this._state.isConnected=!0}),this.jsonRpcConnectionEvents.on("notification",c=>{const{method:a,params:b}=c;a===g.zK.ACCOUNTS_CHANGED?this._handleAccountsChanged(b):a===g.zK.UNLOCK_STATE_CHANGED?this._handleUnlockStateChanged(b):a===g.zK.CHAIN_CHANGED&&this._handleChainChanged(b)})}isConnected(){return this._state.isConnected}async _initializeState(){try{const{accounts:a,chainId:b,isUnlocked:c}=await this.request({method:g.GA.GET_PROVIDER_STATE,params:[]});this.emit("connect",{chainId:b}),this._handleChainChanged({chainId:b}),this._handleUnlockStateChanged({accounts:a,isUnlocked:c}),this._handleAccountsChanged(a)}catch(d){z.error("Torus: Failed to get initial state. Please report this bug.",d)}finally{z.info("initialized provider state"),this._state.initialized=!0,this.emit("_initialized")}}_rpcRequest(c,d){let e=arguments.length>2&& void 0!==arguments[2]&&arguments[2],b=d;const a=c;if(!Array.isArray(a)){if(a.jsonrpc||(a.jsonrpc="2.0"),"solana_accounts"===a.method||"solana_requestAccounts"===a.method)b=(c,b)=>{this._handleAccountsChanged(b.result||[],"solana_accounts"===a.method,e),d(c,b)};else if("wallet_getProviderState"===a.method){this._rpcEngine.handle(c,b);return}}this.tryWindowHandle(a,b)}_handleConnect(a){this._state.isConnected||(this._state.isConnected=!0,this.emit("connect",{chainId:a}),z.debug(w.info.connected(a)))}_handleDisconnect(b,c){if(this._state.isConnected|| !this._state.isPermanentlyDisconnected&&!b){this._state.isConnected=!1;let a;b?(a=new r.EthereumRpcError(1013,c||w.errors.disconnected()),z.debug(a)):(a=new r.EthereumRpcError(1011,c||w.errors.permanentlyDisconnected()),z.error(a),this.chainId=null,this._state.accounts=null,this.selectedAddress=null,this._state.isUnlocked=!1,this._state.isPermanentlyDisconnected=!0),this.emit("disconnect",a)}}_handleAccountsChanged(b){let c=arguments.length>1&& void 0!==arguments[1]&&arguments[1],d=arguments.length>2&& void 0!==arguments[2]&&arguments[2],a=b;for(const e of(Array.isArray(a)||(z.error("Torus: Received non-array accounts parameter. Please report this bug.",a),a=[]),b))if("string"!=typeof e){z.error("Torus: Received non-string account. Please report this bug.",b),a=[];break}u()(this._state.accounts,a)||(c&&Array.isArray(this._state.accounts)&&this._state.accounts.length>0&&!d&&z.error('Torus: "solana_accounts" unexpectedly updated accounts. Please report this bug.',a),this._state.accounts=a,this.emit("accountsChanged",a)),this.selectedAddress!==a[0]&&(this.selectedAddress=a[0]||null)}_handleChainChanged(){let{chainId:a}=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};if(!a){z.error("Torus: Received invalid network parameters. Please report this bug.",{chainId:a});return}"loading"===a?this._handleDisconnect(!0):(this._handleConnect(a),a!==this.chainId&&(this.chainId=a,this._state.initialized&&this.emit("chainChanged",this.chainId)))}_handleUnlockStateChanged(){let{accounts:b,isUnlocked:a}=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};if("boolean"!=typeof a){z.error("Torus: Received invalid isUnlocked parameter. Please report this bug.",{isUnlocked:a});return}a!==this._state.isUnlocked&&(this._state.isUnlocked=a,this._handleAccountsChanged(b||[]))}}function M(a){return new Promise((e,c)=>{try{const b=document.createElement("img");b.onload=()=>e(!0),b.onerror=()=>e(!1),b.src=a}catch(d){c(d)}})}(0,d.Z)(m,"_defaultState",{accounts:null,isConnected:!1,isUnlocked:!1,initialized:!1,isPermanentlyDisconnected:!1,hasEmittedConnection:!1});const N=b=>{const{document:a}=b,c=a.querySelector('head > meta[property="og:site_name"]');if(c)return c.content;const d=a.querySelector('head > meta[name="title"]');return d?d.content:a.title&&a.title.length>0?a.title:b.location.hostname};async function O(c){try{const{document:b}=c;let a=b.querySelector('head > link[rel="shortcut icon"]');if(a&&await M(a.href))return a.href;if((a=Array.from(b.querySelectorAll('head > link[rel="icon"]')).find(a=>Boolean(a.href)))&&await M(a.href))return a.href;return""}catch(d){return""}}const P=async()=>({name:N(window),icon:await O(window)});function Q(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function R(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?Q(Object(b),!0).forEach(function(a){(0,d.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):Q(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}const S=["send_transaction","sign_transaction","sign_all_transactions","sign_message","connect"],T=[g.vU.SET_PROVIDER],U=function(d){let a;try{a=window[d];const c="__storage_test__";return a.setItem(c,c),a.removeItem(c),!0}catch(b){return b&&(22===b.code||1014===b.code||"QuotaExceededError"===b.name||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}("localStorage");!async function(){try{if("undefined"==typeof document)return;const a=document.createElement("link"),{torusUrl:b}=await B("production");a.href="".concat(b,"/frame"),a.crossOrigin="anonymous",a.type="text/html",a.rel="prefetch",a.relList&&a.relList.supports&&a.relList.supports("prefetch")&&document.head.appendChild(a)}catch(c){z.warn(c)}}();class V{constructor(){let{modalZIndex:a=99999}=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};(0,d.Z)(this,"isInitialized",void 0),(0,d.Z)(this,"torusAlert",void 0),(0,d.Z)(this,"modalZIndex",void 0),(0,d.Z)(this,"alertZIndex",void 0),(0,d.Z)(this,"requestedLoginProvider",void 0),(0,d.Z)(this,"provider",void 0),(0,d.Z)(this,"communicationProvider",void 0),(0,d.Z)(this,"dappStorageKey",void 0),(0,d.Z)(this,"torusAlertContainer",void 0),(0,d.Z)(this,"torusUrl",void 0),(0,d.Z)(this,"torusIframe",void 0),(0,d.Z)(this,"styleLink",void 0),this.torusUrl="",this.isInitialized=!1,this.requestedLoginProvider=null,this.modalZIndex=a,this.alertZIndex=a+1e3,this.dappStorageKey=""}get isLoggedIn(){return!!this.communicationProvider&&this.communicationProvider.isLoggedIn}async init(){let{buildEnv:e="production",enableLogging:f=!1,network:k,showTorusButton:l=!1,useLocalStorage:g=!1,buttonPosition:m=x.BOTTOM_LEFT,apiKey:h="torus-default",extraParams:n={}}=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};if(this.isInitialized)throw new Error("Already initialized");(0,q.ut)(h);const{torusUrl:b,logLevel:i}=await B(e);z.info(b,"url loaded"),this.torusUrl=b,z.setDefaultLevel(i),f?z.enableAll():z.disableAll();const d=this.handleDappStorageKey(g),a=new URL(b);a.pathname.endsWith("/")?a.pathname+="frame":a.pathname+="/frame";const c=new URLSearchParams;d&&c.append("dappStorageKey",d),c.append("origin",window.location.origin),a.hash=c.toString(),this.torusIframe=I('<iframe\n        id="torusIframe"\n        class="torusIframe"\n        src="'.concat(a.href,'"\n        style="display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ').concat(this.modalZIndex.toString(),'"\n      ></iframe>')),this.torusAlertContainer=I('<div id="torusAlertContainer" style="display:none; z-index: '.concat(this.alertZIndex.toString(),'"></div>')),this.styleLink=I('<link href="'.concat(b,'/css/widget.css" rel="stylesheet" type="text/css">'));const j=async()=>new Promise((e,c)=>{try{window.document.head.appendChild(this.styleLink),window.document.body.appendChild(this.torusIframe),window.document.body.appendChild(this.torusAlertContainer),this.torusIframe.addEventListener("load",async()=>{const c=await P();this.torusIframe.contentWindow.postMessage({buttonPosition:m,apiKey:h,network:k,dappMetadata:c,extraParams:n},a.origin),await this._setupWeb3({torusUrl:b}),l?this.showTorusButton():this.hideTorusButton(),this.isInitialized=!0,window.torus=this,e()})}catch(d){c(d)}});await H(),await j()}async login(){let c=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};if(!this.isInitialized)throw new Error("Call init() first");try{this.requestedLoginProvider=c.loginProvider||null,this.requestedLoginProvider||this.communicationProvider._displayIframe({isFull:!0});const a=await new Promise((a,b)=>{this.provider._rpcRequest({method:"solana_requestAccounts",params:[this.requestedLoginProvider,c.login_hint]},(0,e.nE)(a,b))});if(Array.isArray(a)&&a.length>0)return a;throw new Error("Login failed")}catch(b){throw z.error("login failed",b),b}finally{this.communicationProvider.isIFrameFullScreen&&this.communicationProvider._displayIframe()}}async loginWithPrivateKey(a){if(!this.isInitialized)throw new Error("Call init() first");const{privateKey:b,userInfo:c}=a,{success:d}=await this.communicationProvider.request({method:"login_with_private_key",params:{privateKey:b,userInfo:c}});if(!d)throw new Error("Login Failed")}async logout(){if(!this.communicationProvider.isLoggedIn)throw new Error("Not logged in");await this.communicationProvider.request({method:g.vU.LOGOUT,params:[]}),this.requestedLoginProvider=null}async cleanUp(){this.communicationProvider.isLoggedIn&&await this.logout(),this.clearInit()}clearInit(){function a(a){return a instanceof Element||a instanceof Document}a(this.styleLink)&&window.document.body.contains(this.styleLink)&&(this.styleLink.remove(),this.styleLink=void 0),a(this.torusIframe)&&window.document.body.contains(this.torusIframe)&&(this.torusIframe.remove(),this.torusIframe=void 0),a(this.torusAlertContainer)&&window.document.body.contains(this.torusAlertContainer)&&(this.torusAlert=void 0,this.torusAlertContainer.remove(),this.torusAlertContainer=void 0),this.isInitialized=!1}hideTorusButton(){this.communicationProvider.hideTorusButton()}showTorusButton(){this.communicationProvider.showTorusButton()}async setProvider(a){await this.communicationProvider.request({method:g.vU.SET_PROVIDER,params:R({},a)})}async showWallet(b){let c=arguments.length>1&& void 0!==arguments[1]?arguments[1]:{};const d=await this.communicationProvider.request({method:g.vU.WALLET_INSTANCE_ID,params:[]}),e=b?"/".concat(b):"",a=new URL("".concat(this.torusUrl,"/wallet").concat(e));a.searchParams.append("instanceId",d),Object.keys(c).forEach(b=>{a.searchParams.append(b,c[b])}),this.dappStorageKey&&(a.hash="#dappStorageKey=".concat(this.dappStorageKey));const f=new J({url:a,features:F(D)});f.open()}async getUserInfo(){const a=await this.communicationProvider.request({method:g.vU.USER_INFO,params:[]});return a}async initiateTopup(b,c){if(!this.isInitialized)throw new Error("Torus is not initialized");const a=A();this.communicationProvider._handleWindow(a);const d=await this.communicationProvider.request({method:g.vU.TOPUP,params:{provider:b,params:c,windowId:a}});return d}async getAccounts(){const a=await this.provider.request({method:"getAccounts",params:[]});return a}async sendTransaction(a){const b=await this.provider.request({method:"send_transaction",params:{message:a.serialize({requireAllSignatures:!1}).toString("hex")}});return b}async signTransaction(a){const d=await this.provider.request({method:"sign_transaction",params:{message:a.serializeMessage().toString("hex"),messageOnly:!0}}),b=JSON.parse(d),c={publicKey:new p.nh(b.publicKey),signature:v.from(b.signature,"hex")};return a.addSignature(c.publicKey,c.signature),a}async signAllTransactions(a){const b=a.map(a=>a.serializeMessage().toString("hex")),c=await this.provider.request({method:"sign_all_transactions",params:{message:b,messageOnly:!0}}),d=c.map(b=>{const a=JSON.parse(b);return{publicKey:new p.nh(a.publicKey),signature:v.from(a.signature,"hex")}});return a.forEach((a,b)=>(a.addSignature(d[b].publicKey,d[b].signature),a)),a}async signMessage(a){const b=await this.provider.request({method:"sign_message",params:{data:a}});return b}async getGaslessPublicKey(){const a=await this.provider.request({method:"get_gasless_public_key",params:[]});return a}handleDappStorageKey(d){let a="";if(U&&d){const b=window.localStorage.getItem(y.localStorageKey);if(b)a=b;else{const c="torus-app-".concat(A());window.localStorage.setItem(y.localStorageKey,c),a=c}}return this.dappStorageKey=a,a}async _setupWeb3(d){z.info("setupWeb3 running");const f=new e.XR({name:"embed_torus",target:"iframe_torus",targetWindow:this.torusIframe.contentWindow}),g=new e.XR({name:"embed_communication",target:"iframe_communication",targetWindow:this.torusIframe.contentWindow}),a=new m(f,{}),b=new l(g,{});a.tryWindowHandle=(e,f)=>{const c=e;if(!Array.isArray(c)&&S.includes(c.method)){if(!this.communicationProvider.isLoggedIn)throw new Error("User Not Logged In");const d=A();b._handleWindow(d,{target:"_blank",features:F(E)}),c.windowId=d}a._rpcEngine.handle(c,f)},b.tryWindowHandle=(d,e)=>{const a=d;if(!Array.isArray(a)&&T.includes(a.method)){const c=A();b._handleWindow(c,{target:"_blank",features:F(C)}),a.params.windowId=c}b._rpcEngine.handle(a,e)};const c=b=>{const c=a[b],d=this;a[b]=function(a,b){const{method:f,params:e=[]}=a;if("solana_requestAccounts"===f){if(!b)return d.login({loginProvider:e[0]});d.login({loginProvider:e[0]}).then(a=>b(null,a)).catch(a=>b(a))}return c.apply(this,[a,b])}};c("request"),c("sendAsync"),c("send");const h=new Proxy(a,{deleteProperty:()=>!0}),i=new Proxy(b,{deleteProperty:()=>!0});this.provider=h,this.communicationProvider=i,await Promise.all([a._initializeState(),b._initializeState(R(R({},d),{},{dappStorageKey:this.dappStorageKey,torusAlertContainer:this.torusAlertContainer,torusIframe:this.torusIframe}))]),z.debug("Torus - injected provider")}}var n=a(41436),W=a(44445);function X(c,d){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(c);d&&(b=b.filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable})),a.push.apply(a,b)}return a}function Y(c){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};a%2?X(Object(b),!0).forEach(function(a){(0,d.Z)(c,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(b)):X(Object(b)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(b,a))})}return c}class Z extends n.J5{constructor(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{};super(),(0,d.Z)(this,"name",n.rW.TORUS_SOLANA),(0,d.Z)(this,"adapterNamespace",n.yk.SOLANA),(0,d.Z)(this,"currentChainNamespace",n.EN.SOLANA),(0,d.Z)(this,"type",n.hN.EXTERNAL),(0,d.Z)(this,"status",n.MP.NOT_READY),(0,d.Z)(this,"torusInstance",null),(0,d.Z)(this,"torusWalletOptions",void 0),(0,d.Z)(this,"initParams",void 0),(0,d.Z)(this,"loginSettings",{}),(0,d.Z)(this,"solanaProvider",null),(0,d.Z)(this,"rehydrated",!1),this.torusWalletOptions=a.adapterSettings||{},this.initParams=a.initParams||{},this.loginSettings=a.loginSettings||{},this.chainConfig=a.chainConfig||null}get provider(){if(this.status===n.MP.CONNECTED&&this.solanaProvider){var a;return(null===(a=this.solanaProvider)|| void 0===a?void 0:a.provider)||null}return null}set provider(a){throw new Error("Not implemented")}async init(c){super.checkInitializationRequirements();let a;if(this.chainConfig){const{chainId:d,blockExplorer:e,displayName:f,rpcTarget:g,ticker:h,tickerName:i}=this.chainConfig;a={chainId:d,rpcTarget:g,blockExplorerUrl:e,displayName:f,tickerName:i,ticker:h,logo:""}}else{this.chainConfig=(0,n.h2)(n.EN.SOLANA,"0x1");const{blockExplorer:k,displayName:l,ticker:m,tickerName:o,rpcTarget:p,chainId:q}=this.chainConfig;a={chainId:q,rpcTarget:p,blockExplorerUrl:k,displayName:l,ticker:m,tickerName:o,logo:""}}this.torusInstance=new V(this.torusWalletOptions),await this.torusInstance.init(Y(Y({showTorusButton:!1},this.initParams),{},{network:a})),this.solanaProvider=new W.TorusInjectedProvider({config:{chainConfig:this.chainConfig}}),this.status=n.MP.READY,this.emit(n.n2.READY,n.rW.TORUS_SOLANA);try{c.autoConnect&&(this.rehydrated=!0,await this.connect())}catch(b){j().error("Failed to connect with cached torus solana provider",b),this.emit(n.n2.ERRORED,b)}}async connect(){if(super.checkConnectionRequirements(),!this.torusInstance)throw n.Ty.notReady("Torus wallet is not initialized");if(!this.solanaProvider)throw n.Ty.notReady("Torus wallet is not initialized");this.status=n.MP.CONNECTING,this.emit(n.n2.CONNECTING,{adapter:n.rW.TORUS_SOLANA});try{return await this.torusInstance.login(this.loginSettings),await this.solanaProvider.setupProvider(this.torusInstance.provider),this.status=n.MP.CONNECTED,this.torusInstance.showTorusButton(),this.emit(n.MP.CONNECTED,{adapter:n.rW.TORUS_SOLANA,reconnected:this.rehydrated}),this.provider}catch(a){throw this.status=n.MP.READY,this.rehydrated=!1,this.emit(n.n2.ERRORED,a),n.RM.connectionError("Failed to login with torus solana wallet")}}async disconnect(){let a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==n.MP.CONNECTED)throw n.RM.notConnectedError("Not connected with wallet");if(!this.torusInstance)throw n.Ty.notReady("Torus wallet is not initialized");await this.torusInstance.logout(),a.cleanup?(this.status=n.MP.NOT_READY,this.torusInstance=null,this.solanaProvider=null):this.status=n.MP.READY,this.emit(n.n2.DISCONNECTED)}async getUserInfo(){if(this.status!==n.MP.CONNECTED)throw n.RM.notConnectedError("Not connected with wallet");if(!this.torusInstance)throw n.Ty.notReady("Torus wallet is not initialized");const a=await this.torusInstance.getUserInfo();return a}setAdapterSettings(a){}}},64063:function(a){a.exports=function c(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;if(Array.isArray(a)){if((g=a.length)!=b.length)return!1;for(e=g;0!=e--;)if(!c(a[e],b[e]))return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((g=(f=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(e=g;0!=e--;)if(!Object.prototype.hasOwnProperty.call(b,f[e]))return!1;for(e=g;0!=e--;){var g,e,f,d=f[e];if(!c(a[d],b[d]))return!1}return!0}return a!=a&&b!=b}},24970:function(b){const a=a=>null!==a&&"object"==typeof a&&"function"==typeof a.pipe;a.writable=b=>a(b)&& !1!==b.writable&&"function"==typeof b._write&&"object"==typeof b._writableState,a.readable=b=>a(b)&& !1!==b.readable&&"function"==typeof b._read&&"object"==typeof b._readableState,a.duplex=b=>a.writable(b)&&a.readable(b),a.transform=b=>a.duplex(b)&&"function"==typeof b._transform,b.exports=a}}])