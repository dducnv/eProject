var toTop = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop >=300 || document.documentElement.scrollTop >=300) {
        toTop.style.display = "block";
    } else {
        toTop.style.display = "none";
    }

    var nav= document.querySelector("Nav");
    nav.classList.toggle("sticky",window.scrollY>1)
}
function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
