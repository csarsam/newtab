var $ = jQuery;

$(document).ready( function() {

  var index = 0;

  function delayNext()
  {
    setTimeout(function() {
    $( ".link-" + index ).css("display", "block").addClass("flipin");
    index++;

    if ( index < 9 ) {
      delayNext();
    }
    }, 200); 
  }

  delayNext();

});
