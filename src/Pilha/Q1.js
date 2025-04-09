/**
 * Inverte uma string utilizando operações de pilha.
 * @param {string} palavra - A string a ser invertida.
 * @returns {string} - A string invertida.
 */
export function inverte(palavra) {
    const pilha = [];
    for (const letra of palavra) {
      pilha.push(letra);
    }
  
    let invertida = '';
    while (pilha.length > 0) {
      invertida += pilha.pop();
    }
  
    return invertida;
  }
  