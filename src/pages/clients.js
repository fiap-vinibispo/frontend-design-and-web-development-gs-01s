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
      inputs.forEach(input => {
        const validityState = input.validity
        const labelText = input.parentElement.firstElementChild.textContent
        if (validityState.valueMissing) {
          input.setCustomValidity(`O campo ${labelText.toLowerCase()} deve ser preenchido`)
        } else if (validityState.typeMismatch) {
          input.setCustomValidity(`Não é um ${labelText.toLowerCase()} válido`)
        }
        input.classList.add("error")
      })
      if (textarea) {
        const validityState = textarea.validity
        const labelText = textarea.parentElement.firstElementChild.textContent
        if (validityState.valueMissing) {
          textarea.setCustomValidity(`O campo ${labelText.toLowerCase()} deve ser preenchido`)
        }
        textarea.classList.add("error")
      }
      form.reportValidity()
      return
    }

    if (form.classList.contains("company-form")) {
      alert("Logo, logo nossa equipe entrará em contato")
    } else {
      alert("Agradecemos por se cadastrar na nossa plataforma")
    }
    form.reset()
  })

})

const allFields = document.querySelectorAll("section#clients form :is(input, textarea)")
allFields.forEach(field => {
  field.addEventListener("input", () => {
    field.setCustomValidity("");
    field.classList.remove("error");
  })
})
