(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),i=n(23),s=n.n(i),r=(n(59),n(60),n(16)),o=(n(61),n(49)),l=n(39),u=(l.a.initializeApp({apiKey:"AIzaSyDEFm05584E2EQFN3aLQlBza3QvXmd2vac",authDomain:"netflix-clone-dca4d.firebaseapp.com",projectId:"netflix-clone-dca4d",storageBucket:"netflix-clone-dca4d.appspot.com",messagingSenderId:"697829610453",appId:"1:697829610453:web:8b3b37bade6d6bb3cba35c",measurementId:"G-MZC3ST0VBP"}).firestore(),l.a.auth()),d=n(11),j=n(4),b=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(d.f)(),s=function(){window.scrollY>100?a(!0):a(!1)};return Object(c.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"nav ".concat(n&&"nav__black"),children:Object(j.jsxs)("div",{className:"nav__contents",children:[Object(j.jsx)("img",{onClick:function(){return i.push("/")},className:"float-start nav__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:"netflix brand logo"}),Object(j.jsx)(o.a,{onClick:function(){return i.push("/profile")},className:"text-light float-end rounded nav__avatar"})]})})})},h=n(22),f=n.n(h),m=n(30),v=(n(73),n(50)),p=n.n(v).a.create({baseURL:"https://api.themoviedb.org/3"}),g="7d161198e8f9b89da5beb6851bbeda63",O={fetchTrending:"/trending/all/week?api_key=".concat(g,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(g,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(g,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(g,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(g,"&with_genres=27"),fetchScienceFrictionMovies:"/discover/movie?api_key=".concat(g,"&with_genres=878"),fetchDocumentaries:"/discover/movie?api_key=".concat(g,"&with_genres=99")},x=n(31),_=n(32),w=n.n(_),N=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(r.a)(i,2),o=s[0],l=s[1];Object(c.useEffect)((function(){(function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(O.fetchTrending);case 2:return t=e.sent,a(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var u,d;return console.log("Banner Movie",null===n||void 0===n?void 0:n.backdrop_path),Object(j.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundPosition:"center center",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===n||void 0===n?void 0:n.backdrop_path,'")')},children:[Object(j.jsxs)("div",{className:"banner__contents ".concat(o&&"fade__background"),children:[Object(j.jsx)("h1",{className:"banner__title",children:(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)||(null===n||void 0===n?void 0:n.title)}),Object(j.jsxs)("div",{className:"banner__buttons",children:[Object(j.jsx)("button",{className:"banner__button",onClick:function(){return e=(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)||(null===n||void 0===n?void 0:n.title),void(o?l(""):w()(e||"").then((function(e){console.log("Youtube URL : "+e);var t=new URLSearchParams(new URL(e).search);l(t.get("v")||t.get("query"))})).catch((function(e){return console.log(e)})));var e},children:"Play"}),Object(j.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(j.jsx)("h1",{className:"banner__description",children:(u=null===n||void 0===n?void 0:n.overview,d=150,(null===u||void 0===u?void 0:u.length)>d?u.substr(0,d-1)+"....":u)})]}),o&&Object(j.jsx)(x.a,{className:"mx-auto d-block align-items-start justify-content-center w-50",style:{paddingTop:"-500px"},videoId:o,opts:{height:"390",width:"640",alignItems:"center",playerVars:{autoplay:1}}}),Object(j.jsx)("div",{className:"banner--fadeBottom"})]})},y=(n(110),function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=void 0!==a&&a,s=Object(c.useState)([]),o=Object(r.a)(s,2),l=o[0],u=o[1],d=Object(c.useState)(""),b=Object(r.a)(d,2),h=b[0],v=b[1];Object(c.useEffect)((function(){(function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.get(n);case 2:return t=e.sent,console.log("Row",t.data.results),u(t.data.results),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);return console.log("Row Movie",l),Object(j.jsxs)("div",{className:"row1",children:[Object(j.jsx)("h2",{className:"text-light",children:t}),Object(j.jsx)("div",{className:"row__postersMain",children:l.map((function(e){return(i&&e.poster_path||!i&&e.backdrop_path)&&Object(j.jsx)("img",{onClick:function(){return function(e){h?v(""):w()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){console.log("Youtube URL : "+e);var t=new URLSearchParams(new URL(e).search);v(t.get("v")||t.get("query"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(i&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original").concat(i?e.poster_path:e.backdrop_path),alt:e.title},e.id)}))}),h&&Object(j.jsx)(x.a,{className:"mx-auto d-block w-100",videoId:h,opts:{height:"390",width:"640",alignItems:"center",playerVars:{autoplay:1}}})]})}),S=function(){return Object(j.jsxs)("div",{className:"homeScreen",children:[Object(j.jsx)(b,{}),Object(j.jsx)(N,{}),Object(j.jsx)(y,{title:"NETFLIX ORIGINALS",fetchUrl:O.fetchNetflixOriginals,isLargeRow:!0}),Object(j.jsx)(y,{title:"Trending Now",fetchUrl:O.fetchTrending}),Object(j.jsx)(y,{title:"Top Rated",fetchUrl:O.fetchTopRated}),Object(j.jsx)(y,{title:"Action Movies",fetchUrl:O.fetchActionMovies}),Object(j.jsx)(y,{title:"Comedy Movies",fetchUrl:O.fetchComedyMovies}),Object(j.jsx)(y,{title:"Horror Movies",fetchUrl:O.fetchHorrorMovies}),Object(j.jsx)(y,{title:"Science & Frictions Movies",fetchUrl:O.fetchScienceFrictionMovies}),Object(j.jsx)(y,{title:"Documentaries",fetchUrl:O.fetchDocumentaries})]})},k=(n(111),n(112),n(24)),U=(n(113),n(20)),M=n(33);var L=Object(M.b)({name:"user",initialState:{user:null,status:"another state value"},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),E=L.actions,C=E.login,I=E.logout,R=function(e){return e.user.user},T=L.reducer,A=function(){var e=Object(U.c)(R),t=Object(d.f)(),n=Object(c.useState)(""),a=Object(r.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),l=Object(r.a)(o,2),b=l[0],h=l[1];return Object(c.useEffect)((function(){if(null===e||void 0===e?void 0:e.email)return t.push("/")})),Object(j.jsx)("div",{className:"SignUpScreen mt-0 mb-3 ",children:Object(j.jsxs)("form",{children:[Object(j.jsx)(k.a,{}),Object(j.jsx)("h1",{className:"mb-3 pt-1  pb-2 float-start",children:"Sign In"}),Object(j.jsx)("input",{type:"email",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Email"}),Object(j.jsx)("input",{type:"password",value:b,onChange:function(e){return h(e.target.value)},placeholder:"password"}),Object(j.jsx)("button",{className:"mt-4",onClick:function(e){e.preventDefault(),u.signInWithEmailAndPassword(i,b).then((function(e){console.log("Login User Data",e),Object(k.b)(e.user.email+" You have successfully login!",{type:"success"})})).catch((function(e){Object(k.b)(e.message,{type:"warning"}),console.log("Login Error",e)}))},children:"Sign In"}),Object(j.jsxs)("h5",{className:"mt-2",children:[Object(j.jsx)("span",{className:"text-muted ",children:"New to Netflix? "}),Object(j.jsx)("span",{className:"signUp__link",onClick:function(e){e.preventDefault(),u.createUserWithEmailAndPassword(i,b).then((function(e){Object(k.b)("Register Successfully!",{type:"success"},e),console.log("Register User: ",window.screen.width,e)})).catch((function(e){var t=e.code,n=e.message;console.log("Error Message is :"+n+"errorCode is :"+t),Object(k.b)(n,{type:"error"})}))},children:"Sign up now."})]})]})})},F=n(53),P=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(j.jsxs)("div",{className:"loginScreen ",children:[Object(j.jsxs)("div",{className:"loginScreen__background",children:[Object(j.jsx)("img",{className:"loginScreen__logo",src:"http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",alt:""}),Object(j.jsx)("button",{className:"loginScreen__button",onClick:function(){return a(!0)},children:"Sign In"})]}),Object(j.jsx)("div",{className:"loginScreen__body container-fluid",children:n?Object(j.jsx)(A,{}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("h1",{children:"Unlimited movies, TV shows and more."}),Object(j.jsx)("h2",{children:"Watch anywhere. Cancel anytime."}),Object(j.jsx)("h3",{children:"Ready to watch? Enter your email to create or restart your membership."}),Object(j.jsx)("div",{className:"loginScreen__input m-3",children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{className:"nfTextField ",type:"email",placeholder:"Enter your email"}),Object(j.jsxs)("button",{className:"get__started btn-red",onClick:function(){return a(!0)},children:["Get Started",Object(j.jsx)(F.a,{})]})]})})]})}),Object(j.jsx)("div",{className:"loginScreen__gradient"})]})},D=(n(114),n(54)),B=function(){var e=Object(U.c)(R),t=Object(d.f)();return Object(j.jsxs)("div",{className:"profileScreen",children:[Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"profileScreen__body",children:[Object(j.jsx)("h2",{children:"User Profile"}),Object(j.jsxs)("div",{className:"profileScreen__info",children:[Object(j.jsx)(D.a,{className:"userLogo"}),Object(j.jsxs)("div",{className:"profileScreen__detail",children:[Object(j.jsx)("h2",{children:e.email}),Object(j.jsxs)("div",{className:"profileScreen__plans",children:[Object(j.jsx)("h3",{children:"Plans"}),Object(j.jsx)("button",{onClick:function(){return u.signOut(),t.push("/")},className:"profileScreen__signout",children:"Sign Out"})]})]})]})]})]})},W=(n(115),n(25));n(116);var z=function(){var e=Object(U.c)(R),t=Object(U.b)();return Object(c.useEffect)((function(){var e=u.onAuthStateChanged((function(e){if(e){var n=e.email;console.log("App User Login",n),t(C({uid:e.uid,email:e.email}))}else t(I())}));return function(){e()}}),[]),Object(j.jsx)("div",{className:"app",children:e?Object(j.jsx)(W.a,{children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/profile",children:Object(j.jsx)(B,{})}),Object(j.jsx)(d.a,{path:"/",children:Object(j.jsx)(S,{})})]})}):Object(j.jsx)(P,{})})},V=Object(M.a)({reducer:{user:T}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(U.a,{store:V,children:Object(j.jsx)(z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},73:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.24ca105a.chunk.js.map