import{_ as m}from"./axios.247f7b71.js";import{f as h,u as p,s as i,o as r,c as d,b,w as f,a as e,t as a,l as c,F as g,v as y,d as s,n as v}from"./entry.6ae515d7.js";import{u as w,c as D}from"./dataDragon.5a22c7ce.js";const x={class:"p-4"},R=e("h2",null,"Runes",-1),C=e("p",{class:"mb-0"},[s(" Rune data displayed here comes from DataDragon as "),e("b",null,"runesReforged.json"),s(": ")],-1),S=e("p",{class:"mb-0"},"Where the following format is used:",-1),k=e("p",{class:"alert alert-info"},[e("b",null,"📝 Note"),e("p",{class:"mb-0"},[s("Runes are also referred to as "),e("b",null,"perks"),s(" when it comes to static data.")])],-1),V=e("p",{class:"alert alert-success"},[e("b",null,"🌳 Rune Tree"),e("p",null,"A rune tree is any rune with an ID divisible by 100."),e("p",{class:"mb-0"},"So when using the Riot API:"),e("p",{class:"mb-0"},[e("b",null,"perkStyle"),s(" - primary rune tree")]),e("p",null,[e("b",null,"perkSubStyle"),s(" - secondary rune tree")])],-1),F=e("p",{class:"mb-0"},"The CommunityDragon data analog can be found here:",-1),N=e("div",{class:"alert alert-primary"},[e("b",null,"🧩 Variables"),e("p",null,[e("b",null,"var1"),s(", "),e("b",null,"var2"),s(", and "),e("b",null,"var3"),s(" are variable data a rune will use for a match. For reference, see the "),e("b",null,"endOfGameStatDescs"),s(" fields for the CommunityDragon data file. ")]),e("p",{class:"mb-0"},[s("For example, Future's Market will use "),e("b",null,"var1"),s(" for Damage Dealt and "),e("b",null,"var2"),s(" for Gold Gained.")])],-1),j={class:"text-muted mb-3"},I={class:"border rounded p-3"},A={class:"table table-striped table-hover"},B=e("thead",null,[e("th",{scope:"col"},"ID"),e("th",{scope:"col"},"Icon"),e("th",{scope:"col"},"Name")],-1),G=["id"],P={scope:"row"},T={class:"img-fluid"},$=["src"],U=h({__name:"runes",async setup(z){let t,n;p({title:"Runes Viewer - blossomishymae.github.io"});const{version:o}=([t,n]=i(()=>w()),t=await t,n(),t),u=([t,n]=i(()=>D(o)),t=await t,n(),t);return(O,E)=>{const _=m;return r(),d("div",x,[b(_,null,{default:f(()=>[R,C,e("p",null,[e("code",null,a(`https://ddragon.leagueoflegends.com/cdn/${c(o)}/data/en_US/runesReforged.json`),1)]),S,e("p",null,[e("code",null,a("https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/runesReforged.json"),1)]),k,V,F,e("p",null,[e("code",null,a("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perks.json"),1)]),N,e("h5",j,"Patch "+a(c(o)),1),e("div",I,[e("table",A,[B,e("tbody",null,[(r(!0),d(g,null,y(c(u),l=>(r(),d("tr",{id:l.id,class:v(`${l.id%100===0?"table-dark":""}`)},[e("th",P,a(l.id),1),e("td",null,[e("div",T,[e("img",{src:`http://ddragon.leagueoflegends.com/cdn/img/${l.icon}`,style:{width:"24px"},class:"rounded",loading:"lazy"},null,8,$)])]),e("td",null,a(l.name),1)],10,G))),256))])])])]),_:1})])}}});export{U as default};
