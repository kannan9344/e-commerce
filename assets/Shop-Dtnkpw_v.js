import{r as d,C as p,j as s,L as y}from"./index-DGSkf-aL.js";const F=()=>{const{productdata:c,setproductData:n,setFav:j,fav:m,setImage:N,cart:o,setCart:v}=d.useContext(p),[x,C]=d.useState(!1),g=e=>{N(e.img)},f=e=>{o.includes(e)||v([...o,e])},k=e=>{m.includes(e)||j([...m,e])},[h,u]=d.useState(c),a=e=>{if(e=="All")n(h);else{let r=h.filter(l=>l.category==e||l.text==e);n(r)}},i=(e,r)=>{let l=c.filter(t=>{if(t.rate>=e&&t.rate<=r)return t});n(l)};return s.jsxs("div",{className:"shop-container",children:[s.jsxs("div",{className:"top",children:[s.jsx("h2",{children:"SHOP"}),s.jsx("div",{className:"fil-btn",onClick:()=>C(!x),children:"Filter"})]}),s.jsxs("div",{className:"shop-row",children:[s.jsxs("div",{className:x?"shop-col active":"shop-col",children:[s.jsx("strong",{children:"Categories"}),s.jsxs("div",{className:"shop-category",children:[s.jsx("div",{className:"category",onClick:()=>a("All"),children:"All"}),s.jsx("div",{className:"category",onClick:()=>a("Vegitables"),children:"Vegitables"}),s.jsx("div",{className:"category",onClick:()=>a("Fruits"),children:"Fruits"}),s.jsx("div",{className:"category",onClick:()=>a("DryFruits"),children:"DryFruits"}),s.jsx("div",{className:"category",onClick:()=>a("Meat"),children:"Meat"}),s.jsx("div",{className:"category",onClick:()=>a("Milk & Egg"),children:"Milk & Egg"})]}),s.jsx("strong",{children:"Prices"}),s.jsxs("div",{className:"prices",children:[s.jsx("div",{className:"price",onClick:()=>i(10,50),children:"₹10-₹50"}),s.jsx("div",{className:"price",onClick:()=>i(50,100),children:"₹50-₹100"}),s.jsx("div",{className:"price",onClick:()=>i(100,150),children:"₹100-₹150"}),s.jsx("div",{className:"price",onClick:()=>i(150,200),children:"₹150-₹200"}),s.jsx("div",{className:"price",onClick:()=>i(200,250),children:"₹200-₹250"}),s.jsx("div",{className:"price",onClick:()=>i(250,300),children:"₹250-₹300"}),s.jsx("div",{className:"price",onClick:()=>i(300,350),children:"₹300-₹350"}),s.jsx("div",{className:"price",onClick:()=>i(350,700),children:"₹350-₹700"})]}),s.jsx("strong",{children:"Related Names"}),s.jsxs("div",{className:"names",children:[s.jsx("div",{className:"name",onClick:()=>a("Broccoli"),children:"Broccoli"}),s.jsx("div",{className:"name",onClick:()=>a("Capsicum"),children:"Capsicum"}),s.jsx("div",{className:"name",onClick:()=>a("Apple"),children:"Apple"}),s.jsx("div",{className:"name",onClick:()=>a("Cherry"),children:"Cherry"}),s.jsx("div",{className:"name",onClick:()=>a("Cashew"),children:"Cashew"}),s.jsx("div",{className:"name",onClick:()=>a("Appricot"),children:"Appricot"}),s.jsx("div",{className:"name",onClick:()=>a("Lobster Meat"),children:"Lobster Meat"}),s.jsx("div",{className:"name",onClick:()=>a("Goat Meat"),children:"Goat Meat"}),s.jsx("div",{className:"name",onClick:()=>a("Egg"),children:"Egg"}),s.jsx("div",{className:"name",onClick:()=>a("Milk"),children:"Milk"})]})]}),s.jsx("div",{className:"shop-col",children:c.map(e=>s.jsxs("div",{className:"product",children:[s.jsx("div",{className:"image",children:s.jsx("img",{src:e.img,alt:e.text})}),s.jsxs("div",{className:"product-content",children:[s.jsxs("div",{className:"names",children:[s.jsx("div",{className:"name",children:e.text}),s.jsxs("div",{className:"kg",children:[e.gram," g"]})]}),s.jsxs("div",{className:"two",style:{display:"flex",justifyContent:"space-between"},children:[s.jsxs("div",{className:"amounts",children:[s.jsxs("div",{className:"f-amount",children:["$ ",e.rate]}),s.jsxs("div",{className:"s-amount",children:["$ ",e.rate-e.discount]})]}),s.jsxs("div",{className:"stars",children:[s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"}),s.jsx("i",{className:"fa fa-star"})]})]}),s.jsxs("div",{className:"discount",children:[e.discount,"%"]})]}),s.jsxs("div",{className:"icons",children:[s.jsx("div",{className:"icon",onClick:()=>k(e),children:s.jsx("i",{className:"fa-regular fa-heart"})}),s.jsx("div",{className:"icon",onClick:()=>f(e),children:s.jsx("i",{className:"fa fa-shopping-cart"})}),s.jsx(y,{to:"/Product-details",onClick:()=>g(e),state:e,children:s.jsx("div",{className:"icon",children:s.jsx("i",{className:"fa fa-eye"})})})]})]},e.id))})]})]})};export{F as default};