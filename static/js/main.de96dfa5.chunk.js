(this["webpackJsonpignat-homework"]=this["webpackJsonpignat-homework"]||[]).push([[0],[,,,function(e,t,a){e.exports={list:"Matters_list__YvJfd",high:"Matters_high__2bd92",medium:"Matters_medium__2i88a",low:"Matters_low__ARuko",inactive:"Matters_inactive__3Du7Y",priority:"Matters_priority__1PZai"}},,,function(e,t,a){e.exports={wrapper:"Message_wrapper__1wZzo",messageAnim:"Message_messageAnim__14uVg",img:"Message_img__2GcJr",cloud:"Message_cloud__1B7AV",name:"Message_name__3NTgP",message:"Message_message__1Y5Gk",time:"Message_time__1bscx"}},,,function(e,t,a){e.exports={wrapper:"HomeWork3_wrapper__mLm05",button:"HomeWork3_button__1u6xn",counter:"HomeWork3_counter__281R1"}},,function(e,t,a){e.exports={button:"Button_button__17Bf0"}},function(e,t,a){e.exports={input:"Input_input__2YE-2",error:"Input_error__1_2Mi"}},,,,,,,function(e,t,a){e.exports={name:"FullName_name__3kKTb",nameAnim:"FullName_nameAnim__3osDg"}},,,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),i=(a(28),a(29),a(19)),l=a.n(i);var m=function(e){return r.a.createElement("div",null,r.a.createElement("p",{className:l.a.name},e.message))},s=a(6),u=a.n(s);var _=function(e){return r.a.createElement("div",{className:u.a.wrapper},r.a.createElement("div",null,r.a.createElement("img",{className:u.a.img,src:"https://pbs.twimg.com/profile_images/1085971393659981824/0eEoQ2Xd_400x400.jpg",alt:"avatar"})),r.a.createElement("div",{className:u.a.cloud},r.a.createElement("p",{className:u.a.name},e.name),r.a.createElement("p",{className:u.a.message},e.message),r.a.createElement("p",{className:u.a.time},e.time)))},h=a(5),p=a(3),E=a.n(p),g=a(11),d=a.n(g);var v=function(e){return r.a.createElement("button",Object.assign({onClick:e.onClick,className:[d.a.button,e.error?d.a.error:""].join("")},e),e.text)};var f=function(){var e=[{id:1,title:"job",priority:"high"},{id:2,title:"gym",priority:"medium"},{id:3,title:"girlfriend",priority:"high"},{id:4,title:"university",priority:"low"},{id:5,title:"courses",priority:"high"}],t=Object(n.useState)(e),a=Object(h.a)(t,2),o=a[0],c=a[1];function i(e){return"high"===e.priority?E.a.high:"medium"===e.priority?E.a.medium:"low"===e.priority?E.a.low:E.a.inactive}var l=o.map((function(e){return r.a.createElement("li",{className:E.a.list,key:e.id},r.a.createElement("div",{className:"".concat(E.a.priority," ").concat(i(e))},e.title," ",e.priority),r.a.createElement(v,{className:E.a.low,onClick:function(){!function(e){var t=o.filter((function(t){return t.id!==e}));c(t)}(e.id)},text:"X"}))})),m=r.a.createElement("li",{className:E.a.list},r.a.createElement("span",null,"Sort by priority "),r.a.createElement(v,{onClick:function(){s("all")},className:E.a.inactive,text:"All"}),r.a.createElement(v,{onClick:function(){s("high")},className:E.a.high,text:"High"}),r.a.createElement(v,{onClick:function(){s("medium")},className:E.a.medium,text:"Medium"}),r.a.createElement(v,{onClick:function(){s("low")},className:E.a.low,text:"Low"}));function s(t){var a;a="all"===t?e:e.filter((function(e){return e.priority===t})),c(a)}return r.a.createElement("ul",null,l,m)},w=a(7),k=a(1),N=a(9),b=a.n(N),C=a(37),x=a(22),y=a(12),M=a.n(y),j=a(20),O=a.n(j);var H=function(e){var t=e.onEnter,a=e.error,n=Object(x.a)(e,["onEnter","error"]),o=O()(M.a.input,e.error?"".concat(M.a.error):"");return r.a.createElement(r.a.Fragment,null,"                    ",r.a.createElement("input",Object.assign({className:o,onKeyPress:function(e){13===e.charCode&&t&&t()},placeholder:a?"ERROR":""},n,{type:"text"})))},A=[];var B=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(0),i=Object(h.a)(c,2),l=i[0],m=i[1],s=function(){return a&&(A.push({id:Object(C.a)(),name:a}),m(A.length),alert("Hello ".concat(a)),void o(""))},u=A.map((function(e){return" "+e.name}));return r.a.createElement("div",{className:b.a.wrapper},r.a.createElement(H,{value:a,onChange:function(e){return o(e.currentTarget.value)},onEnter:s,error:!a}),r.a.createElement(v,{className:b.a.button,onClick:s,text:"Hello"}),r.a.createElement("span",{className:b.a.counter},"Names Counter: ",l),r.a.createElement(v,{text:"Alert all names",onClick:function(){alert(u)}}))};function S(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Added my own common Button, CheckBox, Input components"))}function W(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),o=a[0],c=a[1],i=function(){c(!1),e.onChange(e.value)};return o?r.a.createElement(H,{value:e.value,autoFocus:!0,onBlur:function(){return i()},onChange:function(t){return e.onChange(t.currentTarget.value)},onKeyPress:function(e){return 13===e.charCode&&i()}}):r.a.createElement("span",{onDoubleClick:function(){return c(!0),void e.onChange(e.value)}},e.value)}function F(){var e=Object(n.useState)("DOUBLE CLICK ME"),t=Object(h.a)(e,2),a=t[0],o=t[1];return r.a.createElement(W,{value:a,onChange:o})}var I=function(){return r.a.createElement(w.a,null,r.a.createElement("div",{className:"header"},r.a.createElement(w.b,{exact:!0,to:"/homework_1",className:"hw",activeClassName:"hw-active"},"Homework \u21161 "),r.a.createElement(w.b,{exact:!0,to:"/homework_2",className:"hw",activeClassName:"hw-active"},"Homework \u21162 "),r.a.createElement(w.b,{exact:!0,to:"/homework_3",className:"hw",activeClassName:"hw-active"},"Homework \u21163"),r.a.createElement(w.b,{exact:!0,to:"/homework_4",className:"hw",activeClassName:"hw-active"},"Homework \u21164"),r.a.createElement(w.b,{exact:!0,to:"/homework_5",className:"hw",activeClassName:"hw-active"},"Homework \u21165")),r.a.createElement("div",{className:"App"},r.a.createElement(k.a,{path:"/homework_1",render:function(){return r.a.createElement(m,{message:"\u0422\u044b\u0448\u043a\u0435\u0432\u0438\u0447 \u041c\u0438\u0445\u0430\u0438\u043b \u041a\u0430\u0437\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"})}}),r.a.createElement(k.a,{path:"/homework_1",render:function(){return r.a.createElement(_,{name:"Kenshiro",message:"Omae Wa Mou Shindeiru",time:"04:20"})}}),r.a.createElement(k.a,{path:"/homework_2",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(k.a,{path:"/homework_3",render:function(){return r.a.createElement(B,null)}}),r.a.createElement(k.a,{path:"/homework_4",render:function(){return r.a.createElement(S,null)}}),r.a.createElement(k.a,{path:"/homework_5",render:function(){return r.a.createElement(F,null)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.de96dfa5.chunk.js.map