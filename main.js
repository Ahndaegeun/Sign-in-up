function changeClass(){
    document.getElementsByClassName("display-on").className = "display-off"
}

window.onload = function(){
    document.getElementsByClassName("display-on").addEventListener( 'click', changeClass);
}