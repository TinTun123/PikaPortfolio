import{r as t,q as g,P as C,j as e,A as w}from"./app-fd5206a1.js";import{T,a as v,b as o}from"./TableData-b6ef8aac.js";import{C as E}from"./Copy-7a3f79c2.js";import{P as D}from"./Paginator-ba557791.js";import{C as M}from"./ConfirmModal-87d9d7fb.js";import{s as P}from"./Methods-68fc1655.js";import{I as y}from"./Input-c30d62ac.js";import{l as k}from"./lodash-6266f729.js";import"./index.esm-ec3ef85a.js";import"./Modal-e5e20d5b.js";const H=({subscribers:i,filters:l})=>{const[r,c]=t.useState(l.search??""),[n,m]=t.useState(!0),[d,a]=t.useState(!1),[u,f]=t.useState(null),{delete:p,processing:x}=g({}),h=s=>{a(!0),f(s)},b=()=>{let s={};return r&&(s.search=r),s},S=k.debounce(function(){C.get(route("admin.subscriber.index"),b(),{preserveScroll:!0,preserveState:!0})},300);t.useEffect(()=>{n||S()},[r]),t.useEffect(()=>{m(!1)},[]);const j=()=>{p(route("admin.subscriber.destroy",u),{onSuccess:()=>{P("Subscriber Mail is deleted!"),a(!1)}})};return e.jsxs("div",{className:"p-4 bg-white",children:[e.jsx(M,{show:d,loading:x,onCancel:()=>a(!1),onConfirm:j}),e.jsx(y,{placeholder:"Search mail",value:r,onChange:s=>c(s.target.value),className:"w-[100%] md:w-[70%] lg:w-[50%]"}),e.jsx(T,{columns:[{field:"Email"},{field:"Actions"}],children:i.data.map(s=>e.jsxs(v,{children:[e.jsx(o,{children:e.jsx(E,{text:s.email,children:s.email})}),e.jsx(o,{children:e.jsx("button",{onClick:()=>h(s.id),className:"text-2xl text-primary",children:e.jsx(w,{})})})]},s.id))}),e.jsx("div",{children:e.jsx(D,{links:i.links})})]})};export{H as default};