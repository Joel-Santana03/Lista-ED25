import { intercalarFilas } from '../../src/Fila/Q4.js';

describe('Q4 - intercalarFilas', () => {
  let fila1;
  let fila2;

  beforeEach(() => {
    fila1 = [1, 3, 5];
    fila2 = [2, 4, 6];
  });

  test('intercala duas filas de mesmo tamanho', () => {
    expect(intercalarFilas(fila1, fila2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('intercala com fila1 maior', () => {
    fila1 = [1, 3, 5, 7];
    fila2 = [2, 4];
    expect(intercalarFilas(fila1, fila2)).toEqual([1, 2, 3, 4, 5, 7]);
  });

  test('intercala com fila2 maior', () => {
    fila1 = [1, 3];
    fila2 = [2, 4, 6, 8];
    expect(intercalarFilas(fila1, fila2)).toEqual([1, 2, 3, 4, 6, 8]);
  });

  test('intercala com uma fila vazia', () => {
    fila1 = [];
    fila2 = [2, 4, 6];
    expect(intercalarFilas(fila1, fila2)).toEqual([2, 4, 6]);
  });

  test('intercala duas filas vazias', () => {
    fila1 = [];
    fila2 = [];
    expect(intercalarFilas(fila1, fila2)).toEqual([]);
  });
});
