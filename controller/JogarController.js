import Nivel from '../model/Nivel';
import Tabuada from '../model/Tabuada';

class JogarController {
  constructor() {
    this.tabuada = [];
    this.respostasAleatorias = [];
  }
  gerarTabuadaPorNivel(_nivel) {
    return (this.tabuada = Tabuada.getTabuadaByNivel(_nivel));
  }
  cabecalho(_nivel) {
    let totAcertoErroPorNivel = Tabuada.getTotAcertosErrosByNivel(_nivel);
    return totAcertoErroPorNivel;
  }
  addAcertoErro(_tab_codigo, _erroAcerto) {
    Tabuada.addAcertoErro(_tab_codigo, _erroAcerto);
  }

  /*   gerarTabuadaCompleta() {
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
  } */
  nivelTabuadaAleatoria(nivel) {
    this.gerarTabuadaPorNivel(nivel);
    if (this.tabuada.length == 0) {
      return false;
    }
    let operacaoEscolhida = parseInt(
      Math.random() * (this.tabuada.length - 1) + 0,
    );
    this.contaAtual = this.tabuada[operacaoEscolhida];
    this.contaAtual.calc =
      this.contaAtual.tab_x +
      this.contaAtual.tab_operacao +
      this.contaAtual.tab_y;

    //this.contaAtual = {'calc': this.tabuada[x][y][tipo.toString()]['calc'], 'res': this.tabuada[x][y]['x']['res']}
    this.gerarRespostasAleatoria();
    return this.contaAtual;
  }
  /* tabuadaAleatoria(min, max) {
    this.gerarTabuadaPorNivel();
    let x = parseInt(Math.random() * (max - min) + min);
    let y = parseInt(Math.random() * (max - min) + min);
    let tipoInt = parseInt(Math.random() * (4 - 0) + 0);

    if (tipoInt == 2) {
      if (x < y) {
        let xAux = x;
        x = y;
        y = xAux;
      }
    }
    if (tipoInt == 3) {
      if (x < y) {
        let xAux = x;
        x = y;
        y = xAux;
      }
      if (x / y != parseInt(x / y)) {
        return false;
      }
    }
    let operacoes = 'x,+,-,/';
    operacoes = operacoes.split(',');
    this.contaAtual = this.tabuada[x][y][operacoes[tipoInt]];
    //this.contaAtual = {'calc': this.tabuada[x][y][tipo.toString()]['calc'], 'res': this.tabuada[x][y]['x']['res']}
    this.gerarRespostasAleatoria();
    return this.tabuada[x][y][operacoes[tipoInt]];
  } */

  gerarRespostasAleatoria() {
    let resposta = this.contaAtual.tab_resposta;

    this.respostasAleatorias = [
      resposta + 2,
      resposta + 4,
      resposta + 3,
      resposta + 1,
    ];
    if (resposta > 3) {
      this.respostasAleatorias[parseInt(Math.random() * (3 - 0) + 0)] =
        resposta - 1;
      this.respostasAleatorias[parseInt(Math.random() * (3 - 0) + 0)] =
        resposta - 2;
    }
    let indiceRespostaCerta = parseInt(Math.random() * (3 - 0) + 0);
    this.respostasAleatorias[indiceRespostaCerta] = resposta;
    this.respostasAleatorias[4] = {
      resposta,
      indiceRespostaCerta,
    }; //resposta correta para comparar
  }
}

module.exports = new JogarController();
