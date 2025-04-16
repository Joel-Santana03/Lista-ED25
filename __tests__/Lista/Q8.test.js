import { ListaPessoas } from '../../src/Lista/Q8';

describe('Q8 - ListaPessoas', () => {
  let lista;

  beforeEach(() => {
    lista = new ListaPessoas();
    lista.adicionar('Carlos', 25);
    lista.adicionar('Ana', 22);
    lista.adicionar('Bruno', 30);
  });

  test('ordenar por nome em ordem alfabética', () => {
    const ordenada = lista.ordenarPorNome();
    expect(ordenada.toArray()).toEqual([
      { nome: 'Ana', idade: 22 },
      { nome: 'Bruno', idade: 30 },
      { nome: 'Carlos', idade: 25 }
    ]);
  });

  test('ordenar por idade crescente', () => {
    const ordenada = lista.ordenarPorIdade();
    expect(ordenada.toArray()).toEqual([
      { nome: 'Ana', idade: 22 },
      { nome: 'Carlos', idade: 25 },
      { nome: 'Bruno', idade: 30 }
    ]);
  });

  test('lista original não deve ser alterada', () => {
    lista.ordenarPorNome();
    lista.ordenarPorIdade();
    expect(lista.toArray()).toEqual([
      { nome: 'Carlos', idade: 25 },
      { nome: 'Ana', idade: 22 },
      { nome: 'Bruno', idade: 30 }
    ]);
  });

  test('lista vazia retorna vazio ordenando por nome ou idade', () => {
    const vazia = new ListaPessoas();
    expect(vazia.ordenarPorNome().toArray()).toEqual([]);
    expect(vazia.ordenarPorIdade().toArray()).toEqual([]);
  });
});
