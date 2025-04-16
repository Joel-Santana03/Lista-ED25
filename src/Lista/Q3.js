/**
 * Representa um nó com dado e índice para o próximo.
 */
class No {
    constructor(dado, proximo = -1) {
      this.dado = dado;
      this.proximo = proximo;
    }
  }
  
  /**
   * Lista simples utilizando array de nós.
   */
  export class ListaArrayNos {
    constructor() {
      this.nos = [];
      this.inicio = -1;
    }
  
    /**
     * Insere valor no final da lista.
     * @param {*} valor
     */
    inserir(valor) {
      const novoIndice = this.nos.length;
      const novoNo = new No(valor);
      if (this.inicio === -1) {
        this.inicio = novoIndice;
      } else {
        let atual = this.inicio;
        while (this.nos[atual].proximo !== -1) {
          atual = this.nos[atual].proximo;
        }
        this.nos[atual].proximo = novoIndice;
      }
      this.nos.push(novoNo);
    }
  
    /**
     * Retorna os valores da lista como array.
     * @returns {Array}
     */
    listar() {
      const resultado = [];
      let atual = this.inicio;
      while (atual !== -1) {
        resultado.push(this.nos[atual].dado);
        atual = this.nos[atual].proximo;
      }
      return resultado;
    }
  
    /**
     * Retorna o tamanho da lista.
     * @returns {number}
     */
    tamanho() {
      return this.listar().length;
    }
  }
  