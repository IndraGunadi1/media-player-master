(this["webpackJsonpmedia-player-master"]=this["webpackJsonpmedia-player-master"]||[]).push([[0],{54:function(e,t,a){e.exports=a(69)},59:function(e,t,a){},60:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),o=(a(59),a(18)),i=a(6),u=(a(60),a(14)),s=a.n(u),m=a(19),p=a(21),f=a(16),d="ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm",h=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,n,r,c,l,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.napster.com/v2.1/tracks/".concat(t,"?apikey=").concat(d));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.next=8,n.tracks[0];case 8:return r=e.sent,c=r.albumId,l=r.previewURL,o=r.artistName,i=r.name,console.log(n.tracks[0]),e.abrupt("return",{thumbnailSrc:"https://api.napster.com/imageserver/v2/albums/".concat(c,"/images/356x237.jpg"),songSrc:l,name:i,artistName:o});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.next=3,fetch("https://api.napster.com/v2.1/tracks/top?apikey=".concat(d));case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,r=n.tracks,e.next=10,r.forEach((function(e){var a={thumbnailSrc:"https://api.napster.com/imageserver/v2/albums/".concat(e.albumId,"/images/356x237.jpg"),name:e.name,artistName:e.artistName,trackId:e.trackId,songSrc:e.previewURL};t.push(a)}));case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=a(17),E=Object(n.createContext)({currentSong:{thumbnailSrc:"",songSrc:"",name:"",artistName:"",trackId:""},setCurrentSong:function(){}}),b=function(e){var t=e.children,a=e.initialSong,c=Object(n.useState)(a),l=Object(p.a)(c,2),o=l[0],i=l[1];return r.a.createElement(E.Provider,{value:{currentSong:o,setCurrentSong:i}},t)},S=a(88),y=a(90),k=a(97),x=a(91),j=a(94),w=a(92),N=a(93),O=a(32),I=a.n(O),M=Object(S.a)((function(e){return{root:{display:"flex",marginBottom:"20px"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"151px",objectFit:"cover",float:"right",marginLeft:"auto"},controls:{display:"flex",minWidth:"50vw",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}}));function C(e){var t=e.name,a=e.artistName,c=e.thumbnailSrc,l=e.trackId,i=e.songSrc,u=Object(y.a)(),s=M(u),m=Object(n.useContext)(E).setCurrentSong;return r.a.createElement(k.a,{className:s.root},r.a.createElement("div",{className:s.details},r.a.createElement(x.a,{className:s.content},r.a.createElement(w.a,{component:"h5",variant:"h5"},t),r.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},a),r.a.createElement(N.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(I.a,null),onClick:function(){m({name:t,artistName:a,thumbnailSrc:c,trackId:l,songSrc:i})},component:o.b,to:"/playing"},"Play"))),r.a.createElement(j.a,{className:s.cover,image:c}))}function L(){var e=Object(f.a)(["\n  font-weight: 700;\n  color: white;\n"]);return L=function(){return e},e}function P(){var e=Object(f.a)(["\n  color: white;\n"]);return P=function(){return e},e}var D=v.a.h1(P()),T=v.a.div(L()),B=function(e){return e.tracks.map((function(e,t){return r.a.createElement(C,{name:e.name,trackId:e.trackId,thumbnailSrc:e.thumbnailSrc,artistName:e.artistName,songSrc:e.songSrc,key:t})}))},W=function(){return r.a.createElement(T,null,"Memuat.. Silahkan Tunggu..")},Y=function(){var e=r.a.useState([]),t=Object(p.a)(e,2),a=t[0],n=t[1],c=r.a.useState(!1),l=Object(p.a)(c,2),o=l[0],i=l[1];return r.a.useEffect((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i(!0),function(){e.apply(this,arguments)}(),i(!1)}),[]),r.a.createElement("div",null,r.a.createElement(D,null,"Halaman Playlist"),o?r.a.createElement(W,null):r.a.createElement(B,{tracks:a}))},F=a(35),z=Object(S.a)((function(e){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:"151px",objectFit:"cover",float:"right",marginLeft:"auto"},controls:{display:"flex",minWidth:"50vw",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)}}}));function H(e){var t=e.name,a=e.artistName,n=e.thumbnailSrc,c=e.songSrc,l=Object(y.a)(),o=z(l);return r.a.createElement("div",null,r.a.createElement(k.a,{className:o.root},r.a.createElement("div",{className:o.details},r.a.createElement(x.a,{className:o.content},r.a.createElement(w.a,{component:"h5",variant:"h5"},t),r.a.createElement(w.a,{variant:"subtitle1",color:"textSecondary"},a))),r.a.createElement(j.a,{className:o.cover,image:n,component:"img"})),r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement("audio",{src:c,controls:!0,style:{width:"100%"}})))}function J(){var e=Object(f.a)(["\n  color: white;\n"]);return J=function(){return e},e}var q=v.a.h1(J()),R=function(){return r.a.createElement(q,null,"Ke Halaman Playlist dahulu!",r.a.createElement("marquee",null,"Tidak ada musik yang dimainkan. Silahkan pilih musik di halaman Playlist!"))},U=function(){var e=r.a.useContext(E),t=e.currentSong,a=e.setCurrentSong;return r.a.useEffect((function(){function e(){return(e=Object(m.a)(s.a.mark((function e(){var n,r,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t.trackId);case 2:n=e.sent,r=n.thumbnailSrc,c=n.name,l=n.artistName,o=n.songSrc,console.log(o),a(Object(F.a)(Object(F.a)({},t),{},{thumbnailSrc:r,name:c,artistName:l,songSrc:o}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.trackId&&function(){e.apply(this,arguments)}()}),[]),r.a.createElement("div",null,""===t.trackId&&r.a.createElement(R,null),""!==t.trackId&&r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null,r.a.createElement("marquee",null,"Sedang dimainkan...")),r.a.createElement(H,{name:t.name,thumbnailSrc:t.thumbnailSrc,songSrc:t.songSrc,artistName:t.artistName})))},Z=a(43),A=a.n(Z);function K(){var e=Object(f.a)(["\n  color: green;\n"]);return K=function(){return e},e}function $(){var e=Object(f.a)(["\n  color: red;\n  text-align: center;\n"]);return $=function(){return e},e}function G(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-contents: center;\n  align-items: center;\n"]);return G=function(){return e},e}var Q=v.a.div(G()),V=v.a.h1($()),X=v.a.div(K()),_=function(){return r.a.createElement(Q,null,r.a.createElement(A.a,{style:{color:"white",fontSize:"100px"}}),r.a.createElement(V,null,"Selamat Datang di MyPlayer."),r.a.createElement(X,null,"Mainkan lagu favoritmu disini."))},ee=a(95),te=a(96),ae=a(45),ne=a.n(ae),re=a(44),ce=a.n(re),le=Object(S.a)({root:{width:"100vw"},content:{color:"#2D3436"},navbar:{backgroundColor:"#DFE6E9",left:0,bottom:0,width:"100%",overflow:"hidden",position:"fixed"}}),oe=function(){var e=le(),t=r.a.useState("recents"),a=Object(p.a)(t,2),n=a[0],c=a[1];return r.a.createElement(ee.a,{value:n,onChange:function(e,t){return function(e,t){c(t)}(0,t)},className:e.navbar,showLabels:!0},r.a.createElement(te.a,{component:o.b,to:"/",label:"Home",value:"home",icon:r.a.createElement(ce.a,null),className:e.content}),r.a.createElement(te.a,{component:o.b,to:"/playing",label:"Playing",value:"playing",icon:r.a.createElement(I.a,null),className:e.content}),r.a.createElement(te.a,{component:o.b,to:"/playlist",label:"Playlist",value:"playlist",icon:r.a.createElement(ne.a,null),className:e.content}))};var ie=function(){return r.a.createElement(b,{initialSong:{thumbnailSrc:"",songSrc:"",name:"",artistName:"",trackId:""}},r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/playing"},r.a.createElement(U,null)),r.a.createElement(i.a,{path:"/playlist"},r.a.createElement(Y,null)),r.a.createElement(i.a,{path:"/"},r.a.createElement(_,null))),r.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.7f609c38.chunk.js.map