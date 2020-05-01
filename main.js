$("document").ready(function () {
	  $(".butn").click(function () {
      $(".butn:last").after($(".butn:first"));
  });
});
