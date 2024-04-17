
$(document).ready(function () {
  // tooltip de bootstrap
  $('[data-bs-toggle="tooltip"]').tooltip()
})


// Cambio de diapositiva...
document.querySelector('#my-carousel').addEventListener('slide.bs.carousel', event => {
    document.querySelectorAll(".indicador").forEach(element => {
      element.classList.toggle("active");
    })
  })
// evento dblclick`
$("h3").dblclick(function () {

    $(this).css({
      "color": "red"
    })
  })
  // toggle desaparcer/aparecer al hacer clic en titulos de tarjeta
$(".card-title").click(function () {

	$(this).next().toggle("slow")
})
