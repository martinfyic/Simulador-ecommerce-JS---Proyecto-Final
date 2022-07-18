const heros = [
    {imagen: "./img/hero_4.jpeg"},
    {imagen: "./img/hero_5.jpeg"},
    {imagen: "./img/hero_6.jpeg"},
]

const herohtml = document.getElementById("contenedor_hero");

heros.forEach((hero) =>{
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
})