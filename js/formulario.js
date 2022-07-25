class DatosForm {
    constructor(mail, nombre, telefono, direccion) {
        this.mailform = mail;
        this.nombreform = nombre;
        this.telefonoform = telefono;
        this.direccionform = direccion;
    }
}

//Terminar compra
function comprar() {
    Swal.fire({
        title: 'Finalizar la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#000000',
        cancelButtonColor: '#d3d3d4',
        confirmButtonText: 'Pagar!'
    }).then((result) => {
        if (result.isConfirmed) {
            let mail = document.getElementById("Input_email").value;
            let nombre = document.getElementById("Input_nombre").value;
            let telefono = document.getElementById("input-phone").value;
            let direccion = document.getElementById("Input_dire").value;
            let tarjetaDeCredito = document.getElementById("Input_tarjeta").value;
            let divMail = document.getElementById("mailError");
            let divNombre = document.getElementById("nombreError");
            let divTel = document.getElementById("telError");
            let divDire = document.getElementById("direError");
            let divNroTc = document.getElementById("tcVacia");

            if (mail == "") {
                divMail.innerHTML = `<p class="text-center fs-6 text text-danger"> Debes completar todos los campo </p>`;
                return false;
            } else {
                divMail.innerHTML = "";
            }
            if (nombre == "") {
                divNombre.innerHTML = `<p class="text-center fs-6 text text-danger"> Debes completar todos los campo </p>`;
                return false;
            } else {
                divNombre.innerHTML = "";
            }
            if (telefono == "") {
                divTel.innerHTML = `<p class="text-center fs-6 text text-danger"> Debes completar todos los campo </p>`;
                return false;
            } else {
                divTel.innerHTML = "";
            }
            if (direccion == "") {
                divDire.innerHTML = `<p class="text-center fs-6 text text-danger"> Debes completar todos los campo </p>`;
                return false;
            } else {
                divDire.innerHTML = "";
            }
            if (tarjetaDeCredito == "") {
                divNroTc.innerHTML = `<p class="text-center fs-6 text text-danger"> Debes completar todos los campo </p>`;
                return false;
            } else {
                divNroTc.innerHTML = "";
            }
            if (mail !== "" || nombre !== "" || telefono !== "" || direccion !== "" || tarjetaDeCredito !== "" || tarjetaDeCredito !== "unknown") {
                let usuario = new DatosForm(mail, nombre, telefono, direccion);
                let {
                    mailform,
                    nombreform,
                    telefonoform,
                    direccionform
                } = usuario;
                document.getElementById("Input_email").value = "";
                document.getElementById("Input_nombre").value = "";
                document.getElementById("input-phone").value = "";
                document.getElementById("Input_dire").value = "";
                document.getElementById("Input_tarjeta").value = "";
                localStorage.removeItem("carrito");
                actualizarBtnCarrito();
                graciasCompra()
                let formulario = document.getElementById("datos-formulario");
                formulario.innerHTML = "";
                formulario.innerHTML = `<p class="text-center fs-4 mt-5">Gracias por tu compra ${nombreform}! Entregaremos tu pedido a la dirección ${direccionform} en las próximas 48hs, te anviamos todos los detalles al correo ${mailform} </p>`;
                setTimeout(() => {
                    window.location.href = "./index.html"
                }, 8000)
            }
        }
    })
}


//validacion nro tarjeta con Cleave.js
let validacionTC = new Cleave(`#Input_tarjeta`, {
    creditCard: true,
    delimiter: ` - `,
    onCreditCardTypeChanged: function (numeroTc) {
        (numeroTc === `amex`) ? document.querySelector(`.fa-cc-amex`).classList.add(`tcActiva`): document.querySelector(`.fa-cc-amex`).classList.remove(`tcActiva`);
        (numeroTc === `mastercard`) ? document.querySelector(`.fa-cc-mastercard`).classList.add(`tcActiva`): document.querySelector(`.fa-cc-mastercard`).classList.remove(`tcActiva`);
        (numeroTc === `visa`) ? document.querySelector(`.fa-cc-visa`).classList.add(`tcActiva`): document.querySelector(`.fa-cc-visa`).classList.remove(`tcActiva`);
        (numeroTc === `unknown`) ? document.getElementById("error_tc").innerHTML = `<p class="text-center fs-6 text text-danger"> La tarjeta ingresada no es correcta</p>`: document.getElementById("error_tc").innerHTML = ` `;
    }
})

//Validacion nro telefono UY con Cleave.js
let validacionTel = new Cleave(`#input-phone`, {
    phone: true,
    phoneRegionCode: `UY`,
});

// validacion campos vacios en el formulario


actualizarBtnCarrito();