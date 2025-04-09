import { DuasPilhas } from '../../src/Pilha/Q2.js';

describe('Q2 - DuasPilhas', () => {
  let pilhas;

  beforeEach(() => {
    pilhas = new DuasPilhas(5);
  });

  test('pilhas iniciam vazias', () => {
    expect(pilhas.estaVaziaA()).toBe(true);
    expect(pilhas.estaVaziaB()).toBe(true);
  });

  test('empilhar e desempilhar valores na pilha A', () => {
    pilhas.empilhaA(1);
    pilhas.empilhaA(2);
    expect(pilhas.desempilhaA()).toBe(2);
    expect(pilhas.desempilhaA()).toBe(1);
  });

  test('empilhar e desempilhar valores na pilha B', () => {
    pilhas.empilhaB(9);
    pilhas.empilhaB(8);
    expect(pilhas.desempilhaB()).toBe(8);
    expect(pilhas.desempilhaB()).toBe(9);
  });

  test('lança erro ao empilhar com pilha cheia', () => {
    pilhas.empilhaA(1); // topoA = 0
    pilhas.empilhaA(2); // topoA = 1
    pilhas.empilhaA(3); // topoA = 2
    pilhas.empilhaB(9); // topoB = 4
    pilhas.empilhaB(8); // topoB = 3
    // Agora topoA = 2 e topoB = 3 → vetor cheio
  
    expect(() => pilhas.empilhaA(100)).toThrow('Pilha cheia');
    expect(() => pilhas.empilhaB(200)).toThrow('Pilha cheia');
  });
  

  test('lança erro ao desempilhar pilha vazia', () => {
    expect(() => pilhas.desempilhaA()).toThrow('Pilha A está vazia');
    expect(() => pilhas.desempilhaB()).toThrow('Pilha B está vazia');
  });
});
