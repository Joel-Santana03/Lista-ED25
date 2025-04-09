import { PilhaDePratos } from '../../src/Pilha/Q8';

describe('Q8 - PilhaDePratos', () => {
  let pilhas;

  beforeEach(() => {
    pilhas = new PilhaDePratos(3);
  });

  test('empilha cria nova pilha ao atingir capacidade', () => {
    pilhas.empilha(5);
    pilhas.empilha(10);
    pilhas.empilha(15);
    pilhas.empilha(20); // Deve criar nova pilha

    expect(pilhas.pilhas.length).toBe(2);
    expect(pilhas.pilhas[0]).toEqual([5, 10, 15]);
    expect(pilhas.pilhas[1]).toEqual([20]);
  });

  test('desempilha remove da última pilha', () => {
    pilhas.empilha(1);
    pilhas.empilha(2);
    pilhas.empilha(3);
    pilhas.empilha(4); // nova pilha

    expect(pilhas.desempilha()).toBe(4);
    expect(pilhas.desempilha()).toBe(3);
    expect(pilhas.pilhas.length).toBe(1);
  });

  test('desempilha de estrutura vazia retorna null', () => {
    expect(pilhas.desempilha()).toBe(null);
  });
});
