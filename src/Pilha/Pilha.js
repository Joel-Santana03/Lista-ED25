/**
 * Classe que implementa uma pilha usando array.
 */
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    push(elemento) {
      this.itens.push(elemento);
    }
  
    pop() {
      return this.itens.pop();
    }
  
    isEmpty() {
      return this.itens.length === 0;
    }
  
    topo() {
      return this.itens[this.itens.length - 1];
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
    }
  }
  
  module.exports = Pilha;
  