import{j as o}from"./jsx-runtime-DQ32znRX.js";function t({label:l,className:k,children:v,...B}){return o.jsxs("div",{className:"relative",children:[l&&o.jsx("label",{className:"absolute pt-3 pl-5 pr-5 text-4xl font-extrabold",children:l}),o.jsx("textarea",{cols:30,rows:7,className:`resize-none bg-dark text-gray-primary text-md leading-6 rounded-md disabled:bg-disabled disabled:text-disabled disabled:border-2 disabled:border-disabled pl-5 pr-5 ${l?"pt-4xl":"pt-5"} ${k}`,...B})]})}try{t.displayName="TextBlock",t.__docgenInfo={description:"",displayName:"TextBlock",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const _={title:"Molecules/TextBlock",component:t,argTypes:{disabled:{type:"boolean"}}},e={args:{value:"TextBlock"}},a={args:{value:"TextBlock",disabled:!0}},r={args:{value:"TextBlock",label:"Label of TextBlock"}},s={args:{value:"TextBlock",label:"Label of TextBlock",disabled:!0}};var c,d,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: "TextBlock"
  }
}`,...(n=(d=e.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,p,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    value: "TextBlock",
    disabled: true
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,u,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: "TextBlock",
    label: "Label of TextBlock"
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,y,T;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: "TextBlock",
    label: "Label of TextBlock",
    disabled: true
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const f=["Primary","PrimaryDisabled","PrimaryLabel","PrimaryLabelDisabled"],L=Object.freeze(Object.defineProperty({__proto__:null,Primary:e,PrimaryDisabled:a,PrimaryLabel:r,PrimaryLabelDisabled:s,__namedExportsOrder:f,default:_},Symbol.toStringTag,{value:"Module"}));export{e as P,L as S,a,r as b,s as c};
