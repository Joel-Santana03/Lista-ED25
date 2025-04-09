/**
 * Troca o topo da pilha com a base da pilha.
 * Usa apenas uma pilha auxiliar.
 * @param {Array} pilha - A pilha original (array, onde o topo é o último elemento).
 * @returns {Array} - A pilha modificada.
 */
export function trocaTopoComBase(pilha) {
    if (pilha.length <= 1) return pilha;
  
    const auxiliar = [];
    const topo = pilha.pop();
  
    while (pilha.length > 1) {
      auxiliar.push(pilha.pop());
    }
  
    const base = pilha.pop(); // Agora só resta o elemento da base
  
    pilha.push(topo); // Novo topo vira a base
    while (auxiliar.length > 0) {
      pilha.push(auxiliar.pop());
    }
    pilha.push(base); // Antigo base vira o topo
  
    return pilha;
  }
  