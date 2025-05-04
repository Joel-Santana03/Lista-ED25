/**
 * Implementação de um Heap Mínimo (MinHeap) usando array.
 */
export class MinHeap {
    constructor() {
      this.itens = [];
    }
  
    inserir(valor) {
      this.itens.push(valor);
      this.subir(this.itens.length - 1);
    }
  
    removerMin() {
      if (this.itens.length === 0) return null;
      if (this.itens.length === 1) return this.itens.pop();
  
      const min = this.itens[0];
      this.itens[0] = this.itens.pop();
      this.descer(0);
      return min;
    }
  
    getMin() {
      return this.itens[0] ?? null;
    }
  
    subir(indice) {
      while (indice > 0) {
        const pai = Math.floor((indice - 1) / 2);
        if (this.itens[indice] >= this.itens[pai]) break;
        [this.itens[indice], this.itens[pai]] = [this.itens[pai], this.itens[indice]];
        indice = pai;
      }
    }
  
    descer(indice) {
      const tamanho = this.itens.length;
      while (true) {
        let menor = indice;
        const esq = 2 * indice + 1;
        const dir = 2 * indice + 2;
  
        if (esq < tamanho && this.itens[esq] < this.itens[menor]) menor = esq;
        if (dir < tamanho && this.itens[dir] < this.itens[menor]) menor = dir;
  
        if (menor === indice) break;
  
        [this.itens[indice], this.itens[menor]] = [this.itens[menor], this.itens[indice]];
        indice = menor;
      }
    }
  
    toArray() {
      return [...this.itens];
    }
  }
  