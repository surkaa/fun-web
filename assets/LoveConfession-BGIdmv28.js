import{d as C,r,b as l,c,a as e,e as i,t as g,u as p,n as x,o as v}from"./index-D2bBZKeS.js";function b(u){return`/fun-web/${u}`}const k={class:"container"},y={class:"express"},B={class:"hearts"},F=["textContent"],N=["src"],w={key:0,class:"buttons"},A=C({__name:"LoveConfession",setup(u){const s=r(0),t=r(!1),o=r(""),n=[{text:"ฅ•ω•ฅ 你...你确定吗？",svg:"/svgs/1F48C.svg"},{text:"٩(๑´0`๑)۶ 再想想哦～",svg:"/svgs/1F928.svg"},{text:"(｡•́︿•̀｡) 你会后悔的...",svg:"/svgs/1F620.svg"},{text:"＞︿＜ 没有后悔药哒！",svg:"/svgs/1F624.svg"},{text:"（＞д＜）最后一次机会！",svg:"/svgs/1F97A.svg"},{text:"o(´^｀)o 哼！不可以！",svg:"/svgs/1F97A.svg"}],d=l(()=>s.value>0?n[Math.min(s.value-1,n.length-1)].text:"不要"),m=l(()=>({transform:`scale(${1+s.value*.2})`})),h=l(()=>t.value?"/svgs/1F970.svg":n[Math.min(s.value,n.length-1)].svg),_=()=>{s.value+=1,o.value="❓"},f=()=>{t.value=!0,o.value="🎉💖🎉"};return(S,a)=>(v(),c("div",k,[e("div",y,[e("div",B,[a[0]||(a[0]=e("div",{class:"heart",draggable:"true"}," ❤️ ",-1)),e("span",{textContent:g(o.value)},null,8,F)]),e("img",{src:p(b)(h.value),alt:"character",class:"character"},null,8,N)]),t.value?i("",!0):(v(),c("div",w,[e("button",{id:"yesBtn",style:x(m.value),onClick:f}," 我愿意！ ",4),t.value?i("",!0):(v(),c("button",{key:0,id:"noBtn",onClick:_},g(d.value),1))])),a[1]||(a[1]=e("div",{class:"source-code"},[e("a",{href:"https://github.com/surkaa/fun-web/blob/master/src/views/LoveConfession.vue",target:"_blank",rel:"noopener noreferrer"}," 源码 ")],-1))]))}});export{A as default};
