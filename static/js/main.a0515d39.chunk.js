(this.webpackJsonp017=this.webpackJsonp017||[]).push([[0],{30:function(e,t,n){e.exports=n(54)},54:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(15),c=n.n(a),u=n(6),l=n(8),i=n(2),s={LOAD_PHOTOS:"LOAD_PHOTOS",SELECT_PHOTO:"SELECT_PHOTO",SET_ERROR:"SET_ERROR",LIKE_PHOTO:"LIKE_PHOTO",UNLIKE_PHOTO:"UNLIKE_PHOTO"},h=n(9),f=new(n.n(h).a)({accessKey:"KJOvYEYwLUqBqwO2elNDQlVbvpovCUF0gxnLu9Uql6M",secret:"oY014JiJh1zZyhhd9ngAWmLMB0RDfOBbVEH2ghladaA",callbackUrl:"http://localhost:3000/auth"}),p=s.LOAD_PHOTOS,E=s.SET_ERROR,O=s.SELECT_PHOTO,d=s.LIKE_PHOTO,m=s.UNLIKE_PHOTO,b=function(){return function(e,t){var n=t().counter;f.search.photos("cats",n+1,10).then(h.toJson).then((function(t){e(v(t))})).catch((function(t){e(g())}))}},v=function(e){return{type:p,payload:e.results}},g=function(){return{type:E,payload:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"}},P=n(20),_=Object(P.a)((function(e){return e.photos}),(function(e){return e})),k=Object(P.a)((function(e){return e.pageY}),(function(e){return e})),j=function(e){var t=e.photo,n=t.user,o=n.name,a=n.links.html.authorLink,c=t.created_at,u=t.likes;return r.a.createElement("div",null,r.a.createElement("div",null,"\u0410\u0432\u0442\u043e\u0440:",r.a.createElement("a",{href:a},o)),r.a.createElement("div",null,"\u0414\u0430\u0442\u0430: ",c),r.a.createElement("div",null,"\u041b\u0430\u0439\u043a\u043e\u0432: ",u))},T=function(e){var t=e.photo,n=e.selectPhoto,o=t.id,a=t.description,c=t.urls.small;return r.a.createElement("div",{key:o},r.a.createElement(l.b,{to:"/view/"+o,onClick:function(){n(window.pageYOffset)}},r.a.createElement("img",{src:c,alt:a})),r.a.createElement(j,{photo:t}))},y=Object(u.b)((function(e){return{photos:_(e),pageY:k(e)}}),(function(e){return{loadPhotos:function(){return e(b())},selectPhoto:function(t){return e(function(e){return{type:O,pageY:e}}(t))}}}))((function(e){var t=e.photos,n=e.loadPhotos,a=e.selectPhoto,c=e.pageY,u=function(e){window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&(e.preventDefault(),n())};Object(o.useEffect)((function(){window.scrollTo(0,c)}),[]),Object(o.useEffect)((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}}),[]);return 0===t.length?r.a.createElement(i.a,{to:"/preauth"}):r.a.createElement("div",{onScroll:n},t.map((function(e){return r.a.createElement(T,{key:e.id,photo:e,selectPhoto:a})})),r.a.createElement("br",null),r.a.createElement("button",{onClickCapture:function(e){e.preventDefault(),e.target.blur(),n()}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435 \u0444\u043e\u0442\u043e\u0447\u0435\u043a"))})),L=n(29),w=Object(u.b)((function(e){return{photos:_(e)}}),(function(e){return{likePhoto:function(t){return e(function(e){return{type:d,payload:e}}(t))},unlikePhoto:function(t){return e(function(e){return{type:m,payload:e}}(t))}}}))((function(e){var t=e.photos,n=e.likePhoto,a=e.unlikePhoto,c=Object(i.g)().id,u=t.find((function(e){return e.id===c})),s=Object(o.useState)(null===u||void 0===u?void 0:u.liked_by_user),p=Object(L.a)(s,2),E=p[0],O=p[1];if(0===t.length)return r.a.createElement(i.a,{to:"/preauth"});var d;d=!1===E?r.a.createElement("button",{onClick:function(){f.photos.likePhoto(u.id).then(h.toJson).then((function(){n(c),O(!E)}))}},"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a"):r.a.createElement("button",{onClick:function(){f.photos.unlikePhoto(u.id).then(h.toJson).then((function(){a(c),O(!E)}))}},"\u0423\u0431\u0440\u0430\u0442\u044c \u043b\u0430\u0439\u043a");var m=u.description,b=u.urls.regular;return r.a.createElement("div",null,r.a.createElement("h2",null,"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u0444\u043e\u0442\u043e\u0447\u043a\u0430"),r.a.createElement(j,{photo:u}),r.a.createElement("div",null),r.a.createElement("div",null,r.a.createElement("img",{src:b,alt:m}),r.a.createElement("br",null),d),r.a.createElement(l.b,{to:"/feed"}," \u041d\u0430\u0437\u0430\u0434 "))})),H=Object(u.b)((function(e){return{photos:_(e)}}),(function(e){return{loadPhotos:function(){return e(b())}}}))((function(e){var t=e.loadPhotos,n=e.photos;return Object(o.useEffect)((function(){var e=document.location.search.split("code=")[1];e&&f.auth.userAuthentication(e).then((function(e){return e.json()})).then((function(e){f.auth.setBearerToken(e.access_token),t()}))}),[]),0!==n.length?r.a.createElement(i.a,{to:"/feed"}):null})),S=function(){var e=f.auth.getAuthenticationUrl(["public","write_likes"]);return document.location.assign(e),null},R=Object(u.b)((function(e){return{errMessage:e.errMessage}}),null)((function(e){var t=e.errMessage;return Object(o.useEffect)((function(){console.log("\u0440\u0435\u043d\u0434\u0435\u0440 \u043e\u0448\u0438\u0431\u043e\u043a")})),r.a.createElement(r.a.Fragment,null,t)})),I=Object(u.b)((function(e){return{errMessage:e.errMessage}}),null)((function(e){var t=e.errMessage;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(R,null):null,r.a.createElement(l.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/preauth",component:S}),r.a.createElement(i.b,{path:"/auth",component:H}),r.a.createElement(i.b,{path:"/feed",component:y}),r.a.createElement(i.b,{path:"/view/:id",component:w}),r.a.createElement(i.a,{from:"/",to:"/preauth"}))))})),M=n(12),Y=n(7),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.LOAD_PHOTOS:var n=e.photos.concat(t.payload),o=e.counter+1;return Object(Y.a)(Object(Y.a)({},e),{},{photos:n,counter:o,errMessage:null});case s.SELECT_PHOTO:return Object(Y.a)(Object(Y.a)({},e),{},{pageY:t.pageY});case s.SET_ERROR:return Object(Y.a)(Object(Y.a)({},e),{},{errMessage:t.payload});case s.LIKE_PHOTO:var r=e.photos.map((function(e){return e})),a=r.findIndex((function(e){return e.id===t.payload}));return r[a].liked_by_user=!0,r[a].likes=r[a].likes+1,Object(Y.a)(Object(Y.a)({},e),{},{photos:r});case s.UNLIKE_PHOTO:return a=(r=e.photos.map((function(e){return e}))).findIndex((function(e){return e.id===t.payload})),r[a].liked_by_user=!1,r[a].likes=r[a].likes-1,Object(Y.a)(Object(Y.a)({},e),{},{photos:r});default:return e}},K=n(28),U=Object(M.c)(C,{photos:[],counter:0,errMessage:null,pageY:0},Object(M.a)(K.a));c.a.render(r.a.createElement(u.a,{store:U},r.a.createElement(I,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a0515d39.chunk.js.map