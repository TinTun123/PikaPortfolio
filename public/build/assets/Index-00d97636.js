import{r as s,j as e,B as f,P as x}from"./app-2def812d.js";import{C as p}from"./ConfirmModal-1c79807d.js";import h from"./SliderCard-808dc863.js";import"./Modal-26367a10.js";const C=({sliders:t})=>{const[o,n]=s.useState(!1),[r,l]=s.useState(!1),[i,d]=s.useState(null),c=a=>{d(a),n(!0)},m=async()=>{l(!0),x.delete(route("admin.slider.destroy",i),{onFinish:()=>{l(!1),n(!1)}})};return e.jsxs("div",{children:[e.jsx(p,{loading:r,onCancel:()=>n(!1),onConfirm:m,show:o}),e.jsx("div",{className:"p-4 pr-0 pt-0 text-end",children:e.jsx(f,{href:route("admin.slider.create"),children:"Create Slider"})}),e.jsxs("div",{className:"p-4 bg-white flex flex-col gap-4 min-h-screen",children:[t.length===0&&e.jsx("div",{className:"flex justify-center mt-20",children:"No Slider Yet"}),t.length>0&&(t==null?void 0:t.map(a=>e.jsx(h,{handleDeleteModal:c,slider:a},a.id)))]})]})};export{C as default};
