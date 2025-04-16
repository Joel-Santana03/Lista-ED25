/**
 * Nó que representa uma pessoa na lista.
 */
class No {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.proximo = null;
    }
  }
  
  /**
   * Lista encadeada de pessoas.
   */
  export class ListaPessoas {
    constructor() {
      this.inicio = null;
    }
  
    adicionar(nome, idade) {
      const novo = new No(nome, idade);
      if (!this.inicio) {
        this.inicio = novo;
      } else {
        let atual = this.inicio;
        while (atual.proximo) {
          atual = atual.proximo;
        }
        atual.proximo = novo;
      }
    }
  
    /**
     * Retorna os elementos da lista como array de objetos.
     */
    toArray() {
      const resultado = [];
      let atual = this.inicio;
      while (atual) {
        resultado.push({ nome: atual.nome, idade: atual.idade });
        atual = atual.proximo;
      }
      return resultado;
    }
  
    /**
     * Retorna nova lista ordenada por nome (alfabético).
     */
    ordenarPorNome() {
      const array = this.toArray().sort((a, b) => a.nome.localeCompare(b.nome));
      return ListaPessoas.fromArray(array);
    }
  
    /**
     * Retorna nova lista ordenada por idade (crescente).
     */
    ordenarPorIdade() {
      const array = this.toArray().sort((a, b) => a.idade - b.idade);
      return ListaPessoas.fromArray(array);
    }
  
    /**
     * Cria uma nova lista a partir de um array de objetos { nome, idade }
     */
    static fromArray(arr) {
      const lista = new ListaPessoas();
      for (const pessoa of arr) {
        lista.adicionar(pessoa.nome, pessoa.idade);
      }
      return lista;
    }
  }
  