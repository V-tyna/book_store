"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{572:(n,r,e)=>{var t=e(892),o=e.n(t),a=e(760),i=e.n(a),s=e(311),c=e.n(s),d=e(192),l=e.n(d),p=e(60),u=e.n(p),b=e(865),g=e.n(b),m=e(194),f={};f.styleTagTransform=g(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),o()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=e(395),x={};x.styleTagTransform=g(),x.setAttributes=l(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),o()(h.Z,x),h.Z&&h.Z.locals&&h.Z.locals;var v=e(144),k={};k.styleTagTransform=g(),k.setAttributes=l(),k.insert=c().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=u(),o()(v.Z,k),v.Z&&v.Z.locals&&v.Z.locals;var y=e(724),w={};w.styleTagTransform=g(),w.setAttributes=l(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u(),o()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var S=e(890),A={};A.styleTagTransform=g(),A.setAttributes=l(),A.insert=c().bind(null,"head"),A.domAPI=i(),A.insertStyleElement=u(),o()(S.Z,A),S.Z&&S.Z.locals&&S.Z.locals;var T=e(32),L={};L.styleTagTransform=g(),L.setAttributes=l(),L.insert=c().bind(null,"head"),L.domAPI=i(),L.insertStyleElement=u(),o()(T.Z,L),T.Z&&T.Z.locals&&T.Z.locals;var $=e(871),E={};E.styleTagTransform=g(),E.setAttributes=l(),E.insert=c().bind(null,"head"),E.domAPI=i(),E.insertStyleElement=u(),o()($.Z,E),$.Z&&$.Z.locals&&$.Z.locals;var C=e(768),Z={};Z.styleTagTransform=g(),Z.setAttributes=l(),Z.insert=c().bind(null,"head"),Z.domAPI=i(),Z.insertStyleElement=u(),o()(C.Z,Z),C.Z&&C.Z.locals&&C.Z.locals;var j=e(270),P={};P.styleTagTransform=g(),P.setAttributes=l(),P.insert=c().bind(null,"head"),P.domAPI=i(),P.insertStyleElement=u(),o()(j.Z,P),j.Z&&j.Z.locals&&j.Z.locals;const I=[e(414),e(84),e(33)],D={0:{h3:"Classic sale",p:"Get 10% discount on Classic."},1:{h3:"NEW! Sci-fi",p:"New books in Sci-fi section."},2:{h3:"Home & Hobby",p:"Updated section."}};let B,F,O,N=0;class H{constructor(n){this.$el=document.querySelector(n)}async renderBookCards(n){this.$el.innerHTML="",(await n).forEach((n=>{const r=document.createElement("div");r.classList.add("cards-container"),r.innerHTML=`${function(n){return`\n \n          <div class="add-to-fav-area">\n                <img class="add-to-fav" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fthumbs-up.png?alt=media&token=52b963ac-9c2c-4a54-9688-df984f698aa3" alt="Add to favorite">\n            </div>\n            <a href="/product:${n.id}" id="${n.id}">\n            <div class="book-image">\n                <img src="${n.picture}" alt="${n.bookName}">\n            </div> \n            <div class="book-data">\n                <div class="name-author-price">\n                    <p>${n.bookName}</p>\n                    <p>${n.authors}</p>\n                    <p>${n.price}</p>\n                </div>\n            </div>  \n             </a>  \n            <div class="btn-buy-area">\n                <button class="btn-buy">\n                    <div>Buy</div>\n                    <img class="add-to-basket" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fshopping-cart.png?alt=media&token=b3202f0a-93d5-4c94-aadd-9c2bd425bde6" alt="Add to basket icon">\n                </button>\n            </div>  \n\n    `}(n)}`,this.$el.append(r)}))}async renderSpecificBookPage(n){this.$el.innerHTML="";const r=await n,e=document.createElement("div");e.innerHTML=`${function(n){return`\n        <div class="specific-book">\n            <div class="add-to-fav-area">\n                <img class="add-to-fav" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fthumbs-up.png?alt=media&token=52b963ac-9c2c-4a54-9688-df984f698aa3" alt="Add to favorite">\n            </div>\n            <div class="book-image">\n                <img src="${n.picture}" alt="${n.bookName}">\n            </div> \n            <div class="book-data" id="${n.id}">\n                    <ul>\n                        <li><span>Title: </span>"${n.bookName}",</li>\n                        <li><span>Authors: </span>${n.authors},</li>\n                        <li><span>Category: </span>${n.category},</li>\n                        <li><span>Pages: </span>${n.pages},</li>\n                        <li><span>Cover type: </span>${n.cover},</li>\n                        <li><span>Language: </span>${n.language},</li>\n                        <li><span>Price: </span>${n.price},</li>\n                        <li><span>Description: </span>${n.description}</li>\n                    </ul>\n            </div>  \n            <div class="btn-buy-area">\n                <button class="btn-buy">\n                    <div>Buy</div>\n                    <img class="add-to-basket" src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fshopping-cart.png?alt=media&token=b3202f0a-93d5-4c94-aadd-9c2bd425bde6" alt="Add to basket icon">\n                </button>\n            </div>\n       </div>\n    `}(r)}`,this.$el.append(e)}}async function z(n){try{const r=await fetch(`https://book-store-e9483-default-rtdb.firebaseio.com/${n}.json`,{method:"GET",headers:{"Content-type":"application/json"}});return await r.json()}catch(n){throw new Error(n.message)}}function q(){const n=document.querySelector(".quantity-items");if(localStorage.getItem("shoppingList")){const r=JSON.parse(localStorage.getItem("shoppingList")).length;n.innerText=r}else n.innerText=0}async function M(n){const r=await z(n),e={id:r.id,name:r.bookName,authors:r.authors,price:r.price,picture:r.picture};return B=localStorage.getItem("shoppingList")?JSON.parse(localStorage.getItem("shoppingList")):[],B.push(e),localStorage.setItem("shoppingList",JSON.stringify(B)),q(),r}function J(){const n=document.querySelector(".likes");localStorage.getItem("favoriteList")?n.innerText=JSON.parse(localStorage.getItem("favoriteList")).length:n.innerText=0}async function G(n){const r=await z(n),e={id:r.id,name:r.bookName,authors:r.authors,price:r.price,picture:r.picture};return F=localStorage.getItem("favoriteList")?JSON.parse(localStorage.getItem("favoriteList")):[],F.push(e),localStorage.setItem("favoriteList",JSON.stringify(F)),J(),r}function R(n){document.querySelector(".SPA-page").addEventListener("click",(r=>{const e=r.target.closest(".cards-container"),t=r.target.closest(".btn-buy-area"),o=r.target.closest(".add-to-fav"),a=e.children[1].id;O=`${n}/${a}`,t&&M(O),o&&G(O)}))}q(),J();const W="fiction/fantasy",Y="fiction/fantasy",K="fiction/horrors",U="fiction/classic",_="textbooks/programming",X="home&hobby/cookbooks",Q="childrenBooks/fairyTales",V="comics/marvel",nn="comics/marvel",rn="comics/dc";function en(n,r){const e=JSON.parse(localStorage.getItem(r));n.innerHTML="";for(const r of e){const e=document.createElement("div");e.classList.add("fav-basket-list-container"),e.innerHTML=`\n            <img class="fav-temp-img" src="${(t=r).picture}" alt="Book cover small picture">\n            <div class="fav-book-name">${t.name}</div>\n            <div class="fav-book-authors">${t.authors}</div>\n            <div>${t.price}</div>\n            <button id="${t.id}" class="fav-btn-delete">Delete</button>\n    `,n.append(e)}var t}function tn(n,r,e){r.forEach(((t,o)=>{n.id===t.id&&(r.splice(o,1),localStorage.setItem(e,JSON.stringify(r)))}))}function on(n,r,e){e(),en(n,r)}let an;let sn,cn=0;function dn(n){const r=JSON.parse(localStorage.getItem("shoppingList"));if(r.length>=1){const e=document.createElement("div");let t;r.forEach((n=>{const r=n.price.replace(",","."),e=parseFloat(r.slice(0,-1));cn+=e})),cn=parseInt((100*cn).toString())/100,t=1===JSON.parse(localStorage.getItem("shoppingList")).length?"book":"books",e.innerHTML=`\n        <div id="checkout-container">\n            <div id="total-price">Total price (${r.length} ${t}): <span>${cn}$</span></div>\n            <button id="checkout-btn">Proceed to checkout</button>\n        </div>\n        `,n.append(e)}}function ln(){document.getElementById("root").addEventListener("click",(n=>{if("checkout-btn"===n.target.id){const n=function(n){const r=function(n){const r=document.createElement("div");return r.classList.add("modal"),r.innerHTML=`\n            <div class="modal-overlay">\n                <div class="modal-window">\n                    <div class="modal-header">\n                        <span class="modal-title">Check order</span>\n                        <button class="btn-close">&times;</button>\n                    </div>\n                    <div class="modal-body">Order summary: ${n} $</div>\n                    <form class="user-order-data">\n                        <label for="user-name">Full name:</label>\n                        <input id="user-name" type="text">\n                        <label for="user-address">Delivery address:</label>\n                        <input id="user-address" type="text">\n                    </form>\n                    <div class="modal-footer">\n                        <button class="btn-ok">Ok</button>\n                        <button class="btn-cancel">Cancel</button> \n                    </div> \n                </div>\n            </div>\n      `,document.body.appendChild(r),r}(n);let e=!1;return{open(){!e&&r.classList.add("open")},close(){e=!0,r.classList.remove("open"),r.classList.add("hide"),setTimeout((()=>{r.classList.remove("hide"),e=!1}),200)},destroy(){r.remove(),clearTimeout(an)}}}(cn);n.open(),r=n,an=setTimeout((()=>{const n=document.querySelector(".btn-close"),e=document.querySelector(".btn-ok"),t=document.querySelector(".btn-cancel");n.addEventListener("click",(()=>{r.close(),r.destroy()})),e.addEventListener("click",(()=>{r.close(),r.destroy()})),t.addEventListener("click",(()=>{r.close(),r.destroy()}))}),0)}var r}))}const pn=window.location.pathname.slice(9,14);+pn<=8&&(sn=`fiction/fantasy/${pn}`),+pn>8&&+pn<=17&&(sn=`fiction/classic/${pn}`),+pn>17&&+pn<=24&&(sn=`textbooks/programming/${pn}`),+pn>24&&+pn<=29&&(sn=`fiction/horrors/${pn}`),+pn>29&&+pn<=32&&(sn=`home&hobby/cookbooks/${pn}`),+pn>32&&+pn<=36&&(sn=`childrenBooks/fairyTales/${pn}`),+pn>36&&+pn<=39&&(sn=`comics/marvel/${pn}`),+pn>39&&+pn<=42&&(sn=`comics/dc/${pn}`);const un={"/home":function(){const n=mn('<div class="home-container"> <div class="carousel"> <div class="slide-block"> <button class="btn-prev"> </button> <div class="slider-text"> </div> <button class="btn-next"> ></button> </div> </div> <h2>Bestsellers</h2> <div class="hits"> <div class="best-book"> <div class="book-image"> <img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FChildren\'s%20books%2F71rCcl7ZEKL.jpg?alt=media&token=f5bd4c9f-8025-4b41-9461-42ca414d6d07" alt="Harry Potter and the Chamber of Secrets"> </div> <div class="book-data"> <p>"Harry Potter and the Chamber of Secrets"</p> <p>J. K. Rowling</p> <p>Best book of December</p> </div> <div class="btn-buy-area"> </div> </div> <div class="best-book"> <div class="book-image"> <img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2FTextbooks%2Fprogramming%2F51HbNW6RzhL._SX375_BO1%2C204%2C203%2C200_.jpg?alt=media&token=69a1967e-f57c-42f3-84b2-90d145c5e808" alt="JavaScript: The Definitive Guide"> </div> <div class="book-data"> <p>"JavaScript: The Definitive Guide"</p> <p>David Flanagan</p> <p>Best textbook</p> </div> <div class="btn-buy-area"> </div> </div> <div class="best-book"> <div class="book-image"> <img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/books%2Ffiction%2Fsci-fi%2F00001.jpg?alt=media&token=537eaa0c-b9ba-4eae-a9d6-cfd0464d338b" alt="Dune"> </div> <div class="book-data"> <p>"Dune"</p> <p>Frank Herbert</p> <p>Best book of November</p> </div> <div class="btn-buy-area"> </div> </div> </div> </div>');return function(n){const r=n.querySelector(".slide-block"),e=n.querySelector(".btn-next"),t=n.querySelector(".btn-prev"),o=n.querySelector(".slider-text");r.style.backgroundImage=`url("${I[N]}")`,o.innerHTML=`\n         <h3>${D[N].h3}</h3>\n         <p>${D[N].p}</p>\n        `,e.addEventListener("click",(()=>{N++,N>=I.length&&(N=0),r.style.backgroundImage=`url("${I[N]}")`,o.innerHTML=`\n             <h3>${D[N].h3}</h3>\n             <p>${D[N].p}</p>\n            `})),t.addEventListener("click",(()=>{N--,N<0&&(N=I.length-1),r.style.backgroundImage=`url("${I[N]}")`,o.innerHTML=`\n             <h3>${D[N].h3}</h3>\n             <p>${D[N].p}</p>\n            `}))}(n),function(n){const r=n.querySelector(".slide-block"),e=n.querySelector(".slider-text");setInterval((()=>{N++,N>=I.length&&(N=0),r.style.backgroundImage=`url("${I[N]}")`,e.innerHTML=`\n             <h3>${D[N].h3}</h3>\n             <p>${D[N].p}</p>\n            `}),5e3)}(n),n},"/fiction":function(){const n=mn('<div class="category-menu"> <a href="/scifi"><p>Sci-Fi & Fantasy</p><img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fscifi.png?alt=media&token=d9902b7e-a3e5-4b25-8409-9289c2e45d18" alt="Sci-fi & Fantasy link logo"></a> <a href="/horror"><p>Horror</p><img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fhorror%20(1).png?alt=media&token=b7c6e084-fc54-4c7d-a600-2fd1ce2426b6" alt="Horror link logo"></a> <a href="/classic"><p>Classic</p><img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fbook-mark.png?alt=media&token=9e8e3a61-0026-4169-9957-89d0435f9726" alt="Classic link logo"></a> </div> <div class="SPA-page"></div> ');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(W);return Object.values(n)}()),R(W)}),0),n},"/scifi":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(Y);return Object.values(n)}()),R(Y)}),0),n},"/horror":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(K);return Object.values(n)}()),R(K)}),0),n},"/classic":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(U);return Object.values(n)}()),R(U)}),0),n},"/textbooks":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(_);return Object.values(n)}()),R(_)}),0),n},"/hobby":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(X);return Object.values(n)}()),R(X)}),0),n},"/children":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(Q);return Object.values(n)}()),R(Q)}),0),n},"/comics":function(){const n=mn('<div class="category-menu"> <a href="/marvel"><p>Marvel</p><img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fspiderman.png?alt=media&token=9d27d5af-a9be-4a0b-9afc-5a9f28611e0d" alt="Marvel link logo"></a> <a href="/dc"><p>DC</p><img src="https://firebasestorage.googleapis.com/v0/b/book-store-e9483.appspot.com/o/icons%2Fbatman.png?alt=media&token=34ceaf93-1a53-49d0-a3d8-364b9f811c73" alt="DC link logo"></a> </div> <div class="SPA-page"></div> <div class="dc"></div>');return setTimeout((()=>{const n=new H(".SPA-page");new H(".dc"),n.renderBookCards(async function(){const n=await z(V);return Object.values(n)}()),R(V)}),0),n},"/marvel":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(nn);return Object.values(n)}()),R(nn)}),0),n},"/dc":function(){const n=mn('<div class="SPA-page"></div>');return setTimeout((()=>{new H(".SPA-page").renderBookCards(async function(){const n=await z(rn);return Object.values(n)}()),R(rn)}),0),n},"/favorite":function(){const n=mn('<div className="SPA-page"> Fav page </div>');return n.innerHTML="",en(n,"favoriteList"),function(n){const r=document.getElementById("root"),e=JSON.parse(localStorage.getItem("favoriteList"));r.addEventListener("click",(r=>{const t=r.target;r.target.classList.contains("fav-btn-delete")&&(tn(t,e,"favoriteList"),on(n,"favoriteList",J))}))}(n),n},"/basket":function(){const n=mn('<div class="SPA-page"> something </div>');return en(n,"shoppingList"),function(n){const r=document.getElementById("root"),e=JSON.parse(localStorage.getItem("shoppingList"));r.addEventListener("click",(r=>{const t=r.target;r.target.classList.contains("fav-btn-delete")&&(tn(t,e,"shoppingList"),on(n,"shoppingList",q),dn(n))}))}(n),dn(n),ln(),n},"/product":function(){const n=mn('<div id="specific-book">page</div>');return setTimeout((()=>{var n;new H("#specific-book").renderSpecificBookPage(async function(n){return await z(n)}(sn)),n=sn,document.getElementById("specific-book").addEventListener("click",(r=>{const e=r.target.closest(".btn-buy-area"),t=r.target.closest(".add-to-fav");console.log(e),e&&M(n),t&&G(n)}))}),0),n}},bn=document.getElementById("root");let gn="";function mn(n){const r=document.createElement("div");return r.id="page",r.innerHTML=n,r}gn=function(n){return"/"===n&&(n="/home"),n.startsWith("/product:")&&(n="/product"),n}(window.location.pathname),function(n){bn.innerHTML="";const r=un[n];bn.append(r())}(gn),(0,e(570).ZF)({apiKey:"AIzaSyDIWpLf1jb6NCiktkGsPZJ2Z7a88RZ20kY",authDomain:"book-store-e9483.firebaseapp.com",projectId:"book-store-e9483",storageBucket:"book-store-e9483.appspot.com",messagingSenderId:"1026267846737",appId:"1:1026267846737:web:38fe5f2c761c9179084070"})},871:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,".fav-basket-list-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin: 20px;\r\n    width: 650px;\r\n}\r\n\r\n.fav-basket-list-container div {\r\n    margin-right: 15px;\r\n}\r\n\r\n.fav-temp-img {\r\n    width: 40px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.fav-btn-delete {\r\n    font-size: 16px;\r\n    background-color: #D8C3A5;\r\n    border: 1px solid #D8C3A5;\r\n    border-radius: 3px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.fav-book-name {\r\n    width: 250px;\r\n}\r\n\r\n.fav-book-authors {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 150px;\r\n}",""]);const s=i},724:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,".home-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: wrap column;\r\n    align-items: center;\r\n    min-width: calc(80% - 250px);\r\n}\r\n\r\n.carousel {\r\n    min-width: calc(100% - 250px);\r\n    border: 1px solid #D8C3A5;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    margin: 20px;\r\n}\r\n\r\n.slide-block {\r\n    display: flex;\r\n    flex-flow: wrap row;\r\n    width: calc(100% - 40px);\r\n    height: 400px;\r\n    overflow: hidden;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    margin: 20px;\r\n    border-radius: 5px;\r\n    transition: background-image 1s ease-in-out;\r\n}\r\n\r\n.btn-next, .btn-prev {\r\n    position: sticky;\r\n    top: 45%;\r\n    width: 30px;\r\n    height: 30px;\r\n    margin: 0 auto;\r\n    background-color: #EAE7DC;\r\n    border: 1px solid #D8C3A5;\r\n    border-radius: 2px;\r\n    font-size: 20px;\r\n    color: #D8C3A5;\r\n    cursor: pointer;\r\n}\r\n\r\n.slider-text {\r\n    display: flex;\r\n    flex-flow: wrap column;\r\n    width: 460px;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n        color: #fff;\r\n    text-shadow: 2px 0 2px black;\r\n}\r\n\r\n.slider-text h3 {\r\n    font-size: 30px;\r\n    margin : 0 auto;\r\n}\r\n\r\n.slider-text p {\r\n    margin-bottom: 30px;\r\n    font-size: 20px;\r\n}\r\n\r\n.hits {\r\n    display: flex;\r\n    flex-flow: wrap row;\r\n    justify-content: center;\r\n}\r\n\r\n.best-book {\r\n    margin: 20px;\r\n    width: 250px;\r\n}\r\n\r\n.best-book .book-image {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.best-book .book-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.best-book .book-data p {\r\n    margin: 5px;\r\n}\r\n\r\n.best-book .book-data p:last-child {\r\n    font-family: 'Sanches-bold', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\nh2 {\r\n    font-family: 'Sanches-bold', sans-serif;\r\n    margin-bottom: 20px;\r\n}",""]);const s=i},270:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,".modal.open .modal-overlay,\r\n.modal.open .modal-window {\r\n    opacity: 1;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal.hide .modal-overlay,\r\n.modal.hide .modal-window {\r\n    opacity: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.modal.open .modal-window {\r\n    transform: translateY(100px);\r\n}\r\n\r\n.modal.open .modal-overlay {\r\n    background: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.modal.hide .modal-window {\r\n    transform: translateY(-200px);\r\n}\r\n\r\n.modal.hide .modal-overlay {\r\n    background: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.modal-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: rgba(0, 0, 0, 0.5);\r\n    transition: background .2s ease-in;\r\n}\r\n\r\n.modal-window {\r\n    width: 500px;\r\n    border-radius: 5px;\r\n    background: #ffffff;\r\n    margin: 0 auto;\r\n    transform: translateY(-200px);\r\n    transition: transform .2s ease-in;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal-header {\r\n    padding: 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid rgba(151, 148, 171, 0.5);\r\n}\r\n\r\n.modal-title {\r\n    padding: 5px;\r\n    font-size: 1.5rem;\r\n    margin-left: 20px;\r\n}\r\n\r\n.modal-body {\r\n    margin-left: 10px;\r\n    padding: 10px;\r\n   font-size: larger;\r\n}\r\n\r\n.modal-body p {\r\n    padding: 5px;\r\n    margin-bottom: auto;\r\n}\r\n\r\n.modal-footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    flex-shrink: 0;\r\n    padding: 7px 10px;\r\n    border-top: 1px solid rgba(151, 148, 171, 0.5);\r\n}\r\n\r\n.btn-ok {\r\n    margin-right: 10px;\r\n    background-color: #AFD275;\r\n    padding: 5px;\r\n    border: 1px solid #AFD275;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-cancel {\r\n    margin-right: 10px;\r\n    background-color: #E98074;\r\n    padding: 5px;\r\n    border: 1px solid #E98074;\r\n    border-radius: 3px;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-ok:hover, .btn-cancel:hover {\r\n    background-color: #fff;\r\n}\r\n\r\n.btn-close {\r\n    width: 25px;\r\n    height: 25px;\r\n}\r\n\r\n.modal.open {\r\n    z-index: 1000;\r\n}\r\n\r\n.user-order-data {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    padding: 0 20px 20px 20px;\r\n}\r\n\r\n.user-order-data label, .user-order-data input {\r\n    margin-bottom: 10px;\r\n}\r\n.user-order-data input {\r\n    padding: 5px;\r\n}",""]);const s=i},768:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,"#checkout-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    width: 650px;\r\n    margin: 20px;\r\n}\r\n\r\n#total-price {\r\n    text-align: end;\r\n    width: 300px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#total-price span {\r\n    margin-left: 20px;\r\n    font-weight: bolder;\r\n    color: #E98074;\r\n}\r\n\r\n#checkout-btn {\r\n    font-size: 16px;\r\n    width: 175px;\r\n    background-color: #f9f9f9;\r\n    border: 1px solid #D8C3A5;\r\n    color: #494949;\r\n    border-radius: 3px;\r\n    padding: 5px 10px;\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n#checkout-btn:hover {\r\n    background-color: rgba(175, 210, 117, 0.8);\r\n    border: 1px solid rgba(175, 210, 117, 0.8);\r\n}",""]);const s=i},890:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,".SPA-page {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: wrap row;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.SPA-page a {\r\n    text-decoration: none;\r\n    color: #494949;\r\n}\r\n\r\n.dc {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-flow: wrap row;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.category-menu {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.category-menu img {\r\n    width: 70px;\r\n    height: 70px;\r\n}\r\n\r\n.category-menu a {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: #494949;\r\n    width: 130px;\r\n}\r\n\r\n.cards-container {\r\n    width: 250px;\r\n    display: flex;\r\n    flex-flow: wrap column;\r\n    align-content: center;\r\n    justify-content: space-between;\r\n    margin: 20px;\r\n    padding: 10px;\r\n    border: 1px solid #EAE7DC;\r\n    border-radius: 10px;\r\n}\r\n\r\n.book-image {\r\n    margin: 0 auto;\r\n}\r\n\r\n.book-image img {\r\n    width: 200px;\r\n    height: 300px;\r\n}\r\n\r\n.add-to-fav-area {\r\n    display: flex;\r\n    width: 100%;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.add-to-fav {\r\n    width: 30px;\r\n    height: 30px;\r\n    margin-right: 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-to-basket {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.btn-buy {\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin: 0 auto;\r\n    font-size: 16px;\r\n    background-color: #D8C3A5;\r\n    border: 1px solid #D8C3A5;\r\n    border-radius: 3px;\r\n    padding: 5px 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-buy div {\r\n    margin-right: 5px;\r\n}",""]);const s=i},144:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,"footer {\r\n    font-family: 'Sanches-regular';\r\n    position: absolute;\r\n    width: 100%;\r\n    min-height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    background-color: #EAE7DC;\r\n    margin: 0 auto;\r\n}\r\n\r\n.delivery {\r\n    margin-top: 20px;\r\n}\r\n\r\n.delivery, .about-us, .contacts {\r\n    font-family: 'Sanches-bold';\r\n}\r\n\r\n.delivery p, .about-us p, .contacts p {\r\n    font-family: 'Sanches-regular';\r\n    font-size: 0.8em;\r\n}",""]);const s=i},395:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,"header {\r\n    width: 100%;\r\n    height: 60px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    background-color: #EAE7DC;\r\n    margin: 0 auto;\r\n}\r\n\r\n#search-form {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: baseline;\r\n    margin: 10px;\r\n}\r\n\r\n#search-form input {\r\n    margin-right: 10px;\r\n    padding: 5px;\r\n    border: 1px solid #D8C3A5;\r\n    border-radius: 5px;\r\n}\r\n\r\n#btn-search {\r\n    padding: 5px;\r\n    border: 1px solid #D8C3A5;\r\n    border-radius: 5px;\r\n    background-color: #EAE7DC;\r\n    color: #494949;\r\n}\r\n\r\n#btn-search:hover {\r\n    background-color: #D8C3A5;\r\n    border: 1px solid #EAE7DC;\r\n}\r\n\r\n.header-block-area {\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.header-link {\r\n    margin: 10px;\r\n    text-decoration: none;\r\n    padding: 5px;\r\n    color: #494949;\r\n}\r\n\r\n.icon-basket {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.icon-menu {\r\n    width: 30px;\r\n    height: 30px;\r\n    text-decoration: none;\r\n}\r\n\r\n#menu-burger {\r\n    text-decoration: none;\r\n}\r\n\r\n#favorite {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n#favorite .likes {\r\n    font-size: 10px;\r\n    color: #494949;\r\n}\r\n\r\n.icon-fav {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin-right: 3px;\r\n}\r\n\r\n.likes-p {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    left: -5px;\r\n    bottom: 25px;\r\n    background-color: #E98074;\r\n    border-radius: 50%;\r\n}\r\n\r\n#basket {\r\n    text-decoration: none;\r\n    color: #494949;\r\n}\r\n\r\n.quantity-items-p {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n}\r\n\r\n.quantity-items-background {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 20px;\r\n    height: 20px;\r\n    position: absolute;\r\n    right: 1px;\r\n    bottom: 15px;\r\n    background-color: #AFD275;\r\n    border-radius: 50%;\r\n}\r\n\r\n.quantity-items {\r\n    text-align: center;\r\n    font-size: 10px;\r\n}",""]);const s=i},32:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(933),o=e.n(t),a=e(476),i=e.n(a)()(o());i.push([n.id,".specific-book{\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n\r\n.specific-book .book-image, a .book-image {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\na li {\r\n    list-style-type: none;\r\n}\r\n\r\na li span {\r\n    font-family: 'Sanches-bold', sans-serif;\r\n    color: #494949;\r\n}\r\n\r\n.book-data {\r\n    margin-left: 20px;\r\n}\r\n\r\n.book-data p {\r\n    margin-block-start: 10px;\r\n    margin-block-end: 10px;\r\n}\r\n",""]);const s=i},194:(n,r,e)=>{e.d(r,{Z:()=>g});var t=e(933),o=e.n(t),a=e(476),i=e.n(a),s=e(678),c=e.n(s),d=new URL(e(322),e.b),l=new URL(e(938),e.b),p=i()(o()),u=c()(d),b=c()(l);p.push([n.id,"@font-face {\r\n    font-family: 'Sanches-regular';\r\n    src: url("+u+") format('OpenType');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Sanches-bold';\r\n    src: url("+b+") format('OpenType');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n\r\nbody {\r\n    font-family: 'Sanches-regular', sans-serif;\r\n    margin: 0 auto;\r\n}\r\n\r\n#aside-root-container{\r\n    min-height: calc(100vh - 120px);\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n#root {\r\n    width: 85%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n#books-menu ul {\r\n    margin-block-start: 40px;\r\n    padding-inline-start: 20px;\r\n}\r\n\r\n#books-menu a {\r\n    text-decoration: none;\r\n    color: #494949;\r\n}\r\n\r\n#books-menu li:hover {\r\n    text-decoration: none;\r\n    color: #494949;\r\n    width: calc(100% - 30px);\r\n    background-color: #D8C3A5;\r\n    cursor: pointer;\r\n}\r\n\r\n#books-menu li {\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    margin: 10px;\r\n    padding: 10px;\r\n}\r\n\r\n#books-menu {\r\n    width: 15%;\r\n    min-width: 190px;\r\n    background-color: #EAE7DC;\r\n    min-height: 100%;\r\n}\r\n\r\n.dropdown {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.dropdown img {\r\n    width: 10px;\r\n    height: 10px;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    top: 100px;\r\n    left: 14%;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.comics {\r\n    display: none;\r\n    position: absolute;\r\n    top: 300px;\r\n    left: 14%;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    float: none;\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #D8C3A5;\r\n}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}",""]);const g=p},84:(n,r,e)=>{n.exports=e.p+"a55421170cc109e30061.jpg"},33:(n,r,e)=>{n.exports=e.p+"81e3b3f0884a4d0e7fed.jpg"},414:(n,r,e)=>{n.exports=e.p+"45abe1d92a83a53540f7.jpg"},938:(n,r,e)=>{n.exports=e.p+"523b2a01d00f11c57f06.otf"},322:(n,r,e)=>{n.exports=e.p+"478f6938106b34ff6b10.otf"}},n=>{n.O(0,[184],(()=>(572,n(n.s=572)))),n.O()}]);