window.onload = function() {
  function cartas() {
    let html = document.getElementById("palo");

    let envio = document.getElementById("Boton");
    envio.addEventListener("click", cartas);

    setTimeout(cartas, 3000);

    let palo = ["♣", "♦ ", "♥", "♠"];
    let palorandom = palo[Math.floor(Math.random() * palo.length)];
    let numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q"];
    let numerorandom = numero[Math.floor(Math.random() * numero.length)];

    html.innerHTML = palorandom;

    document.getElementById("palo2").innerHTML = palorandom;
    document.getElementById("numero").innerHTML = numerorandom;
    if (palorandom == "♥" || palorandom == "♦") {
      document.getElementById("palo").style.color = "red";
      document.getElementById("palo2").style.color = "red";
      document.getElementById("numero").style.color = "red";
    }
  }
  cartas();

  document.getElementById("carta");
  function cambiarMedidas(event) {
    event.preventDefault();
    let ancho = document.getElementById("ancho").value;
    let altura = document.getElementById("Altura").value;
    // Ancho
    document.getElementById("Boton").style.width = ancho + "px";
    document.getElementById("carta").style.width = ancho + "px";
    // Alto
    document.getElementById("Boton").style.height = altura + "px";
    document.getElementById("carta").style.height = altura + "px";
  }
  let cambiar = document.getElementById("cambiar");
  cambiar.addEventListener("click", cambiarMedidas);
};
