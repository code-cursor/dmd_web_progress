$(document).ready(function () {
  $(".accordion-button").first().addClass("selected");
  $(".accordion-button").click(function () {
    $(".accordion-button").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".patient-container").css("opacity", 0).animate({ opacity: 1 }, 1000);
});
