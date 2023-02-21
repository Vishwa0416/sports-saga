var nav=document.querySelector('.sub1')
var shop=document.getElementById('shop')
shop.addEventListener('click',function(e){
    nav.classList.toggle('sub2');
    e.preventDefault();
})