import{j as b}from"./jsx-runtime-DQ32znRX.js";function s({children:n,href:g,disabled:t,className:f,...y}){return b.jsx("a",{href:t?void 0:g,className:`text-primary aria-disabled:text-disabled ${f}`,"aria-disabled":t,...y,children:n})}try{s.displayName="Link",s.__docgenInfo={description:"",displayName:"Link",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Molecules/Link",component:s,argTypes:{children:{type:"string"},href:{type:"string"},disabled:{type:"boolean"},className:{type:"string"}}},e={args:{children:"Link",href:"/"}},r={args:{children:"Link",href:"/",disabled:!0}},a={args:{children:"Link",href:"/",className:"theme-violet"}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Link",
    href: "/"
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Link",
    href: "/",
    disabled: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: "Link",
    href: "/",
    className: "theme-violet"
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const k=["Primary","Disabled","Violet"],x=Object.freeze(Object.defineProperty({__proto__:null,Disabled:r,Primary:e,Violet:a,__namedExportsOrder:k,default:_},Symbol.toStringTag,{value:"Module"}));export{r as D,e as P,x as S,a as V};
