import { resolverJosephus } from '../../src/Lista/Q7';

describe('Q7 - resolverJosephus', () => {
  let resultado;

  beforeEach(() => {
    resultado = resolverJosephus(7, 3);
  });

  test('ordem de eliminação correta para N=7, D=3', () => {
    expect(resultado.eliminados).toEqual([3, 6, 2, 7, 5, 1]);
  });

  test('último sobrevivente é o correto', () => {
    expect(resultado.sobrevivente).toBe(4);
  });

  test('lança erro se N ou D for 0 ou negativo', () => {
    expect(() => resolverJosephus(0, 3)).toThrow();
    expect(() => resolverJosephus(5, 0)).toThrow();
    expect(() => resolverJosephus(-1, 3)).toThrow();
  });

  test('para N=1, o próprio é o sobrevivente', () => {
    const r = resolverJosephus(1, 3);
    expect(r.eliminados).toEqual([]);
    expect(r.sobrevivente).toBe(1);
  });
});
