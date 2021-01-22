var toTop = document.navbar("toTop");
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




var items = $('.frames .overall');
var numItems = items.length;
var perPage = 5;

items.slice(perPage).hide();
$('#next-page').pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "<",
    nextText: ">",
    onPageClick: function (pageNumber) {
        var showFrom = perPage * (pageNumber - 1);
        var showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    }

})
function nextPage(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
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


