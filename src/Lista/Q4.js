/**
 * Nó da lista simplesmente encadeada.
 */
class No {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
  }
  
  /**
   * Lista simplesmente encadeada com função de inversão.
   */
  export class ListaSimples {
    constructor() {
      this.inicio = null;
    }
  
    inserirFinal(valor) {
      const novo = new No(valor);
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
  
    inverter() {
      let anterior = null;
      let atual = this.inicio;
      while (atual) {
        const proximo = atual.proximo;
        atual.proximo = anterior;
        anterior = atual;
        atual = proximo;
      }
      this.inicio = anterior;
    }
  
    listar() {
      const resultado = [];
      let atual = this.inicio;
      while (atual) {
        resultado.push(atual.dado);
        atual = atual.proximo;
      }
      return resultado;
    }
  }
  