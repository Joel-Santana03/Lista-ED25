import { decimalParaBinario } from '../../src/Pilha/Q4';

describe('Q4 - decimalParaBinario', () => {
  let valor;

  beforeEach(() => {
    valor = 10;
  });

  test('converte 10 para binário corretamente', () => {
    expect(decimalParaBinario(valor)).toBe('1010');
  });

  test('converte 0 para binário como "0"', () => {
    expect(decimalParaBinario(0)).toBe('0');
  });

  test('converte 1 para binário como "1"', () => {
    expect(decimalParaBinario(1)).toBe('1');
  });

  test('converte 255 para binário como "11111111"', () => {
    expect(decimalParaBinario(255)).toBe('11111111');
  });
});
