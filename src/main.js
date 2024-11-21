import "./components/divider.js"
import "./pages/clients.js"
import { Carousel } from "./components/carousel.js"

Carousel.create("carousel-objectives", [
  {
    title: "Empresas e projetos sustentáveis",
    description: "Arrecade doações para as suas ideias sustentáveis, faça a diferença com a ajuda dos nossos usuários",
    imageSrc: "./assets/images/objectives/company.png",
    imageAlt: "Engenheiro mexendo em um notebook"
  },
  {
    title: "Cadastre sua rotina",
    description: "Descubra como você está contribuindo e pode ainda mais com o meio ambiente",
    imageSrc: "./assets/images/objectives/routine.png",
    imageAlt: "Casal negro fazendo atividades sustentáveis como reciclagem e plantar planta"
  },
  {
    title: "Doe e faça a diferença",
    description: "Acesse nossa seção de doações e apoie projetos que tem os mesmos objetivos que você",
    imageSrc: "./assets/images/objectives/donation.png",
    imageAlt: "Pessoas plantando uma árvore"
  },
])
