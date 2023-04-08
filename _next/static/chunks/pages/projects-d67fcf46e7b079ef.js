(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return i(8305)}])},2685:function(e,s,i){"use strict";i.d(s,{Z:function(){return m}});var t=i(5893),a=i(7294),n=i(5434),l=i(9583),r=i(1664),c=i.n(r),d=JSON.parse('[{"title":"About","link":"/","id":0},{"title":"Projects","link":"/projects","id":1},{"title":"Interests","link":"/interests","id":2}]');let o=e=>{let{isOpen:s,setIsOpen:i,activePage:a}=e;return(0,t.jsx)("ul",{className:"h-14 flex items-center space-x-8 px-4",children:d.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(c(),{href:e.link,onClick:()=>s&&i(!1),children:(0,t.jsx)("div",{className:a===e.id?"h-14 flex items-center border-y-4 border-transparent border-b-neutral-700":"h-14 flex items-center border-y-4 border-transparent hover:border-b-neutral-700",children:(0,t.jsx)("h2",{children:e.title})})})},e.id))})},x=e=>{let{activePage:s}=e,[i,r]=(0,a.useState)(!1),d=()=>{window.innerWidth>=768&&r(!1)};return(0,a.useEffect)(()=>(window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[]),(0,t.jsxs)("div",{className:"text-neutral-700",children:[(0,t.jsx)("div",{className:"w-full h-14 flex justify-center bg-neutral-100",children:(0,t.jsxs)("nav",{className:"w-full h-14 flex justify-between max-w-5xl",children:[(0,t.jsxs)("div",{className:"flex items-center px-4",children:[(0,t.jsx)("div",{className:"md:hidden hover:cursor-pointer text-4xl pr-4",children:i?(0,t.jsx)(n.FU5,{onClick:()=>r(!1)}):(0,t.jsx)(n.xXU,{onClick:()=>r(!0)})}),(0,t.jsx)("div",{className:"md:pr-8",children:(0,t.jsx)(c(),{href:"/",onClick:()=>i&&r(!1),children:(0,t.jsx)("h1",{className:"font-light",children:"Lewis Cowper"})})}),(0,t.jsx)("div",{className:"hidden md:flex",children:(0,t.jsx)(o,{isOpen:i,setIsOpen:r,activePage:s})})]}),(0,t.jsxs)("div",{className:"flex items-center space-x-4 sm:space-x-8 px-4 text-3xl sm:text-4xl",children:[(0,t.jsx)(c(),{href:"https://www.linkedin.com/in/lewiscowper/",target:"_blank",children:(0,t.jsx)(l.ltd,{})}),(0,t.jsx)(c(),{href:"https://github.com/lewcowper",target:"_blank",children:(0,t.jsx)(l.hJX,{})})]})]})}),i&&(0,t.jsx)("div",{className:"flex h-14 bg-neutral-100 md:hidden",children:(0,t.jsx)(o,{isOpen:i,setIsOpen:r,activePage:s})})]})};var m=x},8305:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return p}});var t=i(5893),a=i(9008),n=i.n(a);i(5675);var l=i(2685),r=i(7294);let c=e=>{let{projectData:s,langIcons:i,libFraIcons:a}=e,[n,l]=(0,r.useState)(!1),c=0;return(0,t.jsxs)("div",{className:"py-2 px-4 bg-neutral-100 rounded-lg",children:[(0,t.jsx)("h3",{children:s.title}),(0,t.jsx)("p",{className:"text-justify",children:s.description}),n&&(0,t.jsx)("hr",{class:"h-px my-2 bg-neutral-700 border-0"}),(0,t.jsx)("div",{children:n&&(0,t.jsx)("ul",{className:"list-disc pl-4 text-justify",children:s.details.map(e=>(0,t.jsx)("li",{className:"pb-2",children:e}))})}),n&&s.languages.length>0&&(0,t.jsxs)("p",{className:"text-justify",children:["Languages: ",s.languages.join(", ")]}),n&&s.frameworksLibraries.length>0&&(0,t.jsxs)("p",{className:"text-justify",children:["Frameworks/Libraries: ",s.frameworksLibraries.join(", ")]}),n&&(0,t.jsx)("hr",{class:"h-px my-2 bg-neutral-700 border-0"}),(0,t.jsxs)("div",{className:"flex justify-between p-2",children:[(0,t.jsxs)("div",{className:"flex flex-wrap gap-x-6 gap-y-2",children:[(0,t.jsx)("div",{className:"flex text-3xl gap-2",children:i.map(e=>(0,t.jsx)("div",{children:e},c++))}),(0,t.jsx)("div",{className:"flex text-3xl gap-2",children:a.map(e=>(0,t.jsx)("div",{children:e},c++))})]}),(0,t.jsx)("button",{className:"font-medium",onClick:()=>l(!n),children:n?"Show less":"Show more"})]})]})};var d=i(7735),o=JSON.parse('[{"id":0,"title":"Personal Website","description":"A simple website to share information about myself, including my projects and interests.","details":["This project (this website) is a statically generated website built with Next.js and conveniently hosted on GitHub Pages.","Components are built using React and styled with Tailwind CSS."],"languages":["JavaScript","HTML"],"frameworksLibraries":["Next.js","React","Tailwind CSS"]},{"id":1,"title":"Meal Recommendation System","description":"A full-stack web application which enables users to explore and share meal recipes.","details":["Completed in small teams for COMP9900 Information Technology Project at UNSW.","This project involved the design and construction of a single page application frontend built with React and Bootstrap, and a backend built with Flask and SQLite.","In the team, I led the architectural and graphical design of the application, as well as implementation of the frontend."],"languages":["JavaScript","HTML","CSS"],"frameworksLibraries":["React","Bootstrap"]},{"id":2,"title":"Simple Operating System (SOS)","description":"Implementation of a simple microkernel-based operating system atop the seL4 microkernel.","details":["Completed in pairs for COMP9242 Advanced Operating Systems (AOS) at UNSW.","This project involved the design and implementation of various components of a microkernel-based operating system, including a system call interface, a file system and a device driver, as well as functionalities including virtual memory management, demand paging and process management."],"languages":["C"],"frameworksLibraries":[]}]');let x=()=>(0,t.jsx)("div",{className:"flex justify-center text-neutral-700 my-4",children:(0,t.jsx)("div",{className:"flex flex-wrap md:flex-nowrap max-w-5xl justify-center w-max",children:(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:mx-0",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,t.jsx)(c,{projectData:o.filter(e=>"Personal Website"===e.title)[0],langIcons:[(0,t.jsx)(d.vl3,{}),(0,t.jsx)(d.PSn,{})],libFraIcons:[(0,t.jsx)(d.Xou,{}),(0,t.jsx)(d.pNp,{}),(0,t.jsx)(d.YnA,{})]}),(0,t.jsx)(c,{projectData:o.filter(e=>"Meal Recommendation System"===e.title)[0],langIcons:[(0,t.jsx)(d.vl3,{}),(0,t.jsx)(d.PSn,{}),(0,t.jsx)(d.H5g,{})],libFraIcons:[(0,t.jsx)(d.pNp,{}),(0,t.jsx)(d.BpA,{})]})]}),(0,t.jsx)("div",{className:"flex flex-col gap-4",children:(0,t.jsx)(c,{projectData:o.filter(e=>"Simple Operating System (SOS)"===e.title)[0],langIcons:[(0,t.jsx)(d.edn,{})],libFraIcons:[]})})]})})}),m=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n(),{children:[(0,t.jsx)("title",{children:"lewcowper - Projects"}),(0,t.jsx)("meta",{name:"description",content:"Personal website of Lewis Cowper"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(l.Z,{activePage:1}),(0,t.jsx)(x,{})]});var p=m}},function(e){e.O(0,[228,445,415,276,774,888,179],function(){return e(e.s=9182)}),_N_E=e.O()}]);