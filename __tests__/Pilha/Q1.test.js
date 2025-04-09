import { inverte } from '../../src/Pilha/Q1';

describe('Q1 - Função inverte()', () => {
  let entrada;

  beforeEach(() => {
    entrada = 'ABACAXI';
  });

  test('deve inverter a palavra corretamente', () => {
    const resultado = inverte(entrada);
    expect(resultado).toBe('IXACABA');
  });

  test('deve retornar string vazia se entrada for vazia', () => {
    expect(inverte('')).toBe('');
  });

  test('deve inverter palavra com espaços', () => {
    expect(inverte('A B C')).toBe('C B A');
  });
});
