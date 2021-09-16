function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var anosLuz = parseFloat(valor);
    var km = anosLuz * (9460528404879.4).toFixed(2);
    var anosLuzConvertido = document.getElementById("valorConvertido");
    var valorConvertido = km + " KM";
    anosLuzConvertido.innerHTML = valorConvertido;
  }
