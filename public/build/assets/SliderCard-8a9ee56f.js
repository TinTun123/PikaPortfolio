import{j as e,f as l,e as a,A as n}from"./app-35991081.js";const i=({slider:s,handleDeleteModal:t})=>e.jsxs("div",{className:" w-full p-4 shadow-lg hover:shadow-2xl flex flex-col sm:flex-row gap-5",children:[e.jsx("img",{className:"w-[300px] mx-auto object-cover ",src:s.image,alt:""}),e.jsxs("div",{className:"flex flex-col gap-5 w-full justify-between",children:[e.jsxs("div",{children:[e.jsxs("p",{children:["Has Button : ",s.has_button?"Yes":"No"]}),s.has_button&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Button Text : ",s.button_text]}),e.jsxs("p",{children:["Button Link : ",e.jsx("a",{href:s.button_link,target:"_black",className:"hover:text-primary hover:underline",children:s.button_link})]})]})]}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("div",{className:"flex gap-5",children:[e.jsx(l,{href:route("admin.slider.edit",s.id),className:"text-2xl ",children:e.jsx(a,{})}),e.jsx("button",{onClick:()=>t(s.id),className:"text-2xl text-primary",children:e.jsx(n,{})})]})})]})]});export{i as default};