!function(t){var e={};function n(o){if(e[o])return e[o].exports;var c=e[o]={i:o,l:!1,exports:{}};return t[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)n.d(o,c,function(e){return t[e]}.bind(null,c));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const o=document.getElementById("home"),c=document.getElementById("content");(()=>{const t=document.createElement("div");t.setAttribute("id","nav-bar");const e=document.createElement("ul");e.setAttribute("class","nav-contents");const n=document.createElement("li"),a=document.createElement("h6");a.setAttribute("id","tab1"),a.textContent="Home",n.appendChild(a);const s=document.createElement("li"),i=document.createElement("h6");i.setAttribute("id","tab2"),i.textContent="Menu",s.appendChild(i);const r=document.createElement("li"),d=document.createElement("h6");d.setAttribute("id","tab3"),d.textContent="Contact",r.appendChild(d);const m=document.createElement("li"),u=document.createElement("h6");u.setAttribute("class","logo"),u.textContent="Raymond Restaurant",m.appendChild(u),e.append(n,s,r,m),t.appendChild(e),o.appendChild(t),c.appendChild(o)})(),(()=>{const t=document.createElement("div");t.setAttribute("id","about");const e=document.createElement("p");e.setAttribute("class","para"),e.textContent="Raymond Restaurant is a top class restaurant that serves hundreds of cuisines from around the world. Talk about African, Asian,Australian, we have all of that.The best part is , we offer them at very affordable prices..Try us today...Your stomach is our top priority at Raymond..",t.appendChild(e);const n=document.createElement("div");n.setAttribute("class","footer");const a=document.createElement("h5");a.textContent="Coded by Alpha with Love",n.appendChild(a),o.append(t,n),c.appendChild(o)})();const a=document.getElementById("nav-bar"),s=document.getElementById("about"),i=document.querySelector(".footer"),r=document.getElementById("tab1"),d=document.getElementById("tab2"),m=document.getElementById("tab3");r.addEventListener("click",(function(){o.innerHTML="",o.append(a,s,i)})),d.addEventListener("click",(function(){o.innerHTML="",o.appendChild(a),(()=>{const t=document.createElement("section");t.setAttribute("class","menu"),o.appendChild(t),c.appendChild(o);const e=document.createElement("div");e.setAttribute("class","menu-items");const n=document.createElement("img");n.setAttribute("src","img/brazill.jpg");const a=document.createElement("div");a.setAttribute("class","item-description");const s=document.createElement("h3");s.textContent="Brazillian Beef steak";const i=document.createElement("p");i.textContent="With beef sourced from the finest cattle breed in Southern Tuscany, this amaing cuisine will leave you wanting more and more.Served with hot Thailand rice, this is the most exquisite it can get.";const r=document.createElement("h4");r.textContent="$ 30",e.append(n,a);const d=document.createElement("div");d.setAttribute("class","menu-items");const m=document.createElement("img");m.setAttribute("src","img/englishCuisine.jpg");const u=document.createElement("div");u.setAttribute("class","item-description");const l=document.createElement("h3");l.textContent="The English Roasted Chicken";const p=document.createElement("p");p.textContent="Whether you want to eat light or fill up your stomach, Raymond got you covered with the best chicken steak sourced from Mexico.Dont bite your fingers!";const E=document.createElement("h4");E.textContent="$ 20",d.append(m,u);const h=document.createElement("div");h.setAttribute("class","menu-items");const b=document.createElement("img");b.setAttribute("src","img/tz.jpg");const C=document.createElement("div");C.setAttribute("class","item-description");const f=document.createElement("h3");f.textContent="Tanzanian Mshkaki";const g=document.createElement("p");g.textContent="From the coast of Africa, meet the famou Mshkaki, beautifully grilled and roasted with top class marination for excellent taste.";const x=document.createElement("h4");x.textContent="$ 10",h.append(b,C);const A=document.createElement("div");A.setAttribute("class","menu-items");const y=document.createElement("img");y.setAttribute("src","img/kenyan.jpg");const v=document.createElement("div");v.setAttribute("class","item-description");const k=document.createElement("h3");k.textContent="The Kenyan Killer";const w=document.createElement("p");w.textContent="We deliver all cuisines, including African.Meet the Kenyan meal.From the best maize , we sift and bake it to perfection. It is then accompanied by steamed Kales and wet fried Meat.Its gonna be a gas!";const T=document.createElement("h4");T.textContent="$ 20",A.append(y,v);const M=document.createElement("div");M.setAttribute("class","menu-items");const S=document.createElement("img");S.setAttribute("src","img/southIndia.jpg");const j=document.createElement("div");j.setAttribute("class","item-description");const R=document.createElement("h3");R.textContent="South India";const I=document.createElement("p");I.textContent="Whether its raining in Bamako or winter in Carlifonia, we got you Indians. This amazing delicacy inspired by pancake concept is worth the cash.";const B=document.createElement("h4");B.textContent="$ 25",M.append(S,j);const L=document.createElement("div");L.setAttribute("class","menu-items");const O=document.createElement("img");O.setAttribute("src","img/southAfica.jpg");const z=document.createElement("div");z.setAttribute("class","item-description");const _=document.createElement("h3");_.textContent="";const P=document.createElement("p");P.textContent="";const W=document.createElement("h4");W.textContent="",L.append(O,z);const $=document.createElement("div");$.setAttribute("class","menu-items");const H=document.createElement("img");H.setAttribute("src","img/uganda.jpg");const K=document.createElement("div");K.setAttribute("class","item-description");const F=document.createElement("h3");F.textContent="";const q=document.createElement("p");q.textContent="";const N=document.createElement("h4");N.textContent="",$.append(H,K),a.append(s,i,r),u.append(l,p,E),C.append(f,g,x),v.append(k,w,T),j.append(R,I,B),z.append(_,P,W),K.append(F,q,N),t.append(e,d,h,A,M,L,$)})(),o.appendChild(i)})),m.addEventListener("click",(function(){o.innerHTML="",o.appendChild(a),(()=>{const t=document.createElement("div");t.setAttribute("id","contact-form");const e=document.createElement("form");e.setAttribute("id","contacts");const n=document.createElement("h1");n.textContent="Talk to us";const a=document.createElement("p");a.textContent="Name";const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("id","name"),s.setAttribute("placeholder","Name");const i=document.createElement("p");i.textContent="Email address";const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","email"),r.setAttribute("placeholder","E-mail");const d=document.createElement("p");d.textContent="Rate us today!.Leave a comment.";const m=document.createElement("select"),u=document.createElement("option");u.textContent="Rate Us.",u.setAttribute("disabled",""),u.setAttribute("selected","");const l=document.createElement("option");l.textContent="5 Stars";const p=document.createElement("option");p.textContent="4 Stars";const E=document.createElement("option");E.textContent="3 Stars";const h=document.createElement("option");h.textContent="2 Stars";const b=document.createElement("option");b.textContent="1 Star",m.append(u,l,p,E,h,b);const C=document.createElement("p");C.textContent="Your Message";const f=document.createElement("input");f.setAttribute("type","text"),f.setAttribute("id","message"),f.setAttribute("placeholder","Type your message here");const g=document.createElement("button");g.textContent="Send Message",e.append(n,a,s,i,r,d,m,C,f,g);const x=document.createElement("p");x.setAttribute("id","socials"),x.textContent="Also, talk to us on social media";const A=document.createElement("ul");A.setAttribute("id","social");const y=document.createElement("li");y.textContent="Facebook:Raymond Restaurant";const v=document.createElement("li");v.textContent="Twitter:@RaymondRestaurant";const k=document.createElement("li");k.textContent="Whatsapp:+254-71234-567",A.append(y,v,k),t.append(e,x,A),o.appendChild(t),c.appendChild(o)})()}))}]);