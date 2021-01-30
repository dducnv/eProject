
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
    var geocode = { lat:16.040445938776717,lng:108.22660781539376},
    map2 = new google.maps.Map(document.getElementById("map"), {
        center:geocode,
        zoom:15,
        scrollWeel:false
    });
      new google.maps.Marker({
        position:geocode,
        map: map2
    });
}
function myFunction() {
    document.getElementById("myForm").submit(
    );
}
