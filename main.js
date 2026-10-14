const ASSETS = {
  home: "https://www.figma.com/api/mcp/asset/51223e1e-db7e-4c58-8cb5-b305f3db0bcf",
  food: "https://www.figma.com/api/mcp/asset/308ac88f-2b79-47c1-991b-12551822c7fd",
  snacks:
    "https://www.figma.com/api/mcp/asset/ba6a4c05-315e-4613-8158-4b4a6dd4e57c",
  hygiene:
    "https://www.figma.com/api/mcp/asset/df084a93-488b-4397-b819-281a62593822",
  accessories:
    "https://www.figma.com/api/mcp/asset/fc26943c-0736-4db7-9fe9-9c1882bf0683",
  wellbeing:
    "https://www.figma.com/api/mcp/asset/7516b6fc-5252-4760-b9cc-2e6d30bd4db7",
};
const img = (group, file) => `${ASSETS[group]}/${file}`;
const categories = [
  {
    id: "alimentos",
    name: "Alimentos",
    desc: "Alimentación adaptada a su edad, tamaño y necesidades.",
    icon: "",
    group: "food",
  },
  {
    id: "snacks",
    name: "Snacks y premios",
    desc: "Premios para consentir, entrenar y compartir momentos.",
    icon: "",
    group: "snacks",
  },
  {
    id: "higiene-salud",
    name: "Higiene y salud",
    desc: "Cuida su higiene, pelaje y bienestar de todos los días.",
    icon: "",
    group: "hygiene",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    desc: "Lo que necesita para acompañarte en cada aventura.",
    icon: "",
    group: "accessories",
  },
  {
    id: "bienestar",
    name: "Bienestar",
    desc: "Juguetes, descanso y estimulación para una vida feliz.",
    icon: "",
    group: "wellbeing",
  },
  {
    id: "favoritos",
    name: "Favoritos",
    desc: "Tus productos guardados en un solo lugar.",
    icon: "",
    group: "home",
  },
];
const products = [
  // Alimentos y recomendaciones de la página de inicio
  {
    id: "f1",
    cat: "alimentos",
    brand: "Ricocan",
    name: "Ricocan Cordero y Cereales Adultos Razas Medianas y Grandes 15 kg",
    price: 140,
    oldPrice: 180,
    image: img("home", "80d20.png"),
  },
  {
    id: "f2",
    cat: "alimentos",
    brand: "Canbo Balance",
    name: "Canbo Dog Food Adultos SB Pollo Razas Medianas y Grandes, alimento seco 15 kg",
    price: 129,
    oldPrice: 159,
    image: img("home", "48173.png"),
  },
  {
    id: "f3",
    cat: "alimentos",
    brand: "Canbo",
    name: "Canbo alimento seco para perros adultos",
    price: 220,
    oldPrice: null,
    image: img("home", "6c97d.png"),
  },
  {
    id: "f4",
    cat: "alimentos",
    brand: "Pro Plan",
    name: "Pro Plan Optiderma Sensitive Skin Razas Medianas y Grandes 12 kg",
    price: 284,
    oldPrice: null,
    image: img("food", "6682a.png"),
  },
  {
    id: "f5",
    cat: "alimentos",
    brand: "Allkjoy",
    name: "Allkjoy Adulto Cordero 15 kg — hipoalergénico",
    price: 189,
    oldPrice: 280,
    image: img("food", "94f43.png"),
  },
  {
    id: "f6",
    cat: "alimentos",
    brand: "S6 Sound",
    name: "S6 Sound alimento húmedo para perros adultos",
    price: 67.9,
    oldPrice: null,
    image: img("food", "9416a.png"),
  },
  {
    id: "f7",
    cat: "alimentos",
    brand: "Ricocan",
    name: "Original sabor carne, adultos todas las razas",
    price: 135,
    oldPrice: null,
    image: img("food", "8ab76.png"),
  },
  {
    id: "f8",
    cat: "alimentos",
    brand: "Senior Lamb & Rice",
    name: "Alimento para adulto mayor, cordero y arroz 12 kg",
    price: 284,
    oldPrice: null,
    image: img("food", "f202c.png"),
  },
  {
    id: "f9",
    cat: "alimentos",
    brand: "Canbo",
    name: "High Balance adultos todas las razas 15 kg",
    price: 242,
    oldPrice: 299,
    image: img("food", "6682a.png"),
  },
  {
    id: "f10",
    cat: "alimentos",
    brand: "Taste of the Wild",
    name: "Total Grain-Free Turkey Chicken & Duck 5.4 kg",
    price: 279,
    oldPrice: 356,
    image: img("food", "a61de.png"),
  },
  {
    id: "f11",
    cat: "alimentos",
    brand: "Ricocan",
    name: "Adultos razas medianas y grandes con cordero",
    price: 242,
    oldPrice: null,
    image: img("food", "8c680.png"),
  },
  {
    id: "f12",
    cat: "alimentos",
    brand: "Ricocan",
    name: "Adultos todas las razas sabor carne y cereales",
    price: 77.9,
    oldPrice: null,
    image: img("food", "c0abd.png"),
  },
  // Snacks y premios
  {
    id: "s1",
    cat: "snacks",
    brand: "Canbo",
    name: "Biscuits sabor cordero, adultos todas las razas",
    price: 14.9,
    oldPrice: null,
    image: img("home", "40c95.png"),
  },
  {
    id: "s2",
    cat: "snacks",
    brand: "Yamis",
    name: "Ahumaditos filetitos sabor tocino ahumado para perros adultos",
    price: 8,
    oldPrice: null,
    image: img("home", "90873.png"),
  },
  {
    id: "s3",
    cat: "snacks",
    brand: "Origo",
    name: "Patas de pollo deshidratadas, snack natural para perros, 10 unidades",
    price: 10.9,
    oldPrice: null,
    image: img("home", "66769.png"),
  },
  {
    id: "s4",
    cat: "snacks",
    brand: "Canbo",
    name: "Galletas multisabores para perros adultos",
    price: 7.9,
    oldPrice: null,
    image: img("snacks", "82725.png"),
  },
  {
    id: "s5",
    cat: "snacks",
    brand: "Canbo",
    name: "Galletas horneadas sabor cordero para perros adultos",
    price: 7.9,
    oldPrice: null,
    image: img("snacks", "2674e.png"),
  },
  {
    id: "s6",
    cat: "snacks",
    brand: "Origo",
    name: "Oreja de res deshidratada en tiras, snack natural para perros 80 g",
    price: 16.9,
    oldPrice: null,
    image: img("snacks", "f782b.png"),
  },
  {
    id: "s7",
    cat: "snacks",
    brand: "SmartBones",
    name: "Premios Soft Savories Beef & Cheddar de res y queso cheddar, 2 bolsas de 227 g",
    price: 39.6,
    oldPrice: null,
    image: img("snacks", "cc151.png"),
  },
  {
    id: "s8",
    cat: "snacks",
    brand: "SmartBones",
    name: "Grain Free Soft-Baked Chicken and Carrots de pollo y zanahoria",
    price: 39.9,
    oldPrice: null,
    image: img("snacks", "4b1cd.png"),
  },
  {
    id: "s9",
    cat: "snacks",
    brand: "Nubz",
    name: "Premio masticable natural para perros con pollo real",
    price: 39.9,
    oldPrice: null,
    image: img("snacks", "aae6d.png"),
  },
  {
    id: "s10",
    cat: "snacks",
    brand: "Canbo",
    name: "Snack horneado para perros adultos",
    price: 12.9,
    oldPrice: null,
    image: img("snacks", "40c95.png"),
  },
  // Higiene y salud
  {
    id: "h1",
    cat: "higiene-salud",
    brand: "Dragpharma",
    name: "Sir Dog acondicionador 390 ml",
    price: 36.9,
    oldPrice: null,
    image: img("hygiene", "8c2bd.png"),
  },
  {
    id: "h2",
    cat: "higiene-salud",
    brand: "Clorhexidina",
    name: "Shampoo medicado 300 ml",
    price: 42,
    oldPrice: null,
    image: img("hygiene", "bfb04.png"),
  },
  {
    id: "h3",
    cat: "higiene-salud",
    brand: "Pet Care",
    name: "Shampoo para el cuidado del pelaje",
    price: 25,
    oldPrice: null,
    image: img("hygiene", "ad723.png"),
  },
  {
    id: "h4",
    cat: "higiene-salud",
    brand: "Vet Life",
    name: "Producto de cuidado diario para mascotas",
    price: 49.9,
    oldPrice: null,
    image: img("hygiene", "31772.png"),
  },
  {
    id: "h5",
    cat: "higiene-salud",
    brand: "Pet Clean",
    name: "Limpieza y cuidado para tu mascota",
    price: 18.9,
    oldPrice: null,
    image: img("hygiene", "de400.png"),
  },
  {
    id: "h6",
    cat: "higiene-salud",
    brand: "Pet Care",
    name: "Cuidado del pelaje y piel sensible",
    price: 34.9,
    oldPrice: null,
    image: img("hygiene", "585ae.png"),
  },
  {
    id: "h7",
    cat: "higiene-salud",
    brand: "Pet Care",
    name: "Acondicionador de uso frecuente",
    price: 32,
    oldPrice: null,
    image: img("hygiene", "c8387.png"),
  },
  {
    id: "h8",
    cat: "higiene-salud",
    brand: "Vet Life",
    name: "Higiene para el cuidado de la piel",
    price: 45.9,
    oldPrice: null,
    image: img("hygiene", "35c25.png"),
  },
  {
    id: "h9",
    cat: "higiene-salud",
    brand: "Pet Clean",
    name: "Shampoo para perros",
    price: 18.9,
    oldPrice: null,
    image: img("hygiene", "1e5c9.png"),
  },
  {
    id: "h10",
    cat: "higiene-salud",
    brand: "Pet Care",
    name: "Producto para higiene de mascotas",
    price: 15.9,
    oldPrice: null,
    image: img("hygiene", "c6e72.png"),
  },
  // Accesorios
  {
    id: "a1",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Correa reflectante negra",
    price: 27.9,
    oldPrice: null,
    image: img("accessories", "48c7d.png"),
  },
  {
    id: "a2",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Correa de malla gris 2.0 cm × 120 cm",
    price: 29.9,
    oldPrice: null,
    image: img("accessories", "8bb3d.png"),
  },
  {
    id: "a3",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Correa retráctil negra L",
    price: 59.9,
    oldPrice: null,
    image: img("accessories", "a0f64.png"),
  },
  {
    id: "a4",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Accesorio de paseo para perros",
    price: 55,
    oldPrice: null,
    image: img("accessories", "06a2c.png"),
  },
  {
    id: "a5",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Collar para paseos diarios",
    price: 25.9,
    oldPrice: null,
    image: img("accessories", "49dfb.png"),
  },
  {
    id: "a6",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Correa resistente para perros",
    price: 49.9,
    oldPrice: null,
    image: img("accessories", "88c37.png"),
  },
  {
    id: "a7",
    cat: "accesorios",
    brand: "Gotoo!",
    name: "Accesorio para paseo cómodo",
    price: 48.9,
    oldPrice: null,
    image: img("accessories", "0a27e.png"),
  },
  {
    id: "a8",
    cat: "accesorios",
    brand: "Petludos",
    name: "Plato para alimento y agua",
    price: 24.9,
    oldPrice: null,
    image: img("accessories", "d96f5.png"),
  },
  {
    id: "a9",
    cat: "accesorios",
    brand: "Petludos",
    name: "Juguete resistente para jugar en casa",
    price: 19.9,
    oldPrice: null,
    image: img("accessories", "be05c.png"),
  },
  {
    id: "a10",
    cat: "accesorios",
    brand: "Petludos",
    name: "Accesorio de uso diario",
    price: 43.9,
    oldPrice: null,
    image: img("accessories", "35b0f.png"),
  },
  // Bienestar
  {
    id: "b1",
    cat: "bienestar",
    brand: "Nina Ottosson",
    name: "Dog Spin 'N' Eat Green",
    price: 139.9,
    oldPrice: null,
    image: img("wellbeing", "4122f.png"),
  },
  {
    id: "b2",
    cat: "bienestar",
    brand: "Sturdy",
    name: "Crocodile Toy — juguete cocodrilo robusto",
    price: 79.9,
    oldPrice: null,
    image: img("wellbeing", "2b351.png"),
  },
  {
    id: "b3",
    cat: "bienestar",
    brand: "Leeby",
    name: "Dog Deluxe Deer Blanket",
    price: 89.9,
    oldPrice: null,
    image: img("wellbeing", "2ed9d.png"),
  },
  {
    id: "b4",
    cat: "bienestar",
    brand: "Petludos",
    name: "Cama cómoda para descansar",
    price: 185,
    oldPrice: null,
    image: img("wellbeing", "de143.png"),
  },
  {
    id: "b5",
    cat: "bienestar",
    brand: "Petludos",
    name: "Juguete de estimulación y enriquecimiento",
    price: 59.9,
    oldPrice: null,
    image: img("wellbeing", "ae427.png"),
  },
  {
    id: "b6",
    cat: "bienestar",
    brand: "Petludos",
    name: "Manta suave para su rincón favorito",
    price: 79.9,
    oldPrice: null,
    image: img("wellbeing", "cc52d.png"),
  },
  {
    id: "b7",
    cat: "bienestar",
    brand: "Petludos",
    name: "Juguete interactivo para perros",
    price: 24.9,
    oldPrice: null,
    image: img("wellbeing", "c29fe.png"),
  },
  {
    id: "b8",
    cat: "bienestar",
    brand: "Petludos",
    name: "Juego de estimulación mental",
    price: 165,
    oldPrice: null,
    image: img("wellbeing", "75fb2.png"),
  },
  {
    id: "b9",
    cat: "bienestar",
    brand: "Petludos",
    name: "Juguete para actividad diaria",
    price: 159.9,
    oldPrice: null,
    image: img("wellbeing", "fcf6e.png"),
  },
  {
    id: "b10",
    cat: "bienestar",
    brand: "Petludos",
    name: "Accesorio para descanso y confort",
    price: 59.9,
    oldPrice: null,
    image: img("wellbeing", "b27f4.png"),
  },
];
let favorites = new Set(
  JSON.parse(localStorage.getItem("petludos-favorites") || "[]"),
);
let cart = JSON.parse(localStorage.getItem("petludos-cart") || "{}");
let currentQuery = "";
const app = document.getElementById("app");
const money = (n) =>
  "S/" +
  Number(n).toLocaleString("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
function currentView() {
  const p = new URLSearchParams(location.search);
  return {
    view: p.get("view") || "inicio",
    cat: p.get("categoria") || "alimentos",
  };
}
function go(view, cat) {
  const p = new URLSearchParams();
  if (view !== "inicio") p.set("view", view);
  if (cat) p.set("categoria", cat);
  history.pushState(
    {},
    "",
    location.pathname + (p.toString() ? "?" + p.toString() : ""),
  );
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function categoryPills(active = 'alimentos') {
  const icons = {
    alimentos: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11h18l-2 8H5l-2-8Z"/><path d="M5 11a7 7 0 0 1 14 0M8 5l-1-2m9 2 1-2"/></svg>`,
    snacks: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8 5 6a2 2 0 0 0-3 3l2 2-1 2a2 2 0 0 0 3 3l2-2 6 6a2 2 0 0 0 3-3l-6-6 2-2a2 2 0 0 0-3-3L7 8Z"/><path d="m9 10 2-2m2 6 2-2"/></svg>`,
    'higiene-salud': `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h4v4h4v4h-4v4h-4v-4H6V7h4V3Z"/><path d="M5 17v4h14v-4"/></svg>`,
    accesorios: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V4Z"/><path d="M11 9v4c0 3 2 5 5 5h2a3 3 0 1 0-3-3"/><circle cx="18" cy="18" r="2"/></svg>`,
    bienestar: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/><path d="M8 13h8"/></svg>`
  };

  return `<div class="category-pills">
    ${categories.filter(c => c.id !== 'favoritos').map(c =>
      `<button class="category-pill ${active === c.id ? 'active' : ''}" data-category="${c.id}">
        <span class="cat-icon">${icons[c.id] || ''}</span><span>${c.name}</span>
      </button>`
    ).join('')}
    <button class="category-pill ${active === 'favoritos' ? 'active' : ''}" data-category="favoritos">
      <span class="cat-icon">♡</span>Favoritos
    </button>
  </div>`;
}
function card(p) {
  const fav = favorites.has(p.id);
  const offer = p.oldPrice && p.oldPrice > p.price;
  return `<article class="product-card">${offer ? '<div class="offer-label">¡EN OFERTA!</div>' : ""}<button class="heart ${fav ? "active" : ""}" data-fav="${p.id}" aria-label="${fav ? "Quitar de" : "Añadir a"} favoritos">${fav ? "♥" : "♡"}</button><div class="product-image"><img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><span class="image-fallback" hidden>Imagen de ${p.brand}<br>${p.name}</span></div><div class="product-info"><b class="brand">${p.brand}</b><p class="product-name">${p.name}</p><p class="price-row">${offer ? `<span class="old-price">${money(p.oldPrice)}</span>` : ""}<span class="price">${money(p.price)}</span></p></div><div class="card-actions"><button class="add-button" data-add="${p.id}">Agregar al carrito</button></div></article>`;
}
function grid(items) {
  return items.length
    ? `<div class="product-grid">${items.map(card).join("")}</div>`
    : `<div class="empty-state"><h3>Aún no tienes productos aquí</h3><p>Guarda tus favoritos o explora nuestras categorías.</p><button class="btn btn-green" data-go="categorias">Explorar productos</button></div>`;
}
function productSection(title, items, link = true, kind = "generic") {
  const chip =
    kind === "food"
      ? '<span class="home-category-chip"><span class="plate-icon" aria-hidden="true">♨</span>Alimentos</span>'
      : kind === "snacks"
        ? '<span class="home-category-chip"><span class="snack-icon" aria-hidden="true">✦</span>Snacks y premios</span>'
        : "";
  return `<section class="section home-products home-products-${kind}"><div class="wrap"><div class="section-heading"><div><h2>${title}</h2>${chip}</div>${link && kind === "generic" ? '<a class="text-link" href="?view=productos" data-go="productos">Ver todos los productos</a>' : ""}</div><div class="home-carousel"><button class="product-arrow left" type="button" aria-label="Productos anteriores">‹</button>${grid(items)}<button class="product-arrow right" type="button" aria-label="Siguientes productos">›</button></div><div class="product-dots" aria-hidden="true"><span class="active"></span><span></span><span></span></div></div></section>`;
}
function newsletter() {
  return `<section class="newsletter"><div class="wrap newsletter-inner"><div><h2>¿Te gustaría recibir nuestras ofertas por email?</h2><p>Suscríbete a nuestro boletín y entérate antes que nadie de nuestros productos, descuentos y promociones especiales. ¡No te pierdas ninguna novedad para consentir a tu mascota!</p></div><form id="newsletterForm"><div class="newsletter-form"><input type="email" required placeholder="Tu correo electrónico" aria-label="Tu correo electrónico"><button class="btn btn-green">¡Quiero recibir ofertas!</button></div><label class="consent"><input type="checkbox" required><span>He leído y acepto la Política de privacidad y autorizo el envío de ofertas y promociones.</span></label></form></div></section>`;
}
function categoryTiles() {
  return `<div class="category-tiles">${categories.map((c) => `<a class="category-tile" href="?view=categoria&categoria=${c.id}" data-open-cat="${c.id}"><div><h3>${c.name}</h3><p>${c.desc}</p></div><span class="tile-arrow">›</span></a>`).join("")}</div>`;
}
function home() {
  const hero = img("home", "8ac5b.png");
  const lifestyle = img("home", "cdce4.png");
  return `<section class="hero"><img class="hero-image" src="${hero}" alt="Banner Petludos"><button class="hero-arrow left" aria-label="Banner anterior">‹</button><button class="hero-arrow right" aria-label="Siguiente banner">›</button><div class="dots"><span class="active"></span><span></span><span></span><span></span></div></section><section class="benefits"><div class="benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M4 10h24v17H4zM2 6h28v5H2zM13 11v16M19 11v16" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M16 6c-7-8-12 2-3 4m3-4c7-8 12 2 3 4" fill="none" stroke="currentColor" stroke-width="2"/></svg></span><div><b>Delivery gratis</b><small>Por compras mayores a S/100</small></div></div><div class="benefit"><span class="benefit-icon" aria-hidden="true"><svg viewBox="0 0 36 32"><path d="M2 6h20v17H2zM22 12h7l5 6v5H22z" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round"/><circle cx="9" cy="25" r="3" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="28" cy="25" r="3" fill="none" stroke="currentColor" stroke-width="2.4"/></svg></span><div><b>Delivery express</b><small>En 2 horas</small></div></div></section><section class="section profile-promo wrap"><div class="profile-promo-image"><img src="${lifestyle}" alt="Perro y gato juntos" loading="lazy"></div><div class="profile-promo-copy"><h2>Crea el perfil de tu mascota</h2><p>Cuéntanos sobre tu mascota y crea su perfil con información como su edad, tamaño, características y necesidades.</p><p>Así podremos mostrarte <strong>productos recomendados especialmente para ella</strong>, ayudándote a encontrar lo que realmente necesita de forma más rápida y sencilla.</p><button class="btn btn-green" data-modal="profile">Crear perfil de mi mascota　›</button></div></section>${productSection(
    "Productos recomendados para Apolo",
    products.filter((p) => ["f1", "f2", "f3", "f4"].includes(p.id)),
    false,
    "food",
  )}${productSection("Snacks y premios", products.filter((p) => p.cat === "snacks").slice(0, 3), false, "snacks")}<section class="section"><div class="wrap"><div class="section-heading"><div><h2>Encuentra lo que necesita</h2><p>Explora las categorías y descubre productos seleccionados para tu compañero.</p></div><a class="text-link" href="?view=categorias" data-go="categorias">Ver todas las categorías</a></div>${categoryTiles()}</div></section>${newsletter()}`;
}
function categoriesPage() {
  return `<div class="wrap page-top"><div class="breadcrumbs"><a href="index.html" data-go="inicio">Inicio</a>　›　Productos</div><h1 class="page-title">Productos para tu mascota</h1><p class="page-desc">Explora nuestras categorías y encuentra productos seleccionados para Apolo. Cada recomendación considera las características y necesidades registradas en su perfil.</p></div><section class="section"><div class="wrap">${categoryTiles()}</div></section>${newsletter()}`;
}
function catalog(cat = "alimentos", promos = false, search = "") {
  const c = categories.find((x) => x.id === cat) || categories[0];
  let list = products.filter((p) =>
    cat === "favoritos" ? favorites.has(p.id) : p.cat === cat,
  );
  if (promos) list = products.filter((p) => p.oldPrice && p.oldPrice > p.price);
  if (search)
    list = list.filter((p) =>
      (p.name + " " + p.brand + " " + p.cat)
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  return `<div class="wrap page-top"><div class="breadcrumbs"><a href="index.html" data-go="inicio">Inicio</a>　›　<a href="?view=categorias" data-go="categorias">Productos</a>　›　${promos ? "Promociones" : c.name}</div><h1 class="page-title">${promos ? "Promociones" : cat === "favoritos" ? "Tus productos favoritos" : "Productos recomendados para Apolo"}</h1><p class="page-desc">Según la información y las características que registraste al crear el perfil de tu mascota, seleccionamos estos productos recomendados para sus necesidades. Explora las opciones y encuentra lo que mejor se adapte a ella.</p></div><section class="wrap catalog-layout">${categoryPills(cat)}<div class="catalog-tools"><span class="catalog-count">${list.length} productos ${search ? "encontrados" : ""}</span><label>Ordenar por　<select class="sort-select" id="sortSelect"><option value="recommended">Recomendados</option><option value="price-asc">Precio: menor a mayor</option><option value="price-desc">Precio: mayor a menor</option><option value="name">Nombre</option></select></label></div><div id="catalogGrid">${grid(list)}</div></section>${newsletter()}`;
}
function about() {
  return `<div class="wrap page-top"><div class="breadcrumbs"><a href="index.html" data-go="inicio">Inicio</a>　›　Nosotros</div><div class="about-block"><h1 class="page-title">En Petludos, cada mascota es única.</h1><p>Creemos que encontrar el producto adecuado debería ser sencillo. Por eso, Petludos combina una tienda de productos para mascotas con perfiles personalizados que ayudan a descubrir opciones relevantes según la edad, tamaño, características y necesidades de cada compañero.</p><h2>Compras más simples, recomendaciones más útiles.</h2><p>Guarda el perfil de tu mascota, explora nuestras categorías y encuentra alimentos, premios, productos de higiene, accesorios y opciones de bienestar desde un mismo lugar.</p><button class="btn btn-green" data-modal="profile">Crear perfil de mi mascota</button></div></div>${newsletter()}`;
}
function render() {
  const { view, cat } = currentView();
  document
    .querySelectorAll(".nav-inner a")
    .forEach((a) => a.classList.toggle("active", a.dataset.view === view));
  if (view === "inicio") app.innerHTML = home();
  else if (view === "categorias") app.innerHTML = categoriesPage();
  else if (view === "categoria") app.innerHTML = catalog(cat);
  else if (view === "productos") app.innerHTML = catalog("alimentos");
  else if (view === "promociones") app.innerHTML = catalog("alimentos", true);
  else if (view === "favoritos") app.innerHTML = catalog("favoritos");
  else if (view === "nosotros") app.innerHTML = about();
  else app.innerHTML = home();
  if (
    currentQuery &&
    view !== "inicio" &&
    view !== "categorias" &&
    view !== "nosotros"
  ) {
    const inp = document.getElementById("searchInput");
    if (inp) inp.value = currentQuery;
    const el = app.querySelector(".catalog-count");
    if (el)
      el.textContent = `${filteredProducts(cat, view === "promociones").length} productos encontrados`;
    const gridEl = app.querySelector("#catalogGrid");
    if (gridEl)
      gridEl.innerHTML = grid(filteredProducts(cat, view === "promociones"));
  }
  updateCartCount();
}
function filteredProducts(cat, promos = false) {
  let list = products.filter((p) =>
    promos
      ? p.oldPrice && p.oldPrice > p.price
      : cat === "favoritos"
        ? favorites.has(p.id)
        : p.cat === cat,
  );
  if (currentQuery)
    list = list.filter((p) =>
      (p.name + " " + p.brand)
        .toLowerCase()
        .includes(currentQuery.toLowerCase()),
    );
  return list;
}
function updateCartCount() {
  document.getElementById("cartCount").textContent = Object.values(cart).reduce(
    (a, b) => a + b,
    0,
  );
}
function persist() {
  localStorage.setItem("petludos-favorites", JSON.stringify([...favorites]));
  localStorage.setItem("petludos-cart", JSON.stringify(cart));
  updateCartCount();
}
function openModal(content) {
  document.getElementById("modalContent").innerHTML = content;
  document.getElementById("modalBackdrop").hidden = false;
}
function closeModal() {
  document.getElementById("modalBackdrop").hidden = true;
}
function cartModal() {
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  const total = entries.reduce(
    (sum, [id, q]) => sum + (products.find((p) => p.id === id)?.price || 0) * q,
    0,
  );
  return `<h2 id="modalTitle">Tu carrito</h2>${
    entries.length
      ? `<div class="cart-list">${entries
          .map(([id, q]) => {
            const p = products.find((x) => x.id === id);
            return `<div class="cart-line"><div><b>${p.brand}</b><small>${p.name}</small><small>${q} × ${money(p.price)}</small></div><button class="btn" data-remove="${id}" style="padding:5px 10px;background:#f5e5e5">Quitar</button></div>`;
          })
          .join(
            "",
          )}</div><div class="cart-total"><span>Total</span><span>${money(total)}</span></div><button class="btn btn-green" id="checkoutButton">Continuar compra</button>`
      : `<p>Tu carrito está vacío. Explora los productos recomendados para Apolo.</p><button class="btn btn-green" data-go="productos">Ver productos</button>`
  }`;
}
function profileModal() {
  return `<h2 id="modalTitle">Perfil de tu mascota</h2><p>Personaliza las recomendaciones de Petludos con la información de tu compañero.</p><form id="petForm"><label for="petName">Nombre</label><input id="petName" value="Apolo" required><label for="petType">Tipo de mascota</label><select id="petType"><option>Perro</option><option>Gato</option><option>Otro</option></select><label for="petAge">Edad</label><select id="petAge"><option>Cachorro / gatito</option><option selected>Adulto</option><option>Adulto mayor</option></select><label for="petSize">Tamaño</label><select id="petSize"><option>Pequeño</option><option selected>Mediano</option><option>Grande</option></select><label for="petNeeds">Características o necesidades</label><textarea id="petNeeds" rows="3" placeholder="Ej. piel sensible, movilidad reducida, alimentación especial"></textarea><button class="btn btn-green">Guardar perfil</button></form>`;
}
document.addEventListener("click", (e) => {
  const t = e.target.closest("button,a");
  if (!t) return;
  if (t.dataset.go) {
    e.preventDefault();
    go(t.dataset.go);
    return;
  }
  if (t.dataset.openCat) {
    e.preventDefault();
    go("categoria", t.dataset.openCat);
    return;
  }
  if (t.dataset.category) {
    go("categoria", t.dataset.category);
    return;
  }
  if (t.dataset.fav) {
    const id = t.dataset.fav;
    favorites.has(id) ? favorites.delete(id) : favorites.add(id);
    persist();
    render();
    return;
  }
  if (t.dataset.add) {
    cart[t.dataset.add] = (cart[t.dataset.add] || 0) + 1;
    persist();
    t.textContent = "Añadido ✓";
    setTimeout(() => {
      if (t.isConnected) t.textContent = "Agregar al carrito";
    }, 1000);
    return;
  }
  if (t.dataset.modal === "profile") {
    openModal(profileModal());
    return;
  }
  if (t.id === "cartButton") {
    openModal(cartModal());
    return;
  }
  if (
    t.id === "profileButton" ||
    t.id === "profileButton2" ||
    t.id === "footerProfile"
  ) {
    if (t.id === "footerProfile") e.preventDefault();
    openModal(profileModal());
    return;
  }
  if (t.id === "modalClose") {
    closeModal();
    return;
  }
  if (t.dataset.remove) {
    delete cart[t.dataset.remove];
    persist();
    openModal(cartModal());
    return;
  }
  if (t.id === "checkoutButton") {
    openModal(
      '<h2 id="modalTitle">¡Gracias por tu interés!</h2><p>Esta versión es una demostración visual de la tienda. El pago y la confirmación de pedidos todavía no están conectados a una pasarela real.</p>',
    );
    return;
  }
  if (t.classList.contains("hero-arrow")) {
    const dots = app.querySelectorAll(".hero .dots span");
    const active = Array.from(dots).findIndex((d) =>
      d.classList.contains("active"),
    );
    const next = t.classList.contains("right")
      ? (active + 1) % dots.length
      : (active - 1 + dots.length) % dots.length;
    dots.forEach((d, i) => d.classList.toggle("active", i === next));
  }
});
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", (e) => {
  if (e.target.id === "modalBackdrop") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.getElementById("searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  currentQuery = document.getElementById("searchInput").value.trim();
  go("productos");
  const list = filteredProducts("alimentos");
  const gridEl = document.getElementById("catalogGrid");
  if (gridEl) gridEl.innerHTML = grid(list);
  const count = app.querySelector(".catalog-count");
  if (count) count.textContent = `${list.length} productos encontrados`;
});
document.getElementById("searchInput").addEventListener("change", () => {
  currentQuery = document.getElementById("searchInput").value.trim();
  if (currentQuery) {
    go("productos");
    const list = products.filter((p) =>
      (p.name + " " + p.brand)
        .toLowerCase()
        .includes(currentQuery.toLowerCase()),
    );
    const gridEl = document.getElementById("catalogGrid");
    if (gridEl) gridEl.innerHTML = grid(list);
    const count = app.querySelector(".catalog-count");
    if (count) count.textContent = `${list.length} productos encontrados`;
  }
});
app.addEventListener("change", (e) => {
  if (e.target.id === "sortSelect") {
    const { cat, view } = currentView();
    let list = filteredProducts(cat, view === "promociones");
    if (e.target.value === "price-asc") list.sort((a, b) => a.price - b.price);
    if (e.target.value === "price-desc") list.sort((a, b) => b.price - a.price);
    if (e.target.value === "name")
      list.sort((a, b) => a.name.localeCompare(b.name));
    const gridEl = document.getElementById("catalogGrid");
    if (gridEl) gridEl.innerHTML = grid(list);
  }
});
app.addEventListener("submit", (e) => {
  if (e.target.id === "newsletterForm") {
    e.preventDefault();
    openModal(
      '<h2 id="modalTitle">¡Ya estás en la lista!</h2><p>Tu correo quedó registrado en esta demostración. Gracias por seguir las novedades de Petludos.</p>',
    );
  }
  if (e.target.id === "petForm") {
    e.preventDefault();
    const name = document.getElementById("petName").value.trim() || "Apolo";
    document.querySelector(".pet-profile span:nth-child(2)").textContent = name;
    closeModal();
    openModal(
      `<h2 id="modalTitle">Perfil guardado</h2><p>Las recomendaciones se mostrarán para <strong>${name.replace(/[<>&"']/g, "")}</strong>. Ya puedes seguir explorando Petludos.</p><button class="btn btn-green" id="modalCloseDone">Continuar</button>`,
    );
    document
      .getElementById("modalCloseDone")
      .addEventListener("click", closeModal);
  }
});
window.addEventListener("popstate", render);
render();
