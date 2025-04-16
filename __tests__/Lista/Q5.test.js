import { ListaSimplesEmbaralhavel } from '../../src/Lista/Q5';

describe('Q5 - ListaSimplesEmbaralhavel embaralhar()', () => {
  let lista;

  beforeEach(() => {
    lista = new ListaSimplesEmbaralhavel();
  });

  test('embaralha mantendo todos os elementos', () => {
    lista.inserirFinal(1);
    lista.inserirFinal(2);
    lista.inserirFinal(3);
    lista.inserirFinal(4);
    lista.inserirFinal(5);

    const original = lista.listar();
    lista.embaralhar();
    const resultado = lista.listar();

    expect(resultado.sort()).toEqual(original.sort());
  });

  test('embaralhar lista com um elemento mantém o mesmo', () => {
    lista.inserirFinal('X');
    lista.embaralhar();
    expect(lista.listar()).toEqual(['X']);
  });

  test('embaralhar lista vazia não gera erro', () => {
    lista.embaralhar();
    expect(lista.listar()).toEqual([]);
  });
});
