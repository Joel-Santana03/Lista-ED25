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
   * Lista encadeada com método para embaralhar os elementos.
   */
  export class ListaSimplesEmbaralhavel {
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
  
    listar() {
      const resultado = [];
      let atual = this.inicio;
      while (atual) {
        resultado.push(atual.dado);
        atual = atual.proximo;
      }
      return resultado;
    }
  
    embaralhar() {
      // 1. Extrai os dados em array
      const valores = this.listar();
  
      // 2. Embaralha o array (Fisher-Yates)
      for (let i = valores.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [valores[i], valores[j]] = [valores[j], valores[i]];
      }
  
      // 3. Reconstrói a lista com os dados embaralhados
      this.inicio = null;
      for (const valor of valores) {
        this.inserirFinal(valor);
      }
    }
  }
  