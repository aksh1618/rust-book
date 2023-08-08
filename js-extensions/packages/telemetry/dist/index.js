"use strict";(()=>{var Mr=Object.create;var xe=Object.defineProperty;var kr=Object.getOwnPropertyDescriptor;var Vr=Object.getOwnPropertyNames;var Jr=Object.getPrototypeOf,Wr=Object.prototype.hasOwnProperty;var l=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var zr=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Vr(e))!Wr.call(r,n)&&n!==t&&xe(r,n,{get:()=>e[n],enumerable:!(i=kr(e,n))||i.enumerable});return r};var Xr=(r,e,t)=>(t=r!=null?Mr(Jr(r)):{},zr(e||!r||!r.__esModule?xe(t,"default",{value:r,enumerable:!0}):t,r));var X=l((nn,we)=>{"use strict";we.exports=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}}});var d=l((sn,qe)=>{"use strict";var $r=X(),Y=Object.prototype.toString,K=function(r){return function(e){var t=Y.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return K(t)===r}}function G(r){return Array.isArray(r)}function L(r){return typeof r>"u"}function Yr(r){return r!==null&&!L(r)&&r.constructor!==null&&!L(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var be=A("ArrayBuffer");function Kr(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&be(r.buffer),e}function Gr(r){return typeof r=="string"}function Qr(r){return typeof r=="number"}function Oe(r){return r!==null&&typeof r=="object"}function B(r){if(K(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Zr=A("Date"),et=A("File"),rt=A("Blob"),tt=A("FileList");function Q(r){return Y.call(r)==="[object Function]"}function nt(r){return Oe(r)&&Q(r.pipe)}function it(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Y.call(r)===e||Q(r.toString)&&r.toString()===e)}var st=A("URLSearchParams");function ot(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function at(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Z(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),G(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function $(){var r={};function e(n,s){B(r[s])&&B(n)?r[s]=$(r[s],n):B(n)?r[s]=$({},n):G(n)?r[s]=n.slice():r[s]=n}for(var t=0,i=arguments.length;t<i;t++)Z(arguments[t],e);return r}function ut(r,e,t){return Z(e,function(n,s){t&&typeof n=="function"?r[s]=$r(n,t):r[s]=n}),r}function ft(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function lt(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function ct(r,e,t){var i,n,s,o={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)s=i[n],o[s]||(e[s]=r[s],o[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function dt(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function pt(r){if(!r)return null;var e=r.length;if(L(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var ht=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array));qe.exports={isArray:G,isArrayBuffer:be,isBuffer:Yr,isFormData:it,isArrayBufferView:Kr,isString:Gr,isNumber:Qr,isObject:Oe,isPlainObject:B,isUndefined:L,isDate:Zr,isFile:et,isBlob:rt,isFunction:Q,isStream:nt,isURLSearchParams:st,isStandardBrowserEnv:at,forEach:Z,merge:$,extend:ut,trim:ot,stripBOM:ft,inherits:lt,toFlatObject:ct,kindOf:K,kindOfTest:A,endsWith:dt,toArray:pt,isTypedArray:ht,isFileList:tt}});var ee=l((on,Se)=>{"use strict";var T=d();function Ae(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}Se.exports=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(T.isURLSearchParams(t))n=t.toString();else{var s=[];T.forEach(t,function(f,h){f===null||typeof f>"u"||(T.isArray(f)?h=h+"[]":f=[f],T.forEach(f,function(c){T.isDate(c)?c=c.toISOString():T.isObject(c)&&(c=JSON.stringify(c)),s.push(Ae(h)+"="+Ae(c))}))}),n=s.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e}});var Te=l((an,ge)=>{"use strict";var mt=d();function I(){this.handlers=[]}I.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};I.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};I.prototype.forEach=function(e){mt.forEach(this.handlers,function(i){i!==null&&e(i)})};ge.exports=I});var Ne=l((un,Ce)=>{"use strict";var vt=d();Ce.exports=function(e,t){vt.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})}});var S=l((fn,Ue)=>{"use strict";var _e=d();function C(r,e,t,i,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}_e.inherits(C,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Pe=C.prototype,De={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){De[r]={value:r}});Object.defineProperties(C,De);Object.defineProperty(Pe,"isAxiosError",{value:!0});C.from=function(r,e,t,i,n,s){var o=Object.create(Pe);return _e.toFlatObject(r,o,function(f){return f!==Error.prototype}),C.call(o,r.message,e,t,i,n),o.name=r.name,s&&Object.assign(o,s),o};Ue.exports=C});var re=l((ln,Be)=>{"use strict";Be.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}});var te=l((cn,Le)=>{"use strict";var w=d();function Et(r,e){e=e||new FormData;var t=[];function i(s){return s===null?"":w.isDate(s)?s.toISOString():w.isArrayBuffer(s)||w.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,o){if(w.isPlainObject(s)||w.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+o);t.push(s),w.forEach(s,function(f,h){if(!w.isUndefined(f)){var a=o?o+"."+h:h,c;if(f&&!o&&typeof f=="object"){if(w.endsWith(h,"{}"))f=JSON.stringify(f);else if(w.endsWith(h,"[]")&&(c=w.toArray(f))){c.forEach(function(y){!w.isUndefined(y)&&e.append(a,i(y))});return}}n(f,a)}}),t.pop()}else e.append(o,i(s))}return n(r),e}Le.exports=Et});var Fe=l((dn,Ie)=>{"use strict";var ne=S();Ie.exports=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(new ne("Request failed with status code "+i.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i))}});var He=l((pn,je)=>{"use strict";var F=d();je.exports=F.isStandardBrowserEnv()?function(){return{write:function(t,i,n,s,o,u){var f=[];f.push(t+"="+encodeURIComponent(i)),F.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),F.isString(s)&&f.push("path="+s),F.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()});var ke=l((hn,Me)=>{"use strict";Me.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}});var Je=l((mn,Ve)=>{"use strict";Ve.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}});var ie=l((vn,We)=>{"use strict";var yt=ke(),Rt=Je();We.exports=function(e,t){return e&&!yt(t)?Rt(e,t):t}});var Xe=l((En,ze)=>{"use strict";var se=d(),xt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];ze.exports=function(e){var t={},i,n,s;return e&&se.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=se.trim(u.substr(0,s)).toLowerCase(),n=se.trim(u.substr(s+1)),i){if(t[i]&&xt.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t}});var Ke=l((yn,Ye)=>{"use strict";var $e=d();Ye.exports=$e.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(s){var o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(o){var u=$e.isString(o)?n(o):o;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}()});var D=l((Rn,Qe)=>{"use strict";var oe=S(),wt=d();function Ge(r){oe.call(this,r??"canceled",oe.ERR_CANCELED),this.name="CanceledError"}wt.inherits(Ge,oe,{__CANCEL__:!0});Qe.exports=Ge});var er=l((xn,Ze)=>{"use strict";Ze.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}});var ae=l((wn,rr)=>{"use strict";var U=d(),bt=Fe(),Ot=He(),qt=ee(),At=ie(),St=Xe(),gt=Ke(),Tt=re(),b=S(),Ct=D(),Nt=er();rr.exports=function(e){return new Promise(function(i,n){var s=e.data,o=e.headers,u=e.responseType,f;function h(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}U.isFormData(s)&&U.isStandardBrowserEnv()&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(c+":"+y)}var v=At(e.baseURL,e.url);a.open(e.method.toUpperCase(),qt(v,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function ye(){if(!!a){var x="getAllResponseHeaders"in a?St(a.getAllResponseHeaders()):null,g=!u||u==="text"||u==="json"?a.responseText:a.response,q={data:g,status:a.status,statusText:a.statusText,headers:x,config:e,request:a};bt(function(z){i(z),h()},function(z){n(z),h()},q),a=null}}if("onloadend"in a?a.onloadend=ye:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(ye)},a.onabort=function(){!a||(n(new b("Request aborted",b.ECONNABORTED,e,a)),a=null)},a.onerror=function(){n(new b("Network Error",b.ERR_NETWORK,e,a,a)),a=null},a.ontimeout=function(){var g=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",q=e.transitional||Tt;e.timeoutErrorMessage&&(g=e.timeoutErrorMessage),n(new b(g,q.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,a)),a=null},U.isStandardBrowserEnv()){var Re=(e.withCredentials||gt(v))&&e.xsrfCookieName?Ot.read(e.xsrfCookieName):void 0;Re&&(o[e.xsrfHeaderName]=Re)}"setRequestHeader"in a&&U.forEach(o,function(g,q){typeof s>"u"&&q.toLowerCase()==="content-type"?delete o[q]:a.setRequestHeader(q,g)}),U.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),u&&u!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(x){!a||(n(!x||x&&x.type?new Ct:x),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),s||(s=null);var W=Nt(v);if(W&&["http","https","file"].indexOf(W)===-1){n(new b("Unsupported protocol "+W+":",b.ERR_BAD_REQUEST,e));return}a.send(s)})}});var nr=l((bn,tr)=>{tr.exports=null});var H=l((On,ar)=>{"use strict";var p=d(),ir=Ne(),sr=S(),_t=re(),Pt=te(),Dt={"Content-Type":"application/x-www-form-urlencoded"};function or(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Ut(){var r;return typeof XMLHttpRequest<"u"?r=ae():typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]"&&(r=ae()),r}function Bt(r,e,t){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var j={transitional:_t,adapter:Ut(),transformRequest:[function(e,t){if(ir(t,"Accept"),ir(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return or(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=p.isObject(e),n=t&&t["Content-Type"],s;if((s=p.isFileList(e))||i&&n==="multipart/form-data"){var o=this.env&&this.env.FormData;return Pt(s?{"files[]":e}:e,o&&new o)}else if(i||n==="application/json")return or(t,"application/json"),Bt(e);return e}],transformResponse:[function(e){var t=this.transitional||j.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?sr.from(o,sr.ERR_BAD_RESPONSE,this,null,this.response):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){j.headers[e]={}});p.forEach(["post","put","patch"],function(e){j.headers[e]=p.merge(Dt)});ar.exports=j});var fr=l((qn,ur)=>{"use strict";var Lt=d(),It=H();ur.exports=function(e,t,i){var n=this||It;return Lt.forEach(i,function(o){e=o.call(n,e,t)}),e}});var ue=l((An,lr)=>{"use strict";lr.exports=function(e){return!!(e&&e.__CANCEL__)}});var pr=l((Sn,dr)=>{"use strict";var cr=d(),fe=fr(),Ft=ue(),jt=H(),Ht=D();function le(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Ht}dr.exports=function(e){le(e),e.headers=e.headers||{},e.data=fe.call(e,e.data,e.headers,e.transformRequest),e.headers=cr.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),cr.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||jt.adapter;return t(e).then(function(n){return le(e),n.data=fe.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Ft(n)||(le(e),n&&n.response&&(n.response.data=fe.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}});var ce=l((gn,hr)=>{"use strict";var R=d();hr.exports=function(e,t){t=t||{};var i={};function n(a,c){return R.isPlainObject(a)&&R.isPlainObject(c)?R.merge(a,c):R.isPlainObject(c)?R.merge({},c):R.isArray(c)?c.slice():c}function s(a){if(R.isUndefined(t[a])){if(!R.isUndefined(e[a]))return n(void 0,e[a])}else return n(e[a],t[a])}function o(a){if(!R.isUndefined(t[a]))return n(void 0,t[a])}function u(a){if(R.isUndefined(t[a])){if(!R.isUndefined(e[a]))return n(void 0,e[a])}else return n(void 0,t[a])}function f(a){if(a in t)return n(e[a],t[a]);if(a in e)return n(void 0,e[a])}var h={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return R.forEach(Object.keys(e).concat(Object.keys(t)),function(c){var y=h[c]||s,v=y(c);R.isUndefined(v)&&y!==f||(i[c]=v)}),i}});var de=l((Tn,mr)=>{mr.exports={version:"0.27.2"}});var yr=l((Cn,Er)=>{"use strict";var Mt=de().version,O=S(),pe={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){pe[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var vr={};pe.transitional=function(e,t,i){function n(s,o){return"[Axios v"+Mt+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return function(s,o,u){if(e===!1)throw new O(n(o," has been removed"+(t?" in "+t:"")),O.ERR_DEPRECATED);return t&&!vr[o]&&(vr[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,u):!0}};function kt(r,e,t){if(typeof r!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var s=i[n],o=e[s];if(o){var u=r[s],f=u===void 0||o(u,s,r);if(f!==!0)throw new O("option "+s+" must be "+f,O.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}Er.exports={assertOptions:kt,validators:pe}});var qr=l((Nn,Or)=>{"use strict";var wr=d(),Vt=ee(),Rr=Te(),xr=pr(),M=ce(),Jt=ie(),br=yr(),N=br.validators;function _(r){this.defaults=r,this.interceptors={request:new Rr,response:new Rr}}_.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=M(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&br.assertOptions(i,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(t)===!1||(s=s&&v.synchronous,n.unshift(v.fulfilled,v.rejected))});var o=[];this.interceptors.response.forEach(function(v){o.push(v.fulfilled,v.rejected)});var u;if(!s){var f=[xr,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var h=t;n.length;){var a=n.shift(),c=n.shift();try{h=a(h)}catch(y){c(y);break}}try{u=xr(h)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};_.prototype.getUri=function(e){e=M(this.defaults,e);var t=Jt(e.baseURL,e.url);return Vt(t,e.params,e.paramsSerializer)};wr.forEach(["delete","get","head","options"],function(e){_.prototype[e]=function(t,i){return this.request(M(i||{},{method:e,url:t,data:(i||{}).data}))}});wr.forEach(["post","put","patch"],function(e){function t(i){return function(s,o,u){return this.request(M(u||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}_.prototype[e]=t(),_.prototype[e+"Form"]=t(!0)});Or.exports=_});var Sr=l((_n,Ar)=>{"use strict";var Wt=D();function P(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(o){t.subscribe(o),n=o}).then(i);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Wt(n),e(t.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};P.source=function(){var e,t=new P(function(n){e=n});return{token:t,cancel:e}};Ar.exports=P});var Tr=l((Pn,gr)=>{"use strict";gr.exports=function(e){return function(i){return e.apply(null,i)}}});var Nr=l((Dn,Cr)=>{"use strict";var zt=d();Cr.exports=function(e){return zt.isObject(e)&&e.isAxiosError===!0}});var Dr=l((Un,he)=>{"use strict";var _r=d(),Xt=X(),k=qr(),$t=ce(),Yt=H();function Pr(r){var e=new k(r),t=Xt(k.prototype.request,e);return _r.extend(t,k.prototype,e),_r.extend(t,e),t.create=function(n){return Pr($t(r,n))},t}var E=Pr(Yt);E.Axios=k;E.CanceledError=D();E.CancelToken=Sr();E.isCancel=ue();E.VERSION=de().version;E.toFormData=te();E.AxiosError=S();E.Cancel=E.CanceledError;E.all=function(e){return Promise.all(e)};E.spread=Tr();E.isAxiosError=Nr();he.exports=E;he.exports.default=E});var Br=l((Bn,Ur)=>{Ur.exports=Dr()});var jr=Xr(Br());var V,Kt=new Uint8Array(16);function me(){if(!V&&(V=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!V))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return V(Kt)}var Lr=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Gt(r){return typeof r=="string"&&Lr.test(r)}var Ir=Gt;var m=[];for(J=0;J<256;++J)m.push((J+256).toString(16).substr(1));var J;function Qt(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=(m[r[e+0]]+m[r[e+1]]+m[r[e+2]]+m[r[e+3]]+"-"+m[r[e+4]]+m[r[e+5]]+"-"+m[r[e+6]]+m[r[e+7]]+"-"+m[r[e+8]]+m[r[e+9]]+"-"+m[r[e+10]]+m[r[e+11]]+m[r[e+12]]+m[r[e+13]]+m[r[e+14]]+m[r[e+15]]).toLowerCase();if(!Ir(t))throw TypeError("Stringified UUID is invalid");return t}var Fr=Qt;function Zt(r,e,t){r=r||{};var i=r.random||(r.rng||me)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e){t=t||0;for(var n=0;n<16;++n)e[t+n]=i[n];return e}return Fr(i)}var ve=Zt;function rn(){let r="__telemetry_session";return localStorage.getItem(r)===null&&localStorage.setItem(r,ve()),localStorage.getItem(r)}var Ee=class{constructor(e,t,i){this.url=e;this.commitHash=t;this.branch=i;this.sessionId=rn()}log(e,t){if(!(this.branch=="main"||this.branch=="master")||window.location.hostname=="localhost"&&!this.url.includes("localhost"))return;let n={sessionId:this.sessionId,commitHash:this.commitHash,timestamp:new Date().getTime(),payload:t},s=this.url+"/"+e;console.debug(`Logging to ${s}:`,n),jr.default.post(s,n)}};typeof window<"u"&&(window.telemetry=new Ee("https://rust-book.willcrichton.net/logs","ed02edac6b7fb20ca4d6180477e73db70ec83118","main"));})();
