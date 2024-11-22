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

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!form.checkValidity()) {
      const inputs = form.querySelectorAll("input:invalid")
      const textarea = form.querySelector("textarea:invalid")
      inputs.forEach(i => i.classList.add("error"))
      textarea.classList.add("error")
      return
    }

    if (form.classList.contains("company-form")) {
      alert("Logo, logo nossa equipe entrará em contato")
    } else {
      alert("Agradecemos por se cadastrar na nossa plataforma")
    }
  })
})
