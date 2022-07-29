// modal agregar al carrito
function itemAgregado() {
    Toastify({
        text: "Agregado a la Cesta",
        duration: 2000,
        style: {
            background: "#000000",
            padding: "20px",
        },
    }).showToast();
}

// modal eliminar del carrito
function itemEliminado() {
    Toastify({
        text: "Eliminado de la Cesta",
        duration: 2000,
        style: {
            background: "#000000",
        },
    }).showToast();
}

//modal ir a pagar
function finalizarCompra() {
    Swal.fire({
        title: 'Continuar con la compra?',
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

// agradecimiento
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