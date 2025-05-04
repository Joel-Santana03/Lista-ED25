import { construirHeapMaximoPassoAPasso } from '../../src/Heap/Q2';

describe('Q2 - construirHeapMaximoPassoAPasso', () => {
  let resultado;

  beforeEach(() => {
    const seq = [44, 98, 78, 1, 67, 30];
    resultado = construirHeapMaximoPassoAPasso(seq);
  });

  test('registra corretamente as trocas na construção do heap máximo', () => {
    // Esperamos pelo menos algumas trocas
    expect(resultado.length).toBeGreaterThan(0);
    // Primeira troca esperada: 44 <-> 98
    expect(resultado[0]).toEqual([98, 44]);
  });

  test('último estado registrado deve refletir troca final', () => {
    const final = resultado[resultado.length - 1];
    expect(Array.isArray(final)).toBe(true);
    expect(final.length).toBeLessThanOrEqual(6); // tamanho máximo do heap
  });
});
