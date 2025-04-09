/**
 * Remove duplicatas de uma pilha mantendo a ordem relativa
 * e preservando apenas a primeira ocorrência (do topo para a base).
 * @param {number[]} pilha - Pilha representada como array (topo é o último).
 * @returns {number[]} - Pilha sem duplicatas.
 */
export function removerDuplicatas(pilha) {
    const visto = new Set();
    const resultado = [];
  
    for (let i = pilha.length - 1; i >= 0; i--) {
      const valor = pilha[i];
      if (!visto.has(valor)) {
        resultado.unshift(valor);
        visto.add(valor);
      }
    }
  
    return resultado;
  }
  