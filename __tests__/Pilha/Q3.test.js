import { trocaTopoComBase } from '../../src/Pilha/Q3';

describe('Q3 - trocaTopoComBase', () => {
  let pilha;

  beforeEach(() => {
    pilha = [1, 2, 3, 4, 5]; // Topo = 5, Base = 1
  });

  test('deve trocar o topo com a base', () => {
    const resultado = trocaTopoComBase([...pilha]);
    expect(resultado).toEqual([5, 2, 3, 4, 1]);
  });

  test('pilha com um elemento não deve ser modificada', () => {
    expect(trocaTopoComBase([7])).toEqual([7]);
  });

  test('pilha vazia deve continuar vazia', () => {
    expect(trocaTopoComBase([])).toEqual([]);
  });
});
