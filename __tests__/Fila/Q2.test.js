import { FilaComPilhas } from '../../src/Fila/Q2.js';

describe('Q2 - FilaComPilhas', () => {
  let fila;

  beforeEach(() => {
    fila = new FilaComPilhas();
  });

  test('enfileirar e desenfileirar corretamente', () => {
    fila.enfileira(1);
    fila.enfileira(2);
    fila.enfileira(3);
    expect(fila.desenfileira()).toBe(1);
    expect(fila.desenfileira()).toBe(2);
    expect(fila.desenfileira()).toBe(3);
  });

  test('lança erro ao desenfileirar fila vazia', () => {
    expect(() => fila.desenfileira()).toThrow('Fila vazia');
  });

  test('verifica frente da fila', () => {
    fila.enfileira(10);
    fila.enfileira(20);
    expect(fila.frente()).toBe(10);
    fila.desenfileira();
    expect(fila.frente()).toBe(20);
  });

  test('fila vazia retorna true', () => {
    expect(fila.estaVazia()).toBe(true);
  });
});
