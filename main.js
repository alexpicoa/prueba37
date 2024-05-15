const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const genero = document.getElementById("sexo");
const pais = document.getElementById("pais");
const telefono = document.getElementById("telefono");
const sectionReseñas = document.querySelector(".hmg_reseñas_container");

const reseñas = [
  {
    titulo: "Excelente",
    reseña: "Me encanto la pagina, muy facil de usar",
  },
  {
    titulo: "Muy buena",
    reseña: "La pagina es muy buena, me ayudo mucho",
  },
  {
    titulo: "Regular",
    reseña: "La pagina es regular, le falta mejorar",
  },
  {
    titulo: "Mala",
    reseña: "La pagina es mala, no me gusto",
  },
  {
    titulo: "Pesima",
    reseña: "La pagina es pesima, no la recomiendo",
  },
  {
    titulo: "Excelente",
    reseña: "Me encanto la pagina, muy facil de usar",
  },
  {
    titulo: "Muy buena",
    reseña: "La pagina es muy buena, me ayudo mucho",
  },
  {
    titulo: "Regular",
    reseña: "La pagina es regular, le falta mejorar",
  },
];

reseñas.forEach((res) => {
  const reseña = `
    <article class="hmg_reseña">
      <h3 class="hmg_reseña_titulo">${res.titulo}</h3>
      <p>${res.reseña}
      </p>
      </article>
  `;
  sectionReseñas.insertAdjacentHTML("beforeend", reseña);
});

const formSubmit = () => {
  const data = {
    correo: correo.value,
    mensaje: mensaje.value,
    genero: genero.value,
    pais: pais.value,
    telefono: telefono.value,
  };

  const alert = `
    <div class="hmg_alerta">
    <button class="close">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007042" class="bi bi-x-lg"
        viewBox="0 0 16 16">
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
      </svg>
    </button>

    <h2 class="hmg_alerta_titulo"> Hola Estimado Usuario!</h2>
    <p class="hmg_alerta_descripcion">
      pronto te responderemos a tu correo: <strong>${data.correo}</strong> 
      <br> Tu mensaje es el siguiente: <strong>${data.mensaje}</strong> 
      <br> tu genero es: <strong>${data.genero}</strong> 
      <br> tu pais es: <strong>${data.pais}<strong/>   
      <br> tu telefono es: <strong>${data.telefono}</strong>
    </p>

    <h3 class="hmg_alerta_titulo"> Gracias!</h3>

  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", alert);

  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    document.querySelector(".hmg_alerta").remove();
  });
  correo.value = "";
  mensaje.value = "";
  genero.value = "";
  pais.value = "";
  telefono.value = "";
};

const createReseña = () => {
  const alertReseña = `
    <div class="hmg_alerta_reseña">
    <button class="close">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#007042" class="bi bi-x-lg"
        viewBox="0 0 16 16">
        <path
          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
      </svg>
    </button>

    <h2 class="hmg_alerta_titulo"> Agrega Una Reseña</h2>
    <div class="input_title">
      <label for="titulo_reseña">Titulo</label>
      <input type="text" id="titulo_reseña">
    </div>
    <div class="input_content">
      <label for="reseña">Reseña</label>
      <textarea name="reseña" id="reseña" cols="40" rows="5"></textarea>
    </div>
    <button class="agregar">Agregar</button>
  </div>
  `;

  document.body.insertAdjacentHTML("beforeend", alertReseña);

  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    document.querySelector(".hmg_alerta_reseña").remove();
  });

  const agregar = document.querySelector(".agregar");
  agregar.addEventListener("click", () => {
    const titulo = document.getElementById("titulo_reseña").value;
    const reseña = document.getElementById("reseña").value;

    reseñas.push({ titulo, reseña });

    document.querySelector(".hmg_alerta_reseña").remove();
    renderReseñas();
  });
};

const renderReseñas = () => {
  sectionReseñas.innerHTML = "";
  reseñas.forEach((res) => {
    const reseña = `
      <article class="hmg_reseña">
        <h3 class="hmg_reseña_titulo">${res.titulo}</h3>
        <p>${res.reseña}
        </p>

      </article>
    `;
    sectionReseñas.insertAdjacentHTML("beforeend", reseña);
  });
};
