import { inverterFila } from '../../src/Fila/Q6';

describe('Q6 - inverterFila', () => {
  let fila;

  beforeEach(() => {
    fila = [1, 2, 3, 4, 5];
  });

  test('inverte fila de 5 elementos', () => {
    expect(inverterFila(fila)).toEqual([5, 4, 3, 2, 1]);
  });

  test('inverte fila de 1 elemento', () => {
    fila = [7];
    expect(inverterFila(fila)).toEqual([7]);
  });

  test('inverte fila vazia', () => {
    fila = [];
    expect(inverterFila(fila)).toEqual([]);
  });

  test('inverte fila com strings', () => {
    fila = ['a', 'b', 'c'];
    expect(inverterFila(fila)).toEqual(['c', 'b', 'a']);
  });
});
