(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{6168:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interests",function(){return i(2958)}])},2685:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(5893),s=i(7294),o=i(5434),r=i(9583),a=i(1664),l=i.n(a),h=JSON.parse('[{"title":"About","link":"/","id":0},{"title":"Projects","link":"/projects","id":1},{"title":"Interests","link":"/interests","id":2}]');let d=e=>{let{isOpen:t,setIsOpen:i,activePage:s}=e;return(0,n.jsx)("ul",{className:"h-14 flex items-center space-x-8 px-4",children:h.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(l(),{href:e.link,onClick:()=>t&&i(!1),children:(0,n.jsx)("div",{className:s===e.id?"h-14 flex items-center border-y-4 border-transparent border-b-neutral-700":"h-14 flex items-center border-y-4 border-transparent hover:border-b-neutral-700",children:(0,n.jsx)("h2",{children:e.title})})})},e.id))})},c=e=>{let{activePage:t}=e,[i,a]=(0,s.useState)(!1),h=()=>{window.innerWidth>=768&&a(!1)};return(0,s.useEffect)(()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)}),[]),(0,n.jsxs)("div",{className:"text-neutral-700",children:[(0,n.jsx)("div",{className:"w-full h-14 flex justify-center bg-neutral-100",children:(0,n.jsxs)("nav",{className:"w-full h-14 flex justify-between max-w-5xl",children:[(0,n.jsxs)("div",{className:"flex items-center px-4",children:[(0,n.jsx)("div",{className:"md:hidden hover:cursor-pointer text-4xl pr-4",children:i?(0,n.jsx)(o.FU5,{onClick:()=>a(!1)}):(0,n.jsx)(o.xXU,{onClick:()=>a(!0)})}),(0,n.jsx)("div",{className:"md:pr-8",children:(0,n.jsx)(l(),{href:"/",onClick:()=>i&&a(!1),children:(0,n.jsx)("h1",{className:"font-light",children:"Lewis Cowper"})})}),(0,n.jsx)("div",{className:"hidden md:flex",children:(0,n.jsx)(d,{isOpen:i,setIsOpen:a,activePage:t})})]}),(0,n.jsxs)("div",{className:"flex items-center space-x-4 sm:space-x-8 px-4 text-3xl sm:text-4xl",children:[(0,n.jsx)(l(),{href:"https://www.linkedin.com/in/lewiscowper/",target:"_blank",children:(0,n.jsx)(r.ltd,{})}),(0,n.jsx)(l(),{href:"https://github.com/lewcowper",target:"_blank",children:(0,n.jsx)(r.hJX,{})})]})]})}),i&&(0,n.jsx)("div",{className:"flex h-14 bg-neutral-100 md:hidden",children:(0,n.jsx)(d,{isOpen:i,setIsOpen:a,activePage:t})})]})};var u=c},2958:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return k}});var n=i(5893),s=i(9008),o=i.n(s),r=i(5675),a=i.n(r),l=i(2685),h=i(7294),d=i(1664),c=i.n(d),u=i(5434);let m=e=>{let{book:t}=e;return(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)("div",{className:"text-center",children:[(0,n.jsxs)("div",{className:"px-4 pt-4 md:pt-0",children:[(0,n.jsx)("h2",{className:"font-light italic",children:t.subtitle?t.title+": "+t.subtitle:t.title}),(0,n.jsx)("h3",{className:"font-light",children:(0,n.jsx)("div",{children:t.author})})]}),(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"w-48 m-4",children:(0,n.jsx)(a(),{src:"/assets/images/books/"+t.cover+".jpg",alt:t.cover,width:356,height:540,quality:100,priority:!0})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"inline-flex flex-wrap justify-center px-4",children:[(0,n.jsx)("p",{children:"Image credit: "}),(0,n.jsxs)(c(),{href:t.link,target:"_blank",className:"inline-flex items-center hover:underline",children:[(0,n.jsx)("div",{className:"px-1 font-light",children:t.publisher}),(0,n.jsx)(u.Bj5,{className:"text-md"})]})]})})]}),(0,n.jsx)("div",{className:"rounded-lg w-fit bg-neutral-100 m-4",children:(0,n.jsxs)("div",{className:"px-4 py-2",children:[(0,n.jsxs)("div",{className:"flex justify-between align-middle",children:[(0,n.jsx)("h2",{children:"My Overview"}),(0,n.jsx)("div",{children:t.genre})]}),(0,n.jsx)("p",{className:"text-justify",children:t.note.replaceAll("--","—")})]})})]})},f=e=>{let{book:t,selectedBook:i}=e;return(0,n.jsx)("div",{className:i.id===t.id?"border-4 border-neutral-700 grayscale":"hover:border-4 border-transparent m-1 hover:border-neutral-700",children:(0,n.jsx)(a(),{src:"/assets/images/books/"+t.cover+".jpg",alt:t.cover,width:356,height:540,quality:100,priority:!0})})},p=e=>{let{bookData:t,selectedBook:i,setSelectedBook:s}=e;return(0,n.jsx)("div",{className:"flex justify-center",children:(0,n.jsx)("div",{className:"max-w-lg md:max-w-sm",children:(0,n.jsx)("div",{className:"grid grid-cols-4 md:grid-cols-3 grid-rows-3 md:grid-rows-4 md:gap-x-1 px-4",children:t.map(e=>(0,n.jsx)("button",{onClick:()=>s(e),children:(0,n.jsx)(f,{book:e,selectedBook:i})},e.id))})})})},g=e=>{let{bookData:t,selectedBook:i,setSelectedBook:s}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex justify-center text-neutral-700",children:(0,n.jsx)("div",{className:"flex flex-wrap md:flex-nowrap justify-center max-w-5xl",children:(0,n.jsx)("p",{className:"px-4 text-justify",children:"I enjoy popular history books about periods of significant social, political and technological change, and detailed biographies about individuals involved in such change. I also enjoy popular science, business books and interesting memoirs. Here are my overviews of some of my favourites."})})}),(0,n.jsx)("div",{className:"flex justify-center text-neutral-700 my-4",children:(0,n.jsxs)("div",{className:"flex flex-wrap md:flex-nowrap justify-center max-w-5xl",children:[(0,n.jsx)("div",{className:"md:basis-1/2 md:max-w-fit",children:(0,n.jsx)(p,{bookData:t,selectedBook:i,setSelectedBook:s})}),(0,n.jsx)("div",{className:"md:basis-1/2 grow",children:(0,n.jsx)(m,{book:i})})]})})]})};var w=JSON.parse('[{"id":0,"genre":"Biography","title":"The Power Broker","subtitle":"Robert Moses and the Fall of New York","author":"Robert A. Caro","cover":"the-power-broker","note":"Robert Moses was a prolific urban planner and controversial public official who amassed immense political power in New York from the 1920s through to the 1960s. He is widely considered to have shaped New York City more than any other individual in the 20th century. Caro uncovers the story of how Moses accumulated his power -- fascinatingly, without ever being elected to any of his numerous offices -- and how he ruthlessly exercised it to turn his bold visions into reality. Caro\'s painstaking research and intriguing findings are presented in a uniquely flowing and elegant style that makes this investigative epic an exceptionally captivating read.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/24312/the-power-broker-by-robert-a-caro/"},{"id":1,"genre":"Biography","title":"The Path to Power","subtitle":"The Years of Lyndon Johnson I","author":"Robert A. Caro","cover":"lbj-i","note":"Lyndon Baines Johnson, \\"LBJ\\", was an American politician who served as President of the United States from 1963 to 1969. This book, published in 1982, is the first volume of a planned five-volume biographical series on LBJ. In this volume, Caro immerses readers with his characteristic depth and detail on LBJ\'s impoverished youth in Texas Hill Country, the complicated relationship with his father, his politicking throughout his education and early career, and the formation of key political and financial relationships that propelled him through the rest of his political career. From this narrative, readers gain a strong sense of LBJ\'s desire for power and the extent to which he was willing to go for its attainment.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/24311/the-path-to-power-by-robert-a-caro/"},{"id":2,"genre":"Biography","title":"Alexander Hamilton","subtitle":"","author":"Ron Chernow","cover":"hamilton","note":"Alexander Hamilton was a Founding Father of the United States who contributed immensely to the structure of the nation\'s government and financial system. Chernow masterfully details Hamilton\'s short but remarkable life during the turbulent period surrounding the United States\' independence. Through the depiction of Hamilton\'s ambitious actions and his complex relationships with other influential figures of the time -- including Washington, Jefferson, Adams, Madison, Monroe and Burr -- readers gain a strong sense of the subject\'s passion and brilliance, as well as his arrogance and egotism which tragically led to his early and entirely avoidable death.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/292945/alexander-hamilton-by-ron-chernow/"},{"id":3,"genre":"Biography","title":"Titan","subtitle":"The Life of John D. Rockefeller, Sr.","author":"Ron Chernow","cover":"titan","note":"John D. Rockefeller, Sr. was a prominent industrialist and philanthropist who founded Standard Oil in 1870 and controlled it until its forced dismantling in 1911 due to monopolistic business practices. He is generally considered to be the wealthiest individual in modern history. Chernow carefully exposes the inner qualities of the enigmatic Rockefeller through exploration of his controversial professional activities and personal reactions to growing negative public opinion towards him over his lifetime. Readers discover that Rockefeller was driven by a powerful religious faith, an obsession with efficiency and a ruthless desire for control, while also possessing an unflinching belief that his actions were right.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/26804/titan-by-ron-chernow/"},{"id":4,"genre":"Biography","title":"Washington","subtitle":"A Life","author":"Ron Chernow","cover":"washington","note":"George Washington was an American military leader and Founding Father of the United States who served as the country\'s first President from 1789 to 1797. In Chernow\'s own words, \\"Washington\'s biography is the story of a man constructing himself\\". With this perspective, Chernow provides readers with a fascinating exploration of Washington\'s life and character, and elegantly illuminates the origins of his extraordinary legacy. The narrative focuses on the subject\'s vital role in the American Revolution, his leadership position among the founders of the United States and his shaping of the newly formed government and Presidential office as its first holder.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/297691/washington-by-ron-chernow/"},{"id":5,"genre":"Biography","title":"Grant","subtitle":"","author":"Ron Chernow","cover":"grant","note":"Ulysses S. Grant was an American military and political leader who was Commanding General of the Union Army during the American Civil War, and then served as President of the United States from 1869 to 1877. Chernow presents the subject in a more positive light than most historical assessments, providing readers with an articulate account of Grant’s humble upbringing and early years, his rapid rise to military leadership, and then his transition to political leadership. The author explores Grant’s personal flaws with nuance and suggests that the controversy of presidency stemmed from his financial naivety and misdirected trust in dishonest individuals, rather than own self-interest or dishonesty.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/311248/grant-by-ron-chernow/"},{"id":6,"genre":"General Nonfiction","title":"The Making of the Atomic Bomb","subtitle":"","author":"Richard Rhodes","cover":"tmotab","note":"Rhodes’ comprehensive account of the discovery of atomic energy and its hasty development into a new type of weapon with unparalleled destructive capacity during World War II deserves the attention of any reader interested in the topics of science, engineering and technology. While the technical aspects of the Manhattan Project are the primary focus of the book, Rhodes provides thoughtful discussion about the social and political implications of the new class of weapons, and highlights the moral predicament that the remarkable team of scientists and engineers found themselves in when the first of the weapons were dropped on largely civilian populations in Japan at the end of the war.","publisher":"Simon & Schuster","link":"https://www.simonandschuster.com/books/The-Making-of-the-Atomic-Bomb/Richard-Rhodes/9781451677614"},{"id":7,"genre":"General Nonfiction","title":"The Prize","subtitle":"The Epic Quest for Oil, Money & Power","author":"Daniel Yergin","cover":"the-prize","note":"Yergin provides a comprehensive and vivid history of the global oil industry from the mid-19th century through to the book’s publication in 1990. The descriptions of the industry’s early decades are particularly intriguing, with all-in gambles by bold wildcatters, chaotic booms and busts, and monopolistic practices of Standard Oil. Yergin then explores the geopolitical implications of the world’s dependence on oil as it evolves over the following decades from fuel for kerosene lamps to fuel for military forces, industry and personal mobility. In parallel, readers are presented with the erratic history of how control of the production of oil was lost by powerful Western nations and gained by Middle Eastern nations.","publisher":"Simon & Schuster","link":"https://www.simonandschuster.com/books/The-Prize/Daniel-Yergin/9781439110126"},{"id":8,"genre":"General Nonfiction","title":"The Right Stuff","subtitle":"","author":"Tom Wolfe","cover":"the-right-stuff","note":"In “The Right Stuff”, Wolfe provides an illuminating and highly entertaining account of the attitudes and experiences of the test pilots and early astronauts associated with Project Mercury, the United States’ first manned spaceflight program. Readers are pulled into the competitive world of experimental aircraft testing where a pilot’s credibility among peers is measured by the riskiness of their flights, their skill (and luck) in avoiding fatal failures and, perhaps above all, their coolness in the cockpit. Those that excelled in this unique environment were said to have possessed “the right stuff”, and were selected for the riskiest of all flights at the time: flights on the rockets being developed to take humans to space.","publisher":"Macmillan","link":"https://us.macmillan.com/books/9780312427566/therightstuff"},{"id":9,"genre":"Memoir","title":"Shoe Dog","subtitle":"A Memoir by the Creator of Nike","author":"Phil Knight","cover":"shoe-dog","note":"Phil Knight is a founder of Nike and in his memoir, he shares a lucid account of the ups and the downs of the early years of the venture. Knight’s storytelling flows and he is candid about numerous decisions and mistakes that placed the company in precarious positions along the road to success. What was particularly inspiring – and entertaining – were the efforts of many of the passionate and unique employees of the company who possessed the will to win no matter the odds stacked against them. Progressing through the book, it becomes clear that the young company’s culture of striving for victory and never giving up is precisely what the company’s brand comes to embody.","publisher":"Simon & Schuster","link":"https://www.simonandschuster.com/books/Shoe-Dog/Phil-Knight/9781501135934"},{"id":10,"genre":"Memoir","title":"Skunk Works","subtitle":"A Personal Memoir of My Years of Lockheed","author":"Ben R. Rich & Leo Janos","cover":"skunk-works","note":"Ben Rich was an American aeronautical engineer who pioneered stealth technology and served as Director of Lockheed’s secretive research & development group, known as Skunk Works. In this memoir of his time at Skunk Works, he eloquently details the development of transformative stealth technology through the Have Blue demonstration project and subsequent F-117A Nighthawk aircraft. In addition, he shares his experiences working closely with the group’s pioneering founder, Kelly Johnson, who led development of high-altitude reconnaissance aircraft -- most notably the SR-71 Blackbird and U-2 -- which had profound political implications during the Cold War.","publisher":"Hachette Book Group","link":"https://www.littlebrown.com/titles/leo-janos/skunk-works/9780316246934/"},{"id":11,"genre":"Memoir","title":"Into Thin Air","subtitle":"A Personal Account of the Mt. Everest Disaster","author":"Jon Krakauer","cover":"into-thin-air","note":"In this memoir, Krakauer vividly tells his story of the 1996 Mount Everest Disaster in which eight climbers lost their lives descending from the summit of the mountain. At the time, Krakauer was a young journalist and mountaineering enthusiast who was on the fateful climb after being given the opportunity to attempt to summit Mount Everest and write about the journey. The author\'s opinions on what may have led to the eight deaths caused controversy among survivors, and his criticism of the commercial factors which may have contributed to the decision to proceed with the summit attempt caused a stir in the mountaineering community.","publisher":"Penguin Random House","link":"https://www.penguinrandomhouse.com/books/95441/into-thin-air-by-jon-krakauer-new-afterword-by-the-author/"}]'),x=JSON.parse('[{"id":0,"file":"bronte-s","name":"Bronte Beach"},{"id":1,"file":"tamarama","name":"Tamarama"},{"id":2,"file":"coogee","name":"Coogee Beach"},{"id":3,"file":"mackenzies","name":"Mackenzies Bay"},{"id":4,"file":"bronte","name":"Bronte"},{"id":5,"file":"bondi-s","name":"Bondi"},{"id":6,"file":"gordons","name":"Gordons Bay"},{"id":7,"file":"bondi-n","name":"Bondi Beach"},{"id":8,"file":"bronte-n","name":"Bronte Beach"}]');let v=e=>{let{run:t}=e;return(0,n.jsxs)("div",{className:"flex justify-center items-end text-transparent hover:text-white relative",children:[(0,n.jsx)("div",{className:"absolute whitespace-normal text-center w-full text-lg md:text-2xl px-0.5 py-2 font-light",children:t.name}),(0,n.jsx)(a(),{src:"/assets/images/runs/"+t.file+".jpg",alt:t.file,width:540,height:540,quality:100})]})},b=()=>{let[e,t]=(0,h.useState)(window.innerWidth>=768?x.slice(0,-1):x),i=()=>{window.innerWidth>=768?t(x.slice(0,-1)):t(x)};return(0,h.useEffect)(()=>(window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"flex justify-center text-neutral-700",children:(0,n.jsx)("div",{className:"flex flex-wrap md:flex-nowrap justify-center max-w-5xl",children:(0,n.jsx)("p",{className:"px-4 text-justify",children:"Running is my favourite form of exercise and I enjoy training to improve my 5K and 10K times. When I can, I enjoy running along the Bondi to Coogee coastal track in Sydney. Here are some of my photographs of the scenic views along this track."})})}),(0,n.jsx)("div",{className:"flex justify-center text-neutral-700",children:(0,n.jsx)("div",{className:"flex flex-wrap md:flex-nowrap justify-center max-w-5xl",children:(0,n.jsx)("div",{className:"grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-2 m-4",children:e.map(e=>(0,n.jsx)(v,{run:e}))})})})]})},y=()=>{let[e,t]=(0,h.useState)(!0),[i,s]=(0,h.useState)(w[0]);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-center text-neutral-700",children:(0,n.jsxs)("div",{className:"grid grid-cols-2 max-w-5xl bg-neutral-100 rounded-lg my-4",children:[(0,n.jsx)("button",{className:e?"px-2 py-1 m-1 rounded-lg bg-white":"px-1 m-1 border-solid border-transparent hover:border-white border-4 rounded-lg bg-neutral-100",onClick:()=>t(!0),children:(0,n.jsx)("h3",{children:"Reading"})}),(0,n.jsx)("button",{className:e?"px-1 m-1 border-solid border-transparent hover:border-white border-4 rounded-lg bg-neutral-100":"px-2 py-1 m-1 rounded-lg bg-white",onClick:()=>t(!1),children:(0,n.jsx)("h3",{children:"Running"})})]})}),e&&(0,n.jsx)(g,{bookData:w,selectedBook:i,setSelectedBook:s}),!e&&(0,n.jsx)(b,{})]})},j=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"lewcowper - Interests"}),(0,n.jsx)("meta",{name:"description",content:"Personal website of Lewis Cowper"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(l.Z,{activePage:2}),(0,n.jsx)(y,{})]});var k=j}},function(e){e.O(0,[228,445,276,774,888,179],function(){return e(e.s=6168)}),_N_E=e.O()}]);