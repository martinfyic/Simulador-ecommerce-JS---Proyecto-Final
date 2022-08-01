//Renderizado de productos Modern Tayloring
function dibujarProductos() {
    let productos = retornarProdLocalS();
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
}

// render heros
const herohtml = document.getElementById("contenedor_hero");

fetch(`./JSON/heros.json`)
    .then((res) => res.json())
    .then((respuesta) => {
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
    })

//Renderizado de productos Retro StreetWear
function dibujarProductosRetro() {
    let productos = retornarProdLocalS();
    let contenidoCard = "";

    for (let producto of productos) {
        if (producto.categoria == 2) {
            contenidoCard += `
            <div class="col-md-6 col-xl-3">
                <div class="card border-0 p-5">
                    <img src="${producto.imagen}" class="card-img-top" alt="">
                    <div class="card-body d-flex align-items-center flex-column justify-content-around">
                    <h5 class="fs-6">${producto.nombre}</h5>
                    <p class="card-text text-secondary">$U ${producto.precio}</p>
                    <a id="btn_agregarAlCarrito${producto.id}" class="btn text-dark fw-bold border-0" title="Agregar al carrito" onclick="agregarAlCarrito(${producto.id})">Agregar</a>
                    </div>
                </div>
            </div>
            `;
        }
    }

    document.getElementById("contenedor_cards_retro").innerHTML = contenidoCard;
}



actualizarBtnCarrito();
dibujarProductos();
dibujarProductosRetro();