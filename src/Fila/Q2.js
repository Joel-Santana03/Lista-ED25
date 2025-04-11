/**
 * Implementa uma Fila usando duas Pilhas básicas.
 */
export class FilaComPilhas {
    constructor() {
      this.pilhaEntrada = [];
      this.pilhaSaida = [];
    }
  
    /**
     * Insere um elemento na fila.
     * @param {*} valor - Valor a ser inserido.
     */
    enfileira(valor) {
      this.pilhaEntrada.push(valor);
    }
  
    /**
     * Remove e retorna o primeiro elemento da fila.
     * @returns {*} - Elemento removido.
     */
    desenfileira() {
      if (this.estaVazia()) {
        throw new Error('Fila vazia');
      }
  
      if (this.pilhaSaida.length === 0) {
        while (this.pilhaEntrada.length) {
          this.pilhaSaida.push(this.pilhaEntrada.pop());
        }
      }
  
      return this.pilhaSaida.pop();
    }
  
    /**
     * Verifica se a fila está vazia.
     * @returns {boolean}
     */
    estaVazia() {
      return this.pilhaEntrada.length === 0 && this.pilhaSaida.length === 0;
    }
  
    /**
     * Retorna o primeiro elemento da fila (sem remover).
     * @returns {*}
     */
    frente() {
      if (this.estaVazia()) {
        return null;
      }
  
      if (this.pilhaSaida.length === 0) {
        while (this.pilhaEntrada.length) {
          this.pilhaSaida.push(this.pilhaEntrada.pop());
        }
      }
  
      return this.pilhaSaida[this.pilhaSaida.length - 1];
    }
  }
  