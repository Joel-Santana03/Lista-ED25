import { PilhaEncadeada } from '../../src/Lista/Q1';

describe('Q1 - PilhaEncadeada', () => {
  let pilha;

  beforeEach(() => {
    pilha = new PilhaEncadeada();
  });

  test('empilha e desempilha corretamente', () => {
    pilha.empilhar(1);
    pilha.empilhar(2);
    pilha.empilhar(3);
    expect(pilha.desempilhar()).toBe(3);
    expect(pilha.desempilhar()).toBe(2);
    expect(pilha.desempilhar()).toBe(1);
  });

  test('verifica se pilha está vazia', () => {
    expect(pilha.estaVazia()).toBe(true);
    pilha.empilhar(10);
    expect(pilha.estaVazia()).toBe(false);
  });

  test('verifica topo da pilha', () => {
    pilha.empilhar(7);
    expect(pilha.verTopo()).toBe(7);
    pilha.empilhar(9);
    expect(pilha.verTopo()).toBe(9);
  });

  test('lança erro ao desempilhar pilha vazia', () => {
    expect(() => pilha.desempilhar()).toThrow('Pilha vazia');
  });

  test('tamanho da pilha após operações', () => {
    expect(pilha.tamanhoAtual()).toBe(0);
    pilha.empilhar(1);
    pilha.empilhar(2);
    expect(pilha.tamanhoAtual()).toBe(2);
    pilha.desempilhar();
    expect(pilha.tamanhoAtual()).toBe(1);
  });
});
