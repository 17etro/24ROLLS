(this["webpackJsonp24-rols"]=this["webpackJsonp24-rols"]||[]).push([[11],{244:function(e,t,a){},269:function(e,t,a){"use strict";a.r(t);var s=a(2),o=a(3),l=a(0),n=a(1),r=a.n(n),i=a(16),d=a(17),c=a(19),h=a(18),u=a(9),p=a.n(u),m=a(4),g=a.n(m),j=a(236),b=a(8),v=(a(244),a(26)),O=a(11),x=a(33),f=a(7),w=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={logInForm:{phone:{value:"",touched:!1,valid:!1,validation:{required:!0,isPhone:!0}},password:{value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}}},formIsValid:!1,error:null,modalRecoverPassword:!1,loading:!1},e.inputChangedHandler=function(t,a){var o=Object(s.a)({},e.state.logInForm),l=Object(s.a)({},o[a]);l.value=t.target.value,l.touched=!0,console.log(l.value),l.valid=Object(x.a)(l.value,l.validation),o[a]=l;var n=!0;for(var r in o)n=o[r].valid&&n;e.setState({logInForm:o,formIsValid:n})},e.onSubmitFormHandler=function(){e.setState({loading:!0}),p.a.post(b.a+"/login",{phone:e.state.logInForm.phone.value,password:e.state.logInForm.password.value}).then((function(t){var a=t.data.token,s=g.a.get("24rolls");s.user={token:a},g.a.set("24rolls",s),e.setState({error:null}),p.a.get(b.a+"/user/",{headers:{Authorization:"Bearer ".concat(g.a.get("24rolls").user.token)}}).then((function(t){var a=t.data.user.sumUserBonus;(0,e.context.dispatch)({type:f.a.SET_BONUS_AMOUNT,bonus:a}),e.setState({loading:!1}),e.props.history.push(e.props.match.path.slice(0,3)+"/?redirectpersonal=true")})).catch((function(e){return console.log(e,e.response)}))})).catch((function(t){var a="";"RU"===g.a.get("24rolls").customOptions.language?(404===t.response.status&&(a="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),401===t.response.status&&(a="\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d")):(404===t.response.status&&(a="\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"),401===t.response.status&&(a="\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0437 \u0442\u0430\u043a\u0438\u043c \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043d\u0435 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u043e\u0432\u0430\u043d\u0438\u0439")),e.setState({error:a,loading:!1})}))},e.onModalRecoverPasswordHandler=function(){e.setState({modalRecoverPassword:!1}),e.props.history.push(e.props.match.path.slice(0,3)+"/log-in")},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){"?changed-password=true"===this.props.location.search&&this.setState({modalRecoverPassword:!0})}},{key:"render",value:function(){var e=this,t="label-invalid-style",a="input-invalid-style",s="form-button-disabled",o=this.props.t;return Object(l.jsx)(l.Fragment,{children:this.props.forRightMenu?Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:o("order.logIn.entrance")}),Object(l.jsx)("label",{className:!this.state.logInForm.phone.valid&&this.state.logInForm.phone.touched?t:null,children:o("order.logIn.phone")}),Object(l.jsx)("input",{type:"text",className:!this.state.logInForm.phone.valid&&this.state.logInForm.phone.touched?a:null,placeholder:"+380631122333",value:this.state.logInForm.phone.value,onChange:function(t){return e.inputChangedHandler(t,"phone")}}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logInForm.password.valid&&this.state.logInForm.password.touched?t:null,children:o("order.logIn.password")}),Object(l.jsx)("input",{type:"password",className:!this.state.logInForm.password.valid&&this.state.logInForm.password.touched?a:null,placeholder:o("order.logIn.enterPassword"),value:this.state.logInForm.password.value,onChange:function(t){return e.inputChangedHandler(t,"password")}}),Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),Object(l.jsx)("button",{disabled:!this.state.formIsValid,className:this.state.formIsValid?null:s,onClick:this.onSubmitFormHandler,children:o("button.logIn")})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v.a,{show:this.state.modalRecoverPassword,modalClosed:this.onModalRecoverPasswordHandler,children:Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("p",{style:{color:"green",textAlign:"center",fontWeight:"700",fontSize:"24px"},children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043c\u0435\u043d\u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!"})})}),Object(l.jsxs)("div",{className:"log-in-block__container",children:[Object(l.jsxs)("div",{className:"log-in-block",children:[Object(l.jsx)("h3",{children:o("order.logIn.entrance")}),Object(l.jsx)("label",{className:!this.state.logInForm.phone.valid&&this.state.logInForm.phone.touched?t:null,children:o("order.logIn.phone")}),Object(l.jsx)("input",{type:"text",className:!this.state.logInForm.phone.valid&&this.state.logInForm.phone.touched?a:null,placeholder:"+380631122333",value:this.state.logInForm.phone.value,onChange:function(t){return e.inputChangedHandler(t,"phone")}}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logInForm.password.valid&&this.state.logInForm.password.touched?t:null,children:o("order.logIn.password")}),Object(l.jsx)("input",{type:"password",className:!this.state.logInForm.password.valid&&this.state.logInForm.password.touched?a:null,placeholder:o("order.logIn.enterPassword"),value:this.state.logInForm.password.value,onChange:function(t){return e.inputChangedHandler(t,"password")}}),Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),this.state.loading?Object(l.jsx)(O.a,{}):Object(l.jsx)("button",{disabled:!this.state.formIsValid,className:this.state.formIsValid?null:s,onClick:this.onSubmitFormHandler,children:o("button.logIn")})]}),Object(l.jsx)("p",{onClick:this.props.switchMode,children:o("order.logIn.dontHaveAccount")}),Object(l.jsx)("p",{onClick:this.props.restoreMode,children:o("order.logIn.forgotPassword")})]})]})})}}]),a}(r.a.Component);w.contextType=f.c;var F=Object(j.a)()(w),I=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={logUpForm:{phone:{value:"",touched:!1,valid:!1,validation:{required:!0,isPhone:!0}},email:{value:"",touched:!1,valid:!1,validation:{required:!0,maxLength:50,isEmail:!0}},password:{value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}},confirmedPassword:{value:"",touched:!1,valid:!1,validation:{required:!0,minLength:6}}},formIsValid:!1,emailModalOpened:!1,error:null,loading:!1},e.inputChangedHandler=function(t,a){var o=Object(s.a)({},e.state.logUpForm),l=Object(s.a)({},o[a]);l.value=t.target.value,l.touched=!0,console.log(l.value),l.valid=Object(x.a)(t.target.value,l.validation),"confirmedPassword"===a&&(l.valid=l.value===o.password.value),o[a]=l;var n=!0;for(var r in o)n=o[r].valid&&n;e.setState({logUpForm:o,formIsValid:n})},e.onSubmitFormHandler=function(){e.setState({loading:!0}),p.a.post(b.a+"/signup",{phoneNumber:e.state.logUpForm.phone.value,email:e.state.logUpForm.email.value,password:e.state.logUpForm.password.value}).then((function(t){200===t.status&&e.setState({emailModalOpened:!0}),e.setState({loading:!1,error:null})})).catch((function(t){var a="";"RU"===e.state.language?(400===t.response.status&&(a="\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0436\u0435 \u0437\u0430\u043d\u044f\u0442\u044b"),500===t.response.status&&(a="\u0414\u0430\u043d\u043d\u044b\u0435 \u0443\u0436\u0435 \u0437\u0430\u043d\u044f\u0442\u044b")):(400===t.response.status&&(a="\u0414\u0430\u043d\u043d\u0456 \u0432\u0436\u0435 \u0437\u0430\u0439\u043d\u044f\u0442\u0456"),500===t.response.status&&(a="\u0414\u0430\u043d\u043d\u0456 \u0432\u0436\u0435 \u0437\u0430\u0439\u043d\u044f\u0442\u0456")),e.setState({error:a,loading:!1})}))},e.onEmailModalClosedHandler=function(){e.setState({emailModalOpened:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t="label-invalid-style",a="input-invalid-style";return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v.a,{show:this.state.emailModalOpened,modalClosed:this.onEmailModalClosedHandler,children:Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("p",{children:"RU"===this.state.language?"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430":"\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0448\u0442\u0443 \u0434\u043b\u044f \u043f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043d\u043d\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443"})})}),Object(l.jsxs)("div",{className:"log-in-block__container",style:{paddingBottom:"40px"},children:[Object(l.jsxs)("div",{className:"log-in-block log-up-block-fix",children:[Object(l.jsx)("h3",{children:"RU"===this.state.language?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),Object(l.jsx)("label",{className:!this.state.logUpForm.phone.valid&&this.state.logUpForm.phone.touched?t:null,children:"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(l.jsx)("input",{type:"text",className:!this.state.logUpForm.phone.valid&&this.state.logUpForm.phone.touched?a:null,placeholder:"+380-99-99-99-999",value:this.state.logUpForm.phone.value,onChange:function(t){return e.inputChangedHandler(t,"phone")}}),Object(l.jsx)("label",{className:!this.state.logUpForm.email.valid&&this.state.logUpForm.email.touched?t:null,children:"\u0412\u0430\u0448 email"}),Object(l.jsx)("input",{type:"text",className:!this.state.logUpForm.email.valid&&this.state.logUpForm.email.touched?a:null,placeholder:"\u0412\u0430\u0448 email",value:this.state.logUpForm.email.value,onChange:function(t){return e.inputChangedHandler(t,"email")}}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logUpForm.password.valid&&this.state.logUpForm.password.touched?t:null,children:"\u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{type:"password",className:!this.state.logUpForm.password.valid&&this.state.logUpForm.password.touched?a:null,placeholder:"RU"===this.state.language?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c":"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.logUpForm.password.value,onChange:function(t){return e.inputChangedHandler(t,"password")}}),Object(l.jsx)("label",{style:{marginTop:"20px"},className:!this.state.logUpForm.confirmedPassword.valid&&this.state.logUpForm.confirmedPassword.touched?t:null,children:"RU"===this.state.language?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(l.jsx)("input",{type:"password",className:!this.state.logUpForm.confirmedPassword.valid&&this.state.logUpForm.confirmedPassword.touched?a:null,placeholder:"RU"===this.state.language?"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c":"\u041f\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c",value:this.state.logUpForm.confirmedPassword.value,onChange:function(t){return e.inputChangedHandler(t,"confirmedPassword")}}),this.state.error&&Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),this.state.loading?Object(l.jsx)(O.a,{}):Object(l.jsx)("button",{style:{width:"100%",minWidth:"220px",padding:"20px"},disabled:!this.state.formIsValid,className:this.state.formIsValid?"log-up-button-fix":"form-button-disabled log-up-button-fix",onClick:this.onSubmitFormHandler,children:"RU"===this.state.language?"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f":"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044c"})]}),Object(l.jsx)("p",{onClick:this.props.switchMode,children:"RU"===this.state.language?"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442":"\u0423 \u043c\u0435\u043d\u0435 \u0454 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"})]})]})}}]),a}(r.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,l=new Array(o),n=0;n<o;n++)l[n]=arguments[n];return(e=t.call.apply(t,[this].concat(l))).state={email:{value:"",touched:!1,valid:!1,validation:{required:!0,isEmail:!0}},error:null,emailModalOpened:!1,loading:!1},e.inputChangedHandler=function(t){var a=Object(s.a)({},e.state.email);a.value=t.target.value,a.touched=!0,a.valid=Object(x.a)(a.value,a.validation),e.setState({email:a})},e.onSubmitFormHandler=function(){e.setState({loading:!0}),p.a.post(b.a+"/recover",{email:e.state.email.value}).then((function(t){e.setState({emailModalOpened:!0,loading:!1,error:null})})).catch((function(t){401===t.response.status&&e.setState({error:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c email \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442",loading:!1})}))},e.onEmailModalClosedHandler=function(){e.setState({emailModalOpened:!1})},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(v.a,{show:this.state.emailModalOpened,modalClosed:this.onEmailModalClosedHandler,children:Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)("p",{children:"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443 \u0434\u043b\u044f \u0441\u043c\u0435\u043d\u044b \u043f\u0430\u0440\u043e\u043b\u044f"})})}),Object(l.jsxs)("div",{className:"log-in-block__container",style:{paddingBottom:"40px"},children:[Object(l.jsxs)("div",{className:"log-in-block log-up-block-fix",children:[Object(l.jsx)("h3",{children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f"}),Object(l.jsx)("label",{className:!this.state.email.valid&&this.state.email.touched?"label-invalid-style":null,children:"\u0412\u0430\u0448 email"}),Object(l.jsx)("input",{type:"text",className:!this.state.email.valid&&this.state.email.touched?"input-invalid-style":null,placeholder:"\u0412\u0430\u0448 email",value:this.state.email.value,onChange:function(t){return e.inputChangedHandler(t)}}),this.state.error&&Object(l.jsx)("p",{className:"log-in-block__error",children:this.state.error}),this.state.loading?Object(l.jsx)(O.a,{}):Object(l.jsx)("button",{style:{width:"100%",minWidth:"220px",padding:"20px"},disabled:!this.state.email.valid,className:this.state.email.valid?"log-up-button-fix":"form-button-disabled",onClick:this.onSubmitFormHandler,children:"\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c"})]}),Object(l.jsx)("p",{onClick:this.props.switchMode,children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0432\u0445\u043e\u0434\u0443"})]})]})}}]),a}(r.a.Component);t.default=function(e){var t=Object(n.useState)("log-in"),a=Object(o.a)(t,2),r=a[0],i=a[1],d=function(){i("log-in")};return Object(l.jsxs)("div",{style:{paddingTop:"50px"},children:["log-in"===r&&Object(l.jsx)(F,Object(s.a)(Object(s.a)({},e),{},{switchMode:function(){i("log-up")},restoreMode:function(){i("restore-pass")}})),"log-up"===r&&Object(l.jsx)(I,Object(s.a)(Object(s.a)({},e),{},{switchMode:d})),"restore-pass"===r&&Object(l.jsx)(y,Object(s.a)(Object(s.a)({},e),{},{switchMode:d}))]})}}}]);
//# sourceMappingURL=11.a8051514.chunk.js.map