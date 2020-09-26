(this["webpackJsonptv-shows"]=this["webpackJsonptv-shows"]||[]).push([[0],{15:function(e,t,a){e.exports=a.p+"static/media/no-img-portrait-text.d6af9c9e.png"},39:function(e,t,a){e.exports=a(69)},45:function(e,t,a){},46:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),l=a.n(c),o=a(17),s=(a(44),a(45),a(10)),i=a(11),u=a(13),m=a(12),h=a(2),p=(a(46),a(24)),f=a(23),d=a(70),E=a(19);var g=function(e){var t=e.image,a=e.name,n=e.show;return r.a.createElement(d.a,{xs:6,sm:4,md:2,lg:2,xl:2,className:"thumbnail"},r.a.createElement(E.Link,{to:{pathname:"/show/".concat(n.id),show:n}},r.a.createElement("img",{src:t,alt:a,style:{width:"100%"}}),r.a.createElement("div",{className:"thumbnail-desc"},a)))},v=a(71),w=a(72),y=a(15),b=a.n(y),S="https://api.tvmaze.com",k="NA";var j=function(e){var t,a,n=e.type,c=e.shows;c&&(t=c.filter((function(e){return e.genres.includes(n)}))),t&&(t.sort((function(e,t){return t.rating.average-e.rating.average})),a=t.map((function(e){return r.a.createElement(g,{image:e.image?e.image.medium:b.a,name:e.name,show:e,key:"Show-".concat(e.id)})})).slice(0,6));var l={pathname:"/genre/".concat(n),shows:t,type:n};return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,n,t.length>6?r.a.createElement(o.b,{to:l},r.a.createElement(v.a,{pill:!0,variant:"dark",style:{float:"right"}},"See More")):null),r.a.createElement(w.a,null,a)):null},O=a(73),N=a(20),x=a.n(N),A=function(){return x.a.get("".concat(S,"/shows"))},C=function(e){return x.a.get("".concat(S,"/search/shows?q=").concat(e))},V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={shows:null,searchValue:"",error:!1},e.getGenres=function(){var t=e.state.shows,a=new Set;return t&&t.forEach((function(e){a.add.apply(a,Object(f.a)(e.genres))})),Object(f.a)(a)},e.searchApi=function(t){""!==t?C(t).then((function(t){var a=t.data.map((function(e){return e.show}));e.setState({shows:a,error:!1})})).catch((function(){return e.setState({error:!0})})):e.getAllShows()},e.getAllShows=function(){A().then((function(t){return e.setState({shows:t.data,error:!1})})).catch((function(){return e.setState({error:!0})}))},e.inputSearch=function(t){t.preventDefault();var a=t.target.value;e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{searchValue:a})})),e.searchApi(a)},e.submitHandler=function(t){t.preventDefault();var a=e.state.searchValue;e.searchApi(a)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getAllShows()}},{key:"render",value:function(){var e=this.state,t=e.shows,a=e.searchValue,n=e.error,c=this.getGenres();return r.a.createElement(O.a,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Popular TV Shows"),r.a.createElement("p",{className:"desc"},"Welcome to Popular TV Shows. Here you can find your favourite TV shows")),r.a.createElement("form",{onSubmit:this.submitHandler,className:"middle"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Search..",value:a,onChange:this.inputSearch,className:"searchField"})),c.length>0?c.map((function(e){return r.a.createElement(j,{type:e,shows:t,key:"Genre-".concat(e)})})):r.a.createElement("h2",null,n?"Oops.. An error occured.":"No Shows Found"))}}]),a}(n.Component),R=a(75),D=a(74),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={back:!1,shows:e.props.location.shows},e.onBack=function(){e.setState({back:!0})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.shows,a=this.props.match.params.id;t||A().then((function(t){var n=t.data.filter((function(e){return e.genres.includes(a)}));n.sort((function(e,t){return t.rating.average-e.rating.average})),e.setState({shows:n})})).catch((function(){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.shows,a=e.back,n=this.props.match;return t?r.a.createElement(O.a,null,r.a.createElement("h1",null,n.params.id),r.a.createElement(w.a,null,t.map((function(e){return r.a.createElement(g,{image:e.image?e.image.medium:b.a,name:e.name,show:e,key:"Show-".concat(e.id)})}))),r.a.createElement(R.a,{variant:"dark",onClick:this.onBack},"Back"),a?r.a.createElement(E.Redirect,{to:"/tv-shows"}):null):r.a.createElement(D.a,{className:"spinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}}]),a}(n.Component),B=a(38);var G=function(e){var t=e.show,a=t.schedule||{time:k,days:[k]},n=a.time,c=a.days;return r.a.createElement("div",{className:"infoCard"},r.a.createElement("div",null,r.a.createElement("strong",null,"Rating: "),r.a.createElement("span",null,t.rating.average||k)),r.a.createElement("div",null,r.a.createElement("strong",null,"Country: "),r.a.createElement("span",null,t.network?t.network.country.name:k)),r.a.createElement("div",null,r.a.createElement("strong",null,"Show type: "),r.a.createElement("span",null,t.type||k)),r.a.createElement("div",null,r.a.createElement("strong",null,"Genres: "),r.a.createElement("span",null,t.genres?t.genres.join(", "):k)),r.a.createElement("div",null,r.a.createElement("strong",null,"Schedule: "),r.a.createElement("span",null,c.join(", ")," at ",n||k," (",t.runtime||k," mins)")),r.a.createElement("div",null,r.a.createElement("strong",null,"Official Site: "),r.a.createElement("span",null,r.a.createElement("a",{href:t.officialSite,target:"blank"},t.officialSite||k))))},F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={show:e.props.location.show},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.show,a=this.props.match.params.id;t||function(e){return x.a.get("".concat(S,"/shows/").concat(e))}(a).then((function(t){return e.setState({show:t.data})})).catch((function(){return e.setState({error:!0})}))}},{key:"render",value:function(){var e=this.state.show;return e?r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(d.a,{sm:12,md:8,lg:8,xl:8},r.a.createElement("h2",null,e.name),r.a.createElement("img",{className:"infoImage",src:e.image?e.image.medium:b.a,alt:e.name}),r.a.createElement(B.a,{html:e.summary})),r.a.createElement(d.a,{sm:12,md:4,lg:4,xl:4},r.a.createElement(G,{show:e})))):r.a.createElement(D.a,{className:"spinner",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))}}]),a}(n.Component),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.Switch,null,r.a.createElement(h.Route,{path:"/genre/:id",exact:!0,component:M}),r.a.createElement(h.Route,{path:"/show/:id",exact:!0,component:F}),r.a.createElement(h.Route,{path:"/tv-shows",exact:!0,component:V}),r.a.createElement(h.Redirect,{to:"/tv-shows"}))}}]),a}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,null,r.a.createElement(H,null))),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.1e328dad.chunk.js.map