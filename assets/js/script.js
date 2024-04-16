// habilitar bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
