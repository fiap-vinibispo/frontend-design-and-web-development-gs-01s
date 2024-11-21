const forms = document.querySelectorAll("section#clients form")
forms.forEach(form => {
  form.addEventListener("mouseenter", () => {
    const title = form.children.item(0)
    title.classList.add("hovered-title")
  })

  form.addEventListener("mouseleave", () => {
    const title = form.children.item(0)
    title.classList.remove("hovered-title")
  })
})
