"use strict";(self.webpackChunkovimi=self.webpackChunkovimi||[]).push([[8592],{6117:(D,p,v)=>{v.d(p,{c:()=>a});var l=v(4190),m=v(2966),d=v(8077);const a=(s,n)=>{let e,t;const i=(c,f,w)=>{if(typeof document>"u")return;const _=document.elementFromPoint(c,f);_&&n(_)?_!==e&&(u(),r(_,w)):u()},r=(c,f)=>{e=c,t||(t=e);const w=e;(0,l.c)(()=>w.classList.add("ion-activated")),f()},u=(c=!1)=>{if(!e)return;const f=e;(0,l.c)(()=>f.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>i(c.currentX,c.currentY,m.a),onMove:c=>i(c.currentX,c.currentY,m.b),onEnd:()=>{u(!0),(0,m.h)(),t=void 0}})}},278:(D,p,v)=>{v.d(p,{g:()=>l});const l=(n,e,t,i,r)=>d(n[1],e[1],t[1],i[1],r).map(u=>m(n[0],e[0],t[0],i[0],u)),m=(n,e,t,i,r)=>r*(3*e*Math.pow(r-1,2)+r*(-3*t*r+3*t+i*r))-n*Math.pow(r-1,3),d=(n,e,t,i,r)=>s((i-=r)-3*(t-=r)+3*(e-=r)-(n-=r),3*t-6*e+3*n,3*e-3*n,n).filter(c=>c>=0&&c<=1),s=(n,e,t,i)=>{if(0===n)return((n,e,t)=>{const i=e*e-4*n*t;return i<0?[]:[(-e+Math.sqrt(i))/(2*n),(-e-Math.sqrt(i))/(2*n)]})(e,t,i);const r=(3*(t/=n)-(e/=n)*e)/3,u=(2*e*e*e-9*e*t+27*(i/=n))/27;if(0===r)return[Math.pow(-u,1/3)];if(0===u)return[Math.sqrt(-r),-Math.sqrt(-r)];const c=Math.pow(u/2,2)+Math.pow(r/3,3);if(0===c)return[Math.pow(u/2,.5)-e/3];if(c>0)return[Math.pow(-u/2+Math.sqrt(c),1/3)-Math.pow(u/2+Math.sqrt(c),1/3)-e/3];const f=Math.sqrt(Math.pow(-r/3,3)),w=Math.acos(-u/(2*Math.sqrt(Math.pow(-r/3,3)))),_=2*Math.pow(f,1/3);return[_*Math.cos(w/3)-e/3,_*Math.cos((w+2*Math.PI)/3)-e/3,_*Math.cos((w+4*Math.PI)/3)-e/3]}},1776:(D,p,v)=>{v.d(p,{i:()=>l});const l=m=>m&&""!==m.dir?"rtl"===m.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},9222:(D,p,v)=>{v.r(p),v.d(p,{startFocusVisible:()=>a});const l="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,i=s||document.body,r=y=>{n.forEach(h=>h.classList.remove(l)),y.forEach(h=>h.classList.add(l)),n=y},u=()=>{e=!1,r([])},c=y=>{e=d.includes(y.key),e||r([])},f=y=>{if(e&&void 0!==y.composedPath){const h=y.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));r(h)}},w=()=>{t.activeElement===i&&r([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",f),t.addEventListener("focusout",w),t.addEventListener("touchstart",u),t.addEventListener("mousedown",u),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",f),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",u),t.removeEventListener("mousedown",u)},setFocus:r}}},2861:(D,p,v)=>{v.d(p,{C:()=>s,a:()=>d,d:()=>a});var l=v(5861),m=v(690);const d=function(){var n=(0,l.Z)(function*(e,t,i,r,u,c){var f;if(e)return e.attachViewToDom(t,i,u,r);if(!(c||"string"==typeof i||i instanceof HTMLElement))throw new Error("framework delegate is missing");const w="string"==typeof i?null===(f=t.ownerDocument)||void 0===f?void 0:f.createElement(i):i;return r&&r.forEach(_=>w.classList.add(_)),u&&Object.assign(w,u),t.appendChild(w),yield new Promise(_=>(0,m.c)(w,_)),w});return function(t,i,r,u,c,f){return n.apply(this,arguments)}}(),a=(n,e)=>{if(e){if(n)return n.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()},s=()=>{let n,e;return{attachViewToDom:function(){var r=(0,l.Z)(function*(u,c,f={},w=[]){var _,y;if(n=u,c){const g="string"==typeof c?null===(_=n.ownerDocument)||void 0===_?void 0:_.createElement(c):c;w.forEach(o=>g.classList.add(o)),Object.assign(g,f),n.appendChild(g),yield new Promise(o=>(0,m.c)(g,o))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const o=null===(y=n.ownerDocument)||void 0===y?void 0:y.createElement("div");o.classList.add("ion-delegate-host"),w.forEach(E=>o.classList.add(E)),o.append(...n.children),n.appendChild(o)}const h=document.querySelector("ion-app")||document.body;return e=document.createComment("ionic teleport"),n.parentNode.insertBefore(e,n),h.appendChild(n),n});return function(c,f){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&e&&(e.parentNode.insertBefore(n,e),e.remove()),Promise.resolve())}}},2966:(D,p,v)=>{v.d(p,{a:()=>a,b:()=>s,c:()=>d,d:()=>e,h:()=>n});const l={getEngine(){var t;const i=window;return i.TapticEngine||(null===(t=i.Capacitor)||void 0===t?void 0:t.isPluginAvailable("Haptics"))&&i.Capacitor.Plugins.Haptics},available(){var t;const i=window;return!!this.getEngine()&&("web"!==(null===(t=i.Capacitor)||void 0===t?void 0:t.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;i.impact({style:r})},notification(t){const i=this.getEngine();if(!i)return;const r=this.isCapacitor()?t.style.toUpperCase():t.style;i.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},m=()=>l.available(),d=()=>{m()&&l.selection()},a=()=>{m()&&l.selectionStart()},s=()=>{m()&&l.selectionChanged()},n=()=>{m()&&l.selectionEnd()},e=t=>{m()&&l.impact(t)}},8014:(D,p,v)=>{v.d(p,{a:()=>l,b:()=>c,c:()=>e,d:()=>f,e:()=>x,f:()=>n,g:()=>w,h:()=>d,i:()=>m,j:()=>o,k:()=>E,l:()=>t,m:()=>r,n:()=>_,o:()=>i,p:()=>s,q:()=>a,r:()=>g,s:()=>M,t:()=>u,u:()=>y,v:()=>h});const l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",x="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4964:(D,p,v)=>{v.d(p,{I:()=>s,a:()=>r,b:()=>n,c:()=>f,d:()=>_,f:()=>u,g:()=>i,i:()=>t,p:()=>w,r:()=>y,s:()=>c});var l=v(5861),m=v(690),d=v(3140);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=h=>"ION-CONTENT"===h.tagName,i=function(){var h=(0,l.Z)(function*(g){return t(g)?(yield new Promise(o=>(0,m.c)(g,o)),g.getScrollElement()):g});return function(o){return h.apply(this,arguments)}}(),r=h=>h.querySelector(n)||h.querySelector(e),u=h=>h.closest(e),c=(h,g)=>t(h)?h.scrollToTop(g):Promise.resolve(h.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),f=(h,g,o,E)=>t(h)?h.scrollByPoint(g,o,E):Promise.resolve(h.scrollBy({top:o,left:g,behavior:E>0?"smooth":"auto"})),w=h=>(0,d.a)(h,s),_=h=>{if(t(h)){const o=h.scrollY;return h.scrollY=!1,o}return h.style.setProperty("overflow","hidden"),!0},y=(h,g)=>{t(h)?h.scrollY=g:h.style.removeProperty("overflow")}},5034:(D,p,v)=>{v.r(p),v.d(p,{KEYBOARD_DID_CLOSE:()=>m,KEYBOARD_DID_OPEN:()=>l,copyVisualViewport:()=>g,keyboardDidClose:()=>w,keyboardDidOpen:()=>c,keyboardDidResize:()=>f,resetKeyboardAssist:()=>e,setKeyboardClose:()=>u,setKeyboardOpen:()=>r,startKeyboardAssist:()=>t,trackViewportChanges:()=>h});const l="ionKeyboardDidShow",m="ionKeyboardDidHide";let a={},s={},n=!1;const e=()=>{a={},s={},n=!1},t=o=>{i(o),o.visualViewport&&(s=g(o.visualViewport),o.visualViewport.onresize=()=>{h(o),c()||f(o)?r(o):w(o)&&u(o)})},i=o=>{o.addEventListener("keyboardDidShow",E=>r(o,E)),o.addEventListener("keyboardDidHide",()=>u(o))},r=(o,E)=>{_(o,E),n=!0},u=o=>{y(o),n=!1},c=()=>!n&&a.width===s.width&&(a.height-s.height)*s.scale>150,f=o=>n&&!w(o),w=o=>n&&s.height===o.innerHeight,_=(o,E)=>{const x=new CustomEvent(l,{detail:{keyboardHeight:E?E.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(x)},y=o=>{const E=new CustomEvent(m);o.dispatchEvent(E)},h=o=>{a=Object.assign({},s),s=g(o.visualViewport)},g=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},7585:(D,p,v)=>{v.d(p,{c:()=>m});var l=v(2470);const m=d=>{let a,s,n;const e=()=>{a=()=>{n=!0,d&&d(!0)},s=()=>{n=!1,d&&d(!1)},null==l.w||l.w.addEventListener("keyboardWillShow",a),null==l.w||l.w.addEventListener("keyboardWillHide",s)};return e(),{init:e,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",a),null==l.w||l.w.removeEventListener("keyboardWillHide",s),a=s=void 0},isKeyboardVisible:()=>n}}},6490:(D,p,v)=>{v.d(p,{S:()=>m});const m={bubbles:{dur:1e3,circles:9,fn:(d,a,s)=>{const n=d*a/s-d+"ms",e=2*Math.PI*a/s;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,a,s)=>{const n=a/s,e=d*n-d+"ms",t=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,a)=>({r:6,style:{left:9-9*a+"px","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,a,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,a,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})}}},2939:(D,p,v)=>{v.r(p),v.d(p,{createSwipeBackGesture:()=>s});var l=v(690),m=v(1776),d=v(8077);v(4587);const s=(n,e,t,i,r)=>{const u=n.ownerDocument.defaultView;let c=(0,m.i)(n);const w=o=>c?-o.deltaX:o.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(c=(0,m.i)(n),(o=>{const{startX:M}=o;return c?M>=u.innerWidth-50:M<=50})(o)&&e()),onStart:t,onMove:o=>{const M=w(o)/u.innerWidth;i(M)},onEnd:o=>{const E=w(o),M=u.innerWidth,x=E/M,C=(o=>c?-o.velocityX:o.velocityX)(o),L=C>=0&&(C>.2||E>M/2),O=(L?1-x:x)*M;let k=0;if(O>5){const S=O/Math.abs(C);k=Math.min(S,540)}r(L,x<=0?.01:(0,l.l)(0,x,.9999),k)}})}}}]);