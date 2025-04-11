import { SistemaCaminhoneiros } from '../../src/Fila/Q3.js';

describe('Q3 - SistemaCaminhoneiros', () => {
  let sistema;

  beforeEach(() => {
    sistema = new SistemaCaminhoneiros();
  });

  test('adiciona e remove caminhoneiros', () => {
    sistema.adicionarCaminhoneiro('João');
    sistema.adicionarCaminhoneiro('Maria');
    expect(sistema.removerCaminhoneiro()).toBe('João');
    expect(sistema.removerCaminhoneiro()).toBe('Maria');
  });

  test('lança erro ao tentar remover de fila vazia', () => {
    expect(() => sistema.removerCaminhoneiro()).toThrow('Fila vazia');
  });

  test('lança erro ao tentar adicionar acima da capacidade', () => {
    for (let i = 0; i < 10; i++) {
      sistema.adicionarCaminhoneiro(`Caminhoneiro${i}`);
    }
    expect(() => sistema.adicionarCaminhoneiro('Outro')).toThrow('Capacidade máxima atingida');
  });

  test('verifica se a fila está cheia e vazia', () => {
    expect(sistema.verificarSeFilaEstaVazia()).toBe(true);
    for (let i = 0; i < 10; i++) {
      sistema.adicionarCaminhoneiro(`C${i}`);
    }
    expect(sistema.verificarSeFilaEstaCheia()).toBe(true);
  });

  test('listar fila retorna os nomes corretos', () => {
    sistema.adicionarCaminhoneiro('A');
    sistema.adicionarCaminhoneiro('B');
    expect(sistema.listarFila()).toEqual(['A', 'B']);
  });
});
