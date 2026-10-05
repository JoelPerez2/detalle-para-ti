
const abrirBtn = document.getElementById("abrirBtn");

const inicio = document.getElementById("inicio");

const detalle = document.getElementById("detalle");

const texto = document.getElementById("texto");


const mensaje =
    "Sé que llevamos poco tiempo hablando, " +
    "pero en este poquito tiempo has conseguido ocupar " +
    "un lugar muy especial en mis pensamientos. " +
    "Me gusta cada conversación, cada momento que compartimos " +
    "y la forma en la que poco a poco te he ido conociendo. " +
    "No sé exactamente qué nos depare el futuro, " +
    "pero sí sé que me hace feliz haberte encontrado " +
    "y poder compartir un pedacito de mi tiempo contigo.";


abrirBtn.addEventListener("click", () => {

    inicio.style.opacity = "0";

    setTimeout(() => {

        inicio.style.display = "none";

        detalle.classList.add("activo");

        escribirTexto();

    }, 1200);

});


function escribirTexto() {

    let i = 0;

    texto.innerHTML = "";

    const velocidad = 45;

    function escribir() {

        if (i < mensaje.length) {

            texto.innerHTML += mensaje.charAt(i);

            i++;

            setTimeout(escribir, velocidad);

        }

    }

    escribir();
}

