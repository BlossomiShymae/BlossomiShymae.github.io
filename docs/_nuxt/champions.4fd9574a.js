import{_ as u}from"./axios.56a383d6.js";import{u as h,a as p}from"./dataDragon.f52df2ce.js";import{f as m,l as i,o as a,n as f,w as g,a as t,t as o,j as c,c as _,q as y,F as w}from"./entry.c20171d7.js";const x={class:"px-4 py-4"},C=t("h2",null,"League of Legends Champions Viewer",-1),b={class:"text-muted"},k={class:"table table-striped table-hover"},v=t("thead",null,[t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"Icon"),t("th",{scope:"col"},"Key"),t("th",{scope:"col"},"Name"),t("th",{scope:"col"},"Title")],-1),B=["id"],L={scope:"row"},V={class:"img-fluid"},D=["src"],z=m({__name:"champions",async setup(F){let e,n;const{version:l}=([e,n]=i(()=>h()),e=await e,n(),e),d=([e,n]=i(()=>p(l)),e=await e,n(),e);return(I,N)=>{const r=u;return a(),f(r,null,{default:g(()=>[t("div",x,[C,t("h5",b,"Patch "+o(c(l)),1),t("table",k,[v,t("tbody",null,[(a(!0),_(w,null,y(c(d),s=>(a(),_("tr",{id:s.key},[t("th",L,o(s.key),1),t("td",null,[t("div",V,[t("img",{src:`http://ddragon.leagueoflegends.com/cdn/${c(l)}/img/champion/${s.image.full}`,style:{width:"24px"},class:"rounded",loading:"lazy"},null,8,D)])]),t("td",null,o(s.id),1),t("td",null,o(s.name),1),t("td",null,o(s.title),1)],8,B))),256))])])])]),_:1})}}});export{z as default};
