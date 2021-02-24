(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[5],{237:function(t,e,n){"use strict";var r=n(0);n(1),n(238);e.a=function(t){var e=t.title,n=(t.svg,t.h);return Object(r.jsx)("div",{className:"heading-blog",children:"h1"===n?Object(r.jsx)("h1",{children:e}):Object(r.jsx)("h2",{children:e})})}},238:function(t,e,n){},239:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",o="quarter",c="year",u="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,l=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,o=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:a,y:c,w:s,d:i,D:u,h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$="en",p={};p[$]=d;var j=function(t){return t instanceof b},O=function(t,e,n){var r;if(!t)return $;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var i=t.name;p[i]=t,r=i}return!n&&r&&($=r),r||!n&&$},g=function(t,e){if(j(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},y=m;y.l=O,y.i=j,y.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function d(t){this.$L=O(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return y},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return g(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<g(t)},f.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var h=this,l=!!y.u(o)||o,d=y.p(t),f=function(t,e){var n=y.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return l?n:n.endOf(i)},m=function(t,e){return y.w(h.toDate()[t].apply(h.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},$=this.$W,p=this.$M,j=this.$D,O="set"+(this.$u?"UTC":"");switch(d){case c:return l?f(1,0):f(31,11);case a:return l?f(1,p):f(0,p+1);case s:var g=this.$locale().weekStart||0,b=($<g?$+7:$)-g;return f(l?j-b:j+(6-b),p);case i:case u:return m(O+"Hours",0);case r:return m(O+"Minutes",1);case n:return m(O+"Seconds",2);case e:return m(O+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,o){var h,l=y.p(s),d="set"+(this.$u?"UTC":""),f=(h={},h[i]=d+"Date",h[u]=d+"Date",h[a]=d+"Month",h[c]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[l],m=l===i?this.$D+(o-this.$W):o;if(l===a||l===c){var $=this.clone().set(u,1);$.$d[f](m),$.init(),this.$d=$.set(u,Math.min(this.$D,$.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[y.p(t)]()},f.add=function(t,o){var u,h=this;t=Number(t);var l=y.p(o),d=function(e){var n=g(h);return y.w(n.date(n.date()+Math.round(e*t)),h)};if(l===a)return this.set(a,this.$M+t);if(l===c)return this.set(c,this.$y+t);if(l===i)return d(1);if(l===s)return d(7);var f=(u={},u[n]=6e4,u[r]=36e5,u[e]=1e3,u)[l]||1,m=this.$d.getTime()+t*f;return y.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),i=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=i.weekdays,u=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return y.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:h(i.monthsShort,o,u,3),MMMM:h(u,o),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,c,2),ddd:h(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:y.s(s,2,"0"),h:d(1),hh:d(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(l,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,u,h){var l,d=y.p(u),f=g(t),m=6e4*(f.utcOffset()-this.utcOffset()),$=this-f,p=y.m(this,f);return p=(l={},l[c]=p/12,l[a]=p,l[o]=p/3,l[s]=($-m)/6048e5,l[i]=($-m)/864e5,l[r]=$/36e5,l[n]=$/6e4,l[e]=$/1e3,l)[d]||$,h?p:y.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=O(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return y.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),v=b.prototype;return g.prototype=v,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",c],["$D",u]].forEach((function(t){v[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),g.extend=function(t,e){return t.$i||(t(e,b,g),t.$i=!0),g},g.locale=O,g.isDayjs=j,g.unix=function(t){return g(1e3*t)},g.en=p[$],g.Ls=p,g.p={},g}()},245:function(t,e,n){},262:function(t,e,n){"use strict";n.r(e);var r=n(3),i=n(0),s=n(1),a=n.n(s),o=n(10),c=n.n(o),u=n(4),h=n(37),l=(n(245),n(71)),d=n(237),f=n(239),m=n.n(f),$=n(6),p=n(11),j=n(22),O=a.a.memo((function(t){var e=Object(s.useState)(!1),n=Object(r.a)(e,2),a=n[0],o=n[1],f=Object(s.useState)(!1),O=Object(r.a)(f,2),g=O[0],y=O[1],b=Object(s.useState)(null),v=Object(r.a)(b,2),M=v[0],S=v[1];Object(s.useEffect)((function(){o(!0),c.a.get(u.a+/posts/).then((function(e){S(e.data),e.data[0]&&t.setBreadPosts(e.data),y(!1),o(!1)})).catch((function(t){y(!0),o(!1)}))}),[]);return Object(i.jsxs)("div",{className:"blog-all",children:[a&&Object(i.jsx)(p.a,{}),g&&Object(i.jsx)(j.a,{}),!a&&!g&&M&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d.a,{title:"\u0411\u043b\u043e\u0433",h:"h1",svg:!0}),Object(i.jsxs)(l.a,{children:[Object(i.jsx)("title",{children:t.seo?t.seo.title:"24ROLLS"}),Object(i.jsx)("meta",{name:"description",content:t.seo&&t.seo.description}),Object(i.jsx)("meta",{name:"keywords",content:t.seo&&t.seo.keywords}),Object(i.jsx)("script",{async:!0,type:"application/ld+json",children:function(){if(M){var t={"@context":"https://schema.org/","@type":"CreativeWork",author:{"@type":"Organization",name:"24ROLLS"},contentLocation:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",about:M.map((function(t){return t.title})).join(", "),text:M.map((function(t){return t.content})).join(", "),dateCreated:m()(M[0].date).format("DD.MM.YYYY"),datePublished:m()(M[0].date).format("DD.MM.YYYY"),keywords:"\u0421\u0443\u0448\u0438, \u0440\u043e\u043b\u043b\u044b, \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u0414\u043d\u0435\u043f\u0440, \u0414\u043d\u0435\u043f\u0440\u043e\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0432\u043a\u0443\u0441\u043d\u043e, \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",material:"\u0411\u043b\u043e\u0433"};return JSON.stringify(t)}}()}),Object(i.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.com.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.com.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(i.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.com.ua/",logo:h.a,contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),Object(i.jsxs)("div",{className:"blog-all_content",children:[M[0]&&M.map((function(e){return Object(i.jsx)($.b,{to:t.match.path.slice(0,3)+"/posts/".concat(e.route),className:"list",children:Object(i.jsxs)("div",{className:"list_context",children:[Object(i.jsx)("img",{src:u.a+"/".concat(e.image),alt:e.alt}),Object(i.jsxs)("div",{className:"footer",children:[Object(i.jsx)("h3",{children:e.title}),Object(i.jsx)("p",{children:m()(e.date).format("DD.MM.YYYY")}),Object(i.jsx)("li",{children:Object(i.jsx)("span",{style:{fontSize:"14px"},children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435..."})})]})]})},e._id)})),!M[0]&&Object(i.jsx)("p",{children:"\u041f\u043e\u043a\u0430 \u0447\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442..."})]})]})]})}));e.default=O}}]);
//# sourceMappingURL=5.645ffdf1.chunk.js.map