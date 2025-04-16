/**
 * Nó da lista encadeada.
 */
class No {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
  }
  
  /**
   * Fila dinâmica implementada com lista simplesmente encadeada.
   */
  export class FilaEncadeada {
    constructor() {
      this.inicio = null;
      this.fim = null;
      this.tamanho = 0;
    }
  
    enfileirar(valor) {
      const novo = new No(valor);
      if (this.fim) {
        this.fim.proximo = novo;
      } else {
        this.inicio = novo;
      }
      this.fim = novo;
      this.tamanho++;
    }
  
    desenfileirar() {
      if (this.estaVazia()) {
        throw new Error('Fila vazia');
      }
      const valor = this.inicio.dado;
      this.inicio = this.inicio.proximo;
      if (!this.inicio) {
        this.fim = null;
      }
      this.tamanho--;
      return valor;
    }
  
    estaVazia() {
      return this.inicio === null;
    }
  
    verInicio() {
      return this.inicio ? this.inicio.dado : null;
    }
  
    tamanhoAtual() {
      return this.tamanho;
    }
  }
  