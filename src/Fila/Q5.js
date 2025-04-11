/**
 * Classe que representa um Deque (Fila Duplamente Terminada).
 */
export class Deque {
    constructor() {
      this.itens = [];
    }
  
    /**
     * Insere um elemento no início do Deque.
     * @param {*} valor - Valor a ser inserido.
     */
    inserirInicio(valor) {
      this.itens.unshift(valor);
    }
  
    /**
     * Remove um elemento do início do Deque.
     * @returns {*} - Elemento removido.
     */
    removerInicio() {
      if (this.estaVazio()) {
        throw new Error('Deque vazio');
      }
      return this.itens.shift();
    }
  
    /**
     * Insere um elemento no final do Deque.
     * @param {*} valor - Valor a ser inserido.
     */
    inserirFim(valor) {
      this.itens.push(valor);
    }
  
    /**
     * Remove um elemento do final do Deque.
     * @returns {*} - Elemento removido.
     */
    removerFim() {
      if (this.estaVazio()) {
        throw new Error('Deque vazio');
      }
      return this.itens.pop();
    }
  
    /**
     * Verifica se o Deque está vazio.
     * @returns {boolean}
     */
    estaVazio() {
      return this.itens.length === 0;
    }
  
    /**
     * Retorna o conteúdo atual do Deque.
     * @returns {Array}
     */
    listar() {
      return [...this.itens];
    }
  }
  