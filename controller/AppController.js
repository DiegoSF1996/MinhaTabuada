import Nivel from '../model/Nivel';
import Tabuada from '../model/Tabuada';
class AppController {
  constructor() {
    if (this.configurado == 1) {
    } else {
      this.configuracaoInicial();
      this.configurado = 1;
    }
  }
  configuracaoInicial() {
    if (this.checarPrimeiroAcesso()) {
      this.configuracaoPrimeiroAcesso();
      return true;
    }
    return false;
  }

  checarPrimeiroAcesso() {
    if (Nivel.getAllNivel().length == 0) {
      return true;
    }
    return false;
  }
  configuracaoPrimeiroAcesso() {
    this.configuraNivel();
    this.configuraTabuada();
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
        let nivel_atual = Nivel.getNivelById(this.pegaNivelPorConta(x))[0];
        Tabuada.addTabuada(x, i, ' x ', x * i, nivel_atual);
        Tabuada.addTabuada(x, i, ' + ', x + i, nivel_atual);
        if (x >= i) {
          Tabuada.addTabuada(x, i, ' - ', x - i, nivel_atual);
        }
        if (x > i) {
          if (x / i == parseInt(x / i)) {
            Tabuada.addTabuada(x, i, ' ÷ ', x / i, nivel_atual);
          }
        }
      }
      x++;
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

  reset() {
    Nivel.deleteAllNiveis();
    Tabuada.deleteAllTabuadas();
  }
}

module.exports = new AppController();
