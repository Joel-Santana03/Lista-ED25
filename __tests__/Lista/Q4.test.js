import { ListaSimples } from '../../src/Lista/Q4';

describe('Q4 - ListaSimples inverter()', () => {
  let lista;

  beforeEach(() => {
    lista = new ListaSimples();
  });

  test('inverte lista com vários elementos', () => {
    lista.inserirFinal(1);
    lista.inserirFinal(2);
    lista.inserirFinal(3);
    lista.inverter();
    expect(lista.listar()).toEqual([3, 2, 1]);
  });

  test('inverter lista com um único elemento', () => {
    lista.inserirFinal(42);
    lista.inverter();
    expect(lista.listar()).toEqual([42]);
  });

  test('inverter lista vazia', () => {
    lista.inverter();
    expect(lista.listar()).toEqual([]);
  });
});
