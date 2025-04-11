/**
 * Inverte os elementos de uma fila de forma recursiva.
 * @param {Array} fila - A fila a ser invertida.
 * @returns {Array} - A fila invertida.
 */
export function inverterFila(fila) {
    if (fila.length <= 1) {
      return fila;
    }
  
    const primeiro = fila.shift(); // Remove o primeiro elemento
    inverterFila(fila);            // Chamada recursiva
    fila.push(primeiro);           // Insere o primeiro no final
  
    return fila;
  }
  