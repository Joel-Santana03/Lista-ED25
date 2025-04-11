/**
 * Sistema de controle de caminhoneiros usando Fila.
 */
export class SistemaCaminhoneiros {
    constructor(capacidadeMaxima = 10) {
      this.capacidadeMaxima = capacidadeMaxima;
      this.fila = [];
    }
  
    adicionarCaminhoneiro(nome) {
      if (this.verificarSeFilaEstaCheia()) {
        throw new Error('Capacidade máxima atingida');
      }
      this.fila.push(nome);
    }
  
    removerCaminhoneiro() {
      if (this.verificarSeFilaEstaVazia()) {
        throw new Error('Fila vazia');
      }
      return this.fila.shift();
    }
  
    verificarSeFilaEstaCheia() {
      return this.fila.length >= this.capacidadeMaxima;
    }
  
    verificarSeFilaEstaVazia() {
      return this.fila.length === 0;
    }
  
    listarFila() {
      return [...this.fila];
    }
  }
  