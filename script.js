const empleado = {
    bruto: 14500,
    hijos: 2,
    pagas: 14,
  };
  
  //Por rango de salario:
  let salarioNeto;
  //Si el empleado gana menos de 12.000 € bruto año aplicar una retención del 0%
  if (empleado.bruto > 0 && empleado.bruto <= 12000) {
      salarioNeto = empleado.bruto * 1;
  //Si el empleado gana menos de 24.000 € bruto año aplicar una reteneción del 8%
  }else if (empleado.bruto > 12000 && empleado.bruto <= 24000) {
      salarioNeto = empleado.bruto * 0.92;
      if(empleado.hijos > 0){
          salarioNeto = empleado.bruto * 0.94;
      }
  //Si el empleado ganas menos de 34.000 € bruto año aplicar una reteneción del 16%
  }else if (empleado.bruto > 24000 && empleado.bruto <= 34000) {
      salarioNeto = empleado.bruto * 0.84;
      if(empleado.hijos > 0){
          salarioNeto = empleado.bruto * 0.86;
      }
  //Si el empleado ganas más de 34.000 € bruto año aplicar una reteneción del 30%
  }else {
      salarioNeto = empleado.bruto * 0.70;
      if(empleado.hijos > 0){
          salarioNeto = empleado.bruto * 0.72;
      }
  }
  //Si el empleado tiene hijos, restarle a la retencion 2 puntos. Con esto sacaríamos el neto anual en nómina.
  //if (empleado.hijos > 0) {
  //}
  //salarioNeto = Math.round(salarioNeto * 100) / 100;
  console.log("Su salario neto/anual corresponde a: " + salarioNeto + "€");

  //Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)
  let salarioMensual = salarioNeto / empleado.pagas;
  let salarioMensualRounded = Math.round(salarioMensual * 100) / 100;
  console.log("Su salario mensual corresponde a: " + salarioMensualRounded + "€");

  console.log("----------------------------------------------------------------------------------------------")

//RENTAS 2021
const empleado21 = {
    bruto21: 12450,
    hijos21: 3,
    pagas21: 12,
  };
  
  //POR RANGO DE SALARIO:
  let salarioNeto21;
  //Hasta 12.450 euros - Tipo aplicable retención: 19,0%
  if (empleado21.bruto21 > 0 && empleado21.bruto21 <= 12450) {
      salarioNeto21 = empleado21.bruto21 * 0.81;
      if(empleado21.hijos21 >= 1 ){
        salarioNeto21 = empleado21.bruto21 * 1;
      }
  //De 12.450 euros a 20.200 euros               : 24,0%
  }else if (empleado21.bruto21 > 12450 && empleado21.bruto21 <= 20200) {
      salarioNeto21 = empleado21.bruto21 * 0.76;
      if(empleado21.hijos21 == 1 && empleado21.bruto21 <= 15947){
        salarioNeto21 = empleado21.bruto21 * 1;
      }
      if(empleado21.hijos21 > 2 && empleado21.bruto21 <= 17100){
        salarioNeto21 = empleado21.bruto21 * 1;
      }
  //De 20.200 euros a 35.200 euros               : 30,0%
  }else if (empleado21.bruto21 > 20200 && empleado21.bruto21 <= 35200) {
      salarioNeto21 = empleado21.bruto21 * 0.70;
  //De 35.200 euros a 60.000 euros               : 37,0%
  }else if (empleado21.bruto21 > 35200 && empleado21.bruto21 <= 60000) {
      salarioNeto21 = empleado21.bruto21 * 0.63;
   //De 60.000 euros a 300.000 euros             : 45,0%
  }else if (empleado21.bruto21 > 60000 && empleado21.bruto21 <= 300000) {
    salarioNeto21 = empleado21.bruto21 * 0.55;
  }else{
   //A partir de 300.000 euros                   : 47,0%   
    salarioNeto21 = empleado21.bruto21 * 0.53;
  }

  //salarioNeto = Math.round(salarioNeto * 100) / 100;
  console.log("Su salario neto/anual 2021 corresponde a: " + salarioNeto21 + "€");

  //Siguiente paso, sacar el neto mensual (si es catorce pagas dividir por catorce, si no por 12)

  let salarioMensual21 = salarioNeto21 / empleado21.pagas21;
  let salarioMensual21Rounded = Math.round(salarioMensual21 * 100) / 100;
  console.log("Su salario mensual 2021 corresponde a: " + salarioMensual21Rounded + "€");

  console.log("----------------------------------------------------------------------------------------------")

 // 1.ª Contribuyente soltero, viudo, divorciado o separado legalmente
// 1 HIJO 15.947 €
// 2 HIJOS O +  17.100 €
