(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(78)},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),o=a.n(r),s=a(80),c=(a(36),a(37),a(39),a(40),a(2)),i=a(3),m=a(5),u=a(4),p=a(6),d=(a(41),a(82)),E=a(30),h=(a(42),a(18)),g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.currentUser;return l.a.createElement("section",{className:"HomePage"},l.a.createElement("h1",{className:"polln-title"},"Poll(n)"),l.a.createElement("img",{src:"pollN-logo-img.png",alt:"pollN-logo-img"}),e?l.a.createElement("div",null,l.a.createElement("h2",null,"Welcome ",l.a.createElement("b",null,e.username)," !"),l.a.createElement("div",null,l.a.createElement(h.a,{className:"btn btn-primary",to:"/popular-polls",role:"button"},"Popular Polls"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/poll-carousel",role:"button"},"Fresh Polls"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/poll-swiper",role:"button"},"Poll Swiper"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/my-polls",role:"button"},"My Polls"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/add-poll",role:"button"},"Add Poll"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/user-profile",role:"button"},"User Profile"))):l.a.createElement("div",null,l.a.createElement("p",null,"Welcome to the new instant-polls messaging system!"),l.a.createElement("p",null,"Swipe ",l.a.createElement("i",{className:"fa fa-arrow-left"})," to vote YES"),l.a.createElement("p",null,"Swipe ",l.a.createElement("i",{className:"fa fa-arrow-right"})," to vote NO"),l.a.createElement("p",null,"Double Tap to Skip"),l.a.createElement("div",null,l.a.createElement(h.a,{className:"btn btn-primary",to:"/popular-polls",role:"button"},"Popular Polls"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/signup-page",role:"button"},"Sign Up"),l.a.createElement(h.a,{className:"btn btn-primary",to:"/login-page",role:"button"},"Log In"))))}}]),t}(n.Component),f=a(13),b=a(81),v=(a(45),a(27)),N=a.n(v).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_BACKEND_URL,withCredentials:!0});function y(e){throw e.response&&e.response.data?console.log("API Error",e.response.data):console.log("React Code Error",e.response),e}function O(e){return N.get("/api/next-poll?userId=".concat(e)).catch(y)}function P(e){return N.post("/api/vote-poll",e).catch(y)}var U=a(79),S=(a(65),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"logoutClick",value:function(e){var t=this.props.logoutConfirmed;e.preventDefault(),N.get("/api/logout").catch(y).then(function(e){console.log("Log Out OK",e.data),t()})}},{key:"render",value:function(){var e=this,t=this.props.currentUser;return l.a.createElement("section",{className:"NavBar"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(U.a,{className:"navbar-brand polln-title",exact:!0,to:"/"},"Poll(n)"),l.a.createElement("div",{id:"title"},this.props.title?l.a.createElement("div",null,l.a.createElement("h4",null,this.props.title)):l.a.createElement("div",null)),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(U.a,{className:"nav-link",to:"/popular-polls"},"Popular Polls")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(U.a,{className:"nav-link",to:"/poll-carousel"},"Fresh Polls")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(U.a,{className:"nav-link",to:"/add-poll"},"Add Poll")),t?l.a.createElement("li",null,l.a.createElement("form",{className:"form-inline my-2 my-lg-0"},l.a.createElement(U.a,{className:"nav-link",to:"/user-profile"},"Username:",l.a.createElement("b",null," ",t.username)),l.a.createElement("button",{className:"btn btn-outline-info my-2 my-sm-0",onClick:function(t){return e.logoutClick(t)}},"Log Out"))):l.a.createElement("div",null,l.a.createElement("li",{className:"nav-item"},l.a.createElement(U.a,{className:"nav-link",to:"/signup-page"},"Sign Up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(U.a,{className:"nav-link",to:"/login-page"},"Log In")))))))}}]),t}(n.Component)),C=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={username:"",originalPassword:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"genericOnChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t,a=this;e.preventDefault(),(t=this.state,N.post("/api/process-login",t).catch(y)).then(function(e){console.log("Log In",e.data),a.props.loginSuccess(e.data)})}},{key:"render",value:function(){var e=this;return this.props.currentUser?l.a.createElement(b.a,{to:"/poll-carousel"}):l.a.createElement("section",{className:"LoginPage"},l.a.createElement(S,{currentUser:this.state.currentUser,title:"Log In",logoutConfirmed:function(t){return e.props.logoutConfirmed(t)}}),l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.username,name:"username",type:"text",className:"form-control",id:"username",placeholder:"Enter username."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.originalPassword,name:"originalPassword",type:"password",className:"form-control",id:"password",placeholder:"Enter username."})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Log In")))}}]),t}(n.Component),j=(a(67),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={username:"",originalPassword:"",originalEmail:"",originalUsercode:"",errorMessage:"",tags:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"genericOnChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t,a=this;console.log("TAGS",this.state.tags),e.preventDefault(),(t=this.state,N.post("/api/process-signup",t).catch(y)).then(function(e){a.setState({username:"",originalPassword:"",originalEmail:"",originalUsercode:"",errorMessage:"",tags:""}),console.log("Sign Up Result",e.data),a.props.signupSuccess(e.data)}).catch(function(e){a.setState({errorMessage:e.response.data.message})})}},{key:"render",value:function(){var e=this;return this.props.currentUser?l.a.createElement(b.a,{to:"/"}):l.a.createElement("section",{className:"SignupPage"},l.a.createElement(S,{currentUser:this.state.currentUser,title:"Sign Up",logoutConfirmed:function(t){return e.props.logoutConfirmed(t)}}),l.a.createElement("div",null,this.state.errorMessage&&l.a.createElement("div",{className:"error-message"},this.state.errorMessage),l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.username,name:"username",type:"text",className:"form-control",id:"username",placeholder:"Enter username."}),l.a.createElement("small",{id:"usernameHelp",className:"form-text text-muted"},"Make sure this username isn't too easily identifiable.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"tags"},"Tags"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.tags,name:"tags",type:"text",className:"form-control",id:"tags",placeholder:"Enter tags."}),l.a.createElement("small",{id:"tagsHelp",className:"form-text text-muted"},"Make sure the chosen terms are 'space-separated'.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.originalPassword,name:"originalPassword",type:"password",className:"form-control",id:"password",placeholder:"Password here."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.originalEmail,name:"originalEmail",type:"email",className:"form-control",id:"email",placeholder:"Email here."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"usercode"},"Social Security Number"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.originalUsercode,name:"originalUsercode",type:"text",className:"form-control",id:"usercode",placeholder:"Your Social Security Number here."})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up"))))}}]),t}(n.Component)),w=(a(68),a(28)),k=a.n(w),A=(a(72),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={voteValue:"",noPollsAvailable:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"sendVote",value:function(e){var t=this,a=this.props,n=a.currentUser,l=a.pollItem,r=a.reloadPollDetails;this.setState({voteValue:e}),P({currentUser:n,pollItem:l,voteValue:e}).then(function(){return r().then(function(e){"NO POLLS AVAILABLE"===e.data&&(console.log("No Poll Available, will redirect to My Polls now."),t.setState({noPollsAvailable:!0})),console.log("Reloaded Poll Details",e.data)})})}},{key:"render",value:function(){var e=this,t=this.props.pollItem;return this.state.noPollsAvailable?l.a.createElement(b.a,{to:"my-polls",errormsg:"No more polls available at the moment. Feel free to add more."}):l.a.createElement("section",{className:"PollDetails"},l.a.createElement("div",{className:"card bg-secondary"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h1",{className:"card-title"},t.title)),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-subtitle mb-2 text-muted"},t.createdAt),l.a.createElement("h5",{className:"card-text"},t.description),l.a.createElement("ul",{className:"list-group list-group-flush"},l.a.createElement("li",{className:"list-group-item"},"Nb Votants"),l.a.createElement("li",{className:"list-group-item"},"Nb Verified"),l.a.createElement("li",{className:"list-group-item"},"Nb Yes"),l.a.createElement("li",{className:"list-group-item"},"Nb No"),l.a.createElement("li",{className:"list-group-item"},"Nb Skip")),l.a.createElement("div",{className:"arrow-line"},l.a.createElement("button",{onClick:function(){return e.sendVote(1)}},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-arrow-left"}),"YES")),l.a.createElement("button",{onClick:function(){return e.sendVote(2)}},l.a.createElement("h5",null,l.a.createElement("i",{className:"fa fa-reply-all"}),"SKIP")),l.a.createElement("button",{onClick:function(){return e.sendVote(0)}},l.a.createElement("h5",null,"NO",l.a.createElement("i",{className:"fa fa-arrow-right"})))))))}}]),t}(n.Component)),x=a(29),I=a.n(x),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={currentUser:{},pollItem:{},noPollsAvailable:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;O(this.props.currentUser._id).then(function(t){"NO POLLS AVAILABLE"===t.data&&(console.log("No Poll Available, will redirect to My Polls now."),e.setState({noPollsAvailable:!0})),console.log("Next Poll",t.data),e.setState({pollItem:t.data})}),new I.a(document.getElementById("carousel")).on("doubletap",function(){var e=this,t=this.props.currentUser;P({currentUser:t,pollItem:this.state.pollItem,voteValue:2}).then(O(t._id).then(function(t){"NO POLLS AVAILABLE"===t.data&&(console.log("No Poll Available, will redirect to My Polls now."),e.setState({noPollsAvailable:!0})),console.log("Next Poll",t.data),e.setState({pollItem:t.data})}))})}},{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.logoutConfirmed,n=this.state,r=n.pollItem;return n.noPollsAvailable?l.a.createElement(b.a,{to:"my-polls",errormsg:"No more polls available at the moment. Feel free to add more."}):l.a.createElement("section",{className:"PollCarousel"},l.a.createElement(S,{currentUser:t,title:"Fresh Polls",logoutConfirmed:function(e){return a(e)}}),l.a.createElement(k.a,{id:"carousel",className:"carousel",swipeOptions:{continuous:!1,swiping:function(e){var a=this;if(console.log(e),e>.25){P({currentUser:t,pollItem:r,voteValue:1}).then(O(t._id).then(function(e){"NO POLLS AVAILABLE"===e.data&&(console.log("No Poll Available, will redirect to My Polls now."),a.setState({noPollsAvailable:!0})),console.log("Next Poll",e.data),a.setState({pollItem:e.data})}))}if(e<-.25){P({currentUser:t,pollItem:r,voteValue:0}).then(O(t._id).then(function(e){"NO POLLS AVAILABLE"===e.data&&(console.log("No Poll Available, will redirect to My Polls now."),a.setState({noPollsAvailable:!0})),console.log("Next Poll",e.data),a.setState({pollItem:e.data})}))}}}},l.a.createElement("div",null,l.a.createElement(A,{pollItem:r,currentUser:t,reloadPollDetails:function(){return O(t._id)}}))))}}]),t}(n.Component),V=(a(73),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={pollArray:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.get("/api/polls").catch(y).then(function(t){console.log("Polls List",t.data),e.setState({pollArray:t.data})})}},{key:"render",value:function(){var e=this,t=this.state.pollArray;return l.a.createElement("section",{className:"PopularPolls"},l.a.createElement(S,{currentUser:this.props.currentUser,title:"Popular Polls",logoutConfirmed:function(t){return e.props.logoutConfirmed(t)}}),l.a.createElement("div",{className:"card-group"},t.map(function(e){return l.a.createElement("div",{className:"card",key:e._id},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",null,e.title)),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("p",{className:"card-text"},e.description)),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"card-text"},e.votes.length," Voters"),l.a.createElement("li",{className:"card-text"},"Nb Verified"),l.a.createElement("li",{className:"card-text"},"Yes"),l.a.createElement("li",{className:"card-text"},"No"),l.a.createElement("li",{className:"card-text"},"Skip")))))})))}}]),t}(n.Component)),M=(a(74),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={title:"",description:"",isSubmitSuccessful:!1,currentUser:a.props.currentUser},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"genericOnChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t,a=this;e.preventDefault(),console.log("About to postPoll()",e),(t=this.state,N.post("/api/polls",t).catch(y)).then(function(e){console.log("Poll added",e.data),a.setState({isSubmitSuccessful:!0})})}},{key:"render",value:function(){var e=this;return this.state.isSubmitSuccessful?l.a.createElement(b.a,{to:"/my-polls"}):l.a.createElement("section",{className:"AddPoll"},l.a.createElement(S,{currentUser:this.props.currentUser,title:"Add Poll",logoutConfirmed:function(t){return e.props.logoutConfirmed(t)}}),l.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pollTitle"},"Title"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.title,name:"title",type:"text",className:"form-control",id:"pollTitle",placeholder:"Enter title."})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"pollDesc"},"Description"),l.a.createElement("input",{onChange:function(t){return e.genericOnChange(t)},value:this.state.description,name:"description",type:"text",className:"form-control",id:"pollDesc",placeholder:"Enter description."})),l.a.createElement("button",{type:"submit",className:"btn btn-info"},"Submit This Poll")))}}]),t}(n.Component)),D=(a(75),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"NotFound"},l.a.createElement("h2",null,"404 Page Not Found"),l.a.createElement("p",null,"Sorry, the page you're looking for doesn't exist."))}}]),t}(n.Component)),F=(a(76),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.currentUser,a=e.logoutConfirmed;return t?l.a.createElement("section",{className:"ProfilePage"},l.a.createElement(S,{currentUser:t,title:"Profile Page",logoutConfirmed:function(e){return a(e)}}),l.a.createElement("div",{className:"user-info"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-4"},l.a.createElement("img",{src:"https://pngimage.net/wp-content/uploads/2018/06/profile-logo-png-3.png",alt:t.username})),l.a.createElement("div",{className:"col-8"},l.a.createElement("p",null,"Username: ",l.a.createElement("b",null,t.username)),t.isCertified?l.a.createElement("p",null,"Your account is certified"):l.a.createElement("p",null,"Insert valid Usercode to get certified"))),l.a.createElement("div",{className:"tag-list"},l.a.createElement("p",null,"List of associated tags :"),l.a.createElement("ul",null,t.tags.map(function(e){return l.a.createElement("li",null,l.a.createElement("p",null,l.a.createElement("b",null,e)))}))))):l.a.createElement(b.a,{to:"/"})}}]),t}(n.Component)),_=(a(77),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={pollCreatedArray:[],pollVotedArray:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.currentUser._id,N.get("/api/polls-created?userId=".concat(e)).catch(y)).then(function(e){console.log("Polls Created List",e.data),t.setState({pollCreatedArray:e.data})}),function(e){return N.get("/api/polls-voted?userId=".concat(e)).catch(y)}(this.props.currentUser._id).then(function(e){console.log("Polls Voted List",e.data),t.setState({pollVotedArray:e.data})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.pollCreatedArray,n=t.pollVotedArray;return l.a.createElement("section",{className:"MyPolls"},l.a.createElement(S,{currentUser:this.props.currentUser,title:"My Polls",logoutConfirmed:function(t){return e.props.logoutConfirmed(t)}}),this.props.errormsg?l.a.createElement("div",null,l.a.createElement("h4",null,this.props.errormsg)):l.a.createElement("div",null),l.a.createElement("p",null,"Polls I've Created"),l.a.createElement("div",{className:"card-group"},a.map(function(e){return l.a.createElement("div",{className:"card",key:e._id},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",null,e.title)),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-text"},e.description)),l.a.createElement("ul",null,l.a.createElement("li",{className:"card-text"},l.a.createElement("b",null,e.votes.length)," Voters"),l.a.createElement("li",{className:"card-text"},l.a.createElement("b",null,"0")," Verified"),l.a.createElement("li",{className:"card-text"},"Yes"),l.a.createElement("li",{className:"card-text"},"No"),l.a.createElement("li",{className:"card-text"},"Skip"))))})),l.a.createElement("p",null,"Polls I've Voted"),l.a.createElement("div",{className:"card-group"},n.map(function(e){return l.a.createElement("div",{className:"card",key:e._id},l.a.createElement("div",{className:"card-header"},l.a.createElement("h5",null,e.title)),l.a.createElement("div",{className:"card-body"},l.a.createElement("div",null,l.a.createElement("h6",{className:"card-text"},e.description)),l.a.createElement("ul",null,l.a.createElement("li",{className:"card-text"},l.a.createElement("b",null,e.votes.length)," Voters"),l.a.createElement("li",{className:"card-text"},l.a.createElement("b",null,"0")," Verified"),l.a.createElement("li",{className:"card-text"},"No"),l.a.createElement("li",{className:"card-text"},"Skip"))))})))}}]),t}(n.Component)),B=function(e){function t(e){var a;Object(c.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e));var n=localStorage.getItem("currentUser");return n&&(n=JSON.parse(n)),a.state={currentUser:n},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"updateUser",value:function(e){e?localStorage.setItem("currentUser",JSON.stringify(e)):localStorage.removeItem("currentUser"),this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement(d.a,null,l.a.createElement(E.a,{exact:!0,path:"/",render:function(){return l.a.createElement(g,{currentUser:e.state.currentUser})}}),l.a.createElement(E.a,{path:"/signup-page",render:function(){return l.a.createElement(j,{currentUser:e.state.currentUser,signupSuccess:function(t){return e.updateUser(t)}})}}),l.a.createElement(E.a,{path:"/login-page",render:function(){return l.a.createElement(C,{currentUser:e.state.currentUser,loginSuccess:function(t){return e.updateUser(t)}})}}),l.a.createElement(E.a,{path:"/user-profile",render:function(){return l.a.createElement(F,{currentUser:e.state.currentUser})}}),l.a.createElement(E.a,{path:"/add-poll",render:function(){return l.a.createElement(M,{currentUser:e.state.currentUser,logoutConfirmed:function(t){return e.updateUser(t)}})}}),l.a.createElement(E.a,{path:"/poll-carousel",render:function(){return l.a.createElement(L,{currentUser:e.state.currentUser,logoutConfirmed:function(t){return e.updateUser(t)}})}}),l.a.createElement(E.a,{path:"/poll-details/:pollId",component:A}),l.a.createElement(E.a,{path:"/popular-polls",render:function(){return l.a.createElement(V,{currentUser:e.state.currentUser,logoutConfirmed:function(t){return e.updateUser(t)}})}}),l.a.createElement(E.a,{path:"/my-polls",render:function(){return l.a.createElement(_,{currentUser:e.state.currentUser,logoutConfirmed:function(t){return e.updateUser(t)}})}}),l.a.createElement(E.a,{component:D})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(s.a,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.e18a4525.chunk.js.map