/**
 * Intercala os elementos de duas filas.
 * @param {Array} fila1 - Primeira fila (array).
 * @param {Array} fila2 - Segunda fila (array).
 * @returns {Array} - Fila resultante com elementos intercalados.
 */
export function intercalarFilas(fila1, fila2) {
    const resultado = [];
  
    const copiaFila1 = [...fila1];
    const copiaFila2 = [...fila2];
  
    while (copiaFila1.length || copiaFila2.length) {
      if (copiaFila1.length) {
        resultado.push(copiaFila1.shift());
      }
      if (copiaFila2.length) {
        resultado.push(copiaFila2.shift());
      }
    }
  
    return resultado;
  }
  