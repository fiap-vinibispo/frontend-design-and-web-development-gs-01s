const menu = document.querySelector("header.menu")
if (!menu) throw new Error("Menu não encontrado")
const navigationHeight = menu.offsetHeight

document.documentElement.style.setProperty("--scroll-padding", navigationHeight - 1 + "px");
