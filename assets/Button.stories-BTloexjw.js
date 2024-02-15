import{j as F}from"./jsx-runtime-DQ32znRX.js";function G(l,e){switch(l){case"primary":return e?"bg-disabled text-disabled":"bg-primary text-white";case"secondary":return e?"bg-disabled text-disabled":"bg-quaternary text-primary";case"tertiary":return e?"bg-disabled text-disabled":"text-tertiary";default:return""}}function m({variant:l="primary",children:e,className:A,disabled:p,...C}){return F.jsx("button",{className:`rounded-md px-6 py-2 ${G(l,p)} ${A}`,disabled:p,...C,children:e})}try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const H={title:"Molecules/Button",component:m,argTypes:{children:{type:"string"},disabled:{type:"boolean"},className:{type:"string"}}},r={args:{children:"Botão"}},a={args:{children:"Botão",disabled:!0}},t={args:{children:"Botão",variant:"secondary"}},s={args:{children:"Botão",variant:"secondary",disabled:!0}},o={args:{children:"Botão",variant:"tertiary"}},n={args:{children:"Botão",variant:"tertiary",disabled:!0}},c={args:{children:"Botão",className:"theme-violet"}},i={args:{children:"Botão",variant:"secondary",className:"theme-violet"}},d={args:{children:"Botão",variant:"tertiary",className:"theme-violet"}};var u,y,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Botão"
  }
}`,...(g=(y=r.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,b,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    disabled: true
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var B,x,S;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    variant: "secondary"
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var _,E,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    variant: "secondary",
    disabled: true
  }
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var N,T,V;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    variant: "tertiary"
  }
}`,...(V=(T=o.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var D,j,P;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    variant: "tertiary",
    disabled: true
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var O,q,w;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    className: "theme-violet"
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var M,$,z;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    variant: "secondary",
    className: "theme-violet"
  }
}`,...(z=($=i.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var I,R,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Botão",
    variant: "tertiary",
    className: "theme-violet"
  }
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const J=["Primary","Disabled","Secondary","SecondaryDisabled","Tertiary","TertiaryDisabled","Violet","VioletSecondary","VioletTertiary"],L=Object.freeze(Object.defineProperty({__proto__:null,Disabled:a,Primary:r,Secondary:t,SecondaryDisabled:s,Tertiary:o,TertiaryDisabled:n,Violet:c,VioletSecondary:i,VioletTertiary:d,__namedExportsOrder:J,default:H},Symbol.toStringTag,{value:"Module"}));export{a as D,r as P,L as S,o as T,c as V,t as a,s as b,n as c,i as d,d as e};
