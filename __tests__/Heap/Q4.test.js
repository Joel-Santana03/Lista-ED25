import { verificarGanhadores } from '../../src/Heap/Q4.js';

describe('Q4 - verificarGanhadores Mega-Sena', () => {
  let sorteio;
  let apostas;

  beforeEach(() => {
    sorteio = [5, 10, 15, 20, 25, 30];
    apostas = [
      [5, 10, 15, 20, 25, 30], // sena
      [5, 10, 15, 20, 25],     // quina
      [1, 2, 3, 4, 5, 6]       // sem acerto relevante
    ];
  });

  test('identifica ganhador da sena', () => {
    const res = verificarGanhadores(sorteio, apostas);
    expect(res.sena).toBe(true);
  });

  test('identifica ganhador da quina', () => {
    const res = verificarGanhadores(sorteio, apostas);
    expect(res.quina).toBe(true);
  });

  test('sem ganhadores', () => {
    const res = verificarGanhadores([1, 2, 3, 4, 5, 6], [[7, 8, 9]]);
    expect(res).toEqual({ sena: false, quina: false });
  });

  test('aposta com mais de 6 dezenas ainda válida', () => {
    const res = verificarGanhadores(
      [1, 2, 3, 4, 5, 6],
      [[1, 2, 3, 4, 5, 6, 7, 8]]
    );
    expect(res.sena).toBe(true);
  });
});
