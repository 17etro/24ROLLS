(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[12],{241:function(e,t,a){},270:function(e,t,a){"use strict";a.r(t);var s=a(2),o=a(3),l=a(0),n=a(1),i=a.n(n),r=a(18),d=a(19),c=a(21),h=a(20),u=a(10),p=a.n(u),m=a(7),g=a.n(m),j=a(233),v=a(4),b=(a(241),a(24)),O=a(11),x=a(72),f=a(33),w=a(8),F=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={logInForm:{phone:{value:"",touched:!1,valid:!1,validation:{required:!0,isPhone:!0}},password:{value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}}},formIsValid:!1,error:null,modalRecoverPassword:!1,loading:!1},e.inputChangedHandler=function(t,a){var o=Object(s.a)({},e.state.logInForm),l=Object(s.a)({},o[a]);l.value=t.target.value,l.touched=!0,l.valid=Object(f.a)(l.value,l.validation),o[a]=l;var n=!0;for(var i in o)n=o[i].valid&&n;e.setState({logInForm:o,formIsValid:n})},e.onSubmitFormHandler=function(){e.setState({loading:!0}),p.a.post(v.a+"/login",{phone:e.state.logInForm.phone.value,password:e.state.logInForm.password.value}).then((function(t){var a=t.data.token,s=g.a.get("24rolls");s.user={token:a},g.a.set("24rolls",s),e.setState({error:null}),p.a.get(v.a+"/user/",{headers:{Authorization:"Bearer ".concat(g.a.get("24rolls").user.token)}}).then((function(t){var a=t.data.user.sumUserBonus;(0,e.context.dispatch)({type:w.a.SET_BONUS_AMOUNT,bonus:a}),e.setState({loading:!1}),e.props.history.push(e.props.match.path.slice(0,3)+"/?redirectpersonal=true")})).catch((function(e){}))})).catch((function(t){var a="";"RU"===g.a.get("24rolls").customOptions.language?(404===t.response.status&&(a="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),401===t.response.status&&(a="\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d")):(404===t.response.status&&(a="\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),401===t.response.status&&(a="\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043d\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439")),e.setState({error:a,loading:!1})}))},e.onModalRecoverPasswordHandler=function(){e.setState({modalRecoverPassword:!1}),e.props.history.push(e.props.match.path.slice(0,3)+"/log-in")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){"?changed-password=true"===this.props.location.search&&this.setState({modalRecoverPassword:!0})}},{key:"render",value:function(){var e=this,t="label-invalid-style",a="input-invalid-style",s=this.props.t;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{show:this.state.modalRecoverPassword,modalClosed:this.onModalRecoverPasswordHandler,children:Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("p",{style:{color:"green",textAlign:"center",fontWeight:"700",fontSize:"24px"},children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043c\u0435\u043d\u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!"})})}),Object(l.jsxs)("div",{className:"log-in-block__container",children:[Object(l.jsxs)("div",{className:"log-in-block",children:[Object(l.jsx)("h3",{children:s("order.logIn.entrance")}),Object(l.jsx)("label",{className:!this.state.logInForm.phone.valid&&this.state.logInForm.phone.touched?t:null,children:s("order.logIn.phone")}),Object(l.jsx)(x.a,{format:"+38(0##) ### ## ##",mask:"_",allowEmptyFormatting:!0,value:this.state.logInForm.phone.value,onChange:function(t){return e.inputChangedHandler(t,"phone")},className:!this.state.logInForm.phone.valid&&this.state.logInForm.phone.touched?a:null}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logInForm.password.valid&&this.state.logInForm.password.touched?t:null,children:s("order.logIn.password")}),Object(l.jsx)("input",{type:"password",className:!this.state.logInForm.password.valid&&this.state.logInForm.password.touched?a:null,placeholder:s("order.logIn.enterPassword"),value:this.state.logInForm.password.value,onChange:function(t){return e.inputChangedHandler(t,"password")}}),Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),this.state.loading?Object(l.jsx)(O.a,{}):Object(l.jsx)("button",{disabled:!this.state.formIsValid,className:this.state.formIsValid?null:"form-button-disabled",onClick:this.onSubmitFormHandler,children:s("button.logIn")})]}),Object(l.jsx)("p",{onClick:this.props.switchMode,children:s("order.logIn.dontHaveAccount")}),Object(l.jsx)("p",{onClick:this.props.restoreMode,children:s("order.logIn.forgotPassword")})]})]})}}]),a}(i.a.Component);F.contextType=w.c;var y=Object(j.a)()(F),U=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={logUpForm:{phone:{value:"",touched:!1,valid:!1,validation:{required:!0,isPhone:!0}},email:{value:"",touched:!1,valid:!1,validation:{required:!0,maxLength:50,isEmail:!0}},password:{value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}},confirmedPassword:{value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}}},formIsValid:!1,emailModalOpened:!1,error:null,loading:!1},e.inputChangedHandler=function(t,a){var o=Object(s.a)({},e.state.logUpForm),l=Object(s.a)({},o[a]);l.value=t.target.value,l.touched=!0,l.valid=Object(f.a)(t.target.value,l.validation),"confirmedPassword"===a&&(l.valid=l.value===o.password.value),o[a]=l;var n=!0;for(var i in o)n=o[i].valid&&n;e.setState({logUpForm:o,formIsValid:n})},e.onSubmitFormHandler=function(){e.setState({loading:!0}),p.a.post(v.a+"/signup",{phoneNumber:e.state.logUpForm.phone.value,email:e.state.logUpForm.email.value,password:e.state.logUpForm.password.value}).then((function(t){200===t.status&&e.setState({emailModalOpened:!0}),e.setState({loading:!1,error:null})})).catch((function(t){var a="";"RU"===e.state.language?(400===t.response.status&&(a="\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0436\u0435 \u0437\u0430\u043d\u044f\u0442\u044b"),500===t.response.status&&(a="\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0436\u0435 \u0437\u0430\u043d\u044f\u0442\u044b")):(400===t.response.status&&(a="\u0414\u0430\u043d\u043d\u0456 \u0432\u0436\u0435 \u0437\u0430\u0439\u043d\u044f\u0442\u0456"),500===t.response.status&&(a="\u0414\u0430\u043d\u043d\u0456 \u0432\u0436\u0435 \u0437\u0430\u0439\u043d\u044f\u0442\u0456")),e.setState({error:a,loading:!1})}))},e.onEmailModalClosedHandler=function(){e.setState({emailModalOpened:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t="label-invalid-style",a="input-invalid-style";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{show:this.state.emailModalOpened,modalClosed:this.onEmailModalClosedHandler,children:Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("p",{children:"RU"===this.state.language?"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430":"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0448\u0442\u0443 \u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443"})})}),Object(l.jsxs)("div",{className:"log-in-block__container",style:{paddingBottom:"40px"},children:[Object(l.jsxs)("div",{className:"log-in-block log-up-block-fix",children:[Object(l.jsx)("h3",{children:"RU"===this.state.language?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),Object(l.jsx)("label",{className:!this.state.logUpForm.phone.valid&&this.state.logUpForm.phone.touched?t:null,children:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(l.jsx)(x.a,{format:"+38(0##) ### ## ##",mask:"_",allowEmptyFormatting:!0,value:this.state.logUpForm.phone.value,onChange:function(t){return e.inputChangedHandler(t,"phone")},className:!this.state.logUpForm.phone.valid&&this.state.logUpForm.phone.touched?a:null}),Object(l.jsx)("label",{className:!this.state.logUpForm.email.valid&&this.state.logUpForm.email.touched?t:null,children:"\u0412\u0430\u0448 email"}),Object(l.jsx)("input",{type:"text",className:!this.state.logUpForm.email.valid&&this.state.logUpForm.email.touched?a:null,placeholder:"\u0412\u0430\u0448 email",value:this.state.logUpForm.email.value,onChange:function(t){return e.inputChangedHandler(t,"email")}}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logUpForm.password.valid&&this.state.logUpForm.password.touched?t:null,children:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{type:"password",className:!this.state.logUpForm.password.valid&&this.state.logUpForm.password.touched?a:null,placeholder:"RU"===this.state.language?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c":"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.logUpForm.password.value,onChange:function(t){return e.inputChangedHandler(t,"password")}}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logUpForm.confirmedPassword.valid&&this.state.logUpForm.confirmedPassword.touched?t:null,children:"RU"===this.state.language?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{type:"password",className:!this.state.logUpForm.confirmedPassword.valid&&this.state.logUpForm.confirmedPassword.touched?a:null,placeholder:"RU"===this.state.language?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.logUpForm.confirmedPassword.value,onChange:function(t){return e.inputChangedHandler(t,"confirmedPassword")}}),this.state.error&&Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),this.state.loading?Object(l.jsx)(O.a,{}):Object(l.jsx)("button",{style:{width:"100%",minWidth:"220px",padding:"20px"},disabled:!this.state.formIsValid,className:this.state.formIsValid?"log-up-button-fix":"form-button-disabled log-up-button-fix",onClick:this.onSubmitFormHandler,children:"RU"===this.state.language?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"})]}),Object(l.jsx)("p",{onClick:this.props.switchMode,children:"RU"===this.state.language?"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442":"\u0423 \u043c\u0435\u043d\u0435 \u0454 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})]})}}]),a}(i.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(r.a)(this,a);for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={email:{value:"",touched:!1,valid:!1,validation:{required:!0,isEmail:!0}},error:null,emailModalOpened:!1,loading:!1},e.inputChangedHandler=function(t){var a=Object(s.a)({},e.state.email);a.value=t.target.value,a.touched=!0,a.valid=Object(f.a)(a.value,a.validation),e.setState({email:a})},e.onSubmitFormHandler=function(){e.setState({loading:!0}),p.a.post(v.a+"/recover",{email:e.state.email.value}).then((function(t){e.setState({emailModalOpened:!0,loading:!1,error:null})})).catch((function(t){401===t.response.status&&e.setState({error:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",loading:!1})}))},e.onEmailModalClosedHandler=function(){e.setState({emailModalOpened:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{show:this.state.emailModalOpened,modalClosed:this.onEmailModalClosedHandler,children:Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0434\u043b\u044f \u0441\u043c\u0435\u043d\u044b \u043f\u0430\u0440\u043e\u043b\u044f"})})}),Object(l.jsxs)("div",{className:"log-in-block__container",style:{paddingBottom:"40px"},children:[Object(l.jsxs)("div",{className:"log-in-block log-up-block-fix",children:[Object(l.jsx)("h3",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(l.jsx)("label",{className:!this.state.email.valid&&this.state.email.touched?"label-invalid-style":null,children:"\u0412\u0430\u0448 email"}),Object(l.jsx)("input",{type:"text",className:!this.state.email.valid&&this.state.email.touched?"input-invalid-style":null,placeholder:"\u0412\u0430\u0448 email",value:this.state.email.value,onChange:function(t){return e.inputChangedHandler(t)}}),this.state.error&&Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),this.state.loading?Object(l.jsx)(O.a,{}):Object(l.jsx)("button",{style:{width:"100%",minWidth:"220px",padding:"20px"},disabled:!this.state.email.valid,className:this.state.email.valid?"log-up-button-fix":"form-button-disabled",onClick:this.onSubmitFormHandler,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(l.jsx)("p",{onClick:this.props.switchMode,children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0432\u0445\u043e\u0434\u0443"})]})]})}}]),a}(i.a.Component);t.default=function(e){var t=Object(n.useState)("log-in"),a=Object(o.a)(t,2),i=a[0],r=a[1],d=function(){r("log-in")};return Object(l.jsxs)("div",{style:{paddingTop:"50px"},children:["log-in"===i&&Object(l.jsx)(y,Object(s.a)(Object(s.a)({},e),{},{switchMode:function(){r("log-up")},restoreMode:function(){r("restore-pass")}})),"log-up"===i&&Object(l.jsx)(U,Object(s.a)(Object(s.a)({},e),{},{switchMode:d})),"restore-pass"===i&&Object(l.jsx)(C,Object(s.a)(Object(s.a)({},e),{},{switchMode:d}))]})}}}]);
//# sourceMappingURL=12.a175a68a.chunk.js.map