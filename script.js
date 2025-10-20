
// Simple interactions for demo template
document.addEventListener('DOMContentLoaded', function(){
  // testimonials slider
  const items = document.querySelectorAll('.test-item');
  let i = 0;
  if(items.length){
    items[0].classList.add('active');
    setInterval(()=>{
      items[i].classList.remove('active');
      i = (i+1)%items.length;
      items[i].classList.add('active');
    }, 4500);
  }

  // buy buttons increase cart count (demo)
  const cartCount = document.querySelector('.cart-count');
  let count = 0;
  document.querySelectorAll('.btn.buy').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      count++;
      if(cartCount) cartCount.textContent = count;
      btn.textContent = 'أضيف';
      setTimeout(()=>btn.textContent = 'أضف إلى السلة',1200);
    });
  });

  // simple contact form demo prevent submit
  const form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('شكراً! تم إرسال رسالتك (تجريبي).');
      form.reset();
    });
  }
});
