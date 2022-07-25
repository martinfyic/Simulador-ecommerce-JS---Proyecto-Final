// modal agregar al carrito
function itemAgregado() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Articulo agregado',
        showConfirmButton: false,
        timer: 1000
    })
}

// modal eliminar del carrito
function itemEliminado() {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Articulo eliminado',
        showConfirmButton: false,
        timer: 1000
    })
}

//modal ir a pagar
function finalizarCompra() {
    Swal.fire({
        title: 'Continuar con la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: '#d3d3d4',
        confirmButtonText: 'Ir a pagar!'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./compra.html"
        }
    })
}

function graciasCompra() {
    Swal.fire({
        title: 'Gracias por tú compra!',
        imageUrl: './img/logo.png',
        imageWidth: 380,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 1100
    })
}