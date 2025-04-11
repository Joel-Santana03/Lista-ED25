import { Deque } from '../../src/Fila/Q5.js';

describe('Q5 - Deque', () => {
  let deque;

  beforeEach(() => {
    deque = new Deque();
  });

  test('inserir e remover do início', () => {
    deque.inserirInicio(10);
    deque.inserirInicio(20);
    expect(deque.removerInicio()).toBe(20);
    expect(deque.removerInicio()).toBe(10);
  });

  test('inserir e remover do fim', () => {
    deque.inserirFim(5);
    deque.inserirFim(15);
    expect(deque.removerFim()).toBe(15);
    expect(deque.removerFim()).toBe(5);
  });

  test('mistura inserção e remoção', () => {
    deque.inserirInicio(1);
    deque.inserirFim(2);
    deque.inserirInicio(3);
    expect(deque.listar()).toEqual([3, 1, 2]);
    expect(deque.removerFim()).toBe(2);
    expect(deque.removerInicio()).toBe(3);
  });

  test('lança erro ao remover do início de Deque vazio', () => {
    expect(() => deque.removerInicio()).toThrow('Deque vazio');
  });

  test('lança erro ao remover do fim de Deque vazio', () => {
    expect(() => deque.removerFim()).toThrow('Deque vazio');
  });
});
