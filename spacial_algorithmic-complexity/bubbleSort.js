/**
 * Complejidad Espacial -> O( n + 4 ) -> O(n)
 * A = Complejidad Espacial
 * B = Espacio de entrada
 * Espacio Auxiliar -> A - B -> O(n) - O(4) -> O(n) - O(1) = O(1)
 */
function bubbleSort(arreglo) { // O(n)
  let longitud = arreglo.length; // O(1)
  for (let i = 0; i < longitud; i++) { // O(1)
    for (let j = 0; j < longitud; j++) { // O(1)
      if (arreglo[j] > arreglo[j + 1]) {// No crea espacio
        let temporal = arreglo[j];// O(1)
        arreglo[j] = arreglo[j + 1]; 
        arreglo[j + 1] = temporal;
      }
    }
  }
  return arreglo;
}
