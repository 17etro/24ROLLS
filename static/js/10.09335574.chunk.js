(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[10],{254:function(t,e,c){},255:function(t,e,c){},273:function(t,e,c){"use strict";c.r(e);var n=c(2),s=c(3),o=c(0),a=c(1),i=c(13),r=c.n(i),l=c(7),d=c(71),j=c(6),u=c.n(j),p=c(11),b=c(31),h=c(25),O=(c(254),c(14)),m=c(48),f=c(72),x=function(t){var e=Object(O.a)().state,c=Object(a.useState)(""),i=Object(s.a)(c,2),d=i[0],j=i[1],x=Object(a.useState)(0),y=Object(s.a)(x,2),g=y[0],_=y[1],v=Object(a.useState)(!1),w=Object(s.a)(v,2),k=w[0],S=w[1],N=Object(a.useState)(!1),A=Object(s.a)(N,2),C=A[0],J=A[1],F=Object(a.useState)(!1),z=Object(s.a)(F,2),E=z[0],R=z[1];Object(a.useEffect)((function(){_(void 0!==e.cart.basket&&e.cart.basket.find((function(e){return e.id===t.food._id}))?e.cart.basket.filter((function(e){return e.id===t.food._id}))[0].countBasket:1)}),[]);var U=Object(o.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center"},children:Object(o.jsx)("p",{style:{color:"green",textAlign:"center",fontWeight:"700",fontSize:"24px"},children:"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})});return Object(o.jsxs)("div",{className:"header-slider",children:[Object(o.jsx)(h.a,{show:k,modalClosed:function(){return S(!1)},children:U}),C&&Object(o.jsx)(p.a,{}),E&&Object(o.jsx)(b.a,{}),!C&&!E&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"header-slider_list-block",children:Object(o.jsxs)("div",{className:"list-content",children:[Object(o.jsxs)("div",{className:"list-content_header",children:[Object(o.jsx)("h1",{children:t.food.name_ru}),Object(o.jsxs)("p",{children:["\u0412\u0435\u0441 ",t.food.weight," \u0433."]}),Object(o.jsx)("span",{children:t.food.description_ru})]}),Object(o.jsxs)("div",{className:"list-content_center",children:[Object(o.jsx)("button",{onClick:function(){return _(1===g?1:g-1)},children:"-"}),Object(o.jsx)("span",{children:Object(o.jsxs)("p",{children:[" ",g," "]})}),Object(o.jsx)("button",{onClick:function(){return _(g+1)},children:"+"})]}),Object(o.jsxs)("div",{className:"list-content_footer",children:[Object(o.jsxs)("div",{className:"price",children:[Object(o.jsxs)("h2",{children:[0!==t.food.percent?(t.food.price*((100-t.food.percent)/100)).toFixed(1):t.food.price,"\u0433\u0440\u043d."]}),0!==t.food.percent&&Object(o.jsxs)("p",{children:[t.food.price," \u0433\u0440\u043d."]})]}),Object(o.jsx)(m.a,Object(n.a)(Object(n.a)({},t),{},{count:g,food:t.food,title:"button.toOrder",style:"open-modalTwo"})),Object(o.jsxs)("div",{className:"phone-input",children:[Object(o.jsx)(f.a,{format:"+38(0##) ### ## ##",mask:"_",allowEmptyFormatting:!0,value:d,onChange:function(t){return j(t.target.value)}}),Object(o.jsx)("button",{onClick:function(){J(!0);var e=[{product:t.food._id,quantity:g}];r.a.post(l.a+"/order/notAuth",{oplata:{type:"cash",status:"not-paid"},delivery:{status:"courier"},city:u.a.get("24rolls").customOptions.city,address:{text:"_",city:u.a.get("24rolls").customOptions.city},name:"-",phone:d,comment:"",sdachaS:"",cutlery:0,items:e,email:"",bonus:0}).then((function(t){j(""),S(!0),_(1),J(!1),R(!1)})).catch((function(t){J(!1),R(!0)}))},className:"price-button",children:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0432 1 \u043a\u043b\u0438\u043a"})]})]})]})}),Object(o.jsx)("div",{className:"header-slider_image-block",children:Object(o.jsx)("img",{src:l.a+"/".concat(t.food.image),alt:t.food.name||"24rolls"})})]})]},t.food._id)},y=c(90),g=(c(255),function(t){t.target.style.height=t.target.contentWindow.document.documentElement.scrollHeight+"px"});e.default=function(t){var e=Object(a.useState)(!1),c=Object(s.a)(e,2),i=c[0],j=c[1],u=Object(a.useState)(!1),h=Object(s.a)(u,2),O=h[0],m=h[1],f=Object(a.useState)(!1),_=Object(s.a)(f,2),v=_[0],w=_[1],k=Object(a.useState)([]),S=Object(s.a)(k,2),N=S[0],A=S[1];Object(a.useEffect)((function(){var e=t.match.params.route,c=t.match.params.catRoute;j(!0),r.a.post(l.a+"/products/by/route",{route:e}).then((function(t){w(t.data.products[0]),j(!1)})).catch((function(t){m(!0),j(!1)})),r.a.post(l.a+"/products/category/by/routes",{routes:c}).then((function(t){A(t.data.products),m(!1),j(!1)})).catch((function(t){m(!0),j(!1)}))}),[t]);var C=t.city;return Object(o.jsxs)("div",{className:"card-product",children:[i&&Object(o.jsx)(p.a,{}),O&&Object(o.jsx)(b.a,{}),v&&N&&!O&&!i&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(d.b,{children:[Object(o.jsx)("title",{children:1===C?v.seo_title_dp:2===C?v.seo_title_zp:v.seo_title}),Object(o.jsx)("meta",{name:"description",content:1===C?v.seo_description_dp:2===C?v.seo_description_zp:v.seo_description}),Object(o.jsx)("meta",{name:"keywords",content:1===C?v.seo_keywords_dp:2===C?v.seo_keywords_zp:v.seo_keywords}),Object(o.jsx)("script",{async:!0,type:"application/ld+json",children:function(){if(v){var t={"@context":"https://schema.org","@type":"Product",description:v.name_ru+"| "+"".concat(v.name_ru," \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430. \u0417\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u0439 ").concat(v.name_ru," \u0441 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439 \u0432 \u0414\u043d\u0435\u043f\u0440\u0435, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0425\u0430\u0440\u044c\u043a\u043e\u0432\u0435\u2714\ufe0f\u0421\u0443\u0448\u0438 \u043e\u0442 15\u0433\u0440\u043d \u260e 050 719-24-24 \u2714\ufe0f\u0420\u043e\u043b\u043b\u044b \u2714\ufe0f\u0421\u0435\u0442\u044b \u2714\ufe0fWok \u2714\u041e\u043d\u043b\u0430\u0439\u043d \u0437\u0430\u043a\u0430\u0437 ").concat(v.name_ru," \u043d\u0430 \u0434\u043e\u043c,\u043e\u0444\u0438\u0441."),name:v.name_ru,image:l.a+"/"+v.image,offers:{"@type":"Offer",availability:"https://schema.org/InStock",price:0!==v.percent?v.price*((100-v.percent)/100):v.price,priceCurrency:"UAH"}};return JSON.stringify(t)}}()}),Object(o.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.com.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.com.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(o.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.com.ua/",contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),Object(o.jsx)(x,Object(n.a)(Object(n.a)({},t),{},{food:v})),Object(o.jsx)(y.a,Object(n.a)(Object(n.a)({},t),{},{list:N,title:!0,links:!0})),Object(o.jsx)("div",{children:Object(o.jsx)("iframe",{onLoad:g,style:{width:"100%",border:"none",height:"100%",verflow:"visible",fontFamily:"'Roboto', sans-serif"},srcDoc:v.article,children:"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Frame"})})]})]})}}}]);
//# sourceMappingURL=10.09335574.chunk.js.map