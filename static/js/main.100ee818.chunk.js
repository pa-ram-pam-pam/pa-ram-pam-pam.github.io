(this.webpackJsonp017=this.webpackJsonp017||[]).push([[0],{33:function(e,t,n){e.exports=n(57)},57:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(16),c=n.n(a),u=n(6),l=n(8),i=n(2),s={LOAD_PHOTOS:"LOAD_PHOTOS",SELECT_PHOTO:"SELECT_PHOTO",SET_ERROR:"SET_ERROR",TOGGLE_LIKE_PHOTO:"TOGGLE_LIKE_PHOTO"},h=n(9),f=new(n.n(h).a)({accessKey:"KJOvYEYwLUqBqwO2elNDQlVbvpovCUF0gxnLu9Uql6M",secret:"oY014JiJh1zZyhhd9ngAWmLMB0RDfOBbVEH2ghladaA",callbackUrl:"https://pa-ram-pam-pam.github.io/auth"}),E=s.LOAD_PHOTOS,p=s.SET_ERROR,m=s.SELECT_PHOTO,O=s.TOGGLE_LIKE_PHOTO,d=function(){return function(e,t){var n=++t().counter;f.search.photos("cats",n,10).then(h.toJson).then((function(t){e(b(t))})).catch((function(t){e(g())}))}},b=function(e){return{type:E,payload:e.results}},g=function(){return{type:p,payload:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"}},v=n(22),_=Object(v.a)((function(e){return e.photos}),(function(e){return e})),T=Object(v.a)((function(e){return e.pageY}),(function(e){return e})),k=function(e){var t=e.photo,n=t.user,r=n.name,a=n.links.html.authorLink,c=t.created_at,u=t.likes;return o.a.createElement("div",null,o.a.createElement("div",null,"\u0410\u0432\u0442\u043e\u0440:",o.a.createElement("a",{href:a},r)),o.a.createElement("div",null,"\u0414\u0430\u0442\u0430: ",c),o.a.createElement("div",null,"\u041b\u0430\u0439\u043a\u043e\u0432: ",u))},j=function(e){var t=e.photo,n=e.selectPhoto,r=t.id,a=t.description,c=t.urls.small;return o.a.createElement("div",{key:r},o.a.createElement(l.b,{to:"/view/"+r,onClick:function(){n(window.pageYOffset)}},o.a.createElement("img",{src:c,alt:a})),o.a.createElement(k,{photo:t}))},L=Object(u.b)((function(e){return{photos:_(e),pageY:T(e)}}),(function(e){return{loadPhotos:function(){return e(d())},createActionSelectPhoto:function(t){return e(function(e){return{type:m,pageY:e}}(t))}}}))((function(e){var t=e.photos,n=e.loadPhotos,a=e.createActionSelectPhoto,c=e.pageY,u=function(e){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(e.preventDefault(),n())};Object(r.useEffect)((function(){window.scrollTo(0,c)}),[c]),Object(r.useEffect)((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}),[u]);return 0===t.length?o.a.createElement(i.a,{to:"/preauth"}):o.a.createElement("div",{onScroll:n},t.map((function(e){return o.a.createElement(j,{key:e.id,photo:e,selectPhoto:a})})),o.a.createElement("br",null),o.a.createElement("button",{onClickCapture:function(e){e.preventDefault(),e.target.blur(),n()}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435 \u0444\u043e\u0442\u043e\u0447\u0435\u043a"))})),P=n(32),y=Object(u.b)((function(e){return{photos:_(e)}}),(function(e){return{createActionToggleLikePhoto:function(t){return e(function(e){return{type:O,payload:e}}(t))}}}))((function(e){var t=e.photos,n=e.createActionToggleLikePhoto,a=Object(i.g)().id,c=t.find((function(e){return e.id===a})),u=Object(r.useState)(null===c||void 0===c?void 0:c.liked_by_user),s=Object(P.a)(u,2),E=s[0],p=s[1];if(0===t.length)return o.a.createElement(i.a,{to:"/preauth"});var m;m=!1===E?o.a.createElement("button",{onClick:function(){f.photos.likePhoto(c.id).then(h.toJson).then((function(){n(a),p(!E)}))}},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"):o.a.createElement("button",{onClick:function(){f.photos.unlikePhoto(c.id).then(h.toJson).then((function(){n(a),p(!E)}))}},"\u0423\u0431\u0440\u0430\u0442\u044c \u043b\u0430\u0439\u043a");var O=c.description,d=c.urls.regular;return o.a.createElement("div",null,o.a.createElement("h2",null,"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0444\u043e\u0442\u043e\u0447\u043a\u0430"),o.a.createElement(k,{photo:c}),o.a.createElement("div",null),o.a.createElement("div",null,o.a.createElement("img",{src:d,alt:O}),o.a.createElement("br",null),m),o.a.createElement(l.b,{to:"/feed"}," \u041d\u0430\u0437\u0430\u0434 "))})),w=Object(u.b)((function(e){return{photos:_(e)}}),(function(e){return{loadPhotos:function(){return e(d())}}}))((function(e){var t=e.loadPhotos,n=e.photos;return Object(r.useEffect)((function(){var e=document.location.search.split("code=")[1];e&&f.auth.userAuthentication(e).then((function(e){return e.json()})).then((function(e){f.auth.setBearerToken(e.access_token),t()}))}),[t]),0!==n.length?o.a.createElement(i.a,{to:"/feed"}):null})),S=function(){var e=f.auth.getAuthenticationUrl(["public","write_likes"]);return document.location.assign(e),null},H=Object(u.b)((function(e){return{errMessage:e.errMessage}}),null)((function(e){var t=e.errMessage;return Object(r.useEffect)((function(){console.log("\u0440\u0435\u043d\u0434\u0435\u0440 \u043e\u0448\u0438\u0431\u043e\u043a")})),o.a.createElement(o.a.Fragment,null,t)})),R=Object(u.b)((function(e){return{errMessage:e.errMessage}}),null)((function(e){var t=e.errMessage;return o.a.createElement(o.a.Fragment,null,t?o.a.createElement(H,null):null,o.a.createElement(l.a,null,o.a.createElement(i.d,null,o.a.createElement(i.b,{path:"/preauth",component:S}),o.a.createElement(i.b,{path:"/auth",component:w}),o.a.createElement(i.b,{path:"/feed",component:L}),o.a.createElement(i.b,{path:"/view/:id",component:y}),o.a.createElement(i.a,{from:"/",to:"/preauth"}))))})),A=n(12),M=n(31),Y=n(7),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.LOAD_PHOTOS:var n=e.photos.concat(t.payload),r=e.counter;return Object(Y.a)(Object(Y.a)({},e),{},{photos:n,counter:++r,errMessage:null});case s.SELECT_PHOTO:return Object(Y.a)(Object(Y.a)({},e),{},{pageY:t.pageY});case s.SET_ERROR:return Object(Y.a)(Object(Y.a)({},e),{},{errMessage:t.payload});case s.TOGGLE_LIKE_PHOTO:var o=Object(M.a)(e.photos),a=o.find((function(e){return e.id===t.payload}));return!1===a.liked_by_user?(a.liked_by_user=!0,a.likes=++a.likes):(a.liked_by_user=!1,a.likes=--a.likes),Object(Y.a)(Object(Y.a)({},e),{},{photos:o});default:return e}},D=n(30),G=Object(A.c)(C,{photos:[],counter:0,errMessage:null,pageY:0},Object(A.a)(D.a));c.a.render(o.a.createElement(u.a,{store:G},o.a.createElement(R,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.100ee818.chunk.js.map