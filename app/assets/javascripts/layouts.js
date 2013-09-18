$(function(){
  var $itemContent = $(".menubar-container");
  $(".nav-buttons").click(function(e){
    e.preventDefault();
    if($itemContent.hasClass('opened')){
      $itemContent.addClass('closed');
      $itemContent.removeClass('opened');
    } else {
      $itemContent.addClass('opened');
      $itemContent.removeClass('closed');
    }
  });
});