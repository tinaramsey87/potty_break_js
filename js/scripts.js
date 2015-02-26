$(document).ready(function() {
  $(":text").each(function() {
    if( !$(this).val() ) {
      $("button").removeClass("btn-warning").addClass("btn-success");
    }
  });
});
