
$(document).ready(function() {
    // Obtiene la URL actual
    var currentURL = window.location.pathname;

    console.log('currentURL', currentURL)
  
    // Verifica si la URL es "/about"
    if (currentURL === "/about") {
      // Agrega la clase "whiteBackground" al elemento "topbarContainer"
      $('.topbarContainer').css('background-color', 'white');
      $('.topbarContainer .left a').css('color', 'black');
    }
  });



