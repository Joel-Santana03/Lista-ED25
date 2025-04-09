import { bemFormado } from '../../src/Pilha/Q5_temp.js';

describe('Q5 - bemFormado', () => {
  test('retorna true para sequência bem-formada com colchetes e parênteses', () => {
    expect(bemFormado('[ ( ) [ ( ) ] ] ( )')).toBe(true);
  });

  test('retorna false para sequência malformada com símbolos trocados', () => {
    expect(bemFormado('( ( ) ]')).toBe(false);
  });

  test('retorna true para string vazia', () => {
    expect(bemFormado('')).toBe(true);
  });

  test('retorna false para fechamento sem abertura', () => {
    expect(bemFormado(')(')).toBe(false);
  });

  test('retorna false para abertura sem fechamento', () => {
    expect(bemFormado('(()')).toBe(false);
  });
});
