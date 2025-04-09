/**
 * Estrutura de pilha de pratos com capacidade limitada por subpilha.
 */
export class PilhaDePratos {
    /**
     * @param {number} capacidade - Capacidade máxima por pilha.
     */
    constructor(capacidade) {
      this.capacidade = capacidade;
      this.pilhas = [[]];
    }
  
    empilha(valor) {
      let ultima = this.pilhas[this.pilhas.length - 1];
      if (ultima.length >= this.capacidade) {
        ultima = [];
        this.pilhas.push(ultima);
      }
      ultima.push(valor);
    }
  
    desempilha() {
      while (this.pilhas.length > 0) {
        const ultima = this.pilhas[this.pilhas.length - 1];
        if (ultima.length === 0) {
          this.pilhas.pop(); // Remove pilha vazia
        } else {
          return ultima.pop();
        }
      }
      return null;
    }
  }
  