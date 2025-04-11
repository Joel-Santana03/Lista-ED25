import { PilhaComFilas } from '../../src/Fila/Q1.js';

describe('Q1 - PilhaComFilas', () => {
  let pilha;

  beforeEach(() => {
    pilha = new PilhaComFilas();
  });

  test('empilhar e desempilhar', () => {
    pilha.empilha(1);
    pilha.empilha(2);
    pilha.empilha(3);
    expect(pilha.desempilha()).toBe(3);
    expect(pilha.desempilha()).toBe(2);
    expect(pilha.desempilha()).toBe(1);
  });

  test('lança erro ao desempilhar pilha vazia', () => {
    expect(() => pilha.desempilha()).toThrow('Pilha vazia');
  });

  test('verifica topo da pilha', () => {
    pilha.empilha(5);
    expect(pilha.topo()).toBe(5);
    pilha.empilha(10);
    expect(pilha.topo()).toBe(10);
  });

  test('pilha vazia retorna true', () => {
    expect(pilha.estaVazia()).toBe(true);
  });
});
