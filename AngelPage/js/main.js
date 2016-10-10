;(function(){
  let sticky = false
  $(window).scroll(()=>{
    const inBottom = isInBottom()
    if(inBottom && !sticky){
      //Mostrar la nevegación Sticky
      sticky = true
      stickyNavigation()
      console.log("Cambiar la navagación")
    }
    if(!inBottom && sticky){
      //Ocultar la navegación sticky
      sticky = false
      unStickNavigation()
      console.log("Regresar la navegación")
    }
  })

function stickyNavigation(){
  $("#description").addClass("fixed").removeClass("absolute")
  $("#navigation").addClass("hidden")
  $("#sticky-navigation").removeClass("hidden")
}

function unStickNavigation(){
  $("#description").removeClass("fixed").addClass("absolute")
  $("#navigation").removeClass("hidden")
  $("#sticky-navigation").addClass("hidden")
}

  function isInBottom(){
    const $description = $("#description");
    const descriptionHeight = $description.height()

    return $(window).scrollTop() > $(window).height() - (descriptionHeight * 1.5)
  }
})()
