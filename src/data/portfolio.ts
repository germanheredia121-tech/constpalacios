export const siteConfig = {
  name: "Constanza Palacios",
  tagline: "Modelo comercial y de pasarela",
  instagram: "coty_.p",
  email: "constanzamaximapalacios@gmail.com",
  phone: "+54 9 3549-463804",
} as const;

export const about = {
  title: "Un poco sobre mí",
  bio: [
    "Mi nombre es Constanza Palacios, tengo 18 años y cuento con experiencia en el mundo del modelaje desde los 15 años.",
    "A lo largo de estos años he trabajado con diversas marcas de ropa, participando en sesiones fotográficas y proyectos enfocados en imagen, moda y proyección visual. Además, he obtenido títulos provinciales en certámenes de belleza, experiencia que fortaleció mis habilidades en pasarela, presencia escénica, desenvolvimiento frente a cámara y disciplina profesional.",
    "Me caracterizo por mi compromiso, versatilidad y pasión por el modelaje, siempre buscando seguir creciendo y perfeccionándome en la industria.",
  ],
  stats: [
    { value: "3+", label: "Años de experiencia" },
    { value: "18", label: "Años · Argentina" },
  ],
} as const;

// Imágenes descargadas desde Canva (scripts/download-canva-images.js)
export const projects = [
  {
    id: "ponte-guapa",
    title: "Ponte Guapa",
    category: "Sesión Fotográfica",
    description: "Sesión de fotos para la página de Ponte Guapa",
    image: "/images/canva-6.png",
  },
  {
    id: "pasarelas",
    title: "Pasarelas y colaboraciones",
    category: "Pasarela",
    description: "Mis pasarelas y colaboraciones",
    image: "/images/canva-7.jpg",
  },
  {
    id: "angelica-meza",
    title: "Angélica Meza Atelier",
    category: "Colaboración",
    description: "Colaboración con Angélica Meza Atelier",
    image: "/images/canva-8.jpg",
  },
  {
    id: "lez-vestidos",
    title: "Lez Vestidos",
    category: "Traje de Gala",
    description: "Desfile en traje de gala + colaboración con Lez Vestidos",
    image: "/images/canva-9.jpg",
  },
  {
    id: "rodriguez-moreno",
    title: "Rodríguez Moreno",
    category: "Alta Costura",
    description: "Desfile Semana de la Moda Rodríguez Moreno - Alta costura",
    image: "/images/canva-10.jpg",
  },
  {
    id: "ponte-guapa-gala",
    title: "Ponte Guapa",
    category: "Traje de Gala",
    description: "Desfile en traje de gala + colaboración con Ponte Guapa",
    image: "/images/canva-11.jpg",
  },
] as const;

export const heroImage = "/images/canva-1.jpg";
export const heroPhoto = "/images/canva-5.png"; // Foto que aparece como foco y se mueve a la derecha
export const aboutImage = "/images/canva-4.png";

export const characteristics = [
  { label: "Estatura", value: "1,68 m" },
  { label: "Peso", value: "52 kg" },
  { label: "Talle Zapato", value: "38" },
  { label: "Medidas", value: "88-65-98" },
  { label: "Talle", value: "XS-S" },
  { label: "Cabello", value: "Natural castaño oscuro / Rubio teñido" },
  { label: "Ojos", value: "Marrones" },
  { label: "Tono de piel", value: "Claro-frío" },
] as const;
