(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return a(8305)}])},2685:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var s=a(5893),i=a(7294),n=a(5434),l=a(9583),r=a(1664),o=a.n(r),d=JSON.parse('[{"title":"About","link":"/","id":0},{"title":"Projects","link":"/projects","id":1},{"title":"Interests","link":"/interests","id":2}]');let c=e=>{let{isOpen:t,setIsOpen:a,activePage:i}=e;return(0,s.jsx)("ul",{className:"h-14 flex items-center space-x-8 px-4",children:d.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(o(),{href:e.link,onClick:()=>t&&a(!1),children:(0,s.jsx)("div",{className:i===e.id?"h-14 flex items-center border-y-4 border-transparent border-b-neutral-700":"h-14 flex items-center border-y-4 border-transparent hover:border-b-neutral-700",children:(0,s.jsx)("h2",{children:e.title})})})},e.id))})},m=e=>{let{activePage:t}=e,[a,r]=(0,i.useState)(!1),d=()=>{window.innerWidth>=768&&r(!1)};return(0,i.useEffect)(()=>(window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}),[]),(0,s.jsxs)("div",{className:"text-neutral-700",children:[(0,s.jsx)("div",{className:"w-full h-14 flex justify-center bg-neutral-100",children:(0,s.jsxs)("nav",{className:"w-full h-14 flex justify-between max-w-5xl",children:[(0,s.jsxs)("div",{className:"flex items-center px-4",children:[(0,s.jsx)("div",{className:"md:hidden hover:cursor-pointer text-4xl pr-4",children:a?(0,s.jsx)(n.FU5,{onClick:()=>r(!1)}):(0,s.jsx)(n.xXU,{onClick:()=>r(!0)})}),(0,s.jsx)("div",{className:"md:pr-8",children:(0,s.jsx)(o(),{href:"/",onClick:()=>a&&r(!1),children:(0,s.jsx)("h1",{className:"font-light",children:"Lewis Cowper"})})}),(0,s.jsx)("div",{className:"hidden md:flex",children:(0,s.jsx)(c,{isOpen:a,setIsOpen:r,activePage:t})})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-4 sm:space-x-8 px-4 text-3xl sm:text-4xl",children:[(0,s.jsx)(o(),{href:"https://www.linkedin.com/in/lewiscowper/",target:"_blank",children:(0,s.jsx)(l.ltd,{})}),(0,s.jsx)(o(),{href:"https://github.com/lewcowper",target:"_blank",children:(0,s.jsx)(l.hJX,{})})]})]})}),a&&(0,s.jsx)("div",{className:"flex h-14 bg-neutral-100 md:hidden",children:(0,s.jsx)(c,{isOpen:a,setIsOpen:r,activePage:t})})]})};var p=m},8305:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var s=a(5893),i=a(9008),n=a.n(i);a(5675);var l=a(2685),r=a(7294);let o=e=>{let{projectData:t,langIcons:a,libFraIcons:i}=e,[n,l]=(0,r.useState)(!1),o=0;return(0,s.jsxs)("div",{className:"py-2 px-4 bg-neutral-100 rounded-lg",children:[(0,s.jsx)("h2",{children:t.title}),(0,s.jsx)("p",{className:"text-justify",children:t.description}),n&&(0,s.jsx)("hr",{class:"h-px my-2 bg-neutral-700 border-0"}),(0,s.jsx)("div",{children:n&&(0,s.jsx)("ul",{className:"list-disc pl-4 text-justify",children:t.details.map(e=>(0,s.jsx)("li",{className:"pb-2",children:e}))})}),n&&t.languages.length>0&&(0,s.jsxs)("p",{className:"text-justify",children:["Languages: ",t.languages.join(", ")]}),n&&t.frameworksLibraries.length>0&&(0,s.jsxs)("p",{className:"text-justify",children:["Frameworks/Libraries: ",t.frameworksLibraries.join(", ")]}),n&&(0,s.jsx)("hr",{class:"h-px my-2 bg-neutral-700 border-0"}),(0,s.jsxs)("div",{className:"flex justify-between p-2",children:[(0,s.jsxs)("div",{className:"flex flex-wrap gap-x-6 gap-y-2",children:[(0,s.jsx)("div",{className:"flex text-3xl gap-2",children:a.map(e=>(0,s.jsx)("div",{children:e},o++))}),(0,s.jsx)("div",{className:"flex text-3xl gap-2",children:i.map(e=>(0,s.jsx)("div",{children:e},o++))})]}),(0,s.jsx)("button",{className:"font-medium",onClick:()=>l(!n),children:n?"Show less":"Show more"})]})]})};var d=a(7735),c=a(9583),m=JSON.parse('[{"id":0,"title":"Personal Website","description":"A simple, responsive website to share information about myself, including my projects and interests.","details":["This project (this website) is a statically generated website built with Next.js and conveniently hosted on GitHub Pages.","Components are built using React and styled with Tailwind CSS."],"languages":["JavaScript","HTML"],"frameworksLibraries":["Next.js","React","Tailwind CSS"]},{"id":1,"title":"Meal Recommendation System","description":"A full stack web application which enables users to explore and share meal recipes.","details":["Completed in small teams for COMP9900 Information Technology Project at UNSW.","This project involved the design and construction of a single page application frontend built with React and Bootstrap, and a backend built with Flask and SQLite.","In the team, I led the architectural and graphical design of the application, as well as implementation of the frontend."],"languages":["JavaScript","HTML","CSS"],"frameworksLibraries":["React","Bootstrap"]},{"id":2,"title":"Simple Operating System (SOS)","description":"Implementation of a simple microkernel-based operating system atop the seL4 microkernel.","details":["Completed in pairs for COMP9242 Advanced Operating Systems (AOS) at UNSW.","This project involved the design and implementation of various components of a microkernel-based operating system, including a system call interface, a file system and a device driver, as well as functionalities including virtual memory management, demand paging and process management."],"languages":["C"],"frameworksLibraries":[]},{"id":3,"title":"VC Compiler","description":"Implementation of a compiler in Java to translate a variant of C, VC, into executable Java bytecode.","details":["Completed for COMP3131/9102 Programming Languages and Compilers at UNSW.","This project involved the implementation of lexical analysis, syntax analysis, semantic analysis and code generation functionalities of a compiler in Java to translate a variant of C, VC, into executable Java bytecode."],"languages":["Java"],"frameworksLibraries":[]},{"id":4,"title":"Suite of predictive models","description":"A suite of data preparation processes and predictive models to estimate the fair value of alternative assets.","details":["Designed, implemented, tested and deployed numerous statistical models in Python with Pandas and SciPy to estimate the fair value of a range of alternative assets.","Designed, implemented and deployed data preparation processes in Python with Pandas to collect, clean and format all data required for the statistical models."],"languages":["Python"],"frameworksLibraries":["Pandas, SciPy"]},{"id":5,"title":"Alternative asset market data collator and viewer","description":"A full stack web application to collate alternative asset market data and present it to traders to inform investment decisions.","details":["Developed a backend web application to fetch and process alternative asset market data from numerous sources and serve it to the frontend web application using Python and FastAPI.","Designed and implemented a user interface with TypeScript, React and Tailwind CSS for traders to view market data from numerous sources side-by-side to inform investment decisions."],"languages":["Python, TypeScript, HTML"],"frameworksLibraries":["FastAPI, React, Tailwind CSS"]}]');let p=()=>(0,s.jsx)("div",{className:"flex justify-center text-neutral-700 my-4",children:(0,s.jsx)("div",{className:"flex flex-wrap md:flex-nowrap max-w-5xl justify-center w-max",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:mx-0",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)(o,{projectData:m.filter(e=>"Suite of predictive models"===e.title)[0],langIcons:[(0,s.jsx)(d.Cul,{}),(0,s.jsx)(d.vl3,{})],libFraIcons:[(0,s.jsx)(d.ncN,{}),(0,s.jsx)(d.ISB,{})]}),(0,s.jsx)(o,{projectData:m.filter(e=>"Meal Recommendation System"===e.title)[0],langIcons:[(0,s.jsx)(d.vl3,{}),(0,s.jsx)(d.PSn,{}),(0,s.jsx)(d.H5g,{})],libFraIcons:[(0,s.jsx)(d.pNp,{}),(0,s.jsx)(d.BpA,{})]}),(0,s.jsx)(o,{projectData:m.filter(e=>"VC Compiler"===e.title)[0],langIcons:[(0,s.jsx)(c.zEo,{})],libFraIcons:[]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,s.jsx)(o,{projectData:m.filter(e=>"Alternative asset market data collator and viewer"===e.title)[0],langIcons:[(0,s.jsx)(d.Cul,{}),(0,s.jsx)(d.WZi,{}),(0,s.jsx)(d.PSn,{})],libFraIcons:[(0,s.jsx)(d.$By,{}),(0,s.jsx)(d.pNp,{}),(0,s.jsx)(d.YnA,{})]}),(0,s.jsx)(o,{projectData:m.filter(e=>"Personal Website"===e.title)[0],langIcons:[(0,s.jsx)(d.vl3,{}),(0,s.jsx)(d.PSn,{})],libFraIcons:[(0,s.jsx)(d.Xou,{}),(0,s.jsx)(d.pNp,{}),(0,s.jsx)(d.YnA,{})]}),(0,s.jsx)(o,{projectData:m.filter(e=>"Simple Operating System (SOS)"===e.title)[0],langIcons:[(0,s.jsx)(d.edn,{})],libFraIcons:[]})]})]})})}),x=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n(),{children:[(0,s.jsx)("title",{children:"lewcowper - Projects"}),(0,s.jsx)("meta",{name:"description",content:"Personal website of Lewis Cowper"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsx)(l.Z,{activePage:1}),(0,s.jsx)(p,{})]});var h=x}},function(e){e.O(0,[228,445,415,276,774,888,179],function(){return e(e.s=9182)}),_N_E=e.O()}]);