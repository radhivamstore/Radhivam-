const products=[
 {name:"Pearl Grace Bracelet",cat:"Women",occasion:"Birthday",price:799,old:1099,icon:"✧"},
 {name:"Love Note Gift Box",cat:"Couples",occasion:"Romance",price:1299,old:1699,icon:"♡"},
 {name:"Classic Men's Wallet",cat:"Men",occasion:"Birthday",price:999,old:1399,icon:"▱"},
 {name:"DIY Bloom Kit",cat:"Kids",occasion:"Just Because",price:599,old:799,icon:"✿"},
 {name:"Celestial Ring",cat:"Women",occasion:"Anniversary",price:899,old:1199,icon:"◈"},
 {name:"Urban Charm Bracelet",cat:"Men",occasion:"Just Because",price:699,old:899,icon:"◌"},
 {name:"Soft Love Bear",cat:"Kids",occasion:"Birthday",price:749,old:999,icon:"♡"},
 {name:"Festive Mini Hamper",cat:"Couples",occasion:"Festival",price:1499,old:1999,icon:"✦"}
];
let activeOccasion="All";
function renderProducts(){
 const grid=document.getElementById('productGrid');
 const shown=products.filter(p=>activeOccasion==="All"||p.occasion===activeOccasion);
 grid.innerHTML=shown.map((p,i)=>`<article class="product"><button class="heart" onclick="showToast('Added to wishlist ♡')">♡</button><div class="pimg">${p.icon}</div><div class="pbody"><div class="tag">${p.cat} • ${p.occasion}</div><div class="pname">${p.name}</div><div class="price">₹${p.price.toLocaleString('en-IN')} <span class="old">₹${p.old.toLocaleString('en-IN')}</span></div><button class="add" onclick="showToast('${p.name} added to cart')">ADD TO CART</button></div></article>`).join('') || '<p>No gifts found in this occasion yet.</p>';
}
function filterProducts(cat){
 activeOccasion="All";renderProducts();document.querySelector('#products').scrollIntoView({behavior:'smooth'});showToast('Showing curated '+cat+' gifts');
}
function setOccasion(btn,val){
 document.querySelectorAll('.pill').forEach(x=>x.classList.remove('active'));btn.classList.add('active');activeOccasion=val;renderProducts();document.querySelector('#products').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('.choice').forEach(btn=>btn.addEventListener('click',()=>{btn.parentElement.querySelectorAll('.choice').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected')}));
function runFinder(){
 const person=document.querySelector('[data-group="person"] .selected').textContent;
 const occasion=document.querySelector('[data-group="occasion"] .selected').textContent;
 const budget=document.querySelector('[data-group="budget"] .selected').textContent;
 document.getElementById('modalTitle').textContent=`Gifts for ${person}`;
 document.getElementById('modalText').textContent=`Based on ${occasion.toLowerCase()} and your ${budget} budget, we recommend starting with our curated collection for ${person.toLowerCase()}.`;
 document.getElementById('modal').classList.add('show');
}
function closeModal(){document.getElementById('modal').classList.remove('show')}
function showToast(t){const el=document.getElementById('toast');el.textContent=t;el.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove('show'),2400)}
function subscribe(){const e=document.getElementById('email').value;if(!e){showToast('Please enter your email');return}showToast('Welcome to the RADHIVAM circle ✨');document.getElementById('email').value=''}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
renderProducts();
