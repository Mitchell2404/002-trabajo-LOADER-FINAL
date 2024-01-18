$(document).ready(function() {
  //Se realiza lo siguiente con todas las imagenes:
  var image_001 = $('#img_001');
  var load_1 = $('#loader_1');
  
  // Verificar si la imagen ya está cargada (por ejemplo, en caché)
  if (image_001[0].complete) {
      image_001.css("visibility", "visible");
      load_1.removeClass("loader");
  } else {
      // Si no está cargada, esperar al evento de carga
      image_001.on('load', function() {
          $(this).css("visibility", "visible");
          load_1.removeClass("loader");
      });
  }
  //*******************************************************************
  var image_002 = $('#img_002');
  var load_2 = $('#loader_2');
  
  if (image_002[0].complete) {
      image_002.css("visibility", "visible");
      load_2.removeClass("loader");
  } else {
      image_002.on('load', function() {
          $(this).css("visibility", "visible");
          load_2.removeClass("loader");
      });
  }
});