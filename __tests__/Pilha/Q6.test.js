import { infixaParaRPN } from '../../src/Pilha/Q6';

describe('Q6 - infixaParaRPN', () => {
  test('converte (a+(b*c)) para abc*+', () => {
    expect(infixaParaRPN('(a+(b*c))')).toBe('abc*+');
  });

  test('converte ((a+b)*(z+x)) para ab+zx+*', () => {
    expect(infixaParaRPN('((a+b)*(z+x))')).toBe('ab+zx+*');
  });

  test('converte ((a+t)*((b+(a+c))^(c+d))) corretamente', () => {
    expect(infixaParaRPN('((a+t)*((b+(a+c))^(c+d)))')).toBe('at+bac++cd+^*');
  });

  test('converte a+b*c-d para abc*+d-', () => {
    expect(infixaParaRPN('a+b*c-d')).toBe('abc*+d-');
  });

  test('converte (a+b)+c/d para ab+cd/+', () => {
    expect(infixaParaRPN('(a+b)+c/d')).toBe('ab+cd/+');
  });

  test('converte a*b-(c-d)+e para ab*cd-e+', () => {
    expect(infixaParaRPN('a*b-(c-d)+e')).toBe('ab*cd-e+');
  });
});
