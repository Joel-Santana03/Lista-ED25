import { FilaEncadeada } from '../../src/Lista/Q2.js';

describe('Q2 - FilaEncadeada', () => {
  let fila;

  beforeEach(() => {
    fila = new FilaEncadeada();
  });

  test('enfileirar e desenfileirar elementos', () => {
    fila.enfileirar('A');
    fila.enfileirar('B');
    fila.enfileirar('C');
    expect(fila.desenfileirar()).toBe('A');
    expect(fila.desenfileirar()).toBe('B');
    expect(fila.desenfileirar()).toBe('C');
  });

  test('verifica se a fila está vazia', () => {
    expect(fila.estaVazia()).toBe(true);
    fila.enfileirar('X');
    expect(fila.estaVazia()).toBe(false);
  });

  test('ver início da fila', () => {
    fila.enfileirar(10);
    fila.enfileirar(20);
    expect(fila.verInicio()).toBe(10);
  });

  test('lança erro ao desenfileirar fila vazia', () => {
    expect(() => fila.desenfileirar()).toThrow('Fila vazia');
  });

  test('tamanho da fila após operações', () => {
    expect(fila.tamanhoAtual()).toBe(0);
    fila.enfileirar(1);
    fila.enfileirar(2);
    expect(fila.tamanhoAtual()).toBe(2);
    fila.desenfileirar();
    expect(fila.tamanhoAtual()).toBe(1);
  });
});
