document.addEventListener("DOMContentLoaded", function(){
const navbar=document.querySelector('.navbar');

window.addEventListener('scroll', function(){
    if(window.scroll>50){
        navbar.style.backgroundcolor ='#555';

    } else{
        navbar.style.backgroundcolor ='#777';
        
    }

});
});