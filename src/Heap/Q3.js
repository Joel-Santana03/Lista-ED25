/**
 * Simula a remoção do maior elemento de um Heap Máximo
 * e registra os passos de trocas em cada remoção.
 * @param {number[]} heapOriginal - Heap máximo inicial.
 * @returns {Array<{ removido: number, trocas: number[][] }>} - Cada remoção com seus passos.
 */
export function removerHeapMaximoPassoAPasso(heapOriginal) {
    const heap = [...heapOriginal];
    const resultados = [];
  
    while (heap.length > 0) {
      const trocas = [];
  
      const removido = heap[0];
      const ultimo = heap.pop();
      if (heap.length > 0) {
        heap[0] = ultimo;
        let i = 0;
  
        while (true) {
          let maior = i;
          const esq = 2 * i + 1;
          const dir = 2 * i + 2;
  
          if (esq < heap.length && heap[esq] > heap[maior]) maior = esq;
          if (dir < heap.length && heap[dir] > heap[maior]) maior = dir;
  
          if (maior === i) break;
  
          [heap[i], heap[maior]] = [heap[maior], heap[i]];
          trocas.push([...heap]);
          i = maior;
        }
      }
  
      resultados.push({ removido, trocas });
    }
  
    return resultados;
  }
  