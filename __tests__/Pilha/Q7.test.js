import { removerDuplicatas } from '../../src/Pilha/Q7';

describe('Q7 - removerDuplicatas', () => {
  let pilha;

  beforeEach(() => {
    pilha = [3, 7, 3, 2, 7, 1, 4, 2]; // topo = último = 2
  });

  test('remove duplicatas mantendo a ordem relativa', () => {
    const resultado = removerDuplicatas(pilha);
    expect(resultado).toEqual([3, 7, 2, 1, 4]);
  });

  test('pilha vazia retorna vazia', () => {
    expect(removerDuplicatas([])).toEqual([]);
  });

  test('pilha sem duplicatas retorna igual', () => {
    const entrada = [5, 6, 7];
    expect(removerDuplicatas(entrada)).toEqual([5, 6, 7]);
  });

  test('todas duplicadas retorna apenas uma ocorrência', () => {
    const entrada = [1, 1, 1, 1];
    expect(removerDuplicatas(entrada)).toEqual([1]);
  });
});
