
window.onload=()=>
{

var i=1; 
const hdng =()=>{
    let hdn = document.querySelector('#heading');
    hdn.innerHTML = `The New Heading no. ${i++}!`;
}

    
const btna = document.getElementById("a");
const btnb = document.getElementById("b");
const btnc = document.getElementById("c");

btna.addEventListener("click",()=>{
    window.prompt("Welcome!");
});


btnb.addEventListener("click", ()=>{
    
    let bod = document.body;
    
    if(bod.style.backgroundColor=='grey'){
        bod.style.backgroundColor = '#2ab8a5';
    }
    else{
        bod.style.backgroundColor = 'grey';
        //window.alert('changing back')
    }
});


btnc.addEventListener("click", ()=>{
    setTimeout(hdng, 5000);
});


setInterval(()=>{
let clock= document.getElementById('second');
let dt= new Date();
clock.innerHTML= dt;

}, 1000);


}
/* function prom(){
    window.prompt("Welcome!");
}
const changebg =()=>{
    window.prompt("Welcome!");
}
const hdng =()=>{
    window.prompt("Welcome!");
}

*/