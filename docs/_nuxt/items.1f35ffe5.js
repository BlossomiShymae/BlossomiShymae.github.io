import{_ as h}from"./axios.56a383d6.js";import{u as p,b as m}from"./dataDragon.f52df2ce.js";import{f as g,l as r,o as a,n as f,w,a as t,t as o,j as c,c as _,q as x,F as y,s as b}from"./entry.c20171d7.js";const C={class:"px-4 py-4"},$=t("h2",null,"League of Legends Items Viewer",-1),v={class:"text-muted"},B={class:"table table-striped table-hover"},I=t("thead",null,[t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"Icon"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Cost"),t("th",{scope:"col"},"Sell")],-1),k=["id"],L={scope:"row"},V={class:"img-fluid"},z=["src"],A=g({__name:"items",async setup(D){let e,l;const{version:n}=([e,l]=r(()=>p()),e=await e,l(),e),i=([e,l]=r(()=>m(n)),e=await e,l(),e);return(F,N)=>{const u=h;return a(),f(u,null,{default:w(()=>[t("div",C,[$,t("h5",v,"Patch "+o(c(n)),1),t("table",B,[I,t("tbody",null,[(a(!0),_(y,null,x(c(i),(s,d)=>(a(),_("tr",{id:`${d}`,class:b(`${s.gold.total===0?"table-info":""}`)},[t("th",L,o(d),1),t("td",null,[t("div",V,[t("img",{src:`http://ddragon.leagueoflegends.com/cdn/${c(n)}/img/item/${s.image.full}`,style:{width:"24px"},class:"rounded",loading:"lazy"},null,8,z)])]),t("td",null,o(s.name.replace(/<\/?[^>]+(>|$)/g," ")),1),t("td",null,o(s.gold.total),1),t("td",null,o(s.gold.sell),1)],10,k))),256))])])])]),_:1})}}});export{A as default};
