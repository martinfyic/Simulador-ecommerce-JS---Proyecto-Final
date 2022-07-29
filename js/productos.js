fetch( `./JSON/productos.json` )
    .then( (res) => res.json() )
    .then((productos) => {
        localStorage.setItem("productos", JSON.stringify(productos));
    })


function retornarProdLocalS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
};

function buscarProd(id) {
    let productos = retornarProdLocalS();
    return productos.find(x => x.id == id); 
}