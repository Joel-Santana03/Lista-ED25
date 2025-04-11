/**
 * Implementa uma Pilha usando duas Filas básicas.
 */
export class PilhaComFilas {
    constructor() {
      this.fila1 = [];
      this.fila2 = [];
    }
  
    empilha(valor) {
      this.fila2.push(valor);
      while (this.fila1.length) {
        this.fila2.push(this.fila1.shift());
      }
      [this.fila1, this.fila2] = [this.fila2, this.fila1];
    }
  
    desempilha() {
      if (this.estaVazia()) {
        throw new Error('Pilha vazia');
      }
      return this.fila1.shift();
    }
  
    estaVazia() {
      return this.fila1.length === 0;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.fila1[0];
    }
  }
  