import { MinHeap } from '../../src/Heap/Q1.js';

describe('Q1 - MinHeap', () => {
  let heap;

  beforeEach(() => {
    heap = new MinHeap();
  });

  test('insere e mantém heap mínimo', () => {
    heap.inserir(10);
    heap.inserir(5);
    heap.inserir(30);
    heap.inserir(2);
    expect(heap.toArray()[0]).toBe(2);
  });

  test('remover o menor elemento', () => {
    [10, 4, 15, 1].forEach(v => heap.inserir(v));
    expect(heap.removerMin()).toBe(1);
    expect(heap.getMin()).toBe(4);
  });

  test('retorna null se heap vazio ao remover', () => {
    expect(heap.removerMin()).toBeNull();
  });

  test('retorna null se heap vazio ao acessar mínimo', () => {
    expect(heap.getMin()).toBeNull();
  });
});
