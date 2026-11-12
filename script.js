const data=[["📦", "Order tracking & status", "Understand order progress, delivery estimates and tracking updates.", "tracking"], ["🚚", "Late or missing delivery", "What to check if an order is delayed or marked delivered but not found.", "delivery"], ["🛍️", "Missing, damaged or wrong items", "General guidance for reporting item issues and substitutions.", "items"], ["↩️", "Refunds & adjustments", "Where to review refund requests and order adjustments.", "refunds"], ["💳", "Payments, charges & receipts", "Understand receipts, pending charges and payment questions.", "payments"], ["🔐", "Account & login access", "General sign-in, password reset and account security information.", "account"], ["📱", "App & technical issues", "Basic troubleshooting for app loading, updates and connection issues.", "app"], ["🛒", "Pickup orders", "Review pickup instructions, arrival and order status information.", "pickup"], ["⭐", "Membership & subscriptions", "Find membership billing, renewal and cancellation settings.", "membership"], ["🏷️", "Promotions & gift cards", "Common reasons a coupon, promotion or gift card may not apply.", "promos"], ["💬", "Shopper communication", "Understand in-app messages, replacement requests and order notes.", "shopper"], ["✕", "Order cancellations", "Review cancellation options and official next steps.", "cancel"]];

const root=document.getElementById('cards');
data.forEach(t=>{
 const e=document.createElement('article'); e.className='topic'; e.dataset.q=t.join(' ').toLowerCase();
 e.innerHTML=`<div class="ico">${t[0]}</div><h3>${t[1]}</h3><p>${t[2]}</p><a class="read-guide" href="guides/${t[3]}.html">Read guide →</a>`;
 root.appendChild(e);
});
document.getElementById('search').oninput=e=>{
 const q=e.target.value.toLowerCase();
 document.querySelectorAll('.topic').forEach(c=>c.hidden=!c.dataset.q.includes(q));
};
document.getElementById('menu').onclick=()=>document.getElementById('nav').classList.toggle('open');
