import{_,A as g,o as d,c as u,a as t,b as o,w as c,d as i,R as x,T as f,Q as b,H as m,m as l,U as k}from"./DNSY3ypw.js";import{_ as w}from"./706zBPXU.js";const y={class:"bg-success px-2"},T={class:"navbar navbar-expand-sm navbar-dark",fixed:"top"},N={class:"navbar-nav ms-auto"},j={__name:"Header",setup(p){const a=g(),s=async()=>{await a.signOut()};return(n,e)=>{const r=w;return d(),u("div",y,[t("nav",T,[o(r,{class:"navbar-brand d-sm-block d-none",to:"/"},{default:c(()=>e[1]||(e[1]=[i("Johnston Software Development")])),_:1}),o(r,{class:"navbar-brand d-sm-none",to:"/"},{default:c(()=>e[2]||(e[2]=[i("JS Development")])),_:1}),t("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",onClick:e[0]||(e[0]=v=>n.visible=!n.visible)},e[3]||(e[3]=[t("span",{class:"navbar-toggler-icon"},null,-1)])),t("div",{id:"navbarNavDropdown",class:x(["collapse navbar-collapse",{show:n.visible}])},[t("div",N,[o(r,{class:"nav-item",to:"/projects","active-class":"active"},{default:c(()=>e[4]||(e[4]=[i("Projects")])),_:1}),f(a).user?(d(),b(r,{key:0,class:"nav-item",to:"/admin","active-class":"active"},{default:c(()=>e[5]||(e[5]=[i("Admin")])),_:1})):m("",!0),f(a).user?(d(),b(r,{key:1,class:"nav-item","active-class":"active",onClick:s},{default:c(()=>e[6]||(e[6]=[i("Logout")])),_:1})):m("",!0)])],2)])])}}},C=_(j,[["__scopeId","data-v-045cb6da"]]),B={class:"d-flex justify-content-around social-footer m-0"},D={class:"social-footer-icons"},H={class:"p-2 col-sm-3 text-secondary",href:"https://github.com/derekjj"},V={class:"p-2 col-sm-3 text-secondary",href:"https://www.linkedin.com/company/johnston-software-development"};function F(p,a){const s=l("font-awesome-icon"),n=l("router-link");return d(),u("footer",B,[t("div",D,[t("a",H,[o(s,{"aria-hidden":"true",icon:["fab","github"]})]),t("a",V,[o(s,{"aria-hidden":"true",icon:["fab","linkedin"]})]),o(n,{class:"p-2 col-sm-3 text-secondary",to:"/contact"},{default:c(()=>[o(s,{"aria-hidden":"true",icon:["fa","address-card"]})]),_:1})])])}const I={},L=_(I,[["render",F],["__scopeId","data-v-82e4b5da"]]),P={props:{loading:{type:Boolean,required:!0}}},S={key:0,class:"loader-overlay"};function A(p,a,s,n,e,r){return s.loading?(d(),u("div",S,a[0]||(a[0]=[t("div",{class:"loader"},null,-1)]))):m("",!0)}const J=_(P,[["render",A],["__scopeId","data-v-9471e9fd"]]),q={class:"body-container"};function z(p,a,s,n,e,r){const v=l("TheHeader"),h=k,$=l("TheFooter");return d(),u("div",q,[o(v),o(h,{class:"body mb-2"}),o($)])}const E=g(),M={components:{TheHeader:C,TheFooter:L,TheLoader:J},middleware:"auth",async mounted(){console.log("mounted"),await E.loadProjects()}},R=_(M,[["render",z]]);export{R as default};
