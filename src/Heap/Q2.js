/**
 * Constrói um Heap Máximo a partir de uma sequência de inserções,
 * retornando o estado do heap após cada troca realizada.
 * @param {number[]} valores - Valores a inserir no heap.
 * @returns {number[][]} - Lista de arrays com o estado do heap após cada troca.
 */
export function construirHeapMaximoPassoAPasso(valores) {
    const heap = [];
    const passos = [];
  
    for (const valor of valores) {
      heap.push(valor);
      let i = heap.length - 1;
  
      while (i > 0) {
        const pai = Math.floor((i - 1) / 2);
        if (heap[i] <= heap[pai]) break;
  
        [heap[i], heap[pai]] = [heap[pai], heap[i]];
        passos.push([...heap]); // Salva o estado após a troca
        i = pai;
      }
    }
  
    return passos;
  }
  