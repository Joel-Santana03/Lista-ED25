/**
 * Verifica ganhadores da Mega-Sena entre os apostadores.
 * @param {number[]} sorteio - Array com 6 dezenas sorteadas.
 * @param {number[][]} apostas - Matriz com as apostas (cada aposta é um array de 6 a 15 dezenas).
 * @returns {{ sena: boolean, quina: boolean }} - Indica se houve ganhador da sena ou quina.
 */
export function verificarGanhadores(sorteio, apostas) {
    const resultado = {
      sena: false,
      quina: false,
    };
  
    const sorteadas = new Set(sorteio);
  
    for (const aposta of apostas) {
      const acertos = aposta.filter(n => sorteadas.has(n)).length;
      if (acertos === 6) resultado.sena = true;
      else if (acertos === 5) resultado.quina = true;
  
      if (resultado.sena && resultado.quina) break; // já encontrou ambos
    }
  
    return resultado;
  }
  