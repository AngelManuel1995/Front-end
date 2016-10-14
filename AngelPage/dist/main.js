"use strict";

;(function () {
  var sticky = false;

  $("#sticky-navigation").removeClass("hidden");
  $("#sticky-navigation").slideUp(0);

  $(window).scroll(function () {
    var inBottom = isInBottom();
    if (inBottom && !sticky) {
      //Mostrar la nevegación Sticky
      sticky = true;
      stickyNavigation();
      console.log("Cambiar la navagación");
    }
    if (!inBottom && sticky) {
      //Ocultar la navegación sticky
      sticky = false;
      unStickNavigation();
      console.log("Regresar la navegación");
    }
  });

  function stickyNavigation() {
    $("#description").addClass("fixed").removeClass("absolute");
    $("#navigation").slideUp();
    $("#sticky-navigation").slideDown();
  }

  function unStickNavigation() {
    $("#description").removeClass("fixed").addClass("absolute");
    $("#navigation").slideDown("hidden");
    $("#sticky-navigation").slideUp("hidden");
  }

  function isInBottom() {
    var $description = $("#description");
    var descriptionHeight = $description.height();

    return $(window).scrollTop() > $(window).height() - descriptionHeight * 2;
  }
})();
