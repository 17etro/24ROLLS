(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[3],{237:function(t,e,n){"use strict";var r=n(0);n(1),n(238);e.a=function(t){var e=t.title,n=(t.svg,t.h);return Object(r.jsx)("div",{className:"heading-blog",children:"h1"===n?Object(r.jsx)("h1",{children:e}):Object(r.jsx)("h2",{children:e})})}},238:function(t,e,n){},239:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",a="day",i="week",o="month",s="quarter",c="year",l="date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,d=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},h=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:h,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),a=n%60;return(e<=0?"+":"-")+h(r,2,"0")+":"+h(a,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),a=e.clone().add(r,o),i=n-a<0,s=e.clone().add(r+(i?-1:1),o);return+(-(r+(n-a)/(i?a-s:s-a))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:o,y:c,w:i,d:a,D:l,h:r,m:n,s:e,ms:t,Q:s}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",v={};v[b]=f;var g=function(t){return t instanceof O},p=function(t,e,n){var r;if(!t)return b;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var a=t.name;v[a]=t,r=a}return!n&&r&&(b=r),r||!n&&b},j=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},y=m;y.l=p,y.i=g,y.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function f(t){this.$L=p(t.locale,null,!0),this.parse(t)}var h=f.prototype;return h.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(u);if(r){var a=r[2]-1||0,i=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},h.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return!("Invalid Date"===this.$d.toString())},h.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},h.isAfter=function(t,e){return j(t)<this.startOf(e)},h.isBefore=function(t,e){return this.endOf(e)<j(t)},h.$g=function(t,e,n){return y.u(t)?this[e]:this.set(n,t)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(t,s){var u=this,d=!!y.u(s)||s,f=y.p(t),h=function(t,e){var n=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return d?n:n.endOf(a)},m=function(t,e){return y.w(u.toDate()[t].apply(u.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},b=this.$W,v=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(f){case c:return d?h(1,0):h(31,11);case o:return d?h(1,v):h(0,v+1);case i:var j=this.$locale().weekStart||0,O=(b<j?b+7:b)-j;return h(d?g-O:g+(6-O),v);case a:case l:return m(p+"Hours",0);case r:return m(p+"Minutes",1);case n:return m(p+"Seconds",2);case e:return m(p+"Milliseconds",3);default:return this.clone()}},h.endOf=function(t){return this.startOf(t,!1)},h.$set=function(i,s){var u,d=y.p(i),f="set"+(this.$u?"UTC":""),h=(u={},u[a]=f+"Date",u[l]=f+"Date",u[o]=f+"Month",u[c]=f+"FullYear",u[r]=f+"Hours",u[n]=f+"Minutes",u[e]=f+"Seconds",u[t]=f+"Milliseconds",u)[d],m=d===a?this.$D+(s-this.$W):s;if(d===o||d===c){var b=this.clone().set(l,1);b.$d[h](m),b.init(),this.$d=b.set(l,Math.min(this.$D,b.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},h.set=function(t,e){return this.clone().$set(t,e)},h.get=function(t){return this[y.p(t)]()},h.add=function(t,s){var l,u=this;t=Number(t);var d=y.p(s),f=function(e){var n=j(u);return y.w(n.date(n.date()+Math.round(e*t)),u)};if(d===o)return this.set(o,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===a)return f(1);if(d===i)return f(7);var h=(l={},l[n]=6e4,l[r]=36e5,l[e]=1e3,l)[d]||1,m=this.$d.getTime()+t*h;return y.w(m,this)},h.subtract=function(t,e){return this.add(-1*t,e)},h.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=y.z(this),a=this.$locale(),i=this.$H,o=this.$m,s=this.$M,c=a.weekdays,l=a.months,u=function(t,r,a,i){return t&&(t[r]||t(e,n))||a[r].substr(0,i)},f=function(t){return y.s(i%12||12,t,"0")},h=a.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:y.s(s+1,2,"0"),MMM:u(a.monthsShort,s,l,3),MMMM:u(l,s),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:u(a.weekdaysMin,this.$W,c,2),ddd:u(a.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(i),HH:y.s(i,2,"0"),h:f(1),hh:f(2),a:h(i,o,!0),A:h(i,o,!1),m:String(o),mm:y.s(o,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:r};return n.replace(d,(function(t,e){return e||m[t]||r.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(t,l,u){var d,f=y.p(l),h=j(t),m=6e4*(h.utcOffset()-this.utcOffset()),b=this-h,v=y.m(this,h);return v=(d={},d[c]=v/12,d[o]=v,d[s]=v/3,d[i]=(b-m)/6048e5,d[a]=(b-m)/864e5,d[r]=b/36e5,d[n]=b/6e4,d[e]=b/1e3,d)[f]||b,u?v:y.a(v)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return v[this.$L]},h.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=p(t,e,!0);return r&&(n.$L=r),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),_=O.prototype;return j.prototype=_,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",a],["$M",o],["$y",c],["$D",l]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,O,j),t.$i=!0),j},j.locale=p,j.isDayjs=g,j.unix=function(t){return j(1e3*t)},j.en=v[b],j.Ls=v,j.p={},j}()},246:function(t,e,n){},247:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(1),i=l(a),o=l(n(4)),s=l(n(248)),c=l(n(249));function l(t){return t&&t.__esModule?t:{default:t}}var u={overflow:"hidden",position:"relative"};function d(t,e){return"\n    .react-stars-"+e+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+t+";\n  }"}function f(t){var e=(0,a.useState)(""),n=r(e,2),o=n[0],l=n[1],f=(0,a.useState)(0),h=r(f,2),m=h[0],b=h[1],v=(0,a.useState)([]),g=r(v,2),p=g[0],j=g[1],y=(0,a.useState)(!1),O=r(y,2),_=O[0],x=O[1],$=(0,s.default)(t),S=r($,2),M=S[0],w=S[1],D=(0,a.useState)(0),N=r(D,2),I=N[0],H=N[1],C=(0,a.useState)(!1),Y=r(C,2),k=Y[0],A=Y[1],L=(0,a.useState)(""),T=r(L,2),z=T[0],E=T[1];function J(t){"undefined"===typeof t&&(t=M.isHalf?Math.floor(m):Math.round(m));for(var e=[],n=0;n<M.count;n++)e.push({active:n<=t-1});return e}function W(t){if(M.edit){var e=Number(t.currentTarget.getAttribute("data-index"));if(M.isHalf){var n=U(t);A(n),n&&(e+=1),H(e)}else e+=1;!function(t){var e=p.filter((function(t){return t.active}));t!==e.length&&j(J(t))}(e)}}function U(t){var e=t.target.getBoundingClientRect(),n=t.clientX-e.left;return(n=Math.round(Math.abs(n)))>e.width/2}function P(){M.edit&&(F(m),j(J()))}function F(t){M.isHalf&&(A(function(t){return t%1===0}(t)),H(Math.floor(t)))}function q(t){if(M.edit){var e=Number(t.currentTarget.getAttribute("data-index")),n=void 0;if(M.isHalf){var r=U(t);A(r),r&&(e+=1),n=r?e:e+.5,H(e)}else n=e+=1;R(n)}}function R(e){e!==m&&(j(J(e)),b(e),t.onChange(e))}return(0,a.useEffect)((function(){var e,n;!function(){var e="react-stars";E(t.classNames+" "+e)}(),e=t.value,n=t.count,b(e<0||e>n?0:e),j(J(t.value)),w(t),l((Math.random()+"").replace(".","")),x(function(t){return!t.isHalf&&t.emptyIcon&&t.filledIcon||t.isHalf&&t.emptyIcon&&t.halfIcon&&t.filledIcon}(t)),H(Math.floor(t.value)),A(t.isHalf&&t.value%1<.5)}),[]),i.default.createElement("div",{className:"react-stars-wrapper-"+o,style:{display:"flex"}},i.default.createElement("div",{tabIndex:M.a11y&&M.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(t){if(M.a11y||M.edit){var e=t.key,n=m,r=Number(e);r?Number.isInteger(r)&&r>0&&r<=M.count&&(n=r):("ArrowUp"===e||"ArrowRight"===e)&&n<M.count?(t.preventDefault(),n+=M.isHalf?.5:1):("ArrowDown"===e||"ArrowLeft"===e)&&n>.5&&(t.preventDefault(),n-=M.isHalf?.5:1),F(n),R(n)}},className:z,style:u},M.isHalf&&function(){return i.default.createElement("style",{dangerouslySetInnerHTML:{__html:_?(t=M.activeColor,"\n          span.react-stars-half > * {\n          color: "+t+";\n      }"):d(M.activeColor,o)}});var t}(),p.map((function(t,e){return i.default.createElement(c.default,{key:e,index:e,active:t.active,config:M,onMouseOver:W,onMouseLeave:P,onClick:q,halfStarHidden:k,halfStarAt:I,isUsingIcons:_,uniqueness:o})})),i.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},m)))}f.propTypes={classNames:o.default.string,edit:o.default.bool,half:o.default.bool,value:o.default.number,count:o.default.number,char:o.default.string,size:o.default.number,color:o.default.string,activeColor:o.default.string,emptyIcon:o.default.element,halfIcon:o.default.element,filledIcon:o.default.element,a11y:o.default.bool},f.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},e.default=f},248:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(c){a=!0,i=c}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")};e.default=function(t){var e=(0,a.useState)(t.count),n=r(e,2),i=n[0],o=n[1],s=(0,a.useState)(t.size),c=r(s,2),l=c[0],u=c[1],d=(0,a.useState)(t.char),f=r(d,2),h=f[0],m=f[1],b=(0,a.useState)(t.color),v=r(b,2),g=v[0],p=v[1],j=(0,a.useState)(t.activeColor),y=r(j,2),O=y[0],_=y[1],x=(0,a.useState)(t.isHalf),$=r(x,2),S=$[0],M=$[1],w=(0,a.useState)(t.edit),D=r(w,2),N=D[0],I=D[1],H=(0,a.useState)(t.emptyIcon),C=r(H,2),Y=C[0],k=C[1],A=(0,a.useState)(t.halfIcon),L=r(A,2),T=L[0],z=L[1],E=(0,a.useState)(t.filledIcon),J=r(E,2),W=J[0],U=J[1],P=(0,a.useState)(t.a11y),F=r(P,2),q=F[0],R=F[1];return[{count:i,size:l,char:h,color:g,activeColor:O,isHalf:S,edit:N,emptyIcon:Y,halfIcon:T,filledIcon:W,a11y:q},function(t){o(t.count),u(t.size),m(t.char),p(t.color),_(t.activeColor),M(t.isHalf),I(t.edit),k(t.emptyIcon),z(t.halfIcon),U(t.filledIcon),R(t.a11y)}]};var a=n(1)},249:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t){var e=t.index,n=t.active,a=t.config,i=t.onMouseOver,c=t.onMouseLeave,l=t.onClick,u=t.halfStarHidden,d=t.halfStarAt,f=t.isUsingIcons,h=t.uniqueness,m=a.color,b=a.activeColor,v=a.size,g=a.char,p=a.isHalf,j=a.edit,y=a.halfIcon,O=a.emptyIcon,_=a.filledIcon,x="",$=!1;p&&!u&&d===e&&(x=f?"react-stars-half":"react-stars-"+h,$=!0);var S=r({},s,{color:n?b:m,cursor:j?"pointer":"default",fontSize:v+"px"});return o.default.createElement("span",{className:x,style:S,key:e,"data-index":e,"data-forhalf":_?e:g,onMouseOver:i,onMouseMove:i,onMouseLeave:c,onClick:l},f?n?_:!n&&$?y:O:g)};var a,i=n(1),o=(a=i)&&a.__esModule?a:{default:a};var s={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}},250:function(t,e,n){},251:function(t,e,n){},252:function(t,e,n){},269:function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(3),i=n(0),o=n(1),s=n.n(o),c=n(13),l=n.n(c),u=n(7),d=n(37),f=(n(246),n(71)),h=n(247),m=n.n(h),b=n(237),v=n(6),g=n.n(v),p=n(5),j=n(239),y=n.n(j),O=n(91),_=(n(250),s.a.memo((function(t){return Object(i.jsxs)("div",{className:"blog-single-comment-container",children:[Object(i.jsx)("div",{className:"blog-single-comment-container__avatar",children:Object(i.jsx)("img",{src:O.a,alt:"default-avatar"})}),Object(i.jsxs)("div",{className:"blog-single-comment-container__content",children:[Object(i.jsxs)("div",{className:"blog-single-comment-container__content__header",children:[Object(i.jsx)("p",{className:"blog-single-comment-container__content__header__name",children:t.name}),Object(i.jsx)("p",{className:"blog-single-comment-container__content__header__date",children:y()(t.data).format("DD.MM.YYYY")})]}),Object(i.jsx)("div",{className:"blog-single-comment-container__content__content",children:t.content})]})]})}))),x=n(33),$=(n(251),n(11)),S=n(25),M=function(t){var e=Object(o.useState)({value:"",valid:!1,validation:{required:!0,maxLength:300}}),n=Object(a.a)(e,2),s=n[0],c=n[1],d=Object(o.useState)(!1),f=Object(a.a)(d,2),h=f[0],m=f[1],b=Object(o.useState)(!1),v=Object(a.a)(b,2),g=v[0],p=v[1],j=Object(o.useState)(!1),y=Object(a.a)(j,2),O=y[0],_=y[1];return Object(i.jsxs)("div",{className:"blog-yours-comment",children:[Object(i.jsx)(S.a,{show:O,modalClosed:function(){return _(!1)},children:Object(i.jsx)("div",{style:{textAlign:"center"},children:Object(i.jsx)("p",{children:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u0432 \u0441\u043a\u043e\u0440\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u0443\u044e\u0442"})})}),Object(i.jsx)("textarea",{value:s.value,onChange:function(t){c(Object(r.a)(Object(r.a)({},s),{},{value:t.target.value,valid:Object(x.a)(t.target.value,s.validation)}))},placeholder:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),h&&!g&&Object(i.jsx)($.a,{}),!h&&!g&&Object(i.jsxs)("div",{className:"blog-yours-comment-buttons",children:[Object(i.jsx)("button",{className:"blog-yours-comment-cancel-button",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(i.jsx)("button",{onClick:function(){m(!0),l.a.post(u.a+"/comment/",{content:s.value,postId:t.postId},{headers:{Authorization:"Bearer ".concat(t.token)}}).then((function(t){p(!1),_(!0),c({value:"",valid:!1,validation:{required:!0,maxLength:300}})})).catch((function(t){p(!0)})).finally((function(){return m(!1)}))},className:s.valid?"blog-yours-comment-submit_button":"blog-yours-comment-cancel-button",style:{marginLeft:"10px"},children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]}),g&&Object(i.jsx)("p",{className:"blog-yours-comment__error-field",children:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430..."})]})},w=(n(252),s.a.memo((function(t){var e=g.a.get("24rolls").user,n=e?e.token:null;return Object(i.jsxs)("div",{className:t.opened?"blog-comments-container blog-comments-container-opened":"blog-comments-container blog-comments-container-closed",children:[n?Object(i.jsx)(M,{token:n,postId:t.postId}):Object(i.jsxs)("p",{className:"blog-comments-container__yours-comment-blocked",children:["\u0427\u0442\u043e\u0431\u044b \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0432\u044b \u0434\u043e\u043b\u0436\u043d\u044b ",Object(i.jsx)(p.b,{to:t.match.path.slice(0,3)+"/log-in",children:"\u0412\u043e\u0439\u0442\u0438"})]}),t.comments.map((function(t,e){return Object(i.jsx)(_,{data:t.date,content:t.content,name:t.userId.name},e)}))]})}))),D=n(31),N=s.a.memo((function(t){var e=Object(o.useState)(!1),n=Object(a.a)(e,2),s=n[0],c=n[1],h=Object(o.useState)(!1),v=Object(a.a)(h,2),g=v[0],p=v[1],j=Object(o.useState)(null),O=Object(a.a)(j,2),_=O[0],x=O[1],S=Object(o.useState)(null),M=Object(a.a)(S,2),N=M[0],I=M[1],H=Object(o.useState)(!1),C=Object(a.a)(H,2),Y=C[0],k=C[1];Object(o.useEffect)((function(){c(!0),l.a.post(u.a+"/posts/get/byroute",{route:t.match.params.route}).then((function(t){p(!1),c(!1),x(t.data.posts),I(t.data.posts._id)})).catch((function(t){p(!0),c(!1)}))}),[]);var A=[];A=_?_.comments.filter((function(t){return"New"!==t.status})):[];return Object(i.jsxs)("div",{className:"blog-article_section",children:[s&&Object(i.jsx)($.a,{}),g&&Object(i.jsx)(D.a,{}),_&&Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(f.a,{children:[Object(i.jsx)("title",{children:_.seo_title}),Object(i.jsx)("meta",{name:"description",content:_.seo_description}),Object(i.jsx)("meta",{name:"keywords",content:_.seo_keywords}),Object(i.jsx)("script",{async:!0,type:"application/ld+json",children:function(){if(_){var t={"@context":"https://schema.org/","@type":"CreativeWork",author:{"@type":"Organization",name:"24ROLLS"},contentLocation:"\u0414\u043d\u0435\u043f\u0440, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435",about:_.title,text:_.content,dateCreated:y()(_.date).format("DD.MM.YYYY"),datePublished:y()(_.date).format("DD.MM.YYYY"),keywords:"\u0421\u0443\u0448\u0438, \u0440\u043e\u043b\u043b\u044b, \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u0414\u043d\u0435\u043f\u0440, \u0414\u043d\u0435\u043f\u0440\u043e\u043f\u0435\u0442\u0440\u043e\u0432\u0441\u043a, \u0417\u0430\u043f\u043e\u0440\u043e\u0436\u044c\u0435, \u0432\u043a\u0443\u0441\u043d\u043e, \u0431\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430",material:"\u0411\u043b\u043e\u0433",contentRating:_.rate,comment:A.map((function(t){return t.content})).join(", "),commentCount:A.length,description:_.content.slice(0,300)};return JSON.stringify(t)}}()}),Object(i.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"WebSite","@id":"#website",url:"https://24rolls.com.ua/",name:"\u0421\u0443\u0448\u0438 24Rolls Dnepr",potentialAction:{"@type":"SearchAction",target:"https://24rolls.com.ua/?s={search_term_string}","query-input":"required name=search_term_string"}})}),Object(i.jsx)("script",{type:"application/ld+json",children:JSON.stringify({"@context":"http://schema.org","@type":"Organization",url:"https://24rolls.com.ua/",logo:d.a,contactPoint:[{"@type":"ContactPoint",telephone:"068 719 24 24",contactType:["customer service","sales"],areaServed:["UA"],contactOption:["TollFree"],availableLanguage:["Russian","Ukrainian"]}],sameAs:["https://www.youtube.com/channel/UCmJwKEidDraJtVdYtpnsJSA","https://www.instagram.com/24rolls.com.ua/"]})})]}),Object(i.jsx)(b.a,{title:"\u0411\u043b\u043e\u0433"}),Object(i.jsxs)("div",{className:"blog_container",children:[Object(i.jsx)("div",{className:"imageTitle",children:Object(i.jsx)("img",{src:u.a+"/".concat(_.image),alt:_.alt})}),Object(i.jsxs)("div",{className:"blog_container_filling",children:[Object(i.jsxs)("div",{className:"blog_container_filling_header",children:[Object(i.jsx)("h1",{children:_.title}),Object(i.jsx)("p",{children:y()(_.date).format("DD.MM.YYYY")})]}),Object(i.jsx)("div",{className:"blog_container_filling_center",children:Object(i.jsx)("iframe",{onLoad:function(t){t.target.style.height=t.target.contentWindow.document.documentElement.scrollHeight+"px"},style:{width:"100%",border:"none",height:"100%",visibility:"visible"},srcDoc:_.content,children:"\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Frame"})}),Object(i.jsxs)("div",{className:"blog_container_filling_bottom",children:[Object(i.jsxs)("div",{className:"blog_container_filling_bottom__rate",children:[Object(i.jsx)(m.a,{count:5,value:_.rate,edit:!1,size:20,isHalf:!0}),Object(i.jsxs)("span",{className:"blog_container_filling_bottom__rate__label",children:["(",_.rate.toFixed(1),")"]})]}),Object(i.jsxs)("p",{onClick:function(){k(!Y)},children:["\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 ","(".concat(A.length,")")]})]})]}),Object(i.jsx)(w,Object(r.a)(Object(r.a)({},t),{},{comments:A,postId:N,opened:Y}))]})]})]})}));e.default=N}}]);
//# sourceMappingURL=3.a108cf86.chunk.js.map