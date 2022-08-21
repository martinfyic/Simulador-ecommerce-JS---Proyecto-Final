//Renderizado de productos Modern Tayloring
const product = async () => {
    try {
        const res = await fetch(`./JSON/productos.json`);
        const productos = await res.json();
        localStorage.setItem("productos", JSON.stringify(productos));
        let contenidoCard = "";
        for (let producto of productos) {
            if (producto.categoria == 1) {
                contenidoCard += `
                <div class="col-md-6 col-xl-3">
                    <div class="card border-0 p-5">
                        <img src="${producto.imagen}" class="card-img-top" alt="">
                        <div class="card-body d-flex align-items-center flex-column justify-content-around">
                        <h5 class="fs-6">${producto.nombre}</h5>
                        <p class="card-text text-secondary">$U ${producto.precio}</p>
                        <a class="btn text-dark fw-bold border-0" title="Agregar al carrito" onclick="agregarAlCarrito(${producto.id})">Agregar</a>
                        </div>
                    </div>
                </div>
                `;
            }
        }

        document.getElementById("contenedor_cards").innerHTML = contenidoCard;
    } catch (error) {
        console.log(error);
    }
};

// render heros
async function renderHeros() {
    const herohtml = document.getElementById("contenedor_hero");
    const res = await fetch(`./JSON/heros.json`);
    const respuesta = await res.json();
    respuesta.forEach((hero) => {
        let div = document.createElement("div");
        div.className = "heros";
        div.innerHTML = `
                <section class="container py-5">
                <div class="row">
                <picture class="col d-flex justify-content-center">
                    <img src="${hero.imagen}" alt="" width="90%">
                </picture>
                </div>
                </section>
                `;
        herohtml.appendChild(div);
    });
}

//render Retro Streetwear
const dibujarProductosRetro = async () => {
    try {
        const res = await fetch(`./JSON/productos.json`);
        const productos = await res.json();
        let contenidoCardHero = "";
        for (let producto of productos) {
            if (producto.categoria == 2) {
                contenidoCardHero += `
                <div class="col-md-6 col-xl-3">
                    <div class="card border-0 p-5">
                        <img src="${producto.imagen}" class="card-img-top" alt="">
                        <div class="card-body d-flex align-items-center flex-column justify-content-around">
                        <h5 class="fs-6">${producto.nombre}</h5>
                        <p class="card-text text-secondary">$U ${producto.precio}</p>
                        <a class="btn text-dark fw-bold border-0" title="Agregar al carrito" onclick="agregarAlCarrito(${producto.id})">Agregar</a>
                        </div>
                    </div>
                </div>
                `;
            }
        }

        document.getElementById("contenedor_cards_retro").innerHTML =
            contenidoCardHero;
    } catch (error) {
        console.log(error);
    }
};

actualizarBtnCarrito();
product();
renderHeros();
dibujarProductosRetro();
