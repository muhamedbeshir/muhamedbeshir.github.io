(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6060,e=>{var t=e.i(43476),a=e.i(25164),r=e.i(71645),n=e.i(89970),o=e.i(83495),i=e.i(96601);function s({clip:e,label:a}){let n="en"===(0,i.useLanguage)(),o=(0,r.useRef)(null),[l,d]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=o.current;if(!e)return;let t=window.matchMedia("(prefers-reduced-motion: reduce)"),a=!1,r=()=>{let r=e.closest(".brand-icon-original")?.inert;!a||r||l||t.matches||document.hidden?e.pause():e.play().catch(()=>{})},n=new IntersectionObserver(([e])=>{a=e.isIntersecting,r()},{threshold:.2});n.observe(e);let i=e.closest(".brand-icon-original"),s=new MutationObserver(r);return i&&s.observe(i,{attributes:!0,attributeFilter:["inert"]}),t.addEventListener("change",r),document.addEventListener("visibilitychange",r),()=>{n.disconnect(),s.disconnect(),t.removeEventListener("change",r),document.removeEventListener("visibilitychange",r),e.pause()}},[l]),(0,t.jsx)("button",{type:"button","data-intro-reveal":!0,className:`brand-media-tile brand-motion-tile brand-motion-${e}`,onClick:()=>d(!l),"aria-label":n?`${l?"Play":"Pause"} ${a} video`:`${l?"تشغيل":"إيقاف"} فيديو ${a}`,"aria-pressed":l,children:(0,t.jsx)("video",{ref:o,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0,controlsList:"nodownload nofullscreen noremoteplayback",preload:"none",poster:`/brand/intro-v2/${e}.webp`,"aria-hidden":"true",children:(0,t.jsx)("source",{src:`/brand/intro-v2/${e}.mp4`,type:"video/mp4"})})})}n.f.registerPlugin(o.f);let l=[{title:"ويب يليق بفكرتك.",text:"مواقع ومنصات سريعة، من أول زيارة لآخر خطوة. تجربة واضحة، وتفاصيل تخلي الاستخدام أسهل."},{title:"كل جزء في مكانه.",text:"واجهات مترابطة وقابلة للتطوير. نرتّب التعقيد خلف الكواليس، عشان اللي قدّامك يبقى بسيط."},{title:"تجربة تتحسّ.",text:"تطبيقات تجمع التصميم والحركة والاستجابة، وتخلّي كل تفاعل مفهوم وطبيعي."},{title:"جاهز للي جاي.",text:"أنظمة وأتمتة تربط شغلك وتخفّف التكرار، ببنية تقدر تتطوّر مع احتياجك."}],d=[{letter:"B",word:"بيلد",arabic:"بناء الحلول"},{letter:"E",word:"إنجينيرينج",arabic:"هندسة برمجيات نضيفة"},{letter:"S",word:"سكيل",arabic:"أنظمة بتكبر معاك"},{letter:"H",word:"هاي بيرفورمانس",arabic:"الأداء العالي"},{letter:"I",word:"إنتليجنس",arabic:"الذكاء الاصطناعي"},{letter:"R",word:"ريزلتس",arabic:"نتايج تقدر تقيسها"}];function c({index:e,children:r}){return(0,t.jsx)("span",{className:"brand-shared-icon","data-shared-icon":!0,children:(0,t.jsx)("span",{className:"brand-icon-morph",children:(0,t.jsxs)("span",{className:"brand-question-mover",children:[(0,t.jsx)("span",{className:"brand-icon-original",children:r}),(0,t.jsx)("span",{className:"brand-letter-face","data-letter":d[e].letter,"aria-hidden":"true",children:(0,t.jsx)(a.default,{src:`/brand/letters/${d[e].letter.toLowerCase()}.webp`,width:1024,height:1024,alt:"",sizes:"(max-width:767px) 150px, 260px",quality:90})})]})})})}function f({children:e}){return(0,t.jsx)(t.Fragment,{children:e.split(" ").map((e,a)=>(0,t.jsxs)("span",{"data-intro-copy":!0,children:[(0,t.jsx)("span",{className:"brand-intro-word","data-intro-reveal":!0,children:e})," "]},a))})}function p({name:e,file:r}){return(0,t.jsx)("span",{className:"brand-media-tile brand-sculpted-tile",title:e,"data-intro-reveal":!0,children:(0,t.jsx)(a.default,{src:`/brand/intro-v2/${r}-hq.webp`,width:1024,height:1024,alt:e,sizes:"(max-width:767px) 150px, 260px",quality:90})})}e.s(["BrandStory",0,function(){let e="en"===(0,i.useLanguage)(),g=e?[{title:"A web presence that fits.",text:"Fast websites and platforms, from the first visit to the final step. Clear journeys, with every detail considered."},{title:"Every part connected.",text:"Interfaces that work together and evolve with you. Complexity behind the scenes, simplicity on screen."},{title:"An experience you feel.",text:"Apps that bring design, motion and responsiveness together. Every interaction feels natural."},{title:"Ready for what's next.",text:"Systems and automation that connect your work, reduce repetition and grow around your needs."}]:l,u=e?[{letter:"B",word:"Build",arabic:"Ideas turned into working solutions"},{letter:"E",word:"Engineering",arabic:"Clean, solid code"},{letter:"S",word:"Scale",arabic:"Systems that grow with you"},{letter:"H",word:"High-performance",arabic:"Built for speed"},{letter:"I",word:"Intelligence",arabic:"AI built into the product"},{letter:"R",word:"Results",arabic:"Outcomes you can measure"}]:d,h=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=h.current,a=n.f.matchMedia(),r=n.f.context(()=>{a.add("(prefers-reduced-motion: no-preference)",()=>{t.dataset.motionReady="true";let a=t.querySelectorAll("[data-intro-reveal]"),r=n.f.from(a,{opacity:0,y:(e,t)=>t.classList.contains("brand-media-tile")?42:26,scale:(e,t)=>t.classList.contains("brand-media-tile")?.55:1,rotation:(e,t)=>t.classList.contains("brand-media-tile")?-18:0,duration:1.6,stagger:.18,ease:"power2.out",scrollTrigger:{trigger:t.querySelector(".brand-intro-statement"),start:"top 88%",toggleActions:"play none none none",once:!0}}),i=Array.from(t.querySelectorAll("[data-shared-icon]")),s=Array.from(t.querySelectorAll("[data-icon-slot]")),l=[],d=()=>{l=i.map((e,t)=>{let a=e.getBoundingClientRect(),r=s[t].getBoundingClientRect();return{x:r.left+r.width/2-(a.left+a.width/2-Number(n.f.getProperty(e,"x"))),y:r.top+r.height/2-(a.top+a.height/2-Number(n.f.getProperty(e,"y"))),scale:r.width/e.offsetWidth}})};d();let c=n.f.timeline();c.to(t.querySelectorAll("[data-intro-copy]"),{opacity:0,duration:.35,ease:"power1.out"},0),i.forEach((e,t)=>c.to(e,{x:()=>l[t].x,y:()=>l[t].y,scale:()=>l[t].scale,duration:1,ease:"power2.inOut"},.08+.035*t)),n.f.set(t.querySelectorAll(".brand-capability-copy"),{opacity:0,y:28}),c.to(t.querySelectorAll(".brand-capability-copy"),{opacity:1,y:0,duration:.4,stagger:.06,ease:"power2.out"},1.2);let f=Array.from(t.querySelectorAll("[data-letter-slot]")),p=i.map(e=>e.querySelector(".brand-icon-morph")),g=n.f.timeline();g.to(t.querySelectorAll(".brand-capability-copy"),{opacity:0,y:-12,duration:.16},0),p.forEach((e,t)=>{let a=e=>{let a=s[t].getBoundingClientRect(),r=f[t].getBoundingClientRect(),n=a.width/i[t].offsetWidth;return"x"===e?(r.left+r.width/2-a.left-a.width/2)/n:(r.top+r.height/2-a.top-a.height/2)/n},r=.12+.075*t;g.fromTo(e,{x:0,y:0,scale:1},{x:()=>a("x"),y:()=>a("y"),scale:()=>f[t].getBoundingClientRect().width/s[t].getBoundingClientRect().width,duration:.65,ease:"back.out(1.15)",immediateRender:!1},r),g.fromTo(e.querySelector(".brand-icon-original"),{opacity:1,rotationY:0},{opacity:0,rotationY:-85,duration:.22,ease:"power2.in",immediateRender:!1},r+.18),g.fromTo(e.querySelector(".brand-letter-face"),{opacity:0,rotationY:85},{opacity:1,rotationY:0,duration:.32,ease:"power3.out",immediateRender:!1},r+.34)}),g.fromTo(t.querySelectorAll(".brand-last-letter"),{opacity:0,scale:.3,y:-35},{opacity:1,scale:1,y:0,duration:.5,stagger:.12,ease:"back.out(1.5)",immediateRender:!1},.69),g.fromTo(t.querySelectorAll(".brand-name-definition"),{opacity:0,x:24},{opacity:1,x:0,duration:.4,stagger:.075,ease:"power3.out",immediateRender:!1},.58);let u=t.querySelector(".brand-story-stage"),h=t.querySelectorAll(".brand-emitter-pool"),m=()=>{let e=u.getBoundingClientRect();[0,3].forEach((t,a)=>{let r=f[t].getBoundingClientRect();h[a].style.left=`${r.left+r.width/2-e.left}px`,h[a].style.top=`${r.top+r.height/2-e.top}px`})};m();let x=n.f.timeline();x.to([t,u],{backgroundColor:"#0b0908",duration:1.25,ease:"none"},0),x.to(t.querySelectorAll(".brand-name-definition h3"),{color:"#f1eadd",duration:.8,ease:"none"},.1),x.to(t.querySelectorAll(".brand-name-definition p"),{color:"#a8998a",duration:.8,ease:"none"},.1),x.to(h[0],{opacity:.6,duration:.8,ease:"power1.inOut"},.3),x.to(h[1],{opacity:.65,duration:.7,ease:"power1.inOut"},.5),x.to(t.querySelector('[data-letter="B"] img'),{filter:"brightness(1.3) saturate(1.12) drop-shadow(0 0 9px #ffc16bcc) drop-shadow(0 0 26px #ff9a3266)",duration:.75,ease:"none"},.35),x.to(t.querySelector('[data-letter="H"] img'),{filter:"brightness(1.3) saturate(1.12) drop-shadow(0 0 9px #81e6ffcc) drop-shadow(0 0 28px #40bfff77)",duration:.65,ease:"none"},.55),x.to(t.querySelectorAll(".brand-name-definition h3")[0],{color:"#ffe3bd",textShadow:"0 0 26px #ffab4140",duration:.6},.55),x.to(t.querySelectorAll(".brand-name-definition h3")[3],{color:"#d0f6ff",textShadow:"0 0 26px #5acfff40",duration:.5},.7);let b=Array.from(t.querySelectorAll("[data-question-slot]")),y=t.querySelectorAll(".brand-question-base"),w=n.f.timeline();w.to([i[1],i[2],...t.querySelectorAll(".brand-name-row:nth-child(n+5)")],{opacity:0,duration:.35,ease:"power2.out",immediateRender:!1},0),w.to(t.querySelectorAll(".brand-name-definition"),{opacity:0,duration:.3,immediateRender:!1},0),[0,3].forEach((e,t)=>{let a=a=>{let r=f[e].getBoundingClientRect(),n=b[t].getBoundingClientRect(),o=r.width/i[e].offsetWidth;return"x"===a?(n.left+n.width/2-r.left-r.width/2)/o:(n.top+n.height/2-r.top-r.height/2)/o};w.fromTo(p[e].querySelector(".brand-question-mover"),{x:0,y:0,scale:1},{x:()=>a("x"),y:()=>a("y"),scale:()=>b[t].getBoundingClientRect().width/f[e].getBoundingClientRect().width,duration:.85,ease:"power2.inOut",immediateRender:!1},.2+.08*t),w.to(h[t],{left:()=>{let e=u.getBoundingClientRect(),a=b[t].getBoundingClientRect();return a.left+a.width/2-e.left},top:()=>{let e=u.getBoundingClientRect(),a=b[t].getBoundingClientRect();return a.top+a.height/2-e.top},duration:.85,ease:"power2.inOut"},.2+.08*t)}),w.set(y,{opacity:1},.85),w.fromTo(y,{clipPath:e?"inset(0% 100% 0% 0%)":"inset(0% 0% 0% 100%)"},{clipPath:"inset(0% 0% 0% 0%)",duration:.7,stagger:.25,ease:"none",immediateRender:!1},.85),w.fromTo([t,u],{backgroundColor:"#0b0908"},{backgroundColor:"#f3ece0",duration:1.3,ease:"none",immediateRender:!1},.8),w.fromTo(t.querySelectorAll(".brand-question-word"),{color:"#f3ece0"},{color:"#1a1410",duration:1.3,ease:"none",immediateRender:!1},.8),w.to(h,{opacity:0,duration:1,ease:"none"},1.1),w.to(t.querySelectorAll('[data-letter="B"] img,[data-letter="H"] img'),{filter:"brightness(1) saturate(1) drop-shadow(0 0 0px #0000) drop-shadow(0 0 0px #0000)",duration:1,ease:"none"},1.1);let v=n.f.timeline().fromTo(t.querySelectorAll(".brand-question-prefix"),{width:0,opacity:0},{width:(e,t)=>t.firstElementChild.getBoundingClientRect().width,opacity:1,duration:1,stagger:.2,ease:"power1.inOut",immediateRender:!1}),j=n.f.timeline({scrollTrigger:{trigger:t,start:"top top",end:()=>`+=${Math.round(9.2*u.clientHeight)}`,scrub:.8,invalidateOnRefresh:!0,onRefreshInit:d,onRefresh:m}});return j.add(c.timeScale(c.duration()/1.25),.3),j.add(g.timeScale(g.duration()/.9),2.1),j.add(x.timeScale(x.duration()/1.15),3.9),j.add(w.timeScale(w.duration()/1.8),5.7),j.add(v.timeScale(v.duration()/.65),8),j.to({},{duration:.55},8.65),j.eventCallback("onUpdate",()=>{j.time()>.3&&1>r.progress()&&r.progress(1);let e=j.time()>2.4;p.forEach(t=>{let a=t.querySelector(".brand-icon-original");a.inert!==e&&(a.inert=e)})}),document.fonts.ready.then(()=>{t.isConnected&&o.f.refresh()}),()=>{j.kill(),delete t.dataset.motionReady}}),a.add("(prefers-reduced-motion: reduce)",()=>{t.dataset.reduced="true";let e=Array.from(t.querySelectorAll("[data-shared-icon]")),a=e.map(e=>({parent:e.parentNode,next:e.nextSibling})),r=t.querySelectorAll("[data-icon-slot]");return e.forEach((e,t)=>r[t].appendChild(e)),()=>{e.forEach((e,t)=>a[t].parent.insertBefore(e,a[t].next)),delete t.dataset.reduced}})},h);return()=>{a.revert(),r.revert()}},[e]),(0,t.jsxs)("section",{ref:h,id:"identity",className:"brand-story-sequence","aria-labelledby":"brand-intro-title",dir:e?"ltr":"rtl",children:[(0,t.jsx)("span",{id:"approach",className:"brand-capabilities-anchor","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"brand-story-stage wahba-brand-intro",children:[(0,t.jsxs)("div",{className:"brand-scene-light","aria-hidden":"true",children:[(0,t.jsx)("div",{className:"brand-emitter-pool brand-emitter-w"}),(0,t.jsx)("div",{className:"brand-emitter-pool brand-emitter-h"})]}),(0,t.jsxs)("h2",{id:"brand-intro-title",className:"brand-intro-statement",children:[(0,t.jsxs)("span",{className:"brand-intro-line",children:[(0,t.jsx)(f,{children:e?"At":"في"}),(0,t.jsx)("span",{"data-intro-copy":!0,children:(0,t.jsx)("b",{className:"brand-intro-word","data-intro-reveal":!0,lang:"en",dir:"ltr",children:"beshir"})})," ",(0,t.jsx)(c,{index:0,children:(0,t.jsx)(p,{name:"Next.js",file:"next-sculpted"})})," ",(0,t.jsx)(f,{children:e?"I turn ideas":"بنحوّل الأفكار"})]})," ",(0,t.jsxs)("span",{className:"brand-intro-line",children:[(0,t.jsx)(f,{children:e?"into websites":"لتجارب ويب"}),(0,t.jsx)(c,{index:1,children:(0,t.jsx)(p,{name:"React",file:"react-sculpted"})})," ",(0,t.jsx)(f,{children:e?"and apps":"وتطبيقات"}),(0,t.jsx)(c,{index:2,children:(0,t.jsx)(s,{clip:"blue-caustics",label:e?"light waves":"موجات الضوء"})})," ",(0,t.jsx)(f,{children:e?"that feel right,":"ذكيّة،"})]})," ",(0,t.jsxs)("span",{className:"brand-intro-line",children:[(0,t.jsx)(f,{children:e?"and systems":"وأنظمة"}),(0,t.jsx)(c,{index:3,children:(0,t.jsx)(s,{clip:"liquid-chrome",label:e?"liquid metal":"المعدن السائل"})})," ",(0,t.jsx)(f,{children:e?"that work with you and grow with you.":"تشتغل معاك وتكبر بيك."})]})]}),(0,t.jsx)("section",{className:"brand-capabilities-row","aria-label":e?"From idea to connected systems":"من الفكرة إلى نظام متكامل",children:g.map(e=>(0,t.jsxs)("article",{className:"brand-capability",children:[(0,t.jsx)("div",{className:"brand-capability-slot","data-icon-slot":!0}),(0,t.jsxs)("div",{className:"brand-capability-copy",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("p",{children:e.text})]})]},e.title))}),(0,t.jsx)("section",{className:"brand-name-panel","aria-label":e?"The meaning of beshir":"حروف بشير ومعانيها",children:u.map((r,n)=>(0,t.jsxs)("div",{className:"brand-name-row",children:[(0,t.jsx)("div",{className:"brand-name-slot","data-letter-slot":!0,children:(0,t.jsx)("span",{className:n>=4?"brand-last-letter":"brand-reduced-letter",children:(0,t.jsx)(a.default,{src:`/brand/letters/${r.letter.toLowerCase()}.webp`,width:1024,height:1024,alt:r.letter,sizes:"(max-width:767px) 90px, 110px",quality:90})})}),(0,t.jsxs)("div",{className:"brand-name-definition",dir:e?"ltr":"rtl",children:[(0,t.jsx)("h3",{children:r.word}),(0,t.jsx)("p",{children:r.arabic})]})]},n))}),(0,t.jsxs)("section",{className:"brand-questions-panel","aria-label":e?"What will we build, and how?":"هنعمل إيه؟ وإزاي؟",children:[(0,t.jsxs)("div",{className:"brand-question-row",children:[(0,t.jsx)("div",{className:"brand-question-slot","data-question-slot":!0}),(0,t.jsx)("div",{className:"brand-question-copy",children:(0,t.jsxs)("h3",{className:"brand-question-word brand-question-what",dir:e?"ltr":"rtl","aria-label":e?"What will we build?":"هنعمل إيه؟",children:[(0,t.jsx)("span",{className:"brand-question-prefix brand-question-prefix-what",children:(0,t.jsx)("span",{children:e?"Let’s build ":"هنعمل "})}),(0,t.jsx)("span",{className:"brand-question-base",children:e?"What?":"إيــــــــــــه؟"})]})})]}),(0,t.jsxs)("div",{className:"brand-question-row",children:[(0,t.jsx)("div",{className:"brand-question-slot","data-question-slot":!0}),(0,t.jsx)("div",{className:"brand-question-copy",children:(0,t.jsxs)("h3",{className:"brand-question-word",dir:e?"ltr":"rtl",children:[(0,t.jsx)("span",{className:"brand-question-prefix",children:(0,t.jsx)("span",{children:e?"and ":"و"})}),(0,t.jsx)("span",{className:"brand-question-base",children:e?"How":"إزاي"})]})})]})]})]})]})}],6060)},99260,e=>{var t=e.i(43476),a=e.i(71645),r=e.i(89970);let n="u">typeof document?a.useLayoutEffect:a.useEffect,o=e=>e&&!Array.isArray(e)&&"object"==typeof e,i=[],s={},l=r.f,d=(e,t=i)=>{let r=s;o(e)?(r=e,e=null,t="dependencies"in r?r.dependencies:i):o(t)&&(t="dependencies"in(r=t)?r.dependencies:i),e&&"function"!=typeof e&&console.warn("First parameter must be a function or config object");let{scope:d,revertOnUpdate:c}=r,f=(0,a.useRef)(!1),p=(0,a.useRef)(l.context(()=>{},d)),g=(0,a.useRef)(e=>p.current.add(null,e)),u=t&&t.length&&!c;return u&&n(()=>(f.current=!0,()=>p.current.revert()),i),n(()=>{if(e&&p.current.add(e,d),!u||!f.current)return()=>p.current.revert()},t),{context:p.current,contextSafe:g.current}};d.register=e=>{l=e},d.headless=!0;var c=e.i(83495);r.f.registerPlugin(d,c.f),e.s(["CheckpointMotion",0,function({children:e}){let n=(0,a.useRef)(null);return d(()=>{let e=r.f.matchMedia();return e.add({all:"all",reduced:"(prefers-reduced-motion: reduce)"},e=>{let t=n.current?.querySelector(".forge-stage"),a=n.current?.querySelector(".forge-art-scroll"),o=t?.querySelectorAll(".forge-title-scroll");if(!t||!a||!o?.length)return;let i=!!e.conditions?.reduced,s=r.f.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:t,start:"top top",end:()=>`+=${Math.min(420,.45*t.clientHeight)}`,scrub:!!i||.18,invalidateOnRefresh:!0}});i||s.to(a,{y:0,scale:()=>window.innerWidth<768?1.02:1.035,duration:1},0),s.to(o,{y:()=>i?0:Math.min(60,.07*t.clientHeight),opacity:0,duration:.7},0)}),e.add("(prefers-reduced-motion: no-preference)",()=>{let e=n.current?.querySelector(".forge-stage"),t=r.f.timeline();t.from(".hero-studio-light",{opacity:0,duration:1.8,ease:"power2.out"},0),t.from(".hero-pebble-texture,.forge-horizon",{opacity:0,duration:1.4,stagger:.1,ease:"power2.out"},.1),t.from(".forge-title-word",{y:40,opacity:0,duration:1.15,stagger:.13,ease:"power3.out"},.15),t.from(".forge-art",{y:95,opacity:0,rotation:-4,duration:1.7,ease:"power3.out",delay:.12},0),t.from(".hero-bottom-cta",{opacity:0,y:18,scale:.94,duration:.7,ease:"power3.out",clearProps:"transform,opacity"},.8),t.from(".hero-folder-row > div",{opacity:0,y:36,duration:.9,stagger:.12,ease:"power3.out",clearProps:"transform,opacity"},.65),t.from(".site-header .header-inner",{opacity:0,y:-14,duration:.75,ease:"power3.out",clearProps:"transform,opacity"},.25),t.from(".site-header .notch-app-tile",{opacity:0,scale:.75,duration:.55,stagger:.065,ease:"power3.out",clearProps:"transform,opacity"},.45);let a=n.current?.querySelector(".forge-art-inner");if(!e||!a||!matchMedia("(hover: hover) and (pointer: fine)").matches)return;let o=[{value:0,velocity:0,target:0},{value:0,velocity:0,target:0},{value:0,velocity:0,target:0},{value:0,velocity:0,target:0},{value:0,velocity:0,target:0}],i=a.closest(".forge-native-model")?null:r.f.quickSetter(a,"css"),s=0,l=0,d=t=>{let r=l?Math.min((t-l)/1e3,.05):1/60;l=t;let n=!1;for(let[e,t]of o.entries()){let a=2*Math.PI/(e>=3?.65:.4),o=t.value-t.target,i=t.velocity+a*o,s=Math.exp(-a*r);t.value=t.target+(o+i*r)*s,t.velocity=(t.velocity-a*i*r)*s,n||=Math.abs(t.value-t.target)>.001||Math.abs(t.velocity)>.001}let c=a.closest(".forge-portrait-art");i?.({x:o[0].value,y:o[1].value,rotation:o[2].value,...c?{rotationY:.38*o[0].value,rotationX:-(.32*o[1].value),transformPerspective:1300}:{}}),c&&(a.style.setProperty("--portrait-light-x",`${40+2.3*o[0].value}%`),a.style.setProperty("--portrait-light-y",`${24+2*o[1].value}%`),a.style.setProperty("--portrait-shadow-x",`${-(1.8*o[0].value)}px`),a.style.setProperty("--portrait-shadow-y",`${18-o[1].value}px`)),e.style.setProperty("--title-parallax-x",`${o[3].value}px`),e.style.setProperty("--title-parallax-y",`${o[4].value}px`),s=n?requestAnimationFrame(d):0,n||(l=0)},c=(e,t,a)=>{o[0].target=e,o[1].target=t,o[2].target=a,o[3].target=-(1.8*e),o[4].target=-(1.4*t),s||(s=requestAnimationFrame(d))},f=t=>{if("mouse"!==t.pointerType)return;let a=e.getBoundingClientRect(),r=(t.clientX-a.left)/a.width-.5;c(14*r,10*((t.clientY-a.top)/a.height-.5),1.1*r)},p=()=>{c(0,0,0)};return e.addEventListener("pointermove",f),e.addEventListener("pointerleave",p),()=>{cancelAnimationFrame(s),e.removeEventListener("pointermove",f),e.removeEventListener("pointerleave",p),e.style.removeProperty("--title-parallax-x"),e.style.removeProperty("--title-parallax-y"),["--portrait-light-x","--portrait-light-y","--portrait-shadow-x","--portrait-shadow-y"].forEach(e=>a.style.removeProperty(e))}}),()=>e.revert()},{scope:n}),(0,t.jsx)("div",{ref:n,children:e})}],99260)},28409,e=>{var t=e.i(43476),a=e.i(71645),r=e.i(25164),n=e.i(96601);let o={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function i(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function s(e){let t=0x811c9dc5;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),0x1000193);return t>>>0}let l=new Map,d=[],c=!1;function f({art:e,seed:r,w:n,h:s,density:p,priority:g,className:u}){let h=a.useRef(null),[m,x]=a.useState(""),b=JSON.stringify("string"==typeof e?o[e]:e),y=Math.round(n*p),w=Math.round(s*p),v=JSON.stringify([b,r,y,w]);return a.useEffect(()=>{var e;let t,a,n=!0;return(e=JSON.parse(b),t=JSON.stringify([e,r,y,w]),!(a=l.get(t))&&(a=new Promise(t=>{let a,n,o,s,l,f,p,u,h,m,x,b,v,j,k,N,A,S,C,M,q,E,L,$,R,z,B=d.length;for(;B>1&&d[B-1].priority>g;)B--;d.splice(B,0,{job:(a=Math.max(1,Math.round(y)),n=Math.max(1,Math.round(w)),s=(o=e.colors.length>=2?e.colors:["#111111","#eeeeee"]).map((e,t)=>{let a,r;return{t:t/(o.length-1),c:(3===(a=e.trim().replace(/^#/,"")).length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),[(r=/^[0-9a-f]{6}$/i.test(a)?parseInt(a,16):8421504)>>16&255,r>>8&255,255&r])}}),l=e.scale??.7,f=e.warp??3,p=e.gloss??.4,u=e.veins??0,h="streak"===e.style,m=function(e){let t=i(e),a=new Uint8Array(512),r=new Float32Array(512),n=[];for(let e=0;e<256;e++)n.push(e);for(let e=255;e>0;e--){let a=Math.floor(t()*(e+1)),r=n[e];n[e]=n[a],n[a]=r}for(let e=0;e<512;e++)a[e]=n[255&e];for(let e=0;e<256;e++){let a=t()*Math.PI*2;r[2*e]=Math.cos(a),r[2*e+1]=Math.sin(a)}let o=(e,t)=>{let n=Math.floor(e),o=Math.floor(t),i=e-n,s=t-o,l=255&n,d=255&o,c=2*a[l+a[d]],f=2*a[l+1+a[d]],p=2*a[l+a[d+1]],g=2*a[l+1+a[d+1]],u=r[c]*i+r[c+1]*s,h=r[f]*(i-1)+r[f+1]*s,m=r[p]*i+r[p+1]*(s-1),x=r[g]*(i-1)+r[g+1]*(s-1),b=i*i*i*(i*(6*i-15)+10);return u+b*(h-u)+s*s*s*(s*(6*s-15)+10)*(m-u+b*(x-m-h+u))};return(e,t,a)=>{let r=0,n=.5;for(let i=0;i<a;i++){r+=n*o(e,t);let a=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=a,n*=.5}return r}}(977*r+13),b=50*(x=i(r+1))(),v=50*x(),k=Math.cos(j=(e.angle??0)+(x()-.5)*.5),N=Math.sin(j),A=Math.min(a,n),M=new Float32Array((S=Math.ceil(a/2)+3)*(C=Math.ceil(n/2)+3)),q=new Float32Array(S*C),E=new Float32Array(a*n),L=new Float32Array(a*n),$=new Uint8ClampedArray(a*n*4),R=0,z=e=>{for(let t=0;t<S;t++){let r=((t-1)*2-a/2)/A,o=((e-1)*2-n/2)/A,i=(r*k-o*N)*l,s=(r*N+o*k)*l;h&&(i*=.14,s*=2.2);let d=m(i+=b,s+=v,3),c=m(i+5.2,s+1.3,3),p=m(i+f*d+1.7,s+f*c+9.2,3),g=m(i+f*d+8.3,s+f*c+2.8,3);M[e*S+t]=m(i+f*p,s+f*g,4),q[e*S+t]=Math.sqrt(d*d+c*c)}},{width:a,height:n,pixels:$,step:e=>{if(R>=C)return!0;let t=Math.min(C,R+Math.max(1,e));for(;R<t;)z(R++);return!(R<C)&&((()=>{let e=(e,t,a,r)=>(-e+9*t+9*a-r)/16,t=new Float32Array(a*C);for(let r=0;r<C;r++){let n=r*S;for(let o=0;o<a;o++){let i=(o>>1)+1;t[r*a+o]=1&o?e(M[n+i-1],M[n+i],M[n+i+1],M[n+i+2]):M[n+i]}}for(let r=0;r<n;r++){let n=(r>>1)+1;for(let o=0;o<a;o++){E[r*a+o]=1&r?e(t[(n-1)*a+o],t[n*a+o],t[(n+1)*a+o],t[(n+2)*a+o]):t[n*a+o];let i=(o>>1)+1,s=q[n*S+i],l=1&o?(s+q[n*S+i+1])/2:s,d=1&r?1&o?(q[(n+1)*S+i]+q[(n+1)*S+i+1])/2:q[(n+1)*S+i]:l;L[r*a+o]=(l+d)/2}}})(),(()=>{let e=[],t=Math.max(1,Math.floor(E.length/4096));for(let a=0;a<E.length;a+=t)e.push(E[a]);e.sort((e,t)=>e-t);let r=e[Math.floor(.02*e.length)],o=1/(e[Math.floor(.98*e.length)]-r||1),i=o*A*.012;for(let e=0;e<n;e++)for(let t=0;t<a;t++){let l=e*a+t,d=(E[l]-r)*o;d=d<0?0:d>1?1:d;let c=1;for(;c<s.length-1&&s[c].t<d;)c++;let f=s[c-1],g=s[c],h=(d-f.t)/(g.t-f.t||1);h=(h=h<0?0:h>1?1:h)*h*(3-2*h);let m=(E[t<a-1?l+1:l]-E[t>0?l-1:l])*i,x=(E[e<n-1?l+a:l]-E[e>0?l-a:l])*i,b=(-(-.55*m)- -.65*x+.52)/Math.sqrt(m*m+x*x+1),y=Math.pow(b>0?b:0,24)*p*255,w=(.82+.28*b)*(1+.035*Math.sin(150*d+24*L[l]))*(1-u*Math.max(0,1-14*Math.abs(L[l]-.42))*.6);$[4*l]=(f.c[0]+(g.c[0]-f.c[0])*h)*w+y,$[4*l+1]=(f.c[1]+(g.c[1]-f.c[1])*h)*w+y,$[4*l+2]=(f.c[2]+(g.c[2]-f.c[2])*h)*w+y,$[4*l+3]=255}})(),!0)}}),priority:g,done:t}),function(){if(c)return;c=!0;let e=()=>{let t=performance.now()+7;for(;d.length&&performance.now()<t;){let e=d[0];if(e.job.step(4)){d.shift();let t=document.createElement("canvas");t.width=e.job.width,t.height=e.job.height,t.getContext("2d")?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}d.length?requestAnimationFrame(e):c=!1};requestAnimationFrame(e)}()}),l.set(t,a)),a).then(e=>{let t=h.current;n&&t&&(t.width=e.width,t.height=e.height,t.getContext("2d")?.drawImage(e,0,0),x(v))}),()=>{n=!1}},[b,r,y,w,g,v]),(0,t.jsx)("canvas",{ref:h,"aria-hidden":"true",className:u,"data-ready":m===v||void 0,style:{width:n,height:s,maxWidth:"none"}})}let p="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",g="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z",u=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}];function h({label:e="My Files",meta:o,tone:l="light",art:d="aurora",seed:c=3,image:x,files:b=u,action:y="add",onAdd:w,onFilesChange:v,menu:j=[],labelPlacement:k="bottom-left",open:N,defaultOpen:A=!1,onOpenChange:S,onFileSelect:C,width:M=340,appear:q=!0,appearDelay:E=0,className:L,style:$}){let R="en"===(0,n.useLanguage)(),z=a.useId().replace(/:/g,""),B=a.useRef(null),T=a.useRef(null),P=a.useRef(null),I=a.useRef(null),O=a.useRef(null),[F,H]=a.useState(b),[W,Y]=a.useState(()=>b.map((e,t)=>t)),D=a.useRef(b.length),[U,Z]=a.useState(null),[G,V]=a.useState(0),[X,J]=a.useState(A),Q=N??X,K=a.useCallback(e=>{void 0===N&&J(e),S?.(e)},[N,S]),[_,ee]=a.useState(!1),[et,ea]=a.useState(!q),er=M/340,en=Math.min(1.5,Math.max(1,window.devicePixelRatio||1))*er;a.useEffect(()=>{if(!q)return;let e=B.current;if(!e||"u"<typeof IntersectionObserver)return void ea(!0);let t=0,a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a.disconnect(),t=window.setTimeout(()=>ea(!0),E))},{threshold:.25});return a.observe(e),()=>{a.disconnect(),window.clearTimeout(t)}},[q,E]),a.useEffect(()=>{let e=B.current;if(!e)return;let t=0,a=0,r=0,n=()=>{t=0,e.style.setProperty("--gf-px",a.toFixed(3)),e.style.setProperty("--gf-py",r.toFixed(3))},o=o=>{if("touch"===o.pointerType)return;let i=e.getBoundingClientRect();a=(o.clientX-i.left)/i.width*2-1,r=(o.clientY-i.top)/i.height*2-1,t||(t=requestAnimationFrame(n))},i=()=>{a=0,r=0,t||(t=requestAnimationFrame(n))};return e.addEventListener("pointermove",o),e.addEventListener("pointerleave",i),()=>{e.removeEventListener("pointermove",o),e.removeEventListener("pointerleave",i),cancelAnimationFrame(t)}},[]),a.useEffect(()=>{T.current?.toggleAttribute("inert",!Q)},[Q]),a.useEffect(()=>{if(!Q&&!_)return;let e=e=>{"Escape"===e.key&&(_?(ee(!1),I.current?.focus()):(K(!1),P.current?.focus()))},t=e=>{let t=e.target;!_||O.current?.contains(t)||I.current?.contains(t)||ee(!1),!Q||_||B.current?.contains(t)||K(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",t)}},[Q,_,K]),a.useEffect(()=>{_&&O.current?.querySelector("[role=menuitem]")?.focus()},[_]);let eo=[{label:Q?"Close folder":"Open folder",onSelect:()=>K(!Q)},...j],ei=Math.max(0,F.length-4),es=F.slice(ei),el=F.length,ed=o??el+(1===el?" item":" items");return(0,t.jsxs)("div",{ref:B,className:"gf-root"+(L?" "+L:""),"data-tone":l,"data-open":Q||void 0,"data-entered":et||void 0,"data-place":k,style:{width:M,height:326*er,...$},children:[(0,t.jsx)("style",{children:m}),(0,t.jsx)("svg",{width:"0",height:"0",style:{position:"absolute"},"aria-hidden":"true",children:(0,t.jsxs)("defs",{children:[(0,t.jsx)("clipPath",{id:"gf-back-clip-"+z,clipPathUnits:"objectBoundingBox",children:(0,t.jsx)("path",{d:p,transform:`scale(${1/340} ${1/272})`})}),(0,t.jsx)("clipPath",{id:"gf-front-clip-"+z,clipPathUnits:"objectBoundingBox",children:(0,t.jsx)("path",{d:g,transform:`scale(${1/340} ${1/198})`})})]})}),(0,t.jsx)("div",{className:"gf-stage",style:{transform:"translateY("+54*er+"px) scale("+er+")"},children:(0,t.jsxs)("div",{className:"gf-tilt",children:[(0,t.jsx)("div",{className:"gf-shadow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"gf-back",style:{clipPath:`url(#gf-back-clip-${z})`},"aria-hidden":"true",children:[x?(0,t.jsx)(r.default,{className:"gf-art",src:x,alt:"",width:364,height:296,draggable:!1,unoptimized:!0}):"none"!==d?(0,t.jsx)(f,{className:"gf-art",art:d,seed:c,w:364,h:296,density:en,priority:0}):null,(0,t.jsx)("div",{className:"gf-back-sheen"})]}),(0,t.jsx)("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 340 272",preserveAspectRatio:"none","aria-hidden":"true",children:(0,t.jsx)("path",{d:p})}),(0,t.jsxs)("div",{className:"gf-front"+(G?" gf-front--bump":""),style:{clipPath:`url(#gf-front-clip-${z})`},children:[(0,t.jsx)("div",{className:"gf-tint","aria-hidden":"true"}),(0,t.jsx)("div",{className:"gf-spec","aria-hidden":"true"}),(0,t.jsxs)("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 340 198",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"gf-rim-"+z,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),(0,t.jsx)("path",{d:g,stroke:"url(#gf-rim-"+z+")"})]}),(0,t.jsx)("button",{ref:P,type:"button",className:"gf-hit","aria-expanded":Q,"aria-label":R?`${Q?"Close":"Open"} ${e}, ${el} files`:(Q?"إغلاق ":"فتح ")+e+"، "+el+" ملفات",onClick:()=>{window.dispatchEvent(new CustomEvent("beshir:folder",{detail:{title:e,meta:ed,files:F}}))}}),(0,t.jsxs)("div",{className:"gf-label",children:[(0,t.jsx)("span",{className:"gf-title",children:e}),(0,t.jsx)("span",{className:"gf-meta",children:ed},ed)]})]},G),(0,t.jsx)("div",{ref:T,className:"gf-files",role:"list","aria-label":(R?"Contents of ":"محتويات ")+e,inert:!Q,children:es.map((e,a)=>{var n;let o=W[ei+a],l=(n=es.length)<=1?0:a/(n-1)*2-1,d=i(s(e.name)+o),c=!!(e.art||e.image),p=(0,t.jsxs)(t.Fragment,{children:[c?e.image?(0,t.jsx)(r.default,{className:"gf-sheet-art",src:e.image,alt:"",width:272,height:184,draggable:!1,unoptimized:!0}):(0,t.jsx)(f,{className:"gf-sheet-art",art:e.art,seed:s(e.name)%997,w:272,h:184,density:Math.min(en,1.25),priority:1}):(0,t.jsxs)("span",{className:"gf-lines","aria-hidden":"true",children:[(0,t.jsx)("i",{style:{width:"86%"}}),(0,t.jsx)("i",{style:{width:"92%"}}),(0,t.jsx)("i",{style:{width:"64%"}}),(0,t.jsx)("i",{style:{width:"88%"}}),(0,t.jsx)("i",{style:{width:"42%"}})]}),(0,t.jsxs)("span",{className:"gf-sheet-head",children:[(0,t.jsx)("span",{className:"gf-sheet-name",children:e.name}),e.meta?(0,t.jsx)("span",{className:"gf-sheet-meta",children:e.meta}):null]})]}),g={className:"gf-sheet"+(c?" gf-sheet--art":"")+(o===U?" gf-sheet--drop":""),style:{"--gf-slot":l,"--gf-depth":es.length-1-a,"--gf-jx":((d()-.5)*10).toFixed(2)+"px","--gf-jr":((d()-.5)*3.2).toFixed(2)+"deg",zIndex:a+1},onAnimationEnd:o===U?()=>Z(null):void 0};return(0,t.jsx)("div",{role:"listitem",className:"gf-sheet-slot",children:e.href?(0,t.jsx)("a",{...g,href:e.href,.../^https?:/.test(e.href)?{target:"_blank",rel:"noopener noreferrer"}:{},onClick:()=>C?.(e,ei+a),children:p}):(0,t.jsx)("button",{...g,type:"button",onClick:()=>C?.(e,ei+a),children:p})},o)})}),"none"!==y?(0,t.jsx)("button",{ref:I,type:"button",className:"gf-key gf-key--"+y,"aria-label":"add"===y?"Add a file to "+e:"More options for "+e,"aria-haspopup":"more"===y?"menu":void 0,"aria-expanded":"more"===y?_:void 0,"aria-controls":"more"===y?"gf-menu-"+z:void 0,onClick:()=>{let e,t,a;return"add"===y?(e=w?.(F)||{name:"Untitled "+(F.length+1),meta:"Just now"},t=[...F,e],a=D.current++,void(Y(e=>[...e,a]),H(t),Z(a),V(e=>e+1),v?.(t))):ee(e=>!e)},children:"add"===y?(0,t.jsx)("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})},G):(0,t.jsxs)("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,"more"===y?(0,t.jsx)("div",{ref:O,id:"gf-menu-"+z,role:"menu","aria-label":e+" options",className:"gf-menu","data-open":_||void 0,onKeyDown:e=>{let t=Array.from(O.current?.querySelectorAll("[role=menuitem]")??[]),a=t.indexOf(document.activeElement),r=a=>{e.preventDefault(),t[(a+t.length)%t.length]?.focus()};"ArrowDown"===e.key?r(a+1):"ArrowUp"===e.key?r(a-1):"Home"===e.key?r(0):"End"===e.key?r(t.length-1):"Tab"===e.key&&ee(!1)},children:eo.map((e,a)=>(0,t.jsx)("button",{type:"button",role:"menuitem",tabIndex:_?-1:void 0,disabled:!_,className:"gf-menu-item"+(e.danger?" gf-menu-item--danger":""),onClick:()=>{ee(!1),I.current?.focus(),e.onSelect?.()},children:e.label},e.label+a))}):null]})})]})}let m=`
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #141416;
  --gf-ink-soft: rgba(20, 20, 22, .55);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: ui-sans-serif, system-ui, -apple-system, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: -34px; --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
  transition: transform .9s var(--gf-ease);
}

.gf-shadow {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -6px;
  height: 60px;
  border-radius: 40px;
  background: rgba(16, 18, 24, .34);
  filter: blur(22px);
  transform: translateX(calc(var(--gf-px) * -8px));
  transition: transform .9s var(--gf-ease), opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-shadow { background: rgba(0, 0, 0, .62); }

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);
}
.gf-root[data-tone="dark"] .gf-back { background: linear-gradient(180deg, #2a2a2e 0%, #121214 100%); }
.gf-art {
  position: absolute;
  left: -12px;
  top: -12px;
  max-width: none;
  object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .22) 0%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .16), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .16); }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  /* nothing hangs out of the bottom of the pocket, however tall the stack */
  clip-path: inset(-400px -400px 10px -400px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .9),
    0 0 0 .5px rgba(0, 0, 0, .1),
    0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }
.gf-sheet-art {
  position: absolute;
  left: 0;
  top: 0;
  width: 272px;
  height: 184px;
  max-width: none;
  object-fit: cover;
  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);
}
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(0, 0, 0, .42) 0%, rgba(0, 0, 0, 0) 34%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);
  pointer-events: none;
}
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 11px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 560;
  letter-spacing: -.005em;
  color: #18181b;
}
.gf-sheet-meta {
  flex: none;
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 10px;
  letter-spacing: .02em;
  color: rgba(24, 24, 27, .5);
}
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #f3ece0; }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(250, 250, 250, .66); }
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, .08);
}
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .85s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -190px; rotate: -9deg; opacity: 0; }
  35% { opacity: 1; }
  72% { translate: 0 10px; rotate: 1deg; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  backdrop-filter: blur(22px) saturate(1.5);
  transform-origin: 50% 100%;
  transform: perspective(760px) rotateX(var(--gf-hinge));
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-front--bump { animation: gf-bump .7s var(--gf-ease) .38s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  35% { scale: 1.018 .975; }
  70% { scale: .996 1.006; }
  100% { scale: 1; }
}
.gf-tint {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .5) 42%, rgba(252, 252, 252, .93) 100%);
}
.gf-root[data-tone="dark"] .gf-tint {
  background: linear-gradient(180deg, rgba(18, 18, 20, .18) 0%, rgba(14, 14, 16, .62) 46%, rgba(8, 8, 10, .94) 100%);
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 70%);
  mix-blend-mode: soft-light;
  opacity: .9;
  transition: background-position .6s var(--gf-ease);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec { mix-blend-mode: screen; opacity: .16; }
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 200px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 32px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -.012em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gf-meta {
  font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  letter-spacing: .03em;
  color: var(--gf-ink-soft);
  white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 7px; filter: blur(3px); }
  to { opacity: 1; translate: 0 0; filter: blur(0); }
}

/* ---- the key: + or \xb7\xb7\xb7 ------------------------------------------------------ */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 12;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    inset 0 -3px 8px rgba(0, 0, 0, .7),
    0 0 0 1px rgba(0, 0, 0, .75),
    0 14px 22px -8px rgba(0, 0, 0, .55),
    0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .92) 0%, rgba(226, 226, 230, .82) 100%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 -2px 4px rgba(0, 0, 0, .06),
    0 0 0 1px rgba(0, 0, 0, .16),
    0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .06) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

/* ---- menu ------------------------------------------------------------------- */
.gf-menu {
  position: absolute;
  right: 22px;
  bottom: 90px;
  z-index: 20;
  min-width: 176px;
  padding: 6px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(252, 252, 253, .72);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  backdrop-filter: blur(24px) saturate(1.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.gf-root[data-tone="dark"] .gf-menu { background: rgba(30, 30, 34, .72); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 450;
  color: #18181b;
  cursor: pointer;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

/* ---- entrance: the folder assembles itself ---------------------------------- */
.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`,x=e=>{let t=window.matchMedia("(prefers-reduced-motion: reduce)");return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},b=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,y=e=>(0,t.jsx)("svg",{viewBox:"0 0 24 24",width:"50%",height:"50%",fill:"#fff","aria-hidden":"true",children:(0,t.jsx)("path",{d:e})}),w={title:"Design",tags:["Figma","Higgsfield","Hotjar","After Effects"],icons:[{label:"Figma",background:"linear-gradient(135deg,#2c2c2c,#141414)",node:(0,t.jsxs)("svg",{viewBox:"0 0 200 300",width:"34%",height:"51%","aria-hidden":"true",children:[(0,t.jsx)("path",{fill:"#0acf83",d:"M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"}),(0,t.jsx)("path",{fill:"#a259ff",d:"M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"}),(0,t.jsx)("path",{fill:"#f24e1e",d:"M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"}),(0,t.jsx)("path",{fill:"#ff7262",d:"M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"}),(0,t.jsx)("path",{fill:"#1abcfe",d:"M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"})]})},{label:"Higgsfield",background:"linear-gradient(135deg,#e2ff5a,#c6f500)",node:(0,t.jsx)("svg",{viewBox:"40 40 432 432",width:"62%",height:"62%","aria-hidden":"true",children:(0,t.jsx)("path",{fill:"#0a0a0a",d:"M419.055 253.911L418.753 250.505C415.893 217.823 395.28 156.334 338.099 156.334C295.668 156.334 263.614 199.548 235.326 237.647C212.754 268.158 193.196 294.333 171.676 294.333C165.956 293.715 158.585 290.771 154.073 284.112C150.009 278.069 148.957 270.326 151.062 261.032C154.37 246.318 173.332 232.688 193.343 218.129C204.325 210.386 215.613 202.176 223.438 194.278C246.011 171.82 257.446 155.557 257.446 129.383C257.446 103.21 243.453 90.1964 231.716 84.6198C208.242 73.471 173.785 79.9756 151.817 99.4937C148.508 102.593 145.195 105.532 142.185 108.32C120.065 128.611 105.17 142.397 71.0117 131.861V174.298C116.304 194.899 154.375 155.557 168.821 137.437C179.954 125.512 191.691 118.541 200.421 118.541H200.874C204.787 118.696 208.095 120.246 210.506 123.034C214.419 127.683 215.924 133.104 215.169 139.142C213.513 151.845 200.723 166.71 177.249 182.974C149.712 202.025 103.669 233.931 100.055 274.046C97.3457 302.857 111.792 331.664 134.364 342.813C187.028 368.523 219.082 324.227 253.085 277.452C279.117 241.364 303.795 207.136 338.103 207.136C368.949 207.136 380.385 233.465 380.385 250.039V253.294L377.375 253.911C302.591 267.542 261.812 339.718 261.812 373.016C261.812 406.317 289.198 434.817 322.903 434.817C362.328 434.817 411.079 400.122 418.905 302.546L419.207 298.986H450.354V253.915L419.055 253.911ZM378.276 303.936C372.259 362.326 343.215 389.588 325.611 389.588C317.636 389.588 306.504 382.771 306.504 370.073C306.504 355.826 327.117 312.612 373.462 299.758L378.879 298.364L378.276 303.936Z"})})},{label:"Hotjar",background:"linear-gradient(135deg,#ff6a3d,#ff3c00)",node:y("M10.119 9.814C12.899 8.27 16.704 6.155 16.704 0h-4.609c0 3.444-1.676 4.375-4.214 5.786C5.1 7.33 1.295 9.444 1.295 15.6h4.61c0-3.444 1.676-4.376 4.214-5.786zM18.096 8.4c0 3.444-1.677 4.376-4.215 5.785-2.778 1.544-6.585 3.66-6.585 9.815h4.609c0-3.444 1.676-4.376 4.214-5.786 2.78-1.544 6.586-3.658 6.586-9.814h-4.609z")},{label:"After Effects",background:"linear-gradient(135deg,#1a1a7a,#00005b)",node:(0,t.jsx)("svg",{viewBox:"28 26 200 200",width:"72%",height:"72%","aria-hidden":"true",children:(0,t.jsx)("path",{fill:"#99f",d:"M102.843 149.333H63.172L55.1 174.454a2.02 2.02 0 0 1-1.901 1.547L32.947 176q-1.72 0-1.202-1.89l34.347-98.509l.343-1.035l.114-.354l.23-.74c.114-.382.228-.787.343-1.226c.45-2.291.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.202h27.306q1.2 0 1.374.859l38.983 109.335q.515 1.718-1.03 1.717h-22.326a1.59 1.59 0 0 1-1.717-1.202zm-33.488-21.181h27.134l-.387-1.277l-.621-2.022l-.909-2.896l-1.745-5.467l-1.662-5.254l-3.092-9.789a336 336 0 0 1-2.46-8.138l-.878-3.096l-.948-3.393l-.866-3.147h-.172a139 139 0 0 1-3.136 12.23l-1.16 3.723l-2.79 9l-1.414 4.585q-.383 1.242-.765 2.456l-.76 2.398l-.756 2.342l-.752 2.284l-.748 2.227q-.559 1.65-1.113 3.234m130.518 11.404h-33.831a24.1 24.1 0 0 0 3.263 9.461a17.67 17.67 0 0 0 7.813 6.44a32.6 32.6 0 0 0 13.653 2.676a62 62 0 0 0 11.077-1.216a40.8 40.8 0 0 0 9.523-2.482q.859-.685.86.858v16.315c.028.445-.061.889-.259 1.288c-.196.312-.46.576-.772.773a43.7 43.7 0 0 1-10.64 3.17a75.5 75.5 0 0 1-15.113 1.287q-11.814 0-19.917-3.545l-.52-.233a36.4 36.4 0 0 1-13.394-10.132a39.7 39.7 0 0 1-7.385-13.996A55.1 55.1 0 0 1 142 134.678a54.1 54.1 0 0 1 2.662-16.916a44.2 44.2 0 0 1 7.985-14.597a38.4 38.4 0 0 1 12.88-10.133c5.037-2.46 10.991-3.343 17.860-3.343a38.8 38.8 0 0 1 16.573 3.263a29.2 29.2 0 0 1 11.248 8.495a39 39 0 0 1 6.354 12.107a43.2 43.2 0 0 1 2.061 13.052q0 3.78-.257 6.87l-.153 1.764l-.16 1.674l-.095.848l-.022.179a1.556 1.556 0 0 1-1.545 1.374l-.471.01l-.587.03l-.457.033l-1.068.091l-.938.093q-.383.04-.795.075l-.851.067l-.909.06l-.965.05l-1.022.043l-.533.018l-1.107.03c-1.095.027-2.217-.041-3.368-.125l-1.746-.128a40 40 0 0 0-2.7-.106m-33.831-15.645h23.386l1.992-.013l1.354-.019l.877-.02l.984-.034a6 6 0 0 0 2.49-.825v-1.03a13.7 13.7 0 0 0-.686-3.95a14.03 14.03 0 0 0-13.910-9.790a14.92 14.92 0 0 0-14.169 8.072a24.8 24.8 0 0 0-2.318 7.61"})})},{label:"Maze",background:"linear-gradient(135deg,#2b2b2b,#0d0d0d)",node:y("M1.126 16.547c-1.5013-1.4881-1.5013-3.9009 0-5.389l4.0778-4.042c1.2692-1.258 3.205-1.4525 4.6803-.5836.4564.2687.4524.8852.077 1.2573-.3753.372-.988.34-1.4975.1923-.6524-.1891-1.386-.0287-1.9006.4813l-4.0777 4.0419a1.8935 1.8935 0 0 0 0 2.6945c.7506.744 1.9678.744 2.7184 0l8.1555-8.0836c1.5014-1.4882 3.9355-1.4882 5.437 0l4.0778 4.0418c1.5013 1.4881 1.5013 3.901 0 5.389-1.5014 1.4882-3.9356 1.4882-5.437 0l-1.3593-1.3472-1.699 1.684c-1.2692 1.258-3.205 1.4526-4.6804.5837-.4563-.2687-.4523-.8852-.077-1.2573.3754-.372.988-.34 1.4975-.1923.6524.1892 1.386.0287 1.9006-.4813l1.7476-1.7322c.724-.7175 1.8975-.7175 2.6214 0l1.4078 1.3954c.7507.744 1.9678.744 2.7186 0a1.8936 1.8936 0 0 0 0-2.6945l-4.0779-4.0419c-.7507-.744-1.9678-.744-2.7185 0L6.563 16.5471c-1.5014 1.4882-3.9356 1.4881-5.437 0")},{label:"Mixpanel",background:"linear-gradient(135deg,#9478ff,#7856ff)",node:y("M6.967 9.996h3.053c-.763-.477-1.048-1.145-1.431-2.384L7.443 3.366C6.919 1.458 6.49.551 4.39.551H.004v1.145h.621c1.286 0 1.431.477 1.814 1.908L3.44 7.326c.524 1.814 1.337 2.67 3.53 2.67h-.003Zm7.06 0h3.053c2.194 0 2.956-.86 3.484-2.67l1.001-3.722c.382-1.431.57-1.908 1.814-1.908H24V.551h-4.34c-2.146 0-2.576.86-3.053 2.815l-1.145 4.246c-.384 1.286-.673 1.907-1.435 2.384Zm-4.007 4.008h4.007V9.996H10.02v4.008ZM0 23.449h4.39c2.1 0 2.529-.907 3.053-2.815l1.146-4.246c.383-1.239.668-1.907 1.431-2.384H6.967c-2.194 0-3.007.86-3.531 2.67l-1.001 3.722c-.383 1.431-.524 1.907-1.814 1.907H0v1.146Zm19.65 0h4.343v-1.146h-.622c-1.239 0-1.431-.476-1.814-1.907l-1.001-3.722c-.524-1.814-1.286-2.67-3.483-2.67h-3.046c.762.477 1.041 1.098 1.424 2.384l1.145 4.246c.477 1.955.907 2.815 3.054 2.815Z")}].slice(0,4)},v={dark:{ink:"#ffffff",chipBg:"rgba(36,36,36,.7)",chipBorder:"#282828",chipInk:"#9f9f9f",back:"linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.008) 60%)",backEdge:"rgba(255,255,255,.07)",front:"linear-gradient(160deg,rgba(255,255,255,.09),rgba(255,255,255,.015) 55%),#0c0c0c",frontEdge:["rgba(255,255,255,.38)","rgba(255,255,255,.1)","rgba(255,255,255,0)"],glow:"rgba(255,255,255,.10)",pillBg:"rgba(0,0,0,.55)",pillBorder:"rgba(255,255,255,.08)",tileRing:"rgba(255,255,255,.14)",tileShadow:"rgba(0,0,0,.55)",focus:"rgba(255,255,255,.4)"},light:{ink:"#111111",chipBg:"rgba(255,255,255,.7)",chipBorder:"#e2e2e2",chipInk:"#6b6b6b",back:"linear-gradient(180deg,rgba(0,0,0,.05),rgba(0,0,0,.015) 60%)",backEdge:"rgba(0,0,0,.08)",front:"linear-gradient(160deg,rgba(255,255,255,.95),rgba(255,255,255,.55) 55%),rgba(240,240,238,.7)",frontEdge:["rgba(255,255,255,1)","rgba(0,0,0,.06)","rgba(0,0,0,.04)"],glow:"rgba(60,44,255,.10)",pillBg:"rgba(255,255,255,.8)",pillBorder:"rgba(0,0,0,.08)",tileRing:"rgba(0,0,0,.08)",tileShadow:"rgba(0,0,0,.18)",focus:"rgba(0,0,0,.35)"}};function j(e,t){let[r,n]=a.useState("");return a.useEffect(()=>{let a=e.current;if(!a)return;let r=new ResizeObserver(()=>n(t(a.offsetWidth,a.offsetHeight)));return r.observe(a),()=>r.disconnect()},[]),r}function k({icon:e,ring:a,shadow:n}){return(0,t.jsx)("div",{className:"grid h-full w-full place-items-center overflow-hidden rounded-[inherit]",style:{background:e.src?void 0:e.background??"#2a2a2a",boxShadow:`0 18px 40px ${n}, 0 0 0 1px ${a}`},children:e.src?(0,t.jsx)(r.default,{src:e.src,width:101,height:101,alt:"",draggable:!1,className:"h-full w-full object-cover",unoptimized:!0}):e.node})}function N(e){let n,o,{title:i,tags:s,icons:l}={...w,...e},{theme:d="dark",defaultOpen:c=!1,spread:f=70,showPill:p=!0,className:g=""}=e,u=v[d],h=a.useId().replace(/:/g,""),m=a.useRef(null),y=a.useRef(null),N=a.useRef(null),[A,S]=a.useState(!1),[C,M]=a.useState(c),[q,E]=a.useState(!1),[L,$]=a.useState(null),[R,z]=a.useState(420),B=a.useSyncExternalStore(x,b,()=>!1);a.useEffect(()=>{let e=m.current;if(!e)return;let t=new ResizeObserver(([e])=>z(e.contentRect.width));return t.observe(e),()=>t.disconnect()},[]),a.useEffect(()=>{let e=m.current;if(!e)return;let t=new IntersectionObserver(([e])=>e.isIntersecting&&S(!0),{threshold:.3});return t.observe(e),()=>t.disconnect()},[]);let T=j(y,(e,t)=>{let a;return a=Math.round(.42*e),`M0 24A24 24 0 0 1 24 0L${a} 0C${a+25.3} 0 ${a+20.7} 24 ${a+46} 24L${e-24} 24A24 24 0 0 1 ${e} 48L${e} ${t-24}A24 24 0 0 1 ${e-24} ${t}L24 ${t}A24 24 0 0 1 0 ${t-24}Z`}),P=j(N,(e,t)=>{let a;return a=e-Math.round(.4*e),`M0 48A24 24 0 0 1 24 24L${a-46} 24C${a-20.7} 24 ${a-25.3} 0 ${a} 0L${e-24} 0A24 24 0 0 1 ${e} 24L${e} ${t-24}A24 24 0 0 1 ${e-24} ${t}L24 ${t}A24 24 0 0 1 0 ${t-24}Z`}),I=l.length,O=I>1?25/(I-1):0,F=C||q,H=(n=Math.min(101,Math.max(44,.26*R)),o=Math.max(0,(R-1.5*n-16)/Math.max(1,I-1)),{tileSize:n,gap:Math.min(f*(F?1.15:1),o)}),W="cubic-bezier(.2,.8,.2,1)",Y=()=>M(e=>!e);return(0,t.jsxs)("div",{ref:m,role:"button",tabIndex:0,"aria-expanded":C,"aria-label":`${i}: ${s.join(", ")}`,onClick:Y,onKeyDown:e=>{("Enter"===e.key||" "===e.key)&&(e.preventDefault(),Y())},onPointerEnter:e=>"mouse"===e.pointerType&&E(!0),onPointerLeave:()=>{E(!1),$(null)},className:`relative isolate h-[286px] w-full max-w-[420px] cursor-pointer select-none outline-none [-webkit-tap-highlight-color:transparent] focus-visible:rounded-3xl focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 ${g}`,style:{color:u.ink,fontFamily:"'Geist', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",letterSpacing:"-0.05em",outlineColor:u.focus,zIndex:F?2:void 0,opacity:A||B?1:0,transform:A||B?F?"translateY(-6px) scale(1.02)":"none":"translateY(34px) scale(.92)",transition:B?"none":`transform .9s ${W}, opacity .6s ease`},children:[(0,t.jsx)("div",{className:"pointer-events-none absolute left-[8%] right-[8%] top-10 -z-10 h-[200px] rounded-full opacity-80 blur-[18px]",style:{background:`radial-gradient(closest-side, ${u.glow}, transparent)`}}),(0,t.jsx)("div",{ref:N,"data-icon-folder-back":!0,className:"absolute inset-x-0 bottom-0 top-[14px]",style:{background:u.back,clipPath:P?`path('${P}')`:void 0},children:(0,t.jsx)("svg",{className:"pointer-events-none absolute inset-0 h-full w-full overflow-visible","aria-hidden":"true",children:(0,t.jsx)("path",{d:P,fill:"none",stroke:u.backEdge,strokeWidth:"2"})})}),(0,t.jsx)("div",{className:"pointer-events-none absolute inset-0","aria-hidden":"true",children:l.map((e,a)=>{let r=a-(I-1)/2,n=H.gap,o=r*O*(F?1.2:1);return(0,t.jsx)("div",{"data-icon-folder-tile":!0,className:"absolute left-1/2 top-[42px] -ml-[50.5px] h-[101px] w-[101px] rounded-[26px] [backface-visibility:hidden]",style:{width:H.tileSize,height:H.tileSize,marginLeft:-H.tileSize/2,zIndex:L===a?5:void 0,opacity:A||B?1:0,transform:A||B?`translate3d(${r*n}px, ${r*r*(I>4?3:9)-4*!!F}px, 0) rotate(${o}deg)`:`translate3d(${r*n*.6}px, 80px, 0)`,transition:B?"none":`transform ${F?.6:.9}s ${W}, opacity .5s`,transitionDelay:B?"0s":F?`${.04*a}s`:`${.35+.08*a}s`},children:(0,t.jsxs)("div",{className:"pointer-events-auto relative h-full w-full rounded-[inherit]",onPointerEnter:e=>"mouse"===e.pointerType&&$(a),onPointerLeave:()=>$(e=>e===a?null:e),style:{transform:L===a?`translateY(-26px) rotate(${-o}deg) scale(1.1)`:null!==L?"scale(.96)":"none",filter:null!==L&&L!==a?"saturate(.75) brightness(.85)":"none",transition:B?"none":`transform .45s ${W}, filter .3s ease`},children:[(0,t.jsx)(k,{icon:e,ring:u.tileRing,shadow:u.tileShadow}),e.label&&(0,t.jsx)("span",{className:"pointer-events-none absolute bottom-full left-1/2 mb-2.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-medium leading-4 backdrop-blur-[8px]",style:{background:u.pillBg,borderColor:u.pillBorder,color:u.ink,opacity:+(L===a),transform:`translateX(-50%) translateY(${6*(L!==a)}px)`,transition:B?"none":`opacity .25s ease, transform .35s ${W}`},children:e.label})]})},a)})}),(0,t.jsxs)("div",{ref:y,"data-icon-folder-front":!0,className:"absolute inset-x-0 bottom-0 h-[180px] overflow-hidden",style:{background:u.front,clipPath:T?`path('${T}')`:void 0,transform:F?"translateY(6px)":"none",transition:B?"none":`transform .6s ${W}`},children:[(0,t.jsxs)("svg",{className:"pointer-events-none absolute inset-0 h-full w-full overflow-visible","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:`edge-${h}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:u.frontEdge[0]}),(0,t.jsx)("stop",{offset:".35",stopColor:u.frontEdge[1]}),(0,t.jsx)("stop",{offset:"1",stopColor:u.frontEdge[2]})]})}),(0,t.jsx)("path",{d:T,fill:"none",stroke:`url(#edge-${h})`,strokeWidth:"2"})]}),(0,t.jsx)("h3",{className:"m-0 px-[18px] pt-[34px] text-xl font-medium leading-[26px]",children:i}),(0,t.jsx)("div",{"data-icon-folder-tags":!0,className:"mx-[18px] mt-3.5 flex flex-wrap gap-1.5",children:s.map(e=>(0,t.jsx)("span",{"data-icon-folder-tag":!0,dir:"ltr",className:"inline-flex min-h-6 items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs leading-5",style:{background:u.chipBg,borderColor:null!==L&&l[L]?.label===e?u.focus:u.chipBorder,color:null!==L&&l[L]?.label===e?u.ink:u.chipInk,transition:"border-color .25s ease, color .25s ease"},children:e},e))}),p&&(0,t.jsx)("span",{className:"absolute bottom-3.5 right-3.5 flex h-[34px] items-center gap-1.5 rounded-full border px-1.5",style:{background:u.pillBg,borderColor:u.pillBorder},"aria-hidden":"true",children:l.map((e,a)=>(0,t.jsx)("span",{className:"block h-[22px] w-[22px] overflow-hidden rounded-[7px]",children:(0,t.jsx)("span",{className:"grid h-full w-full place-items-center [&_svg]:h-[60%] [&_svg]:w-[60%]",style:{background:e.src?void 0:e.background},children:e.src?(0,t.jsx)(r.default,{src:e.src,width:22,height:22,alt:"",className:"h-full w-full object-cover",unoptimized:!0}):e.node})},a))})]})]})}let A=[{label:"Next.js",slug:"nextdotjs",color:"#171719"},{label:"React",slug:"react",color:"#163b4b"},{label:"PostgreSQL",slug:"postgresql",color:"#336791"},{label:"Laravel",slug:"laravel",color:"#7a1f17"},{label:"Flutter",slug:"flutter",color:"#087cbe"},{label:"Django",slug:"django",color:"#0c4b33"}],S=A.map(({label:e,slug:a,color:n})=>({label:e,background:n,node:(0,t.jsx)(r.default,{src:`/brand/technologies/${a}.svg`,width:44,height:44,alt:"",className:"technology-folder-logo",unoptimized:!0})})),C=[{"label":"منصات وأنظمة","meta":"اضغط على أي مشروع يفتحلك.","files":[{"name":"سبارك ميديا","meta":"منصة تعليمية · امتحانات","image":"/projects/covers/sparkmedia.webp","href":"https://sparkmediaa.net/"},{"name":"MentoraX","meta":"منصة IT للشركات","image":"/projects/covers/mentorax.webp","href":"https://www.mentorax.net/en/"},{"name":"LigoFlow","meta":"أتمتة بالذكاء الاصطناعي","image":"/projects/covers/ligoflow.webp","href":"https://ligoflow.ai/"},{"name":"منصة مستر بولا سامي","meta":"منصة تعليمية · 700 طالب","image":"/projects/covers/pola-samy.webp","href":"https://polasamy.com/"}]},{"label":"مواقع ومتاجر","meta":"مواقع شغّالة دلوقتي.","files":[{"name":"بيت العز","meta":"شركة نقل · SEO","image":"/projects/covers/beit-elezz.webp","href":"https://www.beit-elezz.com/"},{"name":"RedEstate","meta":"منصة عقارات","image":"/projects/covers/redestate.webp","href":"https://www.redestate.it.com/"},{"name":"BLACK TEAM","meta":"بورتفوليو سينمائي","image":"/projects/covers/blackteam.webp","href":"https://black-team-zeta.vercel.app/"},{"name":"Viking Store","meta":"متجر إلكتروني","image":"/projects/covers/vikingstore.webp","href":"https://vikingstore.net/"}]},{"label":"تطبيقات موبايل","meta":"منشورة على المتاجر.","files":[{"name":"IGP — المديرين","meta":"App Store","image":"/projects/covers/igp-manager.webp","href":"https://apps.apple.com/gb/app/igp-managers/id6757267540"},{"name":"IGP — مقدّم الخدمة","meta":"App Store","image":"/projects/covers/igp-provider.webp","href":"https://apps.apple.com/gb/app/igp-sp/id6755782928"},{"name":"IGP — العملاء","meta":"حجز فعاليات · App Store","image":"/projects/covers/igp-customer.webp","href":"https://apps.apple.com/gb/app/igotplans-ksa/id6467752440"},{"name":"أيادينا","meta":"ماركت بليس · Google Play","image":"/projects/covers/ayadina.webp","href":"https://play.google.com/store/apps/details?id=com.ayadina.handmade"}]}];function M({folder:e,index:r}){let n=(0,a.useRef)(null),[o,i]=(0,a.useState)(340);return(0,a.useEffect)(()=>{let e=n.current;if(!e)return;let t=new ResizeObserver(([e])=>{i(Math.max(180,Math.floor(e.contentRect.width)))});return t.observe(e),()=>t.disconnect()},[]),(0,t.jsx)("div",{className:"hero-folder-slot",ref:n,children:(0,t.jsx)(h,{label:e.label,meta:e.meta,files:e.files,image:e.image??`/brand/folders/glacier-${3+r}.webp`,art:"none",tone:"light",action:"none",seed:3+r,width:o,appear:!1,className:"hero-glass-folder"})})}e.s(["HeroFolders",0,function(){let e="en"===(0,n.useLanguage)();return(0,t.jsxs)("section",{id:"tools",className:"hero-folder-row","aria-label":e?"Tools, projects and your next idea":"من أعمالنا، وإلى فكرتك",children:[(0,t.jsx)("div",{className:"hero-technology-slot",children:(0,t.jsx)(N,{title:e?"The tools I build with.":"الأدوات اللي ببني بيها.",tags:["Next.js","React","TypeScript","Laravel","Django","FastAPI","PostgreSQL","Flutter"],icons:S,theme:"dark",spread:56,showPill:!0,className:"hero-technology-folder"})}),(e?[{"label":"Platforms & systems","meta":"Tap a project to open it live.","files":[{"name":"SparkMedia","meta":"E-learning · exams","image":"/projects/covers/sparkmedia.webp","href":"https://sparkmediaa.net/"},{"name":"MentoraX","meta":"Enterprise IT platform","image":"/projects/covers/mentorax.webp","href":"https://www.mentorax.net/en/"},{"name":"LigoFlow","meta":"AI workflow automation","image":"/projects/covers/ligoflow.webp","href":"https://ligoflow.ai/"},{"name":"Pola Samy Platform","meta":"Education · 700 students","image":"/projects/covers/pola-samy.webp","href":"https://polasamy.com/"}]},{"label":"Websites & stores","meta":"Live sites, running now.","files":[{"name":"Beit El-Ezz","meta":"Moving company · SEO","image":"/projects/covers/beit-elezz.webp","href":"https://www.beit-elezz.com/"},{"name":"RedEstate","meta":"Real estate platform","image":"/projects/covers/redestate.webp","href":"https://www.redestate.it.com/"},{"name":"BLACK TEAM","meta":"Cinematic portfolio","image":"/projects/covers/blackteam.webp","href":"https://black-team-zeta.vercel.app/"},{"name":"Viking Store","meta":"E-commerce store","image":"/projects/covers/vikingstore.webp","href":"https://vikingstore.net/"}]},{"label":"Mobile apps","meta":"On the App Store & Google Play.","files":[{"name":"IGP Manager","meta":"App Store","image":"/projects/covers/igp-manager.webp","href":"https://apps.apple.com/gb/app/igp-managers/id6757267540"},{"name":"IGP Provider","meta":"App Store","image":"/projects/covers/igp-provider.webp","href":"https://apps.apple.com/gb/app/igp-sp/id6755782928"},{"name":"IGP Customer","meta":"Event booking · App Store","image":"/projects/covers/igp-customer.webp","href":"https://apps.apple.com/gb/app/igotplans-ksa/id6467752440"},{"name":"Ayadina","meta":"Marketplace · Google Play","image":"/projects/covers/ayadina.webp","href":"https://play.google.com/store/apps/details?id=com.ayadina.handmade"}]}]:C).map((e,a)=>(0,t.jsx)(M,{folder:e,index:a},e.label))]})}],28409)},67768,e=>{var t=e.i(43476),a=e.i(71645),r=e.i(89970),n=e.i(83495),o=e.i(5014);function i(e,t=[],r=[]){let n,s="string"==typeof e?function(e,t,a=[]){if(null==t)throw Error("[lucide]: iconNode is required when icon name is used");return{name:e?.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),size:24,node:t,...a.length>0?{aliases:a}:{}}}(e,t,r):e,l=(0,a.forwardRef)(({className:e,...t},r)=>(0,a.createElement)(o.default,{ref:r,icon:s,className:e,...t}));return s.name&&(l.displayName=(n=(e=>{let t="",a=!1;for(let r of e){if("-"===r||"_"===r||r<=" "){a=t.length>0;continue}0===t.length?t+=r.toLowerCase():t+=a?r.toUpperCase():r,a=!1}return t})(s.name)).charAt(0).toUpperCase()+n.slice(1)),l}let s={name:"phone",size:24,node:[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]};s.node;let l=i(s);var d=e.i(96601);function c({active:e}){let r="en"===(0,d.useLanguage)(),n=(0,a.useRef)(null),[o,i]=(0,a.useState)(!1),[s,f]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let t=n.current;if(!t)return;let a=0,r=()=>{clearInterval(a),a=0,t.pause(),t.currentTime=0},i=()=>{if(r(),!e||o||document.hidden)return;t.volume=.35;let n=()=>{t.currentTime=0,t.play().then(()=>f(!1)).catch(()=>f(!0))};n(),a=window.setInterval(n,5e3)};return i(),document.addEventListener("visibilitychange",i),()=>{r(),document.removeEventListener("visibilitychange",i)}},[e,o]);let p=o||s,g=r?p?"Turn ringtone on":"Mute ringtone":p?"تشغيل صوت الرنّة":"كتم صوت الرنّة";return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("audio",{ref:n,src:"/audio/nokia-ring-web.m4a",preload:"none"}),(0,t.jsxs)("button",{type:"button",className:"why-wait-phone-object",onClick:()=>{if(p){let e;i(!1),(e=n.current)&&(e.volume=.35,e.currentTime=0,e.play().then(()=>f(!1)).catch(()=>f(!0)))}else i(!0),n.current?.pause()},"aria-label":g,title:g,"aria-pressed":!p,tabIndex:e?0:-1,"data-silent":p,children:[(0,t.jsx)(l,{className:"why-wait-phone","aria-hidden":"true",strokeWidth:2.2}),(0,t.jsxs)("svg",{className:"why-wait-vibration",viewBox:"0 0 48 32",fill:"none","aria-hidden":"true",children:[(0,t.jsx)("path",{d:"M12 9Q6 16 12 23"}),(0,t.jsx)("path",{d:"M6 5Q-2 16 6 27"}),(0,t.jsx)("path",{d:"M36 9Q42 16 36 23"}),(0,t.jsx)("path",{d:"M42 5Q50 16 42 27"})]}),(0,t.jsx)("span",{className:"ringtone-muted-mark","aria-hidden":"true"})]})]})}var f=e.i(25164);let p=[{name:"github",x:8,y:15,size:1.1,angle:-15},{name:"react",x:28,y:10,size:.75,angle:12},{name:"figma",x:54,y:13,size:.85,angle:-10},{name:"cloudflare",x:82,y:15,size:1.15,angle:16},{name:"flutter",x:95,y:40,size:.8,angle:-12},{name:"next",x:5,y:43,size:.85,angle:10},{name:"figma",x:9,y:76,size:.9,angle:-18},{name:"flutter",x:29,y:89,size:1,angle:16},{name:"github",x:53,y:87,size:.7,angle:-10},{name:"react",x:77,y:84,size:1.15,angle:12},{name:"next",x:93,y:74,size:.95,angle:-12},{name:"cloudflare",x:95,y:13,size:.55,angle:-20}];function g(){return(0,t.jsx)("div",{className:"floating-brands","aria-hidden":"true",children:p.map((e,a)=>(0,t.jsx)("span",{className:"floating-brand-position",style:{left:`${e.x}%`,top:`${e.y}%`,"--float-size":e.size,"--float-angle":`${e.angle}deg`},children:(0,t.jsx)("span",{className:"floating-brand-motion","data-floating-brand":!0,children:(0,t.jsx)(f.default,{src:`/brand/floating/${e.name}.webp`,width:512,height:512,alt:"",sizes:"(max-width: 767px) 65px, 120px",quality:90})})},`${e.name}-${a}`))})}let u={name:"arrow-up-right",size:24,node:[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]};u.node;let h=i(u);function m(){let e="en"===(0,d.useLanguage)(),r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=window.visualViewport,t=r.current;if(!e||!t)return;let a=0,n=()=>{cancelAnimationFrame(a),a=requestAnimationFrame(()=>{let a=t.contains(document.activeElement);t.style.setProperty("--contact-visible-height",a?`${e.height}px`:"100dvh")})};return e.addEventListener("resize",n),t.addEventListener("focusin",n),t.addEventListener("focusout",n),()=>{cancelAnimationFrame(a),e.removeEventListener("resize",n),t.removeEventListener("focusin",n),t.removeEventListener("focusout",n)}},[]),(0,t.jsxs)("section",{ref:r,id:"contact",className:"contact-panel","aria-labelledby":"contact-title",children:[(0,t.jsxs)("div",{className:"contact-details",children:[(0,t.jsx)("p",{className:"contact-eyebrow",children:e?"GOOD THINGS START WITH A CONVERSATION":"كل حاجة حلوة بتبدأ بكلام"}),(0,t.jsx)("h2",{id:"contact-title",children:e?(0,t.jsxs)(t.Fragment,{children:["Your next idea.",(0,t.jsx)("br",{}),"Let’s make it real."]}):(0,t.jsxs)(t.Fragment,{children:["فكرتك الجايّة.",(0,t.jsx)("br",{}),"نخلّيها حقيقــــة."]})}),(0,t.jsxs)("div",{className:"contact-phone-row",dir:"ltr",children:[(0,t.jsx)("span",{className:"contact-phone-destination","aria-hidden":"true"}),(0,t.jsx)("a",{className:"contact-number",href:"tel:+201555556932",children:"+20 155 555 6932"}),(0,t.jsx)("a",{className:"contact-whatsapp",href:"https://wa.me/201555556932",target:"_blank",rel:"noopener noreferrer","aria-label":e?"Chat on WhatsApp":"كلمني على واتساب",children:(0,t.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M20.5 3.5A11.9 11.9 0 0 0 1.8 17.8L.1 24l6.4-1.7a11.9 11.9 0 0 0 5.7 1.5h.1A11.9 11.9 0 0 0 20.5 3.5ZM12.2 21.8a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.9 9.9 0 1 1 8.4 4.7Zm5.4-7.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.1 8.1 0 0 1-2.5-1.5 9.3 9.3 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6L9.1 7c-.2-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1.1 2.8 1.3 3 2.1 3.2 5.1 4.5l1.7.6c.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2.1-1.4s.3-1.3.2-1.4-.3-.2-.6-.4Z"})})})]}),(0,t.jsx)("a",{className:"contact-email",href:"mailto:mbeshir011@gmail.com",children:"mbeshir011@gmail.com"})]}),(0,t.jsxs)("form",{className:"contact-form",onSubmit:t=>{t.preventDefault();let a=new FormData(t.currentTarget),r=encodeURIComponent(`${e?"New project":"مشروع جديد"} — ${a.get("name")}`),n=encodeURIComponent(`${a.get("name")}
${a.get("email")}

${a.get("message")}`);window.location.href=`mailto:mbeshir011@gmail.com?subject=${r}&body=${n}`},children:[(0,t.jsxs)("label",{children:[e?"Your name":"اسمك",(0,t.jsx)("input",{name:"name",autoComplete:"name",required:!0,maxLength:100,placeholder:e?"What should I call you?":"أناديك بإيه؟"})]}),(0,t.jsxs)("label",{children:[e?"Email address":"الإيميل",(0,t.jsx)("input",{name:"email",type:"email",autoComplete:"email",required:!0,maxLength:254,placeholder:"you@company.com",dir:"ltr"})]}),(0,t.jsxs)("label",{children:[e?"Tell me about your idea":"احكيلي عن فكرتك",(0,t.jsx)("textarea",{name:"message",required:!0,rows:3,maxLength:4e3,placeholder:e?"A website, an app, or something entirely new…":"موقع، تطبيق، أو فكرة لسه محدش عملها…"})]}),(0,t.jsxs)("button",{type:"submit",children:[e?"Let’s talk":"يلا نتكلّم",(0,t.jsx)(h,{size:20,"aria-hidden":"true"})]}),(0,t.jsx)("p",{className:"contact-form-note",children:e?"Opens your email app with your message ready to send.":"هيفتح تطبيق الإيميل برسالتك جاهزة للإرسال."})]})]})}r.f.registerPlugin(n.f),e.s(["WhyWait",0,function(){let e="en"===(0,d.useLanguage)(),[o,i]=(0,a.useState)(!1),s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let t=s.current,a=r.f.matchMedia(),o=r.f.context(()=>{a.add("(prefers-reduced-motion: no-preference)",()=>{let a,o,s,l,d,c,f,p,g,u,h,m;t.dataset.animated="true";let x=(a=null,o=null,s=null,l=!1,d=null,c=!1,f=new Set,p=()=>{a&&s&&!l&&!c&&(l=!0,a.decodeAudioData(s).then(e=>{c||(d=e)}).catch(()=>{}).finally(()=>{s=null}))},fetch("/audio/question-pop-v2.wav",{signal:(g=new AbortController).signal}).then(e=>{if(!e.ok)throw Error("Sound unavailable");return e.arrayBuffer()}).then(e=>{c||(s=e,p())}).catch(()=>{}),u=e=>{if(c||document.hidden)return;let t=navigator.userActivation;if(t?t.hasBeenActive:e?.isTrusted)try{if(!a){let e=(a=new AudioContext).createDynamicsCompressor();e.threshold.value=-18,e.ratio.value=8,e.connect(a.destination),(o=a.createGain()).gain.value=.24,o.connect(e),p()}"suspended"===a.state&&a.resume().catch(()=>{})}catch{}},window.addEventListener("click",u,!0),window.addEventListener("pointerup",u,!0),window.addEventListener("keydown",u,!0),u(),h=()=>{f.forEach(e=>e.stop()),f.clear()},m=()=>{document.hidden&&h()},document.addEventListener("visibilitychange",m),{play(){if(c||!d||!a||!o||document.hidden||"running"!==a.state)return;if(f.size>=12){let e=f.values().next().value;e?.stop(),e&&f.delete(e)}let e=a.createBufferSource();e.buffer=d,e.connect(o),e.onended=()=>{f.delete(e),e.disconnect()},f.add(e),e.start(0,.8)},dispose(){c=!0,g.abort(),h(),window.removeEventListener("click",u,!0),window.removeEventListener("pointerup",u,!0),window.removeEventListener("keydown",u,!0),document.removeEventListener("visibilitychange",m),a&&"closed"!==a.state&&a.close().catch(()=>{})}}),b=t.querySelector(".why-wait-stage"),y=t.querySelector(".why-wait-question"),w=t.querySelector(".why-wait-statement"),v=t.querySelector(".why-wait-time"),j=Array.from(t.querySelectorAll(".why-wait-punctuation > span")),k=!1,N=!1,A=!1,S=()=>{A&&(A=!1,window.dispatchEvent(new CustomEvent("wahba:scroll-lock",{detail:!1})))},C=r.f.timeline({scrollTrigger:{trigger:t,start:"top top",once:!0,invalidateOnRefresh:!0},onStart:()=>{A=!0,window.dispatchEvent(new CustomEvent("wahba:scroll-lock",{detail:!0}))},onComplete:()=>{k=!0,S(),N&&q.play()},onInterrupt:S});C.from(y,{y:45,opacity:0,duration:.8,ease:"power3.out"},0);let M=2.3;j.forEach((a,n)=>{let o=Math.max(.018,.7*Math.pow(.82,n));C.set(a,{opacity:1},M),C.call(()=>x.play(),[],M),C.to(v,{x:()=>{let o=t.querySelector(".why-wait-stage").getBoundingClientRect(),i=v.getBoundingClientRect(),s=Number(r.f.getProperty(v,"x")),l=Math.max(16,.015*innerWidth),d=Math.max(0,e?i.left-s-o.left-l:o.right-i.right+s-l);return(e?-1:1)*Math.min(d,(n+1)*a.offsetWidth*.8)},duration:Math.min(.2,.85*o),ease:"power1.out"},M),M+=o}),r.f.fromTo(t.querySelectorAll(".why-wait-mark"),{y:90,rotation:-12},{y:-170,rotation:8,ease:"none",scrollTrigger:{trigger:t,start:"top bottom",end:"bottom top",scrub:1}});let q=r.f.timeline({paused:!0}),E=Array.from(t.querySelectorAll("[data-floating-brand]")).flatMap((e,t)=>[r.f.fromTo(e,{x:-14-t%3*5},{x:18+t%4*6,duration:5.5+t%4,ease:"sine.inOut",repeat:-1,yoyo:!0,paused:!0}),r.f.fromTo(e,{y:18,rotation:-7},{y:-22-t%3*8,rotation:9,duration:4.2+t%5*.7,ease:"sine.inOut",repeat:-1,yoyo:!0,paused:!0})]),L=e=>E.forEach(t=>e?t.resume():t.pause()),$=t.querySelector(".why-wait-phone"),R=t.querySelectorAll(".why-wait-vibration path"),z=r.f.timeline({paused:!0,repeat:-1,repeatDelay:.44});z.to($,{rotation:8,x:1.5,duration:.05,ease:"sine.inOut"},0).to($,{rotation:-30,x:-1.5,duration:.07,repeat:4,yoyo:!0,ease:"sine.inOut"},.05).to($,{rotation:-12,x:0,duration:.16,ease:"power2.out"},.4),z.fromTo(R,{opacity:0,x:0,scaleY:.6},{opacity:.75,x:e=>e<2?-3:3,scaleY:1,duration:.12,stagger:.035,ease:"power2.out",immediateRender:!1},.01),z.to(R,{opacity:0,x:e=>e<2?-7:7,duration:.23,stagger:.025,ease:"power1.out"},.25),q.eventCallback("onReverseComplete",()=>{z.pause(0),L(!1)}),q.to(y,{opacity:0,scale:.96,y:-25,duration:.2,ease:"power2.in"},0),q.to(t.querySelectorAll(".why-wait-mark"),{opacity:.025,duration:.25},0),q.fromTo(w,{opacity:0,scale:.92,y:30},{opacity:1,scale:1,y:0,duration:.38,ease:"power4.out",immediateRender:!1},.18),q.call(()=>{N&&L(!0)},[],.2),q.fromTo(t.querySelectorAll(".floating-brand-position"),{opacity:0,scale:.55},{opacity:1,scale:1,duration:.85,stagger:.055,ease:"power3.out",immediateRender:!1},.25),q.to($,{color:"#22b866",duration:.5,ease:"power1.inOut"},.9),q.call(()=>{N&&(z.play(),i(!0))},[],1.15),n.f.create({trigger:t,start:()=>`top top-=${Math.round(.9*b.clientHeight)}`,end:"bottom top",onEnter:()=>{N=!0,k&&q.play()},onLeave:()=>{z.pause(0),L(!1),i(!1)},onEnterBack:()=>{q.progress()>.9&&(z.play(),L(!0),i(!0))},onLeaveBack:()=>{N=!1,z.pause(0),L(!1),q.reverse(),i(!1)}});let B=t.querySelector(".contact-panel"),T=t.querySelector(".contact-phone-destination"),P=t.querySelector(".why-wait-phone-object"),I=t.querySelectorAll(".why-wait-call-label, .why-wait-now, .why-wait-dots, .floating-brands");B.inert=!0;let O=()=>{let e=T.getBoundingClientRect(),t=P.getBoundingClientRect();return{x:e.left-t.left+Number(r.f.getProperty(P,"x")),y:e.top-t.top+Number(r.f.getProperty(P,"y")),scale:e.width/P.offsetWidth}},F=r.f.timeline({scrollTrigger:{trigger:t,start:()=>`top top-=${1.95*b.clientHeight}`,end:()=>`top top-=${2.8*b.clientHeight}`,scrub:.65,invalidateOnRefresh:!0,onUpdate:e=>{B.inert=e.progress<.85,e.progress<.85&&(B.scrollTop=0)}}});F.to(I,{autoAlpha:0,y:-35,duration:.35},0),F.fromTo(B,{autoAlpha:0},{autoAlpha:1,duration:.5},.2),F.fromTo(B.querySelectorAll(".contact-details > :not(.contact-phone-row), .contact-form"),{y:35},{y:0,duration:.65,stagger:.04,ease:"power2.out"},.2),F.fromTo(P,{x:0,y:0,scale:1},{x:()=>O().x,y:()=>O().y,scale:()=>O().scale,transformOrigin:"top left",duration:1,ease:"power2.inOut"},0);let H=()=>{if(F.progress()>.99){let e=O();r.f.set(P,{x:e.x,y:e.y})}};return B.addEventListener("scroll",H,{passive:!0}),()=>{S(),x.dispose(),B.removeEventListener("scroll",H),delete t.dataset.animated}}),a.add("(prefers-reduced-motion: reduce)",()=>{let e=n.f.create({trigger:t.querySelector(".why-wait-statement"),start:"top 85%",end:"bottom 15%",onToggle:({isActive:e})=>i(e)});return()=>{e.kill()}})},s);return()=>{a.revert(),o.revert()}},[e]),(0,t.jsx)("section",{ref:s,id:"why-wait",className:"why-wait","aria-label":e?"Why waste time?":"ليه نضيع وقت؟",dir:e?"ltr":"rtl",children:(0,t.jsxs)("div",{className:"why-wait-stage",children:[(0,t.jsxs)("div",{className:"why-wait-marks","aria-hidden":"true",children:[(0,t.jsx)("span",{className:"why-wait-mark why-wait-mark-one",children:e?"?":"؟"}),(0,t.jsx)("span",{className:"why-wait-mark why-wait-mark-two",children:e?"?":"؟"}),(0,t.jsx)("span",{className:"why-wait-mark why-wait-mark-three",children:e?"?":"؟"})]}),(0,t.jsxs)("h2",{className:"why-wait-question","aria-label":e?"Why waste time?":"ليه نضيع وقت؟",children:[(0,t.jsx)("span",{children:e?"Why waste":"ليه نضيــــــــــــع"}),(0,t.jsxs)("span",{className:"why-wait-time",children:[e?"time":"وقت",(0,t.jsx)("span",{className:"why-wait-punctuation","aria-hidden":"true",children:Array.from({length:60},(a,r)=>(0,t.jsx)("span",{children:e?"?":"؟"},r))})]})]}),(0,t.jsxs)("div",{className:"why-wait-statement",children:[(0,t.jsx)(g,{}),(0,t.jsxs)("h3",{children:[(0,t.jsxs)("span",{className:"why-wait-call",children:[(0,t.jsxs)("span",{className:"why-wait-call-word",children:[(0,t.jsx)("span",{className:"why-wait-call-label",children:e?"Call me":"كلّمني"}),(0,t.jsx)(c,{active:o})]})," ",(0,t.jsx)("span",{className:"why-wait-now",children:e?"now":"دلوقتي"})]}),(0,t.jsx)("span",{className:"why-wait-dots",children:e?(0,t.jsxs)(t.Fragment,{children:["Let’s connect the ",(0,t.jsx)("span",{className:"why-wait-dotless-en",children:"dots"}),"."]}):(0,t.jsxs)(t.Fragment,{children:["ونحط ",(0,t.jsx)("span",{className:"why-wait-dotless",role:"img","aria-label":"النقط بدون نقاط"})," عالحروف."]})})]})]}),(0,t.jsx)(m,{})]})})}],67768)}])})();