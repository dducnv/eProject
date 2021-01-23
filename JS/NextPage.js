
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





