$(document).ready(function() {
  alert('hola');
    var image_001 = $('#img_001');
    var load_1 = $('#loader_1'); 
  
    image_001.on('load', function() {
      $(this).css("visibility", "visible");
      load_1.removeClass("loader");
    });
});