(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{16:function(e,s,a){},30:function(e,s,a){"use strict";a.r(s);var t=a(1),i=a.n(t),c=a(10),r=a.n(c),l=(a(16),a(0)),n=function(){return Object(l.jsx)("section",{className:"page-section bg-primary text-white mb-0",id:"about",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"page-section-heading text-center text-uppercase text-white",children:"About"}),Object(l.jsxs)("div",{className:"divider-custom divider-light",children:[Object(l.jsx)("div",{className:"divider-custom-line"}),Object(l.jsx)("div",{className:"divider-custom-icon",children:Object(l.jsx)("i",{className:"fas fa-star"})}),Object(l.jsx)("div",{className:"divider-custom-line"})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-lg-4 ms-auto",children:Object(l.jsx)("p",{className:"lead",children:"Hello, I am Agustin Villarreal, I am 19 years old and I am from Argentina. I began to be interested in web development in 2020 and in a self-taught way I began to carry out my own projects"})}),Object(l.jsx)("div",{className:"col-lg-4 me-auto",children:Object(l.jsx)("p",{className:"lead",children:"On the other hand, I am an engineering student at UTN. I am a developer working on the frontEnd side (React), I also have knowledge in backend. I am passionate about technology. I love listening to music, at the same time I investigate all kind of tools that relate to my professional career."})})]}),Object(l.jsx)("div",{className:"text-center mt-4",children:Object(l.jsxs)("a",{className:"btn btn-xl btn-outline-light",target:"_blank",rel:"noopener noreferrer",href:"/assets/img/portfolio/CV.pdf",children:[Object(l.jsx)("i",{className:"fas fa-download me-2"}),"Download CV"]})})]})})},o=a(2),d=a(6),m=a(3),j=a(7),b=a.n(j),x=a(11),h=a.n(x),p=function(){var e=Object(t.useState)({user_name:"",user_email:"",phone:"",message:""}),s=Object(m.a)(e,2),a=s[0],i=s[1],c=Object(t.useState)({}),r=Object(m.a)(c,2),n=r[0],j=r[1],x=Object(t.useState)(!1),p=Object(m.a)(x,2),u=p[0],g=p[1],O=a.user_name,v=a.user_email,f=a.phone,N=a.message;Object(t.useEffect)((function(){u&&(0===Object.keys(n).length&&h.a.send("service_yb8utfe","template_uhyuf67",a,"user_2rQKo6dvHsni0FQsaWzko").then((function(e){b.a.fire("Good job!","The message has been sent","success"),console.log(e.text)}),(function(e){b.a.fire("Please try again","Something went wrong!","error"),console.log(e.text)})),g(!1))}),[n]);var y=function(e){i(Object(d.a)(Object(d.a)({},a),{},Object(o.a)({},e.target.name,e.target.value)))},w=function(e){e.preventDefault();var s=function(){var e={};return""===O.trim()&&(e.name="Name Required"),""===v.trim()?e.email="Email Required":/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(v)||(e.email="Invalid email address"),""===N.trim()&&(e.msg="Message Required"),e}();j(s),g(!0)};return Object(l.jsx)("section",{className:"page-section",id:"contact",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0",children:"Contact Me!"}),Object(l.jsxs)("div",{className:"divider-custom",children:[Object(l.jsx)("div",{className:"divider-custom-line"}),Object(l.jsx)("div",{className:"divider-custom-icon",children:Object(l.jsx)("i",{className:"fas fa-star"})}),Object(l.jsx)("div",{className:"divider-custom-line"})]}),Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsx)("div",{className:"col-lg-8 col-xl-7",children:Object(l.jsxs)("form",{noValidate:!0,onSubmit:function(e){return w(e)},children:[Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("input",{className:"form-control",id:"inputName",type:"text",placeholder:"Enter your name...",onChange:y,value:O,name:"user_name"}),n.name&&Object(l.jsx)("div",{className:"alert alert-danger p-2 mt-2",children:n.name}),Object(l.jsx)("label",{htmlFor:"inputName",children:"Name"})]}),Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("input",{className:"form-control",id:"inputEmail",type:"email",placeholder:"Enter your email...",value:v,onChange:y,name:"user_email"}),n.email&&Object(l.jsx)("div",{className:"alert alert-danger p-2 mt-2",children:n.email}),Object(l.jsx)("label",{htmlFor:"inputEmail",children:"Email address"})]}),Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("input",{className:"form-control",id:"inputPhone",type:"tel",placeholder:"Enter your phone number...",value:f,onChange:y,name:"phone"}),Object(l.jsxs)("label",{htmlFor:"inputPhone",children:["Phone Number ",Object(l.jsx)("span",{className:"h6 fw-normal",children:"(Optional)"})]})]}),Object(l.jsxs)("div",{className:"form-floating",children:[Object(l.jsx)("textarea",{className:"form-control",id:"inputMessage",placeholder:"Enter your message here...",style:{height:"12rem"},value:N,onChange:y,name:"message"}),n.msg&&Object(l.jsx)("div",{className:"alert alert-danger p-2 mt-2",children:n.msg}),Object(l.jsx)("label",{htmlFor:"inputMessage",children:"Message"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"btn btn-primary btn-xl",type:"submit",children:"Send"})]})})})]})})},u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("footer",{className:"footer text-center",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0",children:[Object(l.jsx)("h4",{className:"text-uppercase mb-4",children:"Location"}),Object(l.jsxs)("p",{className:"lead mb-0",children:["642 Coronel Dominguez",Object(l.jsx)("br",{}),"Buenos Aires, Ciudad Madero"]})]}),Object(l.jsxs)("div",{className:"col-lg-6 mb-5 mb-lg-0",children:[Object(l.jsx)("h4",{className:"text-uppercase mb-4",children:"Around the Web"}),Object(l.jsx)("a",{className:"btn btn-outline-light btn-social mx-1",href:"https://www.linkedin.com/in/agustin-villarreal-0b17b919b/",target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("i",{className:"fab fa-fw fa-linkedin-in"})})]})]})})}),Object(l.jsx)("div",{className:"copyright py-4 text-center text-white",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("small",{children:"Copyright \xa9 Agustin Portfolio 2021"})})})]})},g=function(){return Object(l.jsx)("header",{className:"masthead bg-primary text-white text-center",children:Object(l.jsxs)("div",{className:"container d-flex align-items-center flex-column",children:[Object(l.jsx)("img",{className:"masthead-avatar mb-5",src:"assets/img/avataaars.svg",alt:"..."}),Object(l.jsx)("h1",{className:"masthead-heading text-uppercase mb-0",children:"Agustin Villarreal"}),Object(l.jsxs)("div",{className:"divider-custom divider-light",children:[Object(l.jsx)("div",{className:"divider-custom-line"}),Object(l.jsx)("div",{className:"divider-custom-icon",children:Object(l.jsx)("i",{className:"fas fa-star"})}),Object(l.jsx)("div",{className:"divider-custom-line"})]}),Object(l.jsx)("p",{className:"masthead-subheading font-weight-light mb-0",children:"Web Developer specialized in Javascript & React"})]})})},O=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg bg-secondary text-uppercase fixed-top",id:"mainNav",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#page-top",children:"My Portfolio"}),Object(l.jsxs)("button",{className:"navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation",children:["Menu",Object(l.jsx)("i",{className:"fas fa-bars"})]}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarResponsive",children:Object(l.jsxs)("ul",{className:"navbar-nav ms-auto",children:[Object(l.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:Object(l.jsx)("a",{className:"nav-link py-3 px-0 px-lg-3 rounded",href:"#portfolio",children:"Portfolio"})}),Object(l.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:Object(l.jsx)("a",{className:"nav-link py-3 px-0 px-lg-3 rounded",href:"#about",children:"About"})}),Object(l.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:Object(l.jsx)("a",{className:"nav-link py-3 px-0 px-lg-3 rounded",href:"#skills",children:"Skills"})}),Object(l.jsx)("li",{className:"nav-item mx-0 mx-lg-1",children:Object(l.jsx)("a",{className:"nav-link py-3 px-0 px-lg-3 rounded",href:"#contact",children:"Contact"})})]})})]})})},v=function(){return Object(l.jsx)("section",{className:"page-section portfolio",id:"portfolio",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0",children:"Portfolio"}),Object(l.jsxs)("div",{className:"divider-custom",children:[Object(l.jsx)("div",{className:"divider-custom-line"}),Object(l.jsx)("div",{className:"divider-custom-icon",children:Object(l.jsx)("i",{className:"fas fa-star"})}),Object(l.jsx)("div",{className:"divider-custom-line"})]}),Object(l.jsxs)("div",{className:"row justify-content-center",children:[Object(l.jsx)("div",{className:"col-md-6 col-lg-4 mb-5",children:Object(l.jsxs)("div",{className:"portfolio-item mx-auto","data-bs-toggle":"modal","data-bs-target":"#portfolioModal1",children:[Object(l.jsx)("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100",children:Object(l.jsx)("div",{className:"portfolio-item-caption-content text-center text-white",children:Object(l.jsx)("i",{className:"fas fa-plus fa-3x"})})}),Object(l.jsx)("img",{className:"img-fluid",src:"assets/img/portfolio/cabin.png",alt:"..."})]})}),Object(l.jsx)("div",{className:"col-md-6 col-lg-4 mb-5",children:Object(l.jsxs)("div",{className:"portfolio-item mx-auto","data-bs-toggle":"modal","data-bs-target":"#portfolioModal2",children:[Object(l.jsx)("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100",children:Object(l.jsx)("div",{className:"portfolio-item-caption-content text-center text-white",children:Object(l.jsx)("i",{className:"fas fa-plus fa-3x"})})}),Object(l.jsx)("img",{className:"img-fluid",src:"assets/img/portfolio/cake.png",alt:"..."})]})}),Object(l.jsx)("div",{className:"col-md-6 col-lg-4 mb-5",children:Object(l.jsxs)("div",{className:"portfolio-item mx-auto","data-bs-toggle":"modal","data-bs-target":"#portfolioModal3",children:[Object(l.jsx)("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100",children:Object(l.jsx)("div",{className:"portfolio-item-caption-content text-center text-white",children:Object(l.jsx)("i",{className:"fas fa-plus fa-3x"})})}),Object(l.jsx)("img",{className:"img-fluid",src:"assets/img/portfolio/circus.png",alt:"..."})]})}),Object(l.jsx)("div",{className:"col-md-6 col-lg-4 mb-5 mb-lg-0",children:Object(l.jsxs)("div",{className:"portfolio-item mx-auto","data-bs-toggle":"modal","data-bs-target":"#portfolioModal4",children:[Object(l.jsx)("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100",children:Object(l.jsx)("div",{className:"portfolio-item-caption-content text-center text-white",children:Object(l.jsx)("i",{className:"fas fa-plus fa-3x"})})}),Object(l.jsx)("img",{className:"img-fluid",src:"assets/img/portfolio/game.png",alt:"..."})]})}),Object(l.jsx)("div",{className:"col-md-6 col-lg-4 mb-5 mb-md-0",children:Object(l.jsxs)("div",{className:"portfolio-item mx-auto","data-bs-toggle":"modal","data-bs-target":"#portfolioModal5",children:[Object(l.jsx)("div",{className:"portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100",children:Object(l.jsx)("div",{className:"portfolio-item-caption-content text-center text-white",children:Object(l.jsx)("i",{className:"fas fa-plus fa-3x"})})}),Object(l.jsx)("img",{className:"img-fluid",src:"assets/img/portfolio/safe.png",alt:"..."})]})})]})]})})},f=function(){return Object(l.jsx)("section",{className:"page-section",id:"skills",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"page-section-heading text-center text-uppercase text-secondary mb-0",children:"Skills"}),Object(l.jsxs)("div",{className:"divider-custom",children:[Object(l.jsx)("div",{className:"divider-custom-line"}),Object(l.jsx)("div",{className:"divider-custom-icon",children:Object(l.jsx)("i",{className:"fas fa-star"})}),Object(l.jsx)("div",{className:"divider-custom-line"})]}),Object(l.jsxs)("div",{className:"row mt-5",children:[Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h2",{className:"text-center",children:"Languages and Frameworks"}),Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"HTML5"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"50%"}})})]}),Object(l.jsxs)("div",{className:"skill-item mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"CSS3"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"40%"}})})]}),Object(l.jsxs)("div",{className:"skill-item mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"JavaScript"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"60%"}})})]}),Object(l.jsxs)("div",{className:"skill-item mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"React"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"}})})]}),Object(l.jsxs)("div",{className:"skill-item mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"NodeJs"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"30%"}})})]})]}),Object(l.jsxs)("div",{className:"col-md-6",children:[Object(l.jsx)("h2",{className:"text-center",children:"Tools"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"Firebase"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"50%"}})})]}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"GitHub"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"60%"}})})]}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"MongoDB"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"30%"}})})]}),Object(l.jsxs)("div",{className:"mb-4",children:[Object(l.jsx)("h3",{className:"fs-6",children:"Visual Studio Code"}),Object(l.jsx)("div",{className:"progress",children:Object(l.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"}})})]})]})]})]})]})})},N=function(e){var s=e.title,a=e.id,t=e.img,i=e.description,c=e.urlPage,r=e.urlGit;return console.log(t),Object(l.jsx)("div",{className:"portfolio-modal modal fade",id:a,tabIndex:"-1","aria-labelledby":a,"aria-hidden":"true",children:Object(l.jsx)("div",{className:"modal-dialog modal-xl",children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("div",{className:"modal-header border-0",children:Object(l.jsx)("button",{className:"btn-close",type:"button","data-bs-dismiss":"modal","aria-label":"Close"})}),Object(l.jsx)("div",{className:"modal-body text-center pb-5",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row justify-content-center",children:Object(l.jsxs)("div",{className:"col-lg-8",children:[Object(l.jsx)("h2",{className:"portfolio-modal-title text-secondary text-uppercase mb-0",children:s}),Object(l.jsxs)("div",{className:"divider-custom",children:[Object(l.jsx)("div",{className:"divider-custom-line"}),Object(l.jsx)("div",{className:"divider-custom-icon",children:Object(l.jsx)("i",{className:"fas fa-star"})}),Object(l.jsx)("div",{className:"divider-custom-line"})]}),Object(l.jsx)("img",{className:"img-fluid rounded mb-5",src:"assets/img/portfolio/".concat(t),alt:"..."}),Object(l.jsx)("p",{className:"mb-4",children:i}),Object(l.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(l.jsxs)("a",{className:"btn btn-primary",href:c,target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)("i",{className:"fas fa-times fa-fw"}),"Demo"]}),Object(l.jsxs)("a",{className:"btn btn-secondary",href:r,target:"_blank",rel:"noopener noreferrer",children:[Object(l.jsx)("i",{className:"fas fa-times fa-fw"}),"GitHub"]}),Object(l.jsxs)("button",{className:"btn btn-danger",href:"#!","data-bs-dismiss":"modal",children:[Object(l.jsx)("i",{className:"fas fa-times fa-fw"}),"Close"]})]})]})})})})]})})})};var y=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(O,{}),Object(l.jsx)(g,{}),Object(l.jsx)(v,{}),Object(l.jsx)(n,{}),Object(l.jsx)(f,{}),Object(l.jsx)(p,{}),Object(l.jsx)(u,{}),Object(l.jsx)(N,{title:"CRUD Redux",id:"portfolioModal1",img:"cabin.png",urlPage:"https://redux-crud-agus.netlify.app/",urlGit:"https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/crudredux",description:"Product Manager. Proyect CRUD made with React Redux, REST API in json-server & Axios. Bootstrap to CSS"}),Object(l.jsx)(N,{title:"Mern Tasks",id:"portfolioModal2",img:"cake.png",urlGit:"https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/MernTask",urlPage:"https://merntask-agus.netlify.app/",description:"Task Manager. Front-end built with React. Back-End: NodeJS and MongoDB to authentications and database"}),Object(l.jsx)(N,{title:"Product Hunt Clone",id:"portfolioModal3",img:"circus.png",urlPage:"#!",urlGit:"",description:"Project that pretends to be Product Hunt. Front-end made with React and NextJs, using Firebase to authentications and Firestore Database"}),Object(l.jsx)(N,{title:"Cryptocurrency Quotes",id:"portfolioModal4",img:"game.png",urlPage:"https://cotizatucripto.netlify.app/",urlGit:"https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/criptomonedas",description:"Cryptocurrency quote. Project made in React, consulting CryptoCompare API "}),Object(l.jsx)(N,{title:"My Bar",id:"portfolioModal5",img:"safe.png",urlPage:"https://mybar-agus.netlify.app/",urlGit:"https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/bebidas",description:"Cocktail Search engine. Project made in React, consulting TheCocktailDB."})]})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(s){var a=s.getCLS,t=s.getFID,i=s.getFCP,c=s.getLCP,r=s.getTTFB;a(e),t(e),i(e),c(e),r(e)}))};r.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("page-top")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.99b2090d.chunk.js.map