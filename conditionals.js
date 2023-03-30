function calcularColor(numero) {
    if (numero === 1) {
      return "El color es negro";
    } else if (numero === 2) {
      return "El color es blanco";
    } else if (numero === 3) {
      return "El color es azul";
    } else {
      return "El color es verde";
    }
  }
  
  console.log(calcularColor(1)); // muestra "El color es negro"
  console.log(calcularColor(2)); // muestra "El color es blanco"
  console.log(calcularColor(3)); // muestra "El color es azul"
  console.log(calcularColor(4)); // muestra "El color es verde"