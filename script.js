const button=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-nav');
if(button&&nav){
  button.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    button.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
document.getElementById('year').textContent=new Date().getFullYear();
