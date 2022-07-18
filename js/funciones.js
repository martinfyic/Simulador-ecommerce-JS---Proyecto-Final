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
        <img src="./img/imgcarrito.svg" alt="imagen de carrito de compras" width="60px" height="60px">
        <span>0</span>
    </a>
    `;

    let total = 0;

    if (productos.length > 0) {
        for (let producto of productos){
            total += producto.cantidad;
        }

        contenido = `
            <a href="./carrito.html">
                <img src="./img/imgcarrito.svg" alt="imagen de carrito de compras" width="60px" height="60px">
                <span>${total}</span>
            </a>
            `;
    }

    document.getElementById("btn_carrito").innerHTML = contenido;
}

function vaciarCarrito () {
    localStorage.removeItem("carrito");
    actualizarBtnCarrito();
    dibujarCarrito();
}

function agregarAlCarrito(id) {
    let productos_carrito = retornarProdCarrito();
    let articulo = productos_carrito.findIndex(x => x.id == id);

    if (articulo > -1) {
        productos_carrito[articulo].cantidad += 1;
    } else {
        let producto = buscarProd(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
    }

    guardarProdCarrito(productos_carrito);
    actualizarBtnCarrito();
}

function eliminarDelCarrito(id) {
    let productos_carrito = retornarProdCarrito();
    let prodEliminado = productos_carrito.findIndex(x => x.id == id)
    productos_carrito[prodEliminado].cantidad -= 1;

    if (productos_carrito[prodEliminado].cantidad == 0) {
        productos_carrito.splice(prodEliminado, 1);
    }

    guardarProdCarrito(productos_carrito);
    actualizarBtnCarrito();
    dibujarCarrito();
}