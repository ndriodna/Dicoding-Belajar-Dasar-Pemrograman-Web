let btnScroll = document.getElementById("btnFloat")

window.onscroll = function(){scrollToTop()}

function scrollToTop(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        btnScroll.style.display = "block"
    } else{
        btnScroll.style.display = "none"
    }   
}