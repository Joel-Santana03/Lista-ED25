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
   * Pilha dinâmica usando lista simplesmente encadeada.
   */
  export class PilhaEncadeada {
    constructor() {
      this.topo = null;
      this.tamanho = 0;
    }
  
    empilhar(valor) {
      const novo = new No(valor);
      novo.proximo = this.topo;
      this.topo = novo;
      this.tamanho++;
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        throw new Error('Pilha vazia');
      }
      const valor = this.topo.dado;
      this.topo = this.topo.proximo;
      this.tamanho--;
      return valor;
    }
  
    estaVazia() {
      return this.topo === null;
    }
  
    verTopo() {
      return this.topo ? this.topo.dado : null;
    }
  
    tamanhoAtual() {
      return this.tamanho;
    }
  }
  