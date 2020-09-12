(this.webpackJsonpf15=this.webpackJsonpf15||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(15),s=a.n(r);a(22);function c(e){return n.a.createElement("table",{className:"w-full rounded-t-lg "+e.className},e.children)}function m(e){return n.a.createElement("thead",{className:"text-left"},n.a.createElement("tr",{className:"header-row"},e.children))}function i(e){return n.a.createElement("th",{className:"pl-4 py-2 bg-gray-100 uppercase border-b tracking-wider font-semibold text-xs text-gray-600 "+e.className},e.children)}function o(e){return n.a.createElement("tbody",{className:e.className},e.children)}function u(e){return n.a.createElement("tr",{className:"bg-white text-left text-gray-600 hover:bg-gray-100 font-semibold text-sm "+e.className},e.children)}function d(e){return n.a.createElement("td",{className:"pl-4 py-3 border-b "+e.className},e.children)}var E=a(7),p=Object(l.createContext)(),h=function(e){var t=e.children,a=Object(l.useState)([]),r=Object(E.a)(a,2),s=r[0],c=r[1];Object(l.useEffect)((function(){console.log("Fetching..."),fetch("/formula1point5/2020.json").then((function(e){return e.json()})).then((function(e){console.log(s),c(e)}))}),[]);var m=p.Provider;return n.a.createElement(m,{value:s},t)};function x(e){return n.a.createElement("div",{className:"py-3 bg-white rounded-md shadow "+e.className},e.children)}function N(){var e=Object(l.useContext)(p);return n.a.createElement(x,null,n.a.createElement("h2",{className:"px-4 md:px-6 text-xl md:text-2xl"},"2020 Driver Standings"),n.a.createElement("div",{className:"mt-2 sm:px-4 md:px-6"},n.a.createElement(c,null,n.a.createElement(m,null,n.a.createElement(i,null,"Pos"),n.a.createElement(i,null,"Driver"),n.a.createElement(i,null,"Car"),n.a.createElement(i,{className:"text-right pr-4"},"Points")),n.a.createElement(o,null,e.drivers&&e.drivers.map((function(e){return n.a.createElement(u,{key:e.position},n.a.createElement(d,null,e.position),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden lg:inline"},e.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.last),n.a.createElement("span",{className:"sm:hidden"},e.abbr)),n.a.createElement(d,{className:"text-xs uppercase"},e.car),n.a.createElement(d,{className:"pr-4 text-right text-gray-700"},e.points))}))))))}var b=a(1);function v(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),r=a[0],s=a[1],c=Object(l.useRef)(null),m=Object(l.useContext)(p);return n.a.createElement("div",{className:e.className,onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},n.a.createElement("div",{className:"flex items-center"},n.a.createElement(b.c,{to:"/results",activeClassName:"border-white-important",className:"flex items-baseline block px-2 py-3 border-b-2 border-red-700 hover:bg-red-900 hover:border-red-900 text-white text-sm tracking-wide transition-colors duration-200"},"Results",n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})))),r&&n.a.createElement("div",{onClick:function(){s(!1)},ref:c,className:"absolute py-2 -mt-2 w-48 text-sm bg-white rounded-md shadow-lg transition duration-500"},n.a.createElement(b.c,{to:"/results/drivers",className:"block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Drivers"),n.a.createElement(b.c,{to:"/results/constructors",className:"block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Constructors"),n.a.createElement(b.c,{to:"/results/races",className:"block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Races"),n.a.createElement(b.c,{to:"/results/fastestlap",className:"block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Fastest Laps"),m.races&&n.a.createElement(b.c,{to:"/results/races/"+m.races[m.races.length-1].slug,className:"block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Season")))}function g(){var e=Object(l.useState)(!1),t=Object(E.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"w-full top-0 bg-red-700 flex items-center px-5 shadow-md justify-between"},n.a.createElement(b.c,{to:"/results",className:"mr-10",href:"#"},n.a.createElement("svg",{className:"h-5 text-white",viewBox:"0 0 1070 191",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M247 0c-30.928 0-73.729 17.729-95.598 39.598L0 191h107l91.009-91.009C214.02 83.98 245.356 71 268 71h290.145l71-71H247z",fill:"currentColor"}),n.a.createElement("path",{d:"M266.11 83c-17.673 0-42.136 10.126-54.639 22.616L126 191h101.103l29.309-29.279c7.033-7.025 20.793-12.721 30.734-12.721h192.787L546 83H266.11zM644 0h119.771l-190 190H454L644 0zM660.376 114.6h100.587c56.569 0 100.951.728 101.497 1.637.545.91-.364 2.729-2.001 4.002-2.365 2.001-22.191 2.729-106.044 3.092l-102.952.364L630 145.524h37.106l37.288.182-23.646 22.556L657.102 191l110.046-.546c109.863-.364 110.045-.364 120.231-4.547 16.007-6.367 30.74-16.736 48.566-34.198 16.734-16.736 22.191-24.921 26.01-39.656 2.911-11.642-1.273-22.92-10.731-28.74-6.73-4.184-7.458-4.184-76.214-4.73-38.379-.364-71.01.91-71.01 0 0-.728 5-5.083 6.529-7.276l3.971-4.002h188.2L1070 0H776.06L660.376 114.6z",fill:"currentColor"}),n.a.createElement("path",{d:"M585 191h61.38L684 153h-61.38L585 191z",fill:"currentColor"}))),n.a.createElement("div",{className:"flex flex-1 items-center"},n.a.createElement(v,{className:"hidden sm:block"})),n.a.createElement("div",{className:"flex items-center"},n.a.createElement("button",{onClick:function(){return r(!a)},className:"sm:hidden py-3"},n.a.createElement("svg",{className:"text-white h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))))),a&&n.a.createElement("div",{onClick:function(){return r(!1)},className:"mt-2 text-sm bg-gray-200 w-full"},n.a.createElement(b.c,{to:"/results/drivers",className:"block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Drivers"),n.a.createElement(b.c,{to:"/results/constructors",className:"block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Constructors"),n.a.createElement(b.c,{to:"/results/races",className:"block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Races"),n.a.createElement(b.c,{to:"/results/fastestlap",className:"block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200"},"Fastest Laps")))}var f=a(2);function w(){var e=Object(l.useContext)(p);return n.a.createElement(x,null,n.a.createElement("h2",{className:"px-4 md:px-6 text-xl md:text-2xl"},"2020 Constructor Standings"),n.a.createElement("div",{className:"mt-2 sm:px-4 md:px-6"},n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,null,"Pos"),n.a.createElement(i,null,"Team"),n.a.createElement(i,{className:"text-right pr-4"},"Points")),n.a.createElement(o,null,e.constructors&&e.constructors.map((function(e){return n.a.createElement(u,{key:e.position},n.a.createElement(d,null,e.position),n.a.createElement(d,{className:"text-xs uppercase"},e.car),n.a.createElement(d,{className:"text-right text-gray-700 pr-4"},e.points))}))))))}function k(){var e=Object(l.useContext)(p);return n.a.createElement(x,null,n.a.createElement("h2",{className:"px-4 md:px-6 text-xl md:text-2xl"},"2020 Race Results"),n.a.createElement("div",{className:"mt-2 sm:px-4 md:px-6"},n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,{className:""},"Grand Prix"),n.a.createElement(i,{className:"hidden md:table-cell"},"Date"),n.a.createElement(i,{className:""},"Winner"),n.a.createElement(i,null,"Car"),n.a.createElement(i,{className:"hidden xs:table-cell"},"Laps"),n.a.createElement(i,{className:"hidden lg:table-cell"},"Time")),n.a.createElement(o,null,e.races&&e.races.map((function(e){return n.a.createElement(n.a.Fragment,null,e.winner&&n.a.createElement(u,{key:e.name},n.a.createElement(d,{className:""},n.a.createElement(b.b,{to:"/results/races/"+e.slug,className:"hover:underline"},e.name)),n.a.createElement(d,{className:"hidden md:table-cell"},e.date),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden lg:inline"},e.winner.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.winner.last),n.a.createElement("span",{className:"sm:hidden"},e.winner.abbr)),n.a.createElement(d,{className:"text-xs uppercase"},e.car),n.a.createElement(d,{className:"hidden xs:table-cell"},e.laps),n.a.createElement(d,{className:"hidden lg:table-cell"},e.time)))}))))))}function y(e){return n.a.createElement("div",{className:e.className},n.a.createElement("ul",{className:"text-gray-700 space-y-2"},e.links.map((function(t){return n.a.createElement("li",{key:t.href},n.a.createElement(b.c,{exact:!0,to:"/results/races/"+e.slug+t.href,activeClassName:"font-semibold text-gray-900",className:"w-full block hover:underline"},t.session))}))))}function C(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),r=a[0],s=a[1];return n.a.createElement("div",{className:e.className},n.a.createElement("button",{onClick:function(){return s(!r)},className:"relative z-10 flex items-baseline justify-between block text-gray-700 hover:text-gray-900 text-lg tracking-wide transition-font duration-200"},n.a.createElement("div",null,"Race"),n.a.createElement("div",null,r?n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})):n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})))),r&&n.a.createElement("button",{onClick:function(){return s(!1)},className:"absolute top-0 top-0 right-0 bottom-0 left-0 h-full w-full opacity-0 cursor-default"}),r&&n.a.createElement("div",{onClick:function(){s(!1)},className:"absolute py-2 w-48 text-sm bg-white rounded-md shadow-lg transition duration-500"},e.races.map((function(e){return n.a.createElement(b.c,{key:e.slug,to:"/results/races/"+e.slug,className:"block px-4 py-2 hover:bg-red-600 hover:text-white transition duration-200"},e.name)}))))}function L(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),r=a[0],s=a[1];return n.a.createElement("div",{className:e.className},n.a.createElement("div",{className:"items-center mx-6"},n.a.createElement("button",{onClick:function(){return s(!r)},to:"/results",className:"flex items-baseline justify-between block text-gray-700 hover:text-gray-900 text-lg tracking-wide transition-font duration-200"},n.a.createElement("div",null,"Race"),n.a.createElement("div",null,r?n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})):n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"}))))),r&&n.a.createElement("div",{onClick:function(){return s(!1)},className:"mt-2 text-sm bg-gray-200 w-full"},e.races.map((function(e){return n.a.createElement(b.c,{key:e.slug,to:"/results/races/"+e.slug,className:"block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200"},e.name)}))))}function j(e){var t=Object(l.useState)(!1),a=Object(E.a)(t,2),r=a[0],s=a[1];return n.a.createElement("div",{className:e.className},n.a.createElement("div",{className:"items-center mx-6"},n.a.createElement("button",{onClick:function(){return s(!r)},to:"/results",className:"flex items-baseline justify-between block text-gray-700 hover:text-gray-900 text-lg tracking-wide transition-font duration-200"},n.a.createElement("div",null,"Session"),n.a.createElement("div",null,r?n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})):n.a.createElement("svg",{className:"ml-1 w-3 h-3",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"}))))),r&&n.a.createElement("div",{onClick:function(){return s(!1)},className:"mt-2 text-sm bg-gray-200 w-full"},e.links.map((function(t){return n.a.createElement(b.c,{key:t.href,to:"/results/races/"+e.slug+t.href,className:"block px-6 py-2 hover:bg-red-600 hover:text-white transition duration-200"},t.session)}))))}function O(e){return n.a.createElement("div",{className:"flex-1 "+e.className},n.a.createElement("h2",{className:"text-xl mx-6 lg:mx-0 md:text-2xl"},"2020 "+e.name+" - Race Results"),n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,null,"Pos"),n.a.createElement(i,{className:"hidden lg:table-cell"},"No"),n.a.createElement(i,null,"Driver"),n.a.createElement(i,{className:"hidden md:table-cell"},"Car"),n.a.createElement(i,null,"Laps"),n.a.createElement(i,{className:"hidden sm:table-cell"},"Time/Retired"),n.a.createElement(i,{className:"text-right pr-4"},"Pts")),n.a.createElement(o,null,e.results&&e.results.map((function(e){return n.a.createElement(u,{key:e.driver.abbr},n.a.createElement(d,null,e.pos),n.a.createElement(d,{className:"hidden lg:table-cell"},e.driver.number),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden md:inline"},e.driver.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.driver.last),n.a.createElement("span",{className:"sm:hidden"},e.driver.abbr)),n.a.createElement(d,{className:"hidden md:table-cell text-xs uppercase"},e.car),n.a.createElement(d,null,e.laps),n.a.createElement(d,{className:"hidden sm:table-cell"},e.time),n.a.createElement(d,{className:"text-right pr-4"},e.points))})))))}function M(e){return n.a.createElement("div",{className:"flex-1 "+e.className},n.a.createElement("h2",{className:"text-xl mx-6 lg:mx-0 md:text-2xl"},"2020 "+e.name+" - Fastest Laps"),n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,null,"Pos"),n.a.createElement(i,{className:"hidden lg:table-cell"},"No"),n.a.createElement(i,null,"Driver"),n.a.createElement(i,{className:"hidden md:table-cell"},"Car"),n.a.createElement(i,null,"Lap"),n.a.createElement(i,null,"Time"),n.a.createElement(i,{className:"hidden sm:table-cell text-right pr-4"},"Avg Speed")),n.a.createElement(o,null,e.laps&&e.laps.map((function(e){return n.a.createElement(u,{key:e.driver.abbr},n.a.createElement(d,null,e.pos),n.a.createElement(d,{className:"hidden lg:table-cell"},e.driver.number),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden md:inline"},e.driver.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.driver.last),n.a.createElement("span",{className:"sm:hidden"},e.driver.abbr)),n.a.createElement(d,{className:"hidden md:table-cell text-xs uppercase"},e.car),n.a.createElement(d,null,e.lap),n.a.createElement(d,null,e.time),n.a.createElement(d,{className:"text-right pr-4 hidden sm:table-cell"},e.speed))})))))}function P(e){return n.a.createElement("div",{className:"flex-1 "+e.className},n.a.createElement("h2",{className:"text-xl mx-6 lg:mx-0 md:text-2xl"},"2020 "+e.name+" - Qualifying"),n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,null,"Pos"),n.a.createElement(i,{className:"hidden lg:table-cell"},"No"),n.a.createElement(i,null,"Driver"),n.a.createElement(i,{className:"hidden md:table-cell"},"Car"),n.a.createElement(i,null,"Q1"),n.a.createElement(i,null,"Q2"),n.a.createElement(i,null,"Q3"),n.a.createElement(i,{className:"hidden sm:table-cell"},"Laps")),n.a.createElement(o,null,e.laps&&e.laps.map((function(e){return n.a.createElement(u,{key:e.driver.abbr},n.a.createElement(d,null,e.pos),n.a.createElement(d,{className:"hidden lg:table-cell"},e.driver.number),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden md:inline"},e.driver.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.driver.last),n.a.createElement("span",{className:"sm:hidden"},e.driver.abbr)),n.a.createElement(d,{className:"hidden md:table-cell text-xs uppercase"},e.car),n.a.createElement(d,null,e.Q1),n.a.createElement(d,null,e.Q2),n.a.createElement(d,null,e.Q3),n.a.createElement(d,{className:"hidden sm:table-cell"},e.laps))})))))}function R(e){return n.a.createElement("div",{className:"flex-1 "+e.className},n.a.createElement("h2",{className:"text-xl mx-6 lg:mx-0 md:text-2xl"},"2020 "+e.name+" - "+e.session),n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,null,"Pos"),n.a.createElement(i,{className:"hidden lg:table-cell"},"No"),n.a.createElement(i,null,"Driver"),n.a.createElement(i,{className:"hidden md:table-cell"},"Car"),n.a.createElement(i,{className:""},"Time"),n.a.createElement(i,{className:"hidden sm:table-cell"},"Laps")),n.a.createElement(o,null,e.results&&e.results.map((function(e){return n.a.createElement(u,{key:e.driver.abbr},n.a.createElement(d,null,e.pos),n.a.createElement(d,{className:"hidden lg:table-cell"},e.driver.number),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden md:inline"},e.driver.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.driver.last),n.a.createElement("span",{className:"sm:hidden"},e.driver.abbr)),n.a.createElement(d,{className:"hidden md:table-cell text-xs uppercase"},e.car),n.a.createElement(d,null,e.time),n.a.createElement(d,{className:"hidden sm:table-cell"},e.laps))})))))}function S(e){var t=Object(l.useContext)(p),a=t.races?t.races.find((function(t){return t.slug===e.match.params.slug})):null,r=[],s=[{key:"race_results",session:"Race Results",href:"/raceresults",component:O},{key:"fastest_laps",session:"Fastest Laps",href:"/fastestlaps",component:M},{key:"qualifying",session:"Qualifying",href:"/qualifying",component:P},{key:"practice3",session:"Practice 3",href:"/practice3",component:R},{key:"practice2",session:"Practice 2",href:"/practice2",component:R},{key:"practice1",session:"Practice 1",href:"/practice1",component:R}];return a&&a.results&&s.forEach((function(e){e.key in a.results&&r.push({session:e.session,href:e.href,component:e.component})})),n.a.createElement(x,{className:"lg:flex lg:px-8 pt-4"},a&&n.a.createElement("div",{className:"lg:hidden pt-2"},n.a.createElement(L,{races:t.races}),n.a.createElement(j,{className:"mt-4",slug:a.slug,links:r})),a&&n.a.createElement("div",{className:"hidden lg:block w-1/6 mt-4"},n.a.createElement(C,{className:"",races:t.races}),n.a.createElement(y,{className:"mt-8",slug:a.slug,links:r})),a&&n.a.createElement("div",{className:"flex-1 mt-4"},n.a.createElement(f.d,null,n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug},a&&n.a.createElement(f.a,{to:"/results/races/"+a.slug+r[0].href})),n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug+"/raceresults"},n.a.createElement(O,{name:a.name,results:a.results.race_results})),n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug+"/fastestlaps"},n.a.createElement(M,{name:a.name,laps:a.results.fastest_laps})),n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug+"/qualifying"},n.a.createElement(P,{name:a.name,laps:a.results.qualifying})),n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug+"/practice1"},n.a.createElement(R,{name:a.name,session:"Practice 1",results:a.results.practice1})),n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug+"/practice2"},n.a.createElement(R,{name:a.name,session:"Practice 2",results:a.results.practice2})),n.a.createElement(f.b,{exact:!0,path:"/results/races/"+a.slug+"/practice3"},n.a.createElement(R,{name:a.name,session:"Practice 3",results:a.results.practice3})))))}function B(){var e=Object(l.useContext)(p);return n.a.createElement(x,null,n.a.createElement("h2",{className:"px-4 md:px-6 text-xl md:text-2xl"},"2020 Fastest Laps"),n.a.createElement("div",{className:"mt-2 sm:px-4 md:px-6"},n.a.createElement(c,{className:"mt-4"},n.a.createElement(m,null,n.a.createElement(i,null,"Grand Prix"),n.a.createElement(i,null,"Driver"),n.a.createElement(i,null,"Car"),n.a.createElement(i,null,"Time"),n.a.createElement(i,null,"Avg Speed")),n.a.createElement(o,null,e.races&&e.races.map((function(e){return n.a.createElement(n.a.Fragment,null,e.results.fastest_laps&&n.a.createElement(u,{key:e.name},n.a.createElement(d,null,n.a.createElement(b.b,{to:"/results/races/"+e.slug,className:"hover:underline"},e.name)),n.a.createElement(d,{className:"text-gray-700"},n.a.createElement("span",{className:"hidden md:inline"},e.results.fastest_laps[0].driver.first+" "),n.a.createElement("span",{className:"hidden sm:inline"},e.results.fastest_laps[0].driver.last),n.a.createElement("span",{className:"sm:hidden"},e.results.fastest_laps[0].driver.abbr)),n.a.createElement(d,{className:"text-xs uppercase"},e.results.fastest_laps[0].car),n.a.createElement(d,null,e.results.fastest_laps[0].time),n.a.createElement(d,null,e.results.fastest_laps[0].speed)))}))))))}var W=function(){return n.a.createElement(h,null,n.a.createElement(b.a,{basename:"/"},n.a.createElement("div",{className:"antialiased text-gray-900 bg-gray-100 h-screen overflow-hidden"},n.a.createElement(g,null),n.a.createElement("div",{className:"pt-4 pb-16 sm:px-4 h-screen overflow-auto"},n.a.createElement(f.d,null,n.a.createElement(f.b,{exact:!0,path:"/",component:N}),n.a.createElement(f.b,{exact:!0,path:"/results",component:N}),n.a.createElement(f.b,{path:"/results/drivers",component:N}),n.a.createElement(f.b,{path:"/results/constructors",component:w}),n.a.createElement(f.b,{exact:!0,path:"/results/races",component:k}),n.a.createElement(f.b,{path:"/results/races/:slug",component:S}),n.a.createElement(f.b,{exact:!0,path:"/results/fastestlap",component:B}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.21e67355.chunk.js.map