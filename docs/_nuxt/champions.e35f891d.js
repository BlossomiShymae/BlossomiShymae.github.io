import{_ as u}from"./client-only.11fc855a.js";import{f as _,u as p,v as r,o as c,c as d,b as g,w as f,a as s,t as o,l,F as b,x as y,d as i}from"./entry.77764809.js";import{u as v,a as w}from"./dataDragon.4d304d5a.js";import"./axios.4a70c6fc.js";const x={class:"px-4 py-4"},C=s("h2",null,"Champions",-1),k=s("p",{class:"mb-0"},[i(" Champion data displayed here comes from DataDragon as "),s("b",null,"champion.json"),i(": ")],-1),j=s("p",{class:"mb-0"},"Where the following format is used:",-1),D=s("p",{class:"mb-0"},[i(" For more information, "),s("b",null,"championFull.json"),i(" is available as well: ")],-1),F={class:"alert alert-info"},N=s("b",null,"📝 Note",-1),V=s("p",{class:"mb-0"}," DataDragon is known to have missing information, inaccurate data, and other quirky thingies. Use other analogs such as CommunityDragon and MerakiAnalytics if this is an issue: ",-1),B={class:"mb-0"},S={class:"mb-0"},U={class:"text-muted mb-3"},$={class:"border rounded p-3"},A={class:"table table-striped table-hover"},I=s("thead",null,[s("th",{scope:"col"},"ID"),s("th",{scope:"col"},"Icon"),s("th",{scope:"col"},"Key"),s("th",{scope:"col"},"Name"),s("th",{scope:"col"},"Title")],-1),T=["id"],q={scope:"row"},z={class:"img-fluid"},E=["src"],G=_({__name:"champions",async setup(H){let e,a;p({title:"Champions Viewer - blossomishymae.github.io"});const{version:n}=([e,a]=r(()=>v()),e=await e,a(),e),h=([e,a]=r(()=>w(n)),e=await e,a(),e);return(K,L)=>{const m=u;return c(),d("div",x,[g(m,null,{default:f(()=>[C,k,s("p",null,[s("code",null,o(`https://ddragon.leagueoflegends.com/cdn/${l(n)}/data/en_US/champion.json`),1)]),j,s("p",null,[s("code",null,o("https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/champion.json"),1)]),D,s("p",null,[s("code",null,o("https://ddragon.leagueoflegends.com/cdn/{version}/data/{locale}/championFull.json"),1)]),s("div",F,[N,V,s("p",B,[s("code",null,o("https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/{id}.json"),1)]),s("p",S,[s("code",null,o("https://cdn.merakianalytics.com/riot/lol/resources/latest/en-US/champions.json"),1)])]),s("h5",U,"Patch "+o(l(n)),1),s("div",$,[s("table",A,[I,s("tbody",null,[(c(!0),d(b,null,y(l(h),t=>(c(),d("tr",{id:t.key},[s("th",q,o(t.key),1),s("td",null,[s("div",z,[s("img",{src:`http://ddragon.leagueoflegends.com/cdn/${l(n)}/img/champion/${t.image.full}`,style:{width:"24px"},class:"rounded",loading:"lazy"},null,8,E)])]),s("td",null,o(t.id),1),s("td",null,o(t.name),1),s("td",null,o(t.title),1)],8,T))),256))])])])]),_:1})])}}});export{G as default};
