function dibujarCarrito() {
    let productos = retornarProdCarrito();
    let contenidoCard = `<p class="alert alert-dark text-center" role="alert"> La Cesta se encuentra vacia! </p>`;

    if (productos.length > 0) {
        contenidoCard = `<p class="text-end align-middle" title="Eliminar todos los articulos"><a class="btn fw-bold" onclick="vaciarCarrito()">Vaciar Cesta</a></p>
        <div class="table-responsive">
        <table class="table align-middle table-sm"><tbody>`;
        let suma = 0;
        let totalArticulos = 0;

        for (let producto of productos) {
            let precio = producto.precio*producto.cantidad;
            let articulos = producto.cantidad
            contenidoCard += `
            <tr class="align-bottom">
                <td class="align-middle"><img src="${producto.imagen}" width="90px"></td>
                <td class="align-middle">${producto.nombre}</td>
                <td class="align-middle">$U ${producto.precio}</td>
                <td class="align-middle">X ${producto.cantidad}</td>
                <td class="align-middle">$U ${precio}</td>
                <td class="text-end align-middle" title="Eliminar articulo"><a class="btn btn-dark fw-bold border-0" onClick="eliminarDelCarrito(${producto.id})">Eliminar</a></td>
            </tr>`;
            suma += precio;
            totalArticulos += articulos;
        }

        contenidoCard +=`
        <td class="align-middle py-3">&nbsp;</td>
        <td class="align-middle py-3"><strong>Total a Pagar</strong></td>
        <td class="align-middle py-3"><strong>Articulos</strong></td>
        <td class="align-middle py-3"><strong> ${totalArticulos}</strong></td>
        <td class="align-middle py-3"><strong>$U ${suma}</strong></td>
        <td class="text-end align-middle py-3" title="Finalizar compra"><a onClick="finalizarCompra()" class="btn btn-dark fw-bold border-0">Finalizar Compra</a></td>
        `;
        contenidoCard += `</tbody></table></div>`;
    }

    document.getElementById("productos_carrito").innerHTML = contenidoCard;
}

actualizarBtnCarrito();
dibujarCarrito();