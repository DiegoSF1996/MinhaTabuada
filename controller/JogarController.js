/* let oCliente = require('../model/Cliente'); */
class JogarController {
  constructor() {
    this.tabuada = [];
    this.respostasAleatorias = [];
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
  nivelTabuadaAleatoria(nivel) {
    let tabuada = false;
    switch (nivel) {
      case 1:
        tabuada = this.tabuadaAleatoria(2, 10);
        break;
      case 2:
        tabuada = this.tabuadaAleatoria(10, 20);
        break;
      case 3:
        tabuada = this.tabuadaAleatoria(20, 30);
        break;
      case 4:
        tabuada = this.tabuadaAleatoria(30, 40);
        break;
      case 5:
        tabuada = this.tabuadaAleatoria(40, 50);
        break;
    }
    console.log(nivel);
    return tabuada;
  }
  tabuadaAleatoria(min, max) {
    this.gerarTabuadaCompleta();
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
      if (x / y == parseInt(x / y)) {
        console.log('ok');
      } else {
        return false;
      }
    }
    let operacoes = 'x,+,-,/';
    operacoes = operacoes.split(',');
    this.contaAtual = this.tabuada[x][y][operacoes[tipoInt]];
    //this.contaAtual = {'calc': this.tabuada[x][y][tipo.toString()]['calc'], 'res': this.tabuada[x][y]['x']['res']}
    this.gerarRespostasAleatoria();
    return this.tabuada[x][y][operacoes[tipoInt]];
  }

  gerarRespostasAleatoria() {
    let resposta = this.contaAtual['res'];

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
    this.respostasAleatorias[parseInt(Math.random() * (3 - 0) + 0)] = resposta;
    this.respostasAleatorias[4] = resposta; //resposta correta para comparar
  }

  cronometro() {}

  /* async listarthis.tabuada() {
    return await oCliente.obter({});
  } */
  /* salvarCliente(dados) {
    //Alterar
    if (dados.cli_codigo != undefined && dados.cli_codigo != '') {
      oCliente.alterar(dados);
    } else {
      //Novo
      oCliente.inserir(dados);
    }
  } */
  /* excluirCliente(dados) {
    oCliente.excluir(dados);
  } */
  teste() {
    return 'teste 123';
  }
}

module.exports = new JogarController();
