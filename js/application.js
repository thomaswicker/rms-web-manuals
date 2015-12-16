$(document).foundation({
  offcanvas : {
    // Sets method in which offcanvas opens.
    // [ move | overlap_single | overlap ]
    open_method: 'overlap',
    // Should the menu close when a menu link is clicked?
    // [ true | false ]
    close_on_click : true
  }
});

$(document).ready(function(){
  // hide #back-top first
  $("#back-top").hide();

  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

  var $root = $('html, body');
  $('a').click(function() {
      $root.animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top - 120
      }, 500);
      return false;
  });

  var $offCanvasMenu = $('.off-canvas-wrap'),
      $offCanvasList = $('.off-canvas-wrap ul li a');

  $offCanvasList.click(function() {
    $offCanvasMenu.toggleClass('offcanvas-overlap');
  });

});
