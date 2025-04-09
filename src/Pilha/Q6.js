/**
 * Converte uma expressão infixa para notação polonesa reversa (RPN).
 * Suporta operadores: +, -, *, /, ^ e parênteses.
 * @param {string} expressao - A expressão infixa (ex: "(a+b)*c").
 * @returns {string} - A expressão em RPN (ex: "ab+c*").
 */
export function infixaParaRPN(expressao) {
    const precedencia = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3,
    };
  
    const operadores = [];
    let resultado = '';
  
    for (const token of expressao.replace(/\s+/g, '')) {
      if (/[a-zA-Z]/.test(token)) {
        resultado += token;
      } else if (token === '(') {
        operadores.push(token);
      } else if (token === ')') {
        while (operadores.length && operadores[operadores.length - 1] !== '(') {
          resultado += operadores.pop();
        }
        operadores.pop(); // remove '('
      } else if (precedencia[token]) {
        while (
          operadores.length &&
          precedencia[operadores[operadores.length - 1]] >= precedencia[token]
        ) {
          resultado += operadores.pop();
        }
        operadores.push(token);
      }
    }
  
    while (operadores.length) {
      resultado += operadores.pop();
    }
  
    return resultado;
  }
  