let a=document.querySelector('.clicky1');
let d=document.querySelector('.clicky2');
let b=document.querySelector('.county');
let c=b.textContent;
// console.log(c);
a.addEventListener('click',function(){
    b.textContent--;
})
d.addEventListener('click',function(){
    // c=c+1;
    b.textContent++;
})

