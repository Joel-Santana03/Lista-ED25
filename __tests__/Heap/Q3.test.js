import { removerHeapMaximoPassoAPasso } from '../../src/Heap/Q3';

describe('Q3 - removerHeapMaximoPassoAPasso', () => {
  let resultados;

  beforeEach(() => {
    resultados = removerHeapMaximoPassoAPasso([98, 67, 78, 1, 44, 30]);
  });

  test('cada passo registra o elemento removido', () => {
    expect(resultados[0].removido).toBe(98);
    expect(resultados[1].removido).toBeGreaterThan(0);
  });

  test('trocas devem ser arrays em cada remoção', () => {
    resultados.forEach(remocao => {
      remocao.trocas.forEach(troca => {
        expect(Array.isArray(troca)).toBe(true);
      });
    });
  });

  test('número de remoções deve ser igual ao tamanho inicial', () => {
    expect(resultados.length).toBe(6);
  });
});
