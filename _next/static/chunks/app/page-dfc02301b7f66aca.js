(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2182:(e,t,s)=>{Promise.resolve().then(s.bind(s,1896))},1896:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>f});var r=s(7437),n=s(2265),l=s(2349),i=s(7345),c=s(5144),a=s(8493),o=s(31),u=s(211),h=s(495),d=s(5066);let m=(0,n.forwardRef)((e,t)=>{let{setActiveSection:s}=e,{scrollY:l}=(0,a.v)(),i=(0,o.H)(l,[0,500],[0,-100]),c=(0,o.H)(l,[0,500],[0,50]),[m,x]=(0,n.useState)(""),[b,f]=(0,n.useState)(!1),[j,p]=(0,n.useState)(0),[v,g]=(0,n.useState)(150),y=(0,n.useMemo)(()=>["React Developer","Node.js Enthusiast","Full Stack Developer"],[]);return(0,n.useEffect)(()=>{let e=setTimeout(()=>{let e=j%y.length,t=y[e];x(b?t.substring(0,m.length-1):t.substring(0,m.length+1)),g(b?30:150),b||m!==t?b&&""===m&&(f(!1),p(j+1)):setTimeout(()=>f(!0),500)},v);return()=>clearTimeout(e)},[m,b,j,y,v]),(0,r.jsx)("section",{id:"home",ref:t,className:"min-h-screen flex flex-col items-center justify-center relative overflow-hidden z-20",children:(0,r.jsxs)(u.E.div,{className:"relative z-10 text-center",style:{y:i},children:[(0,r.jsx)(u.E.h1,{className:"text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 p-3",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8},children:"Nguyen Dai Duong"}),(0,r.jsxs)(u.E.p,{className:"text-xl md:text-2xl text-gray-300 mb-8 h-8",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:["I'm a"," ",(0,r.jsx)("span",{className:"font-semibold text-blue-400",children:m}),(0,r.jsx)("span",{className:"animate-blink",children:"|"})]}),(0,r.jsx)(u.E.div,{style:{y:c},children:(0,r.jsxs)(h.z,{onClick:()=>{s("about");let e=document.getElementById("about");null==e||e.scrollIntoView({behavior:"smooth"})},className:"bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white",children:["See More ",(0,r.jsx)(d.Z,{className:"ml-2 h-4 w-4"})]})})]})})});m.displayName="Hero";var x=s(2595),b=s(1688);function f(){let[e,t]=(0,n.useState)("home"),s=(0,n.useRef)({home:null,about:null,techstack:null,projects:null,contact:null});(0,n.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(e.target.id)})},{root:null,rootMargin:"0px",threshold:.5});return Object.values(s.current).forEach(t=>{t&&e.observe(t)}),()=>e.disconnect()},[]);let a=e=>{var r;t(e),null===(r=s.current[e])||void 0===r||r.scrollIntoView({behavior:"smooth"})};return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-900 text-white ",children:[(0,r.jsx)(c.Z,{activeSection:e,setActiveSection:a}),(0,r.jsxs)("main",{children:[(0,r.jsx)("section",{id:"home",ref:e=>{e&&(s.current.home=e)},children:(0,r.jsx)(m,{setActiveSection:a})}),(0,r.jsx)("section",{id:"about",ref:e=>{e&&(s.current.about=e)},children:(0,r.jsx)(l.Z,{})}),(0,r.jsx)("section",{id:"techstack",ref:e=>{e&&(s.current.techstack=e)},className:"",children:(0,r.jsx)(b.Z,{})}),(0,r.jsx)("section",{id:"projects",ref:e=>{e&&(s.current.projects=e)},children:(0,r.jsx)(x.Z,{})}),(0,r.jsx)("section",{id:"contact",ref:e=>{e&&(s.current.contact=e)},children:(0,r.jsx)(i.Z,{})})]})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[957,699,310,31,510,612,130,215,744],()=>t(2182)),_N_E=e.O()}]);