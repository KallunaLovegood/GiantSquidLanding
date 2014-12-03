function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
    event.preventDefault();
}

$("#useCases").click(function() {
  // event.preventDefault();
   scrollToAnchor('useCases');
});

$("#services").click(function() {
  // event.preventDefault();
   scrollToAnchor('services');
});

$("#testimonials").click(function() {
  // event.preventDefault();
   scrollToAnchor('testimonials');
});

$("#contact").click(function() {
  // event.preventDefault();
   scrollToAnchor('contact');
});

$("#projectButton").click(function() {
  // event.preventDefault();
   scrollToAnchor('useCases');
});

$("#topofpage").click(function() {
  // event.preventDefault();
   scrollToAnchor('topofpage');
});