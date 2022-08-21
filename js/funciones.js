function retornarProdLocalS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function buscarProd(id) {
    let productos = retornarProdLocalS();
    return productos.find((x) => x.id == id);
}

function retornarProdCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function guardarProdCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

function actualizarBtnCarrito() {
    let productos = retornarProdCarrito();
    let contenido = `
    <a href="#">
        <img src="./img/imgcarrito.svg" alt="imagen de carrito de compras" width="40px" height="40px">
        <span>0</span>
    </a>
    `;

    let total = 0;

    if (productos.length > 0) {
        for (let producto of productos) {
            total += producto.cantidad;
        }

        contenido = `
            <a title="Cesta de compras" href="./carrito.html">
                <img src="./img/imgcarrito.svg" alt="imagen de carrito de compras" width="40px" height="40px">
                <span>${total}</span>
            </a>
            `;
    }

    document.getElementById("btn_carrito").innerHTML = contenido;
}

function vaciarCarrito() {
    Swal.fire({
        title: "Estas seguro?",
        text: "Se eliminaran todos los articulos!",
        showCancelButton: true,
        confirmButtonColor: "#d3d3d4",
        cancelButtonColor: "#000000",
        confirmButtonText: "Si, eliminar!",
    }).then((result) => {
        if (result.isConfirmed) {
            let timerInterval;
            Swal.fire({
                title: "Eliminando articulos!",
                html: "La cesta se vaciara en <b></b> milisegundos.",
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                }
            });
            localStorage.removeItem("carrito");
            actualizarBtnCarrito();
            dibujarCarrito();
        }
    });
}

function agregarAlCarrito(id) {
    let productos_carrito = retornarProdCarrito();
    let articulo = productos_carrito.findIndex((x) => x.id == id);

    articulo > -1
        ? (productos_carrito[articulo].cantidad += 1)
        : ((producto = buscarProd(id)),
          (producto.cantidad = 1),
          productos_carrito.push(producto));

    guardarProdCarrito(productos_carrito);
    actualizarBtnCarrito();
    itemAgregado();
}

function eliminarDelCarrito(id) {
    let productos_carrito = retornarProdCarrito();
    let prodEliminado = productos_carrito.findIndex((x) => x.id == id);
    productos_carrito[prodEliminado].cantidad -= 1;

    if (productos_carrito[prodEliminado].cantidad == 0) {
        productos_carrito.splice(prodEliminado, 1);
    }

    guardarProdCarrito(productos_carrito);
    actualizarBtnCarrito();
    dibujarCarrito();
    itemEliminado();
}
