(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[4],{234:function(t,e,n){"use strict";var c=n(0);n(1),n(235);e.a=function(t){var e=t.title,n=(t.svg,t.h);return Object(c.jsx)("div",{className:"heading-blog",children:"h1"===n?Object(c.jsx)("h1",{children:e}):Object(c.jsx)("h2",{children:e})})}},235:function(t,e,n){},237:function(t,e,n){},250:function(t,e,n){},269:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n(3),a=n(1),r=n.n(a),s=n(0),o=n(11),l=n.n(o),p=n(7),u=n.n(p),d=n(5),j=n(67),f=n(14),m=n(70),h=(n(237),n(72)),b=n(234),O=n(8),y=(n(250),function(t){var e=Object(f.a)(),n=e.state,c=e.dispatch;return Object(s.jsx)("div",{className:"mobile-filters-block-content",children:t.filters&&t.filters.map((function(t){return d.c.includes(t._id)?null:Object(s.jsx)("div",{className:"mobile-filters-block-content__container",style:n.filterMode===t._id?{border:"2px solid #F89F46"}:null,children:Object(s.jsx)("img",{onClick:n.filterMode===t._id?function(){return c({type:O.a.DROP_FILTER})}:function(){return c({type:O.a.SET_FILTER,filterId:t._id})},className:"mobile-filters-block-content__container__item",alt:t.alt,src:d.a+"/"+t.image})},t._id)}))})}),g=n(10),_=n(22),x=r.a.memo((function(t){var e=Object(j.a)().t,n=Object(a.useState)([]),r=Object(i.a)(n,2),o=r[0],p=r[1],O=Object(a.useState)([]),x=Object(i.a)(O,2),v=x[0],S=x[1],w=Object(a.useState)(!1),k=Object(i.a)(w,2),L=k[0],E=k[1],N=Object(a.useState)(!1),J=Object(i.a)(N,2),R=J[0],z=J[1],I=Object(f.a)().state;Object(a.useEffect)((function(){E(!0),l.a.get(d.a+t.url).then((function(t){S(t.data),z(!1)})).catch((function(t){z(!0)})).finally((function(){return E(!1)}))}),[]);var A=function(){var e={"@context":"https://schema.org/","@type":"ItemList",description:"".concat(t.title," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(t.title," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435 \u0438 \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f").concat(t.title," \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f \u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 \u0435\u0434\u044b \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."),name:t.title,numberOfItems:o.length,itemListElement:o.map((function(e){return{"@type":"Product",category:t.title,material:t.title,productID:e._id,slogan:e.name_ru,name:e.name_ru,brand:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},description:e.description_ru,image:e.image,offers:{"@type":"Offer",offeredBy:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},seller:{"@type":"Organization",name:"24ROLLS",address:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",location:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435"},category:t.title,priceCurrency:"UAH",price:0!==e.percent?e.price*((100-e.percent)/100):e.price}}}))};return JSON.stringify(e)};return Object(a.useEffect)((function(){var e=u.a.get("24rolls").customOptions.city;if(v){var n=v.filter((function(t){var n=!1;return"Dnipro"===e?t.shop.map((function(t){"Dp"===t.name&&(n=!0)})):"Zaporijja"===e?t.shop.forEach((function(t){"Zp"===t.name&&(n=!0)})):"Kharkov"===e&&t.shop.forEach((function(t){"Kh"===t.name&&(n=!0)})),n}));p(n)}I.filterMode&&(E(!0),l.a.get(d.a+"/products/filter/category/".concat(t.categoryId,"/").concat(I.filterMode)).then((function(t){p(t.data),z(!1)})).catch((function(t){})).finally((function(){return E(!1)})))}),[I.filterMode,v]),Object(s.jsxs)("div",{className:"rolls_container",children:[Object(s.jsxs)(m.a,{children:[Object(s.jsx)("script",{async:!0,type:"application/ld+json",children:A()}),Object(s.jsx)("title",{children:t.el.seo_title}),Object(s.jsx)("meta",{name:"description",content:t.el.seo_description}),Object(s.jsx)("meta",{name:"keywords",content:t.el.seo_description}),Object(s.jsx)("script",{async:!0,type:"application/ld+json",children:A()}),Object(s.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.zp.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.zp.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(s.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.zp.ua/",contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),!R&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(b.a,{title:e(t.title),svg:!0,h:"h1"}),Object(s.jsx)(y,{filters:t.filters})]}),L&&Object(s.jsx)(g.a,{}),R&&!L&&Object(s.jsx)(_.a,{}),o&&!L&&!R&&Object(s.jsx)("div",{className:"rolls_container_block",children:o.map((function(e){return Object(a.createElement)(h.a,Object(c.a)(Object(c.a)({},t),{},{style:"open-modal",key:e._id,food:e,width:window.innerWidth<610}))}))}),!o[0]&&!L&&!R&&Object(s.jsxs)("p",{children:[" ","\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u043e\u0432..."," "]})]})}));e.default=x}}]);
//# sourceMappingURL=4.138cc714.chunk.js.map