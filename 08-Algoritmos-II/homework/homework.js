'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
     if(array.length < 1){
      return array;
     }
     
     let pivot  = array[0]; //trampa!! se usa un numero ramdom
     let izq = [];
     let der = [];
     
      for(let i = 1; i < array.length; i++){
        if(array[i] < pivot){
          izq.push(array[i])
        }else{
          der.push(array[i])
        }
      }

      return [].concat(quickSort(izq), pivot ,quickSort(der));


}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2) return array
    const aux = Math.floor(array.length / 2)
    let izq = array.slice(0, aux)
    let der = array.slice(aux, array.length)

    array = [];

    izq = mergeSort(izq);
    der = mergeSort(der);


    while(izq.length && der.length){
      if(izq[0] < der[0]){
        array.push(izq.shift())
      }
      else{
        array.push(der.shift())
  
      }
    }
    array = array.concat(izq, der);

    return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
