
window.onload=()=>
{
    
    
const btna = document.getElementById("a");
const btnb = document.getElementById("b");
const btnc = document.getElementById("c");

btna.addEventListener("click",()=>{
    window.prompt("Welcome!");
});


btnb.addEventListener("click", ()=>{
    //let target= document.querySelector('#first');
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