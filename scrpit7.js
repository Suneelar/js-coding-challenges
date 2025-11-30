
const counterValue=document.getElementById('Counter-value');
const Incrementelement=document.getElementById('increment-btn');
const Deceremntelement=document.getElementById('decrement-btn');

// Intitlize counter 
let count=0;

counterValue.textContent=count;
Incrementelement.addEventListener('click',()=>{
count++;
counterValue.textContent=count;
});

counterValue.textContent=count;
Deceremntelement.addEventListener('click',()=>{
count--;
counterValue.textContent=count;
});


