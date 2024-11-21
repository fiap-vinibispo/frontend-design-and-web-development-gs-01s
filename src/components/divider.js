const mainColor = getComputedStyle(document.body).getPropertyValue('--main-color')
const dividers = document.querySelectorAll('.divider')
dividers.forEach(divider => {
  if (!divider.hasAttribute('data-style')) {
    divider.setAttribute('data-style', 'horizontal')
  }

  if (!divider.hasAttribute('data-color')) {
    divider.setAttribute('data-color', mainColor)
  }

  if (!divider.hasAttribute('data-thickness')) {
    divider.setAttribute('data-thickness', '10')
  }

  const color = divider.getAttribute('data-color')
  const thickness = divider.getAttribute('data-thickness')
  const style = divider.getAttribute('data-style')
  divider.style.backgroundColor = color
  if (style == "vertical") {
    divider.style.width = `${thickness}px`
    return
  }

  if (style == "horizontal") {
    divider.style.height = `${thickness}px`
  }
})
