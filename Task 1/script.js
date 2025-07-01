const head = document.getElementById('head');

console.log(head);

head.style.color = "red";
head.style.border = "5px solid green"


head.addEventListener('click',()=>{
    console.log('h1 clicked! ')
    head.style.backgroundColor = "grey"
})

const btn = document.getElementById('btn');
let x = 0;
btn.addEventListener('click',()=>{
    
    const inner = document.getElementById('inner');
    x= x+10
    inner.style.width = x +"%"
})