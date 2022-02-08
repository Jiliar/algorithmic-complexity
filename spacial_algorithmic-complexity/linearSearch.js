/**
 * Complejidad Espacial -> O( n + 1 ) -> O(n)
 * A = Complejidad Espacial
 * B = Espacio de entrada
 * Espacio Auxiliar -> A - B -> O(n) - O(1) -> O(1)
 */
function linearSearch(arreglo, clave) { //O(n) -> arreglo
  for (let indice = 0; indice < arreglo.length; indice++) {  //O(1) -> indice
    if (arreglo[indice] === clave) { //No se crea espacio
      return indice; //No se crea espacio
    }
  }
  return -1; //No se crea espacio
}
