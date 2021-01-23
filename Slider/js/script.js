// JavaScript Document
 $(document).ready(function() {
    $('#Gallery-AutoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#Gallery-AutoWidth').removeClass('Gallery-Hidden');
        } 
    });  
  });