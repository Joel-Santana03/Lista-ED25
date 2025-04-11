/**
 * Verifica se uma string de colchetes e parênteses está bem-formada.
 * @param {string} texto - A string contendo os símbolos.
 * @returns {boolean} - True se estiver bem-formada, false caso contrário.
 */
export function bemFormado(texto) {
    const pilha = [];
    const pares = {
      ')': '(',
      ']': '[',
    };
  
    for (const char of texto) {
      if (char === '(' || char === '[') {
        pilha.push(char);
      } else if (char === ')' || char === ']') {
        if (pilha.pop() !== pares[char]) {
          return false;
        }
      }
    }
  
    return pilha.length === 0;
  }
  