import { ListaArrayNos } from '../../src/Lista/Q3.js';

describe('Q3 - ListaArrayNos', () => {
  let lista;

  beforeEach(() => {
    lista = new ListaArrayNos();
  });

  test('insere e lista valores corretamente', () => {
    lista.inserir('a');
    lista.inserir('b');
    lista.inserir('c');
    expect(lista.listar()).toEqual(['a', 'b', 'c']);
  });

  test('lista vazia retorna array vazio', () => {
    expect(lista.listar()).toEqual([]);
  });

  test('tamanho da lista após inserções', () => {
    expect(lista.tamanho()).toBe(0);
    lista.inserir(1);
    lista.inserir(2);
    expect(lista.tamanho()).toBe(2);
  });
});
