/**
 * Nó para armazenar um caractere.
 */
class No {
    constructor(caractere) {
      this.char = caractere;
      this.proximo = null;
    }
  }
  
  /**
   * Lista de caracteres com método substring(A, B).
   */
  export class ListaDeCaracteres {
    constructor() {
      this.inicio = null;
    }
  
    /**
     * Adiciona um caractere ao final da lista.
     * @param {string} char
     */
    adicionarChar(char) {
      const novo = new No(char);
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
  
    /**
     * Retorna uma nova ListaDeCaracteres com substring da posição A até B (exclusivo).
     * @param {number} a - Índice inicial
     * @param {number} b - Índice final (exclusivo)
     * @returns {ListaDeCaracteres}
     */
    substring(a, b) {
      const nova = new ListaDeCaracteres();
      let atual = this.inicio;
      let i = 0;
  
      while (atual && i < b) {
        if (i >= a) {
          nova.adicionarChar(atual.char);
        }
        atual = atual.proximo;
        i++;
      }
  
      return nova;
    }
  
    /**
     * Retorna a string completa da lista.
     * @returns {string}
     */
    toString() {
      let resultado = '';
      let atual = this.inicio;
      while (atual) {
        resultado += atual.char;
        atual = atual.proximo;
      }
      return resultado;
    }
  }
  