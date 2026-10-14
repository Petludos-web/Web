const ASSET =
  "https://www.figma.com/api/mcp/asset/852e49f5-66b5-4ba2-bc1d-1d17df84c610";
const cats = [
  {
    id: "alimentos",
    name: "Alimentos",
    icon: "🥣",
    desc: "Encuentra la alimentación adecuada para su etapa y necesidades.",
  },
  {
    id: "snacks",
    name: "Snacks y premios",
    icon: "🦴",
    desc: "Premios para consentir, entrenar y compartir momentos.",
  },
  {
    id: "higiene-salud",
    name: "Higiene y salud",
    icon: "🩺",
    desc: "Productos para cuidar su higiene y bienestar diario.",
  },
  {
    id: "accesorios",
    name: "Accesorios",
    icon: "🦮",
    desc: "Todo lo que necesita para acompañarte en cada aventura.",
  },
  {
    id: "bienestar",
    name: "Bienestar",
    icon: "🏡",
    desc: "Ideas para que se sienta cómodo, activo y feliz.",
  },
  {
    id: "favoritos",
    name: "Favoritos",
    icon: "♡",
    desc: "Tus productos guardados en un solo lugar.",
  },
];
const products = [
  {
    cat: "alimentos",
    brand: "Ricocan",
    name: "Ricocan Cordero y Cereales Adultos Razas Medianas y Grandes 15 kg",
    price: "S/ 140.00",
    oldPrice: "S/ 180.00",
    image: `${ASSET}/80d20.png`,
  },
  {
    cat: "alimentos",
    brand: "Canbo Balance",
    name: "Canbo Dog Food Adultos Pollo Razas Medianas y Grandes 15 kg",
    price: "S/ 129.00",
    oldPrice: "S/ 159.00",
    image: `${ASSET}/48173.png`,
  },
  {
    cat: "alimentos",
    brand: "Canbo",
    name: "Canbo alimento para perros adultos",
    price: "S/ 220.00",
    oldPrice: "S/ 250.00",
    image: `${ASSET}/6c97d.png`,
  },
  {
    cat: "alimentos",
    brand: "Pro Plan",
    name: "Pro Plan Optiderma Sensitive Skin Razas Medianas y Grandes 12 kg",
    price: "S/ 284.00",
    oldPrice: "S/ 350.00",
    image: `${ASSET}/6c97d.png`,
  },
  {
    cat: "snacks",
    brand: "Canbo",
    name: "Biscuits sabor cordero, adultos todas las razas",
    price: "S/ 14.90",
    image: `${ASSET}/40c95.png`,
  },
  {
    cat: "snacks",
    brand: "Yamis",
    name: "Ahumaditos filetitos sabor tocino ahumado para perros adultos",
    price: "S/ 8.00",
    image: `${ASSET}/90873.png`,
  },
  {
    cat: "snacks",
    brand: "Origo",
    name: "Patas de pollo deshidratadas, snack natural para perros, 10 unidades",
    price: "S/ 10.90",
    image: `${ASSET}/66769.png`,
  },
  {
    cat: "higiene-salud",
    brand: "Pet Care",
    name: "Shampoo suave para el cuidado del pelaje",
    price: "S/ 29.90",
    emoji: "🧴",
  },
  {
    cat: "higiene-salud",
    brand: "Vet Life",
    name: "Cuidado diario para una mascota saludable",
    price: "S/ 36.90",
    emoji: "🩺",
  },
  {
    cat: "higiene-salud",
    brand: "Huellitas",
    name: "Toallitas húmedas para limpieza diaria",
    price: "S/ 18.50",
    emoji: "🫧",
  },
  {
    cat: "accesorios",
    brand: "Petludos",
    name: "Correa cómoda para paseos diarios",
    price: "S/ 39.90",
    emoji: "🦮",
  },
  {
    cat: "accesorios",
    brand: "Petludos",
    name: "Plato para alimento y agua",
    price: "S/ 24.90",
    emoji: "🥣",
  },
  {
    cat: "accesorios",
    brand: "Petludos",
    name: "Juguete resistente para jugar en casa",
    price: "S/ 19.90",
    emoji: "🎾",
  },
  {
    cat: "bienestar",
    brand: "Petludos",
    name: "Cama acolchada para descansar cómodamente",
    price: "S/ 89.90",
    emoji: "🛏️",
  },
  {
    cat: "bienestar",
    brand: "Petludos",
    name: "Juguete de estimulación y enriquecimiento",
    price: "S/ 32.90",
    emoji: "🧩",
  },
  {
    cat: "bienestar",
    brand: "Petludos",
    name: "Manta suave para su rincón favorito",
    price: "S/ 44.90",
    emoji: "🧸",
  },
];
const app = document.querySelector("#app");
const params = new URLSearchParams(location.search);
let view = params.get("view") || "inicio",
  slug = params.get("categoria") || "alimentos";
let favs = new Set(JSON.parse(localStorage.getItem("petludos-favs") || "[]"));
function go(url) {
  location.href = url;
}
function card(p) {
  const key = p.brand + "|" + p.name;
  const active = favs.has(key);

  return `<article class="product-card">
    ${p.oldPrice ? '<div class="offer-label">¡EN OFERTA!</div>' : ''}
    <button class="heart ${active ? "active" : ""}" data-fav="${encodeURIComponent(key)}" aria-label="${active ? "Quitar de" : "Añadir a"} favoritos">${active ? "♥" : "♡"}</button>
    <div class="product-image">
      ${p.image ? `<img src="${p.image}" alt="${p.brand} ${p.name}" loading="lazy">` : `<span>${p.emoji || "🐾"}</span>`}
    </div>
    <div class="product-info">
      <b class="brand">${p.brand}</b>
      <p class="name">${p.name}</p>
      <p class="price price-row">
        ${p.oldPrice ? `<span class="old-price">${p.oldPrice}</span>` : ''}
        <span>${p.price}</span>
      </p>
    </div>
    <button class="add">Agregar al carrito</button>
  </article>`;
}
function newsletter() {
  return `<section class="newsletter" id="promociones"><div class="newsletter-copy"><h2>¿Te gustaría recibir nuestras ofertas por email?</h2><p>Suscríbete a nuestro boletín y entérate antes que nadie de nuestros productos, descuentos y promociones especiales. ¡No te pierdas ninguna novedad para consentir a tu mascota!</p><form id="newsform"><input type="email" placeholder="Email" aria-label="Email" required><button class="newsletter-button">¡Quiero recibir ofertas!</button><label class="privacy"><input type="checkbox" required>He leído y acepto la <b>Política de privacidad</b> y autorizo el envío de ofertas y promociones personalizadas para mi mascota.</label></form></div><img class="newsletter-image" src="${ASSET}/ce014.png" alt="Perro y gato en casa" loading="lazy"></section>`;
}
function home() {
  const food = products.filter((p) => p.cat === "alimentos").slice(0, 3),
    snacks = products.filter((p) => p.cat === "snacks");
  return `<section class="hero" aria-label="Promoción principal"><img src="${ASSET}/8ac5b.png" alt="Promoción Petludos para mascotas"><button class="hero-arrow left" aria-label="Banner anterior">‹</button><button class="hero-arrow right" aria-label="Siguiente banner">›</button></section><section class="benefits"><div class="benefit"><span class="benefit-icon">▣</span><div><b>Delivery gratis</b><small>Por compras mayores a S/100</small></div></div><div class="benefit"><span class="benefit-icon">🚚</span><div><b>Delivery express</b><small>En 2 horas</small></div></div></section><section class="profile-section"><img class="profile-image" src="${ASSET}/cdce4.png" alt="Mascota en casa" loading="lazy"><div class="profile-copy"><button class="profile-button" data-go="?view=categorias">Crea el perfil de tu mascota <span>↗</span></button><p>Cuéntanos sobre tu mascota y crea su perfil con información como su edad, tamaño, características y necesidades.</p><p>Así podremos mostrarte <b>productos recomendados especialmente para ella</b>, ayudándote a encontrar lo que realmente necesita de forma más rápida y sencilla.</p></div></section><section class="product-section"><div class="section-heading"><span class="heading-icon">🥣</span><h2>Productos recomendados para Apolo</h2></div><div class="category-chip">Alimentos</div><div class="product-grid home-grid">${food.map(card).join("")}</div><div class="slider-dots"><i></i><i></i><i></i><i></i><i></i></div><div class="section-heading snacks-heading"><span class="heading-icon">🦴</span><h2>Snacks y premios</h2></div><div class="category-chip snack-chip">Snacks y premios</div><div class="product-grid home-grid">${snacks.map(card).join("")}</div><div class="slider-dots"><i></i><i></i><i></i><i></i><i></i></div><div class="center"><button class="more-button" data-go="?view=categorias">Ver más productos</button></div></section>${newsletter()}`;
}
function categoryList() {
  return `<section class="intro"><div class="crumb"><a href="index.html">Inicio</a>　›　Para mi mascota</div><h1>Encuentra lo que tu mascota necesita</h1><p>Explora nuestras categorías y descubre productos para cuidar, alimentar y consentir a tu mascota. Selecciona una categoría para ver todos sus productos.</p></section><section class="category-grid">${cats.map((c) => `<button class="category-card" data-go="?view=categoria&categoria=${c.id}"><span class="category-icon ${['alimentos', 'snacks'].includes(c.id) ? 'monochrome' : ''}">${c.icon}</span><span><h2>${c.name}</h2><p>${c.desc}</p><span class="arrow">Ver productos　→</span></span></button>`).join("")}</section>${newsletter()}`;
}
function categoryPage() {
  const c = cats.find((c) => c.id === slug) || cats[0],
    items =
      slug === "favoritos"
        ? products.filter((p) => favs.has(p.brand + "|" + p.name))
        : products.filter((p) => p.cat === slug);
  return `<section class="intro"><div class="crumb"><a href="index.html">Inicio</a>　›　<a href="?view=categorias">Para mi mascota</a>　›　${c.name}</div><h1>${c.icon} ${c.name}</h1><p>${c.desc} Explora las opciones y encuentra lo que mejor se adapte a ella.</p></section><div class="toolbar"><button class="secondary" data-go="?view=categorias">← Todas las categorías</button><label>Ordenar por　<select id="sort"><option value="default">Recomendados</option><option value="az">Nombre: A-Z</option></select></label></div><section class="layout"><aside class="filters"><h3>Explorar categorías</h3>${cats.map((x) => `<label><input type="checkbox" data-cat="${x.id}" ${x.id === slug ? "checked" : ""}> ${x.name}</label>`).join("")}<hr></aside><div><div class="product-grid" id="products">${items.map(card).join("")}</div>${!items.length ? '<div class="empty">Todavía no tienes productos guardados. Presiona ♡ en un producto para añadirlo a Favoritos.</div>' : ""}</div></section>${newsletter()}`;
}
function render() {
  app.innerHTML =
    view === "categorias"
      ? categoryList()
      : view === "categoria"
        ? categoryPage()
        : home();
  document
    .querySelectorAll("[data-go]")
    .forEach((b) => (b.onclick = () => go(b.dataset.go)));
  document.querySelectorAll("[data-fav]").forEach(
    (b) =>
      (b.onclick = () => {
        const k = decodeURIComponent(b.dataset.fav);
        favs.has(k) ? favs.delete(k) : favs.add(k);
        localStorage.setItem("petludos-favs", JSON.stringify([...favs]));
        render();
      }),
  );
  document.querySelectorAll("[data-cat]").forEach(
    (b) =>
      (b.onchange = () => {
        if (b.checked) go("?view=categoria&categoria=" + b.dataset.cat);
      }),
  );
  document.querySelectorAll(".add").forEach(
    (b) =>
      (b.onclick = () => {
        b.textContent = "¡Agregado!";
        setTimeout(() => (b.textContent = "Agregar al carrito"), 1000);
      }),
  );
  const sort = document.querySelector("#sort");
  if (sort)
    sort.onchange = () => {
      const grid = document.querySelector("#products");
      [...grid.children]
        .sort((a, b) =>
          sort.value === "az"
            ? a
                .querySelector(".name")
                .textContent.localeCompare(b.querySelector(".name").textContent)
            : 0,
        )
        .forEach((x) => grid.appendChild(x));
    };
  const form = document.querySelector("#newsform");
  if (form)
    form.onsubmit = (e) => {
      e.preventDefault();
      alert(
        "¡Gracias por suscribirte! Esta demostración no envía datos a un servidor.",
      );
      form.reset();
    };
}
document.querySelector("#pet").onclick = () => go("?view=categorias");
document.querySelector("#search").onkeydown = (e) => {
  if (e.key === "Enter") {
    const c = cats.find((c) =>
      c.name.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    go(c ? "?view=categoria&categoria=" + c.id : "?view=categorias");
  }
};
render();
