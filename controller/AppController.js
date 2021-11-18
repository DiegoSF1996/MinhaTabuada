import Nivel from '../model/Nivel';
import Tabuada from '../model/Tabuada';
class AppController {
  constructor() {
    this.configuracaoInicial();
  }
  configuracaoInicial() {
    if (this.checarPrimeiroAcesso()) {
      this.configuracaoPrimeiroAcesso();
    }
  }
  configuracaoPrimeiroAcesso() {
    this.configuraNivel();
    this.configuraTabuada();
  }
  checarPrimeiroAcesso() {
    if (Nivel.getAllNivel().length == 0) {
      return true;
    }
    return false;
  }
  configuraNivel() {
    Nivel.addNivel('Nível 1');
    Nivel.addNivel('Nível 2');
    Nivel.addNivel('Nível 3');
    Nivel.addNivel('Nível 4');
    Nivel.addNivel('Nível 5');
  }
  configuraTabuada() {
    let x = 2;
    while (x <= 50) {
      for (let i = 2; i <= 10; i++) {
        Tabuada.addTabuada(
          x.toString(),
          i.toString(),
          'x',
          x * i,
          Nivel.getNivelById(this.pegaNivelPorConta(x))[0],
        );
        Tabuada.addTabuada(
          x.toString(),
          i.toString(),
          '+',
          x + i,
          Nivel.getNivelById(this.pegaNivelPorConta(x))[0],
        );
        if (x >= i) {
          Tabuada.addTabuada(
            x.toString(),
            i.toString(),
            '-',
            x - i,
            Nivel.getNivelById(this.pegaNivelPorConta(x))[0],
          );
        }
        if (x > i) {
          if (x / i != parseInt(x / i)) {
            Tabuada.addTabuada(
              x.toString(),
              i.toString(),
              '÷ ',
              x / i,
              Nivel.getNivelById(this.pegaNivelPorConta(x))[0],
            );
          }
        }
      }
      x++;
    }

    for (let x = 2; x <= 60; x++) {
      for (let i = 2; i <= 60; i++) {}
    }
  }
  pegaNivelPorConta(x) {
    let nivel = 0;
    if (x <= 10) {
      nivel = 1;
    } else if (x <= 20) {
      nivel = 2;
    } else if (x <= 30) {
      nivel = 3;
    } else if (x <= 40) {
      nivel = 4;
    } else if (x <= 50) {
      nivel = 5;
    }
    return nivel;
  }
  gerarTabuadaCompleta() {
    for (let x = 2; x <= 60; x++) {
      this.tabuada[x] = [];
      for (let i = 2; i <= 60; i++) {
        this.tabuada[x][i] = [];
        this.tabuada[x][i]['x'] = {calc: x + ' × ' + i, res: x * i};
        this.tabuada[x][i]['+'] = {calc: x + ' + ' + i, res: x + i};
        this.tabuada[x][i]['-'] = {calc: x + ' - ' + i, res: x - i};
        this.tabuada[x][i]['/'] = {calc: x + ' ÷ ' + i, res: x / i};
      }
    }
  }
}

module.exports = new AppController();
