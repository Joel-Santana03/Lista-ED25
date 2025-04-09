/**
 * Classe que implementa duas pilhas em um vetor compartilhado.
 */
export class DuasPilhas {
    /**
     * Cria um vetor de tamanho fixo para duas pilhas.
     * @param {number} tamanho - O tamanho total do vetor.
     */
    constructor(tamanho) {
      this.tamanho = tamanho;
      this.vetor = new Array(tamanho);
      this.topoA = -1;
      this.topoB = tamanho;
    }
  
    estaVaziaA() {
      return this.topoA === -1;
    }
  
    estaVaziaB() {
      return this.topoB === this.tamanho;
    }
  
    empilhaA(valor) {
      if (this.topoA + 1 < this.topoB) {
        this.vetor[++this.topoA] = valor;
      } else {
        throw new Error('Pilha cheia');
      }
    }
  
    empilhaB(valor) {
      if (this.topoB - 1 > this.topoA) {
        this.vetor[--this.topoB] = valor;
      } else {
        throw new Error('Pilha cheia');
      }
    }
  
    desempilhaA() {
      if (this.estaVaziaA()) {
        throw new Error('Pilha A está vazia');
      }
      return this.vetor[this.topoA--];
    }
  
    desempilhaB() {
      if (this.estaVaziaB()) {
        throw new Error('Pilha B está vazia');
      }
      return this.vetor[this.topoB++];
    }
  }
  