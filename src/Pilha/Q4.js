/**
 * Converte um número decimal para sua representação binária usando uma pilha.
 * @param {number} decimal - Número inteiro positivo.
 * @returns {string} - Representação binária do número.
 */
export function decimalParaBinario(decimal) {
    if (decimal === 0) return '0';
  
    const pilha = [];
    let num = decimal;
  
    while (num > 0) {
      pilha.push(num % 2);
      num = Math.floor(num / 2);
    }
  
    let binario = '';
    while (pilha.length > 0) {
      binario += pilha.pop();
    }
  
    return binario;
  }
  