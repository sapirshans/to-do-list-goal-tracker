(this["webpackJsonpto-do-list-goal-tracker"]=this["webpackJsonpto-do-list-goal-tracker"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(11),s=n.n(o),r=(n(17),n(10)),l=n(12),c=(n(18),n(5)),u=n(6),h=n(2),d=n(8),b=n(7),j=n(0),p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){a.props.handleDelete(a.props.id)},a.state={buttonHover:!1,taskHover:!1,isCompleted:!1},a.toggleButtonHover=a.toggleButtonHover.bind(Object(h.a)(a)),a.toggleTaskHover=a.toggleTaskHover.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.handleDelete=a.handleDelete.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"toggleButtonHover",value:function(){this.setState({buttonHover:!this.state.buttonHover})}},{key:"toggleTaskHover",value:function(){this.setState({taskHover:!this.state.taskHover})}},{key:"handleClick",value:function(){this.setState({isCompleted:!this.state.isCompleted})}},{key:"render",value:function(){var e={marginLeft:"10px",cursor:"pointer"},t={textDecoration:"none",margin:"0px"};return this.state.buttonHover&&(t={textDecoration:"line-through",margin:"0px"}),this.state.isCompleted&&(t={textDecoration:"linethrough",color:"gray",margin:"0px"}),this.state.taskHover&&(t={textDecoration:"underline",margin:"0px"}),Object(j.jsxs)("div",{id:"task",style:{fontFamily:"Verdana",display:"flex",padding:"10px",flexFlow:"row",justifyContent:"center",alignItems:"center",fontSize:"24px"},children:[Object(j.jsx)("p",{style:t,onMouseEnter:this.toggleTaskHover,onMouseLeave:this.toggleTaskHover,children:this.props.task}),Object(j.jsxs)("svg",{width:"20px",height:"20px",style:e,onMouseEnter:this.toggleButtonHover,onMouseLeave:this.toggleButtonHover,onClick:this.handleClick,children:[Object(j.jsx)("circle",{cx:"10",cy:"10",r:"10px",fill:"gray"}),Object(j.jsx)("line",{x1:"5",x2:"15",y1:"10",y2:"10",stroke:"white",strokeWidth:"2"})]}),Object(j.jsx)("svg",{width:"20px",height:"20px",className:"delete-task",onClick:this.handleDelete,style:e,children:Object(j.jsx)("circle",{cx:"10",cy:"10",r:"10px",fill:"red"})})]})}}]),n}(a.Component),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),a.props.handleSubmit(a.state.value),a.setState({value:""})},a.handleInput=function(e){a.setState({value:e.target.value})},a.state={value:""},a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.handleInput=a.handleInput.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"task-input",children:Object(j.jsx)("form",{onSubmit:this.handleSubmit,children:Object(j.jsx)("input",{type:"text",className:"newtask",placeholder:"enter task and click enter",value:this.state.value,onChange:this.handleInput,style:{border:"none",borderBottom:"3px solid #294936",width:"42%",fontSize:"30px"}})})})}}]),n}(a.Component);var g=function(){var e=i.a.useState([]),t=Object(l.a)(e,2),n=t[0],a=t[1];function o(e){var t=Object(r.a)(n);t.splice(e,1),a(t)}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"Daily To Do"})}),Object(j.jsx)(v,{handleSubmit:function(e){a([].concat(Object(r.a)(n),[{task:e}]))}}),n.map((function(e,t){return Object(j.jsx)(p,{task:e.task,id:t,handleDelete:o},t)}))]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.37ef3ef7.chunk.js.map