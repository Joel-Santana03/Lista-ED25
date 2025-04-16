import { ListaDeCaracteres } from '../../src/Lista/Q6';

describe('Q6 - ListaDeCaracteres substring()', () => {
  let lista;

  beforeEach(() => {
    lista = new ListaDeCaracteres();
    for (const c of 'estruturadados') {
      lista.adicionarChar(c);
    }
  });

  test('retorna substring correta', () => {
    const sub = lista.substring(0, 9); // "estrutura"
    expect(sub.toString()).toBe('estrutura');
  });

  test('substring parcial', () => {
    const sub = lista.substring(9, 14); // índice 9 a 13 = "dados"
    expect(sub.toString()).toBe('dados');
  });
  

  test('substring com a = b retorna string vazia', () => {
    const sub = lista.substring(3, 3);
    expect(sub.toString()).toBe('');
  });

  test('substring com A maior que B retorna vazio', () => {
    const sub = lista.substring(7, 4);
    expect(sub.toString()).toBe('');
  });

  test('substring fora do range deve parar corretamente', () => {
    const sub = lista.substring(0, 50);
    expect(sub.toString()).toBe('estruturadados');
  });
});
