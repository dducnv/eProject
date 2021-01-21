
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
//map
let map;
function initMap() {
    var geocode = { lat:21.028827204923033,lng:105.78228036747664},
    map2 = new google.maps.Map(document.getElementById("map"), {
        center:geocode,
        zoom:20,
        scrollWeel:false
    });
      new google.maps.Marker({
        position:geocode,
        map: map2
    });
}