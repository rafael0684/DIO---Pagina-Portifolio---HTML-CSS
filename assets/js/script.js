const acordeonTriggers = document.querySelectorAll(".acordeon .trigger")
// const content = document.querySelector(".content")
// const arrow = document.querySelector(".trigger img")

acordeonTriggers.forEach((trigger) => {
  const arrow = trigger.parentNode.children[0].children[0]
  const content = trigger.parentNode.children[1]
  trigger.addEventListener('click', ()=>{
    content.classList.toggle("ocultar");
    arrow.classList.toggle("rodar")
  })
})
