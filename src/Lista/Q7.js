/**
 * Resolve o problema de Josephus.
 * @param {number} n - Número de soldados no círculo.
 * @param {number} d - Intervalo de contagem (ex: 3).
 * @returns {{ eliminados: number[], sobrevivente: number }}
 */
export function resolverJosephus(n, d) {
    if (n <= 0 || d <= 0) {
      throw new Error('Valores de N e D devem ser positivos');
    }
  
    const soldados = Array.from({ length: n }, (_, i) => i + 1); // soldados 1...N
    const eliminados = [];
  
    let index = 0;
  
    while (soldados.length > 1) {
      index = (index + d - 1) % soldados.length;
      eliminados.push(soldados.splice(index, 1)[0]);
    }
  
    const sobrevivente = soldados[0];
    return { eliminados, sobrevivente };
  }
  