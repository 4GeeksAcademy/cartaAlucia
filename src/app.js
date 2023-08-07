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

  function modifyBoxWidth(input) {
    var box = document.getElementById("carta");
    box.style.width = input.value + "px";
  }

  const myBox = document.querySelector("carta");
  const myInput = document.querySelector("ancho");
  myInput.addEventListener("change", modifyBoxWidth());
  //  => {
  //   myBox.style.width = myInput.value + "px";
  // });
};
