(globalThis.webpackChunk_snx_v3_ultrasound_homes=globalThis.webpackChunk_snx_v3_ultrasound_homes||[]).push([[9543],{55138:(e,t)=>{"use strict";function n(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function s(e){const t=n(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}t.$o=t.xP=t.MX=t.VQ=t.k$=t.UO=t.jW=t.Gw=t.Me=t.uT=t.$2=t.sD=void 0,t.sD=n,t.$2=s,t.uT=function(){return s("document")},t.Me=function(){return n("document")},t.Gw=function(){return s("navigator")},t.jW=function(){return n("navigator")},t.UO=function(){return s("location")},t.k$=function(){return n("location")},t.VQ=function(){return s("crypto")},t.MX=function(){return n("crypto")},t.xP=function(){return s("localStorage")},t.$o=function(){return n("localStorage")}},25393:(e,t,n)=>{"use strict";t.D=void 0;const s=n(25494);t.D=function(){let e,t;try{e=s.getDocumentOrThrow(),t=s.getLocationOrThrow()}catch(e){return null}function n(...t){const n=e.getElementsByTagName("meta");for(let e=0;e<n.length;e++){const s=n[e],r=["itemprop","property","name"].map((e=>s.getAttribute(e))).filter((e=>!!e&&t.includes(e)));if(r.length&&r){const e=s.getAttribute("content");if(e)return e}}return""}const r=function(){let t=n("name","og:site_name","og:title","twitter:title");return t||(t=e.title),t}();return{description:n("description","og:description","twitter:description","keywords"),url:t.origin,icons:function(){const n=e.getElementsByTagName("link"),s=[];for(let e=0;e<n.length;e++){const r=n[e],i=r.getAttribute("rel");if(i&&i.toLowerCase().indexOf("icon")>-1){const e=r.getAttribute("href");if(e)if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let n=t.protocol+"//"+t.host;if(0===e.indexOf("/"))n+=e;else{const s=t.pathname.split("/");s.pop();n+=s.join("/")+"/"+e}s.push(n)}else if(0===e.indexOf("//")){const n=t.protocol+e;s.push(n)}else s.push(e)}}return s}(),name:r}}},25494:(e,t)=>{"use strict";function n(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function s(e){const t=n(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=n,t.getFromWindowOrThrow=s,t.getDocumentOrThrow=function(){return s("document")},t.getDocument=function(){return n("document")},t.getNavigatorOrThrow=function(){return s("navigator")},t.getNavigator=function(){return n("navigator")},t.getLocationOrThrow=function(){return s("location")},t.getLocation=function(){return n("location")},t.getCryptoOrThrow=function(){return s("crypto")},t.getCrypto=function(){return n("crypto")},t.getLocalStorageOrThrow=function(){return s("localStorage")},t.getLocalStorage=function(){return n("localStorage")}},19543:(e,t,n)=>{"use strict";n.d(t,{default:()=>nt});var s={};n.r(s),n.d(s,{decrypt:()=>tt,encrypt:()=>et,generateKey:()=>Ye,verifyHmac:()=>Ze});var r=n(25393),i=n(55138),o=n(34406),a=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var s=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],o=0,a=i.length;o<a;o++,r++)s[r]=i[o];return s},c=function(e,t,n){this.name=e,this.version=t,this.os=n,this.type="browser"},h=function(e){this.version=e,this.type="node",this.name="node",this.os=o.platform},u=function(e,t,n,s){this.name=e,this.version=t,this.os=n,this.bot=s,this.type="bot-device"},d=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},l=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},p=/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,g=3,f=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FBAV\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],_=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function m(e){return e?y(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new l:"undefined"!=typeof navigator?y(navigator.userAgent):function(){var e=void 0!==o&&o.version;return e?new h(o.version.slice(1)):null}()}function w(e){return""!==e&&f.reduce((function(t,n){var s=n[0],r=n[1];if(t)return t;var i=r.exec(e);return!!i&&[s,i]}),!1)}function y(e){var t=w(e);if(!t)return null;var n=t[0],s=t[1];if("searchbot"===n)return new d;var r=s[1]&&s[1].split(/[._]/).slice(0,3);r?r.length<g&&(r=a(r,function(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}(g-r.length))):r=[];var i=r.join("."),o=function(e){for(var t=0,n=_.length;t<n;t++){var s=_[t],r=s[0];if(s[1].exec(e))return r}return null}(e),h=p.exec(e);return h&&h[1]?new u(n,i,o,h[1]):new c(n,i,o)}function v(e){return m(e)}function b(){const e=v();return e&&e.os?e.os:void 0}function k(){return!!b()&&(function(){const e=b();return!!e&&e.toLowerCase().includes("android")}()||function(){const e=b();return!!e&&(e.toLowerCase().includes("ios")||e.toLowerCase().includes("mac")&&navigator.maxTouchPoints>1)}())}function S(){return!function(){const e=v();return!(!e||!e.name)&&"node"===e.name.toLowerCase()}()&&!!I()}i.sD,i.$2,i.uT,i.Me,i.Gw;const I=i.jW,O=(i.UO,i.k$),M=(i.VQ,i.MX,i.xP,i.$o);function T(){return r.D()}const E=function(e){if("string"!=typeof e)throw new Error("Cannot safe json parse value of type "+typeof e);try{return JSON.parse(e)}catch(t){return e}},R=function(e){return"string"==typeof e?e:JSON.stringify(e)};function C(e){let t=null,n=null;const s=M();return s&&(n=s.getItem(e)),t=n?E(n):n,t}function q(e){const t=M();t&&t.removeItem(e)}const j="WALLETCONNECT_DEEPLINK_CHOICE";const x=["session_request","session_update","exchange_key","connect","disconnect","display_uri","modal_closed","transport_open","transport_close","transport_error"],A=["eth_sendTransaction","eth_signTransaction","eth_sign","eth_signTypedData","eth_signTypedData_v1","eth_signTypedData_v2","eth_signTypedData_v3","eth_signTypedData_v4","personal_sign","wallet_addEthereumChain","wallet_switchEthereumChain","wallet_getPermissions","wallet_requestPermissions","wallet_registerOnboarding","wallet_watchAsset","wallet_scanQRCode"];var N=n(62197),W=n.n(N),U=(n(30775),n(78743)),L=n.n(U),$=n(48834).Buffer;const P="hex",F="utf8",B="0";function D(e){return new Uint8Array(e)}function J(e,t=!1){const n=e.toString(P);return t?se(n):n}function K(e){return e.toString(F)}function Q(e){return L()(e)}function V(e,t=!1){return J(Q(e),t)}function X(e){return K(Q(e))}function G(e){return $.from(ne(e),P)}function H(e){return D(G(e))}function z(e){return $.from(e,F)}function Y(e){return D(z(e))}function Z(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&(!t||e.length===2+2*t)}function ee(...e){let t=[];return e.forEach((e=>t=t.concat(Array.from(e)))),new Uint8Array([...t])}function te(e,t=8,n=B){return function(e,t,n=B){return ie(e,t,!0,n)}(e,function(e,t=8){const n=e%t;return n?(e-n)/t*t+t:e}(e.length,t),n)}function ne(e){return e.replace(/^0x/,"")}function se(e){return e.startsWith("0x")?e:`0x${e}`}function re(e){return(e=te(e=ne(e),2))&&(e=se(e)),e}function ie(e,t,n,s=B){const r=t-e.length;let i=e;if(r>0){const t=s.repeat(r);i=n?t+e:e+t}return i}function oe(e){return Q(new Uint8Array(e))}function ae(e,t){return function(e,t=!1){return J(z(e),t)}(e,!t)}function ce(e,t){const n=ne(re(new(W())(e).toString(16)));return t?n:se(n)}var he=n(83669);function ue(e){return re(e)}function de(e){return function(e){const t=e.startsWith("0x");return e=(e=ne(e)).startsWith(B)?e.substring(1):e,t?se(e):e}(se(e))}const le=n(55494).payloadId;function pe(){return((e,t)=>{for(t=e="";e++<36;t+=51*e&52?(15^e?8^Math.random()*(20^e?16:4):4).toString(16):"-");return t})()}function ge(e,t){return Z(e,t)}function fe(e){return void 0!==e.result}function _e(e){return void 0!==e.error}function me(e){return void 0!==e.event}function we(e){e=ne(e.toLowerCase());const t=ne((0,he.keccak_256)(z(e)));let n="";for(let s=0;s<e.length;s++)parseInt(t[s],16)>7?n+=e[s].toUpperCase():n+=e[s];return se(n)}function ye(e){var t;return(t=e)&&t.length&&!ge(e[0])&&(e[0]=ae(e[0])),e}function ve(e){if(void 0!==e.type&&"0"!==e.type)return e;if(void 0===e.from||(!(t=e.from)||"0x"!==t.toLowerCase().substring(0,2)||!/^(0x)?[0-9a-f]{40}$/i.test(t)||!/^(0x)?[0-9a-f]{40}$/.test(t)&&!/^(0x)?[0-9A-F]{40}$/.test(t)&&t!==we(t)))throw new Error("Transaction object must include a valid 'from' value.");var t;function n(e){let t=e;return("number"==typeof e||"string"==typeof e&&!function(e){return""===e||"string"==typeof e&&""===e.trim()}(e))&&(ge(e)?"string"==typeof e&&(t=ue(e)):t=ce(e)),"string"==typeof t&&(t=de(t)),t}const s={from:ue(e.from),to:void 0===e.to?void 0:ue(e.to),gasPrice:void 0===e.gasPrice?"":n(e.gasPrice),gas:void 0===e.gas?void 0===e.gasLimit?"":n(e.gasLimit):n(e.gas),value:void 0===e.value?"":n(e.value),nonce:void 0===e.nonce?"":n(e.nonce),data:void 0===e.data?"":ue(e.data)||"0x"},r=["gasPrice","gas","value","nonce"];return Object.keys(s).forEach((e=>{(void 0===s[e]||"string"==typeof s[e]&&!s[e].trim().length)&&r.includes(e)&&delete s[e]})),s}var be=n(34748);function ke(e,t){let n=Se(e);return n=Object.assign(Object.assign({},n),t),e=function(e){return be.stringify(e)}(n),e}function Se(e){return be.parse(e)}const Ie=class{constructor(){this._eventEmitters=[],"undefined"!=typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(()=>this.trigger("online"))),window.addEventListener("offline",(()=>this.trigger("offline"))))}on(e,t){this._eventEmitters.push({event:e,callback:t})}trigger(e){let t=[];e&&(t=this._eventEmitters.filter((t=>t.event===e))),t.forEach((e=>{e.callback()}))}},Oe=void 0!==n.g.WebSocket?n.g.WebSocket:n(8199);const Me=class{constructor(e){if(this.opts=e,this._queue=[],this._events=[],this._subscriptions=[],this._protocol=e.protocol,this._version=e.version,this._url="",this._netMonitor=null,this._socket=null,this._nextSocket=null,this._subscriptions=e.subscriptions||[],this._netMonitor=e.netMonitor||new Ie,!e.url||"string"!=typeof e.url)throw new Error("Missing or invalid WebSocket url");this._url=e.url,this._netMonitor.on("online",(()=>this._socketCreate()))}set readyState(e){}get readyState(){return this._socket?this._socket.readyState:-1}set connecting(e){}get connecting(){return 0===this.readyState}set connected(e){}get connected(){return 1===this.readyState}set closing(e){}get closing(){return 2===this.readyState}set closed(e){}get closed(){return 3===this.readyState}open(){this._socketCreate()}close(){this._socketClose()}send(e,t,n){if(!t||"string"!=typeof t)throw new Error("Missing or invalid topic field");this._socketSend({topic:t,type:"pub",payload:e,silent:!!n})}subscribe(e){this._socketSend({topic:e,type:"sub",payload:"",silent:!0})}on(e,t){this._events.push({event:e,callback:t})}_socketCreate(){if(this._nextSocket)return;const e=function(e,t,n){var s,r;const i=e.startsWith("https")?e.replace("https","wss"):e.startsWith("http")?e.replace("http","ws"):e,o=i.split("?"),a=S()?{protocol:t,version:n,env:"browser",host:(null===(s=O())||void 0===s?void 0:s.host)||""}:{protocol:t,version:n,env:(null===(r=v())||void 0===r?void 0:r.name)||""},c=ke(function(e){const t=-1!==e.indexOf("?")?e.indexOf("?"):void 0;return void 0!==t?e.substr(t):""}(o[1]||""),a);return o[0]+"?"+c}(this._url,this._protocol,this._version);if(this._nextSocket=new Oe(e),!this._nextSocket)throw new Error("Failed to create socket");this._nextSocket.onmessage=e=>this._socketReceive(e),this._nextSocket.onopen=()=>this._socketOpen(),this._nextSocket.onerror=e=>this._socketError(e),this._nextSocket.onclose=()=>{setTimeout((()=>{this._nextSocket=null,this._socketCreate()}),1e3)}}_socketOpen(){this._socketClose(),this._socket=this._nextSocket,this._nextSocket=null,this._queueSubscriptions(),this._pushQueue()}_socketClose(){this._socket&&(this._socket.onclose=()=>{},this._socket.close())}_socketSend(e){const t=JSON.stringify(e);this._socket&&1===this._socket.readyState?this._socket.send(t):(this._setToQueue(e),this._socketCreate())}async _socketReceive(e){let t;try{t=JSON.parse(e.data)}catch(e){return}if(this._socketSend({topic:t.topic,type:"ack",payload:"",silent:!0}),this._socket&&1===this._socket.readyState){const e=this._events.filter((e=>"message"===e.event));e&&e.length&&e.forEach((e=>e.callback(t)))}}_socketError(e){const t=this._events.filter((e=>"error"===e.event));t&&t.length&&t.forEach((t=>t.callback(e)))}_queueSubscriptions(){this._subscriptions.forEach((e=>this._queue.push({topic:e,type:"sub",payload:"",silent:!0}))),this._subscriptions=this.opts.subscriptions||[]}_setToQueue(e){this._queue.push(e)}_pushQueue(){this._queue.forEach((e=>this._socketSend(e))),this._queue=[]}},Te="Session currently connected",Ee="Session currently disconnected",Re="JSON RPC response format is invalid",Ce="User close QRCode Modal";const qe=class{constructor(){this._eventEmitters=[]}subscribe(e){this._eventEmitters.push(e)}unsubscribe(e){this._eventEmitters=this._eventEmitters.filter((t=>t.event!==e))}trigger(e){let t,n=[];t=void 0!==e.method?e.method:fe(e)||_e(e)?`response:${e.id}`:me(e)?e.event:"",t&&(n=this._eventEmitters.filter((e=>e.event===t))),n&&n.length||function(e){return x.includes(e)||e.startsWith("wc_")}(t)||me(t)||(n=this._eventEmitters.filter((e=>"call_request"===e.event))),n.forEach((t=>{if(_e(e)){const n=new Error(e.error.message);t.callback(n,null)}else t.callback(null,e)}))}};const je=class{constructor(e="walletconnect"){this.storageId=e}getSession(){let e=null;const t=C(this.storageId);return t&&void 0!==t.bridge&&(e=t),e}setSession(e){return function(e,t){const n=R(t),s=M();s&&s.setItem(e,n)}(this.storageId,e),e}removeSession(){q(this.storageId)}},xe="walletconnect.org",Ae="abcdefghijklmnopqrstuvwxyz0123456789".split("").map((e=>`https://${e}.bridge.walletconnect.org`));function Ne(){return Ae[Math.floor(Math.random()*Ae.length)]}function We(e){return function(e){return function(e){return function(e){let t=e.indexOf("//")>-1?e.split("/")[2]:e.split("/")[0];return t=t.split(":")[0],t=t.split("?")[0],t}(e).split(".").slice(-2).join(".")}(e)===xe}(e)?Ne():e}const Ue=class{constructor(e){if(this.protocol="wc",this.version=1,this._bridge="",this._key=null,this._clientId="",this._clientMeta=null,this._peerId="",this._peerMeta=null,this._handshakeId=0,this._handshakeTopic="",this._connected=!1,this._accounts=[],this._chainId=0,this._networkId=0,this._rpcUrl="",this._eventManager=new qe,this._clientMeta=T()||e.connectorOpts.clientMeta||null,this._cryptoLib=e.cryptoLib,this._sessionStorage=e.sessionStorage||new je(e.connectorOpts.storageId),this._qrcodeModal=e.connectorOpts.qrcodeModal,this._qrcodeModalOptions=e.connectorOpts.qrcodeModalOptions,this._signingMethods=[...A,...e.connectorOpts.signingMethods||[]],!e.connectorOpts.bridge&&!e.connectorOpts.uri&&!e.connectorOpts.session)throw new Error("Missing one of the required parameters: bridge / uri / session");e.connectorOpts.bridge&&(this.bridge=We(e.connectorOpts.bridge)),e.connectorOpts.uri&&(this.uri=e.connectorOpts.uri);const t=e.connectorOpts.session||this._getStorageSession();t&&(this.session=t),this.handshakeId&&this._subscribeToSessionResponse(this.handshakeId,"Session request rejected"),this._transport=e.transport||new Me({protocol:this.protocol,version:this.version,url:this.bridge,subscriptions:[this.clientId]}),this._subscribeToInternalEvents(),this._initTransport(),e.connectorOpts.uri&&this._subscribeToSessionRequest(),e.pushServerOpts&&this._registerPushServer(e.pushServerOpts)}set bridge(e){e&&(this._bridge=e)}get bridge(){return this._bridge}set key(e){if(!e)return;const t=H(e).buffer;this._key=t}get key(){if(this._key){return e=this._key,t=!0,V(new Uint8Array(e),!t)}var e,t;return""}set clientId(e){e&&(this._clientId=e)}get clientId(){let e=this._clientId;return e||(e=this._clientId=pe()),this._clientId}set peerId(e){e&&(this._peerId=e)}get peerId(){return this._peerId}set clientMeta(e){}get clientMeta(){let e=this._clientMeta;return e||(e=this._clientMeta=T()),e}set peerMeta(e){this._peerMeta=e}get peerMeta(){return this._peerMeta}set handshakeTopic(e){e&&(this._handshakeTopic=e)}get handshakeTopic(){return this._handshakeTopic}set handshakeId(e){e&&(this._handshakeId=e)}get handshakeId(){return this._handshakeId}get uri(){return this._formatUri()}set uri(e){if(!e)return;const{handshakeTopic:t,bridge:n,key:s}=this._parseUri(e);this.handshakeTopic=t,this.bridge=n,this.key=s}set chainId(e){this._chainId=e}get chainId(){return this._chainId}set networkId(e){this._networkId=e}get networkId(){return this._networkId}set accounts(e){this._accounts=e}get accounts(){return this._accounts}set rpcUrl(e){this._rpcUrl=e}get rpcUrl(){return this._rpcUrl}set connected(e){}get connected(){return this._connected}set pending(e){}get pending(){return!!this._handshakeTopic}get session(){return{connected:this.connected,accounts:this.accounts,chainId:this.chainId,bridge:this.bridge,key:this.key,clientId:this.clientId,clientMeta:this.clientMeta,peerId:this.peerId,peerMeta:this.peerMeta,handshakeId:this.handshakeId,handshakeTopic:this.handshakeTopic}}set session(e){e&&(this._connected=e.connected,this.accounts=e.accounts,this.chainId=e.chainId,this.bridge=e.bridge,this.key=e.key,this.clientId=e.clientId,this.clientMeta=e.clientMeta,this.peerId=e.peerId,this.peerMeta=e.peerMeta,this.handshakeId=e.handshakeId,this.handshakeTopic=e.handshakeTopic)}on(e,t){const n={event:e,callback:t};this._eventManager.subscribe(n)}off(e){this._eventManager.unsubscribe(e)}async createInstantRequest(e){this._key=await this._generateKey();const t=this._formatRequest({method:"wc_instantRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,request:this._formatRequest(e)}]});this.handshakeId=t.id,this.handshakeTopic=pe(),this._eventManager.trigger({event:"display_uri",params:[this.uri]}),this.on("modal_closed",(()=>{throw new Error(Ce)}));const n=()=>{this.killSession()};try{const e=await this._sendCallRequest(t);return e&&n(),e}catch(e){throw n(),e}}async connect(e){if(!this._qrcodeModal)throw new Error("QRCode Modal not provided");return this.connected?{chainId:this.chainId,accounts:this.accounts}:(await this.createSession(e),new Promise((async(e,t)=>{this.on("modal_closed",(()=>t(new Error(Ce)))),this.on("connect",((n,s)=>{if(n)return t(n);e(s.params[0])}))})))}async createSession(e){if(this._connected)throw new Error(Te);if(this.pending)return;this._key=await this._generateKey();const t=this._formatRequest({method:"wc_sessionRequest",params:[{peerId:this.clientId,peerMeta:this.clientMeta,chainId:e&&e.chainId?e.chainId:null}]});this.handshakeId=t.id,this.handshakeTopic=pe(),this._sendSessionRequest(t,"Session update rejected",{topic:this.handshakeTopic}),this._eventManager.trigger({event:"display_uri",params:[this.uri]})}approveSession(e){if(this._connected)throw new Error(Te);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const t={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl,peerId:this.clientId,peerMeta:this.clientMeta},n={id:this.handshakeId,jsonrpc:"2.0",result:t};this._sendResponse(n),this._connected=!0,this._setStorageSession(),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})}rejectSession(e){if(this._connected)throw new Error(Te);const t=e&&e.message?e.message:"Session Rejected",n=this._formatResponse({id:this.handshakeId,error:{message:t}});this._sendResponse(n),this._connected=!1,this._eventManager.trigger({event:"disconnect",params:[{message:t}]}),this._removeStorageSession()}updateSession(e){if(!this._connected)throw new Error(Ee);this.chainId=e.chainId,this.accounts=e.accounts,this.networkId=e.networkId||0,this.rpcUrl=e.rpcUrl||"";const t={approved:!0,chainId:this.chainId,networkId:this.networkId,accounts:this.accounts,rpcUrl:this.rpcUrl},n=this._formatRequest({method:"wc_sessionUpdate",params:[t]});this._sendSessionRequest(n,"Session update rejected"),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]}),this._manageStorageSession()}async killSession(e){const t=e?e.message:"Session Disconnected",n=this._formatRequest({method:"wc_sessionUpdate",params:[{approved:!1,chainId:null,networkId:null,accounts:null}]});await this._sendRequest(n),this._handleSessionDisconnect(t)}async sendTransaction(e){if(!this._connected)throw new Error(Ee);const t=ve(e),n=this._formatRequest({method:"eth_sendTransaction",params:[t]});return await this._sendCallRequest(n)}async signTransaction(e){if(!this._connected)throw new Error(Ee);const t=ve(e),n=this._formatRequest({method:"eth_signTransaction",params:[t]});return await this._sendCallRequest(n)}async signMessage(e){if(!this._connected)throw new Error(Ee);const t=this._formatRequest({method:"eth_sign",params:e});return await this._sendCallRequest(t)}async signPersonalMessage(e){if(!this._connected)throw new Error(Ee);e=ye(e);const t=this._formatRequest({method:"personal_sign",params:e});return await this._sendCallRequest(t)}async signTypedData(e){if(!this._connected)throw new Error(Ee);const t=this._formatRequest({method:"eth_signTypedData",params:e});return await this._sendCallRequest(t)}async updateChain(e){if(!this._connected)throw new Error("Session currently disconnected");const t=this._formatRequest({method:"wallet_updateChain",params:[e]});return await this._sendCallRequest(t)}unsafeSend(e,t){return this._sendRequest(e,t),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:t}]}),new Promise(((t,n)=>{this._subscribeToResponse(e.id,((e,s)=>{if(e)n(e);else{if(!s)throw new Error("Missing JSON RPC response");t(s)}}))}))}async sendCustomRequest(e,t){if(!this._connected)throw new Error(Ee);switch(e.method){case"eth_accounts":return this.accounts;case"eth_chainId":return ce(this.chainId);case"eth_sendTransaction":case"eth_signTransaction":e.params&&(e.params[0]=ve(e.params[0]));break;case"personal_sign":e.params&&(e.params=ye(e.params))}const n=this._formatRequest(e);return await this._sendCallRequest(n,t)}approveRequest(e){if(!fe(e))throw new Error('JSON-RPC success response must include "result" field');{const t=this._formatResponse(e);this._sendResponse(t)}}rejectRequest(e){if(!_e(e))throw new Error('JSON-RPC error response must include "error" field');{const t=this._formatResponse(e);this._sendResponse(t)}}transportClose(){this._transport.close()}async _sendRequest(e,t){const n=this._formatRequest(e),s=await this._encrypt(n),r=void 0!==(null==t?void 0:t.topic)?t.topic:this.peerId,i=JSON.stringify(s),o=void 0!==(null==t?void 0:t.forcePushNotification)?!t.forcePushNotification:function(e){return!!e.method.startsWith("wc_")||!A.includes(e.method)}(n);this._transport.send(i,r,o)}async _sendResponse(e){const t=await this._encrypt(e),n=this.peerId,s=JSON.stringify(t);this._transport.send(s,n,!0)}async _sendSessionRequest(e,t,n){this._sendRequest(e,n),this._subscribeToSessionResponse(e.id,t)}_sendCallRequest(e,t){return this._sendRequest(e,t),this._eventManager.trigger({event:"call_request_sent",params:[{request:e,options:t}]}),this._subscribeToCallResponse(e.id)}_formatRequest(e){if(void 0===e.method)throw new Error('JSON RPC request must have valid "method" value');return{id:void 0===e.id?le():e.id,jsonrpc:"2.0",method:e.method,params:void 0===e.params?[]:e.params}}_formatResponse(e){if(void 0===e.id)throw new Error('JSON RPC request must have valid "id" value');const t={id:e.id,jsonrpc:"2.0"};if(_e(e)){const n=function(e){const t=e.message||"Failed or Rejected Request";let n=-32e3;if(e&&!e.code)switch(t){case"Parse error":n=-32700;break;case"Invalid request":n=-32600;break;case"Method not found":n=-32601;break;case"Invalid params":n=-32602;break;case"Internal error":n=-32603;break;default:n=-32e3}const s={code:n,message:t};return e.data&&(s.data=e.data),s}(e.error);return Object.assign(Object.assign(Object.assign({},t),e),{error:n})}if(fe(e)){return Object.assign(Object.assign({},t),e)}throw new Error(Re)}_handleSessionDisconnect(e){const t=e||"Session Disconnected";this._connected||(this._qrcodeModal&&this._qrcodeModal.close(),q(j)),this._connected&&(this._connected=!1),this._handshakeId&&(this._handshakeId=0),this._handshakeTopic&&(this._handshakeTopic=""),this._peerId&&(this._peerId=""),this._eventManager.trigger({event:"disconnect",params:[{message:t}]}),this._removeStorageSession(),this.transportClose()}_handleSessionResponse(e,t){t&&t.approved?(this._connected?(t.chainId&&(this.chainId=t.chainId),t.accounts&&(this.accounts=t.accounts),this._eventManager.trigger({event:"session_update",params:[{chainId:this.chainId,accounts:this.accounts}]})):(this._connected=!0,t.chainId&&(this.chainId=t.chainId),t.accounts&&(this.accounts=t.accounts),t.peerId&&!this.peerId&&(this.peerId=t.peerId),t.peerMeta&&!this.peerMeta&&(this.peerMeta=t.peerMeta),this._eventManager.trigger({event:"connect",params:[{peerId:this.peerId,peerMeta:this.peerMeta,chainId:this.chainId,accounts:this.accounts}]})),this._manageStorageSession()):this._handleSessionDisconnect(e)}async _handleIncomingMessages(e){if(![this.clientId,this.handshakeTopic].includes(e.topic))return;let t;try{t=JSON.parse(e.payload)}catch(e){return}const n=await this._decrypt(t);n&&this._eventManager.trigger(n)}_subscribeToSessionRequest(){this._transport.subscribe(this.handshakeTopic)}_subscribeToResponse(e,t){this.on(`response:${e}`,t)}_subscribeToSessionResponse(e,t){this._subscribeToResponse(e,((e,n)=>{e?this._handleSessionResponse(e.message):fe(n)?this._handleSessionResponse(t,n.result):n.error&&n.error.message?this._handleSessionResponse(n.error.message):this._handleSessionResponse(t)}))}_subscribeToCallResponse(e){return new Promise(((t,n)=>{this._subscribeToResponse(e,((e,s)=>{e?n(e):fe(s)?t(s.result):s.error&&s.error.message?n(s.error):n(new Error(Re))}))}))}_subscribeToInternalEvents(){this.on("display_uri",(()=>{this._qrcodeModal&&this._qrcodeModal.open(this.uri,(()=>{this._eventManager.trigger({event:"modal_closed",params:[]})}),this._qrcodeModalOptions)})),this.on("connect",(()=>{this._qrcodeModal&&this._qrcodeModal.close()})),this.on("call_request_sent",((e,t)=>{const{request:n}=t.params[0];if(k()&&this._signingMethods.includes(n.method)){const e=C(j);e&&(window.location.href=e.href)}})),this.on("wc_sessionRequest",((e,t)=>{e&&this._eventManager.trigger({event:"error",params:[{code:"SESSION_REQUEST_ERROR",message:e.toString()}]}),this.handshakeId=t.id,this.peerId=t.params[0].peerId,this.peerMeta=t.params[0].peerMeta;const n=Object.assign(Object.assign({},t),{method:"session_request"});this._eventManager.trigger(n)})),this.on("wc_sessionUpdate",((e,t)=>{e&&this._handleSessionResponse(e.message),this._handleSessionResponse("Session disconnected",t.params[0])}))}_initTransport(){this._transport.on("message",(e=>this._handleIncomingMessages(e))),this._transport.on("open",(()=>this._eventManager.trigger({event:"transport_open",params:[]}))),this._transport.on("close",(()=>this._eventManager.trigger({event:"transport_close",params:[]}))),this._transport.on("error",(()=>this._eventManager.trigger({event:"transport_error",params:["Websocket connection failed"]}))),this._transport.open()}_formatUri(){return`${this.protocol}:${this.handshakeTopic}@${this.version}?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`}_parseUri(e){const t=function(e){const t=e.indexOf(":"),n=-1!==e.indexOf("?")?e.indexOf("?"):void 0,s=e.substring(0,t),r=function(e){const t=e.split("@");return{handshakeTopic:t[0],version:parseInt(t[1],10)}}(e.substring(t+1,n)),i=function(e){const t=Se(e);return{key:t.key||"",bridge:t.bridge||""}}(void 0!==n?e.substr(n):"");return Object.assign(Object.assign({protocol:s},r),i)}(e);if(t.protocol===this.protocol){if(!t.handshakeTopic)throw Error("Invalid or missing handshakeTopic parameter value");const e=t.handshakeTopic;if(!t.bridge)throw Error("Invalid or missing bridge url parameter value");const n=decodeURIComponent(t.bridge);if(!t.key)throw Error("Invalid or missing key parameter value");return{handshakeTopic:e,bridge:n,key:t.key}}throw new Error("URI format is invalid")}async _generateKey(){if(this._cryptoLib){return await this._cryptoLib.generateKey()}return null}async _encrypt(e){const t=this._key;if(this._cryptoLib&&t){return await this._cryptoLib.encrypt(e,t)}return null}async _decrypt(e){const t=this._key;if(this._cryptoLib&&t){return await this._cryptoLib.decrypt(e,t)}return null}_getStorageSession(){let e=null;return this._sessionStorage&&(e=this._sessionStorage.getSession()),e}_setStorageSession(){this._sessionStorage&&this._sessionStorage.setSession(this.session)}_removeStorageSession(){this._sessionStorage&&this._sessionStorage.removeSession()}_manageStorageSession(){this._connected?this._setStorageSession():this._removeStorageSession()}_registerPushServer(e){if(!e.url||"string"!=typeof e.url)throw Error("Invalid or missing pushServerOpts.url parameter value");if(!e.type||"string"!=typeof e.type)throw Error("Invalid or missing pushServerOpts.type parameter value");if(!e.token||"string"!=typeof e.token)throw Error("Invalid or missing pushServerOpts.token parameter value");const t={bridge:this.bridge,topic:this.clientId,type:e.type,token:e.token,peerName:"",language:e.language||""};this.on("connect",(async(n,s)=>{if(n)throw n;if(e.peerMeta){const e=s.params[0].peerMeta.name;t.peerName=e}try{const n=await fetch(`${e.url}/new`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});if(!(await n.json()).success)throw Error("Failed to register in Push Server")}catch(n){throw Error("Failed to register in Push Server")}}))}};var Le=n(5010);const $e=256,Pe=256,Fe="AES-CBC",Be=`SHA-${$e}`,De="HMAC",Je="encrypt",Ke="decrypt",Qe="sign",Ve="verify";async function Xe(e,t=Fe){return Le.getSubtleCrypto().importKey("raw",e,function(e){return e===Fe?{length:$e,name:Fe}:{hash:{name:Be},name:De}}(t),!0,function(e){return e===Fe?[Je,Ke]:[Qe,Ve]}(t))}function Ge(e,t,n){return async function(e,t,n){const s=Le.getSubtleCrypto(),r=await Xe(t,Fe),i=await s.encrypt({iv:e,name:Fe},r,n);return new Uint8Array(i)}(e,t,n)}function He(e,t,n){return async function(e,t,n){const s=Le.getSubtleCrypto(),r=await Xe(t,Fe),i=await s.decrypt({iv:e,name:Fe},r,n);return new Uint8Array(i)}(e,t,n)}async function ze(e,t){const n=await async function(e,t){const n=Le.getSubtleCrypto(),s=await Xe(e,De),r=await n.sign({length:Pe,name:De},s,t);return new Uint8Array(r)}(e,t);return n}async function Ye(e){const t=function(e){return Le.getBrowerCrypto().getRandomValues(new Uint8Array(e))}((e||256)/8);return D(Q(t)).buffer}async function Ze(e,t){const n=H(e.data),s=H(e.iv),r=V(H(e.hmac),!1),i=ee(n,s),o=V(await ze(t,i),!1);return ne(r)===ne(o)}async function et(e,t,n){const s=D(oe(t)),r=D(oe(n||await Ye(128))),i=V(r,!1),o=Y(JSON.stringify(e)),a=await Ge(r,s,o),c=V(a,!1),h=ee(a,r);return{data:c,hmac:V(await ze(s,h),!1),iv:i}}async function tt(e,t){const n=D(oe(t));if(!n)throw new Error("Missing key: required for decryption");if(!await Ze(e,n))return null;const s=H(e.data),r=H(e.iv),i=X(await He(r,n,s));let o;try{o=JSON.parse(i)}catch(e){return null}return o}const nt=class extends Ue{constructor(e,t){super({cryptoLib:s,connectorOpts:e,pushServerOpts:t})}}},8199:e=>{"use strict";e.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}},34748:(e,t,n)=>{"use strict";const s=n(57785),r=n(15554),i=n(15452);function o(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function a(e,t){return t.encode?t.strict?s(e):encodeURIComponent(e):e}function c(e,t){return t.decode?r(e):e}function h(e){return Array.isArray(e)?e.sort():"object"==typeof e?h(Object.keys(e)).sort(((e,t)=>Number(e)-Number(t))).map((t=>e[t])):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function d(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function p(e,t){o((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,s)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===s[e]&&(s[e]={}),s[e][t[1]]=n):s[e]=n};case"bracket":return(e,n,s)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==s[e]?s[e]=[].concat(s[e],n):s[e]=[n]:s[e]=n};case"comma":case"separator":return(t,n,s)=>{const r="string"==typeof n&&n.split("").indexOf(e.arrayFormatSeparator)>-1?n.split(e.arrayFormatSeparator).map((t=>c(t,e))):null===n?n:c(n,e);s[t]=r};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t),s=Object.create(null);if("string"!=typeof e)return s;if(!(e=e.trim().replace(/^[?#&]/,"")))return s;for(const r of e.split("&")){let[e,o]=i(t.decode?r.replace(/\+/g," "):r,"=");o=void 0===o?null:["comma","separator"].includes(t.arrayFormat)?o:c(o,t),n(c(e,t),o,s)}for(const e of Object.keys(s)){const n=s[e];if("object"==typeof n&&null!==n)for(const e of Object.keys(n))n[e]=l(n[e],t);else s[e]=l(n,t)}return!1===t.sort?s:(!0===t.sort?Object.keys(s).sort():Object.keys(s).sort(t.sort)).reduce(((e,t)=>{const n=s[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=h(n):e[t]=n,e}),Object.create(null))}t.extract=d,t.parse=p,t.stringify=(e,t)=>{if(!e)return"";o((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);const n=n=>t.skipNull&&null==e[n]||t.skipEmptyString&&""===e[n],s=function(e){switch(e.arrayFormat){case"index":return t=>(n,s)=>{const r=n.length;return void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,[a(t,e),"[",r,"]"].join("")]:[...n,[a(t,e),"[",a(r,e),"]=",a(s,e)].join("")]};case"bracket":return t=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,[a(t,e),"[]"].join("")]:[...n,[a(t,e),"[]=",a(s,e)].join("")];case"comma":case"separator":return t=>(n,s)=>null==s||0===s.length?n:0===n.length?[[a(t,e),"=",a(s,e)].join("")]:[[n,a(s,e)].join(e.arrayFormatSeparator)];default:return t=>(n,s)=>void 0===s||e.skipNull&&null===s||e.skipEmptyString&&""===s?n:null===s?[...n,a(t,e)]:[...n,[a(t,e),"=",a(s,e)].join("")]}}(t),r={};for(const t of Object.keys(e))n(t)||(r[t]=e[t]);const i=Object.keys(r);return!1!==t.sort&&i.sort(t.sort),i.map((n=>{const r=e[n];return void 0===r?"":null===r?a(n,t):Array.isArray(r)?r.reduce(s(n),[]).join("&"):a(n,t)+"="+a(r,t)})).filter((e=>e.length>0)).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);const[n,s]=i(e,"#");return Object.assign({url:n.split("?")[0]||"",query:p(d(e),t)},t&&t.parseFragmentIdentifier&&s?{fragmentIdentifier:c(s,t)}:{})},t.stringifyUrl=(e,n)=>{n=Object.assign({encode:!0,strict:!0},n);const s=u(e.url).split("?")[0]||"",r=t.extract(e.url),i=t.parse(r,{sort:!1}),o=Object.assign(i,e.query);let c=t.stringify(o,n);c&&(c=`?${c}`);let h=function(e){let t="";const n=e.indexOf("#");return-1!==n&&(t=e.slice(n)),t}(e.url);return e.fragmentIdentifier&&(h=`#${a(e.fragmentIdentifier,n)}`),`${s}${c}${h}`}},30775:e=>{e.exports=s,s.strict=r,s.loose=i;var t=Object.prototype.toString,n={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function s(e){return r(e)||i(e)}function r(e){return e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function i(e){return n[t.call(e)]}},78743:(e,t,n)=>{var s=n(48834).Buffer,r=n(30775).strict;e.exports=function(e){if(r(e)){var t=s.from(e.buffer);return e.byteLength!==e.buffer.byteLength&&(t=t.slice(e.byteOffset,e.byteOffset+e.byteLength)),t}return s.from(e)}}}]);
//# sourceMappingURL=9543.e0671396.js.map