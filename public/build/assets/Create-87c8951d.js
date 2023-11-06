import{q as j,r as b,j as e,B as f}from"./app-2def812d.js";import{U as v}from"./Uploader-2f4239fe.js";import{I as c}from"./Input-3362f6dd.js";import{R as m,L as u}from"./Tooltip-9804d48c.js";import{s as B}from"./Methods-cf00aebb.js";import{B as N}from"./BackButton-1f0be98f.js";import"./index.esm-a1bab097.js";const y=({slider:a})=>{const{data:s,setData:o,post:d,errors:n,processing:x}=j(a??{has_button:!0}),[r,h]=b.useState(a?a.has_button:!0),p=t=>{o(l=>({...l,image:t}))},g=t=>{t.preventDefault();let l=a?route("admin.slider.update",a.id):route("admin.slider.store");d(l,{onSuccess:()=>{B(`Slider is ${a?"updated":"created"}`)}})},i=t=>{h(t),o("has_button",t)};return e.jsxs(e.Fragment,{children:[e.jsx(N,{href:route("admin.slider.index")}),e.jsxs("form",{onSubmit:g,className:"grid grid-cols-1 lg:grid-cols-3 p-4 gap-5",children:[e.jsxs("div",{children:[e.jsx(v,{onRemoveFile:()=>o("image",null),photo:s==null?void 0:s.image,onUpload:p}),e.jsx("p",{className:"text-red-500 text-sm",children:n.image})]}),e.jsxs("div",{className:"flex flex-col gap-3 col-span-2",children:[e.jsx("p",{className:"font-medium",children:"Has Button"}),e.jsxs("div",{className:"flex gap-5 mb-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{onChange:t=>i(!0),id:"yes",name:"hasButton",value:!0,checked:r,className:"!text-black"}),e.jsx(u,{htmlFor:"yes",className:"!text-black",children:"Yes"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:"no",onChange:t=>i(!1),name:"hasButton",checked:!r,value:!1}),e.jsx(u,{htmlFor:"no",className:"!text-black",children:"No"})]})]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(c,{error:n.button_text,label:"Button Text",value:(s==null?void 0:s.button_text)??"",onChange:t=>o("button_text",t.target.value)}),e.jsx(c,{error:n.button_link,label:"Button Link",value:(s==null?void 0:s.button_link)??"",onChange:t=>o("button_link",t.target.value)})]}),e.jsx(f,{loading:x,type:"submit",className:"rounded-md w-full",children:"Submit"})]})]})]})};export{y as default};
