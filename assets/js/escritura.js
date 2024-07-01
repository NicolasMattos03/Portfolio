function animacion() {
  let textoAnimacion = [
    ["", "N", "i", "c", "o", " ", "M", "a", "t", "t", "o", "s"],
  ];

  let letraContador = -1;
  let posicionArray = 0;

  const contenedorAnimacion = document.querySelector(
    ".contenedor__texto__animacion"
  );

  function pintarTexto() {
    letraContador++;
    contenedorAnimacion.innerHTML +=
      textoAnimacion[posicionArray][letraContador];

    if (letraContador === textoAnimacion[posicionArray].length - 1) {
      clearInterval(intervalo);

      setTimeout(() => {
        intervalo = setInterval(() => {
          contenedorAnimacion.innerHTML = "";
          letraContador--;
          textoAnimacion[posicionArray].pop();
          textoAnimacion[posicionArray].forEach((elemento) => {
            contenedorAnimacion.innerHTML += elemento;
          });

          if (letraContador < 0) {
            clearInterval(intervalo);
            posicionArray++;
            intervalo = setInterval(pintarTexto, 150);

            if (posicionArray > textoAnimacion.length - 1) {
              clearInterval(intervalo);
              posicionArray = 0;
              animacion();
            }
          }
        }, 150);
      }, 1000);
    }
  }
  let intervalo = setInterval(pintarTexto, 150);
}
window.addEventListener("load", animacion);
