/* let oCliente = require('../model/Cliente'); */
class JogarController {
  constructor() {
    this.tabuada = [];
    this.respostasAleatorias=[];
  }
  gerarTabuada() {
    for (let x = 2; x <= 10; x++) {
      this.tabuada[x] = [];
      for (let i = 2; i <= 10; i++) {
        this.tabuada[x][i] = [];
        this.tabuada[x][i]['x'] = {calc: x + '*' + i, res: x * i};
        this.tabuada[x][i]['+'] = {calc: x + '+' + i, res: x + i};
        this.tabuada[x][i]['-'] = {calc: x + '-' + i, res: x - i};
        this.tabuada[x][i]['/'] = {calc: x + '/' + i, res: x / i};
      }
    }
  }
  tabuadaAleatoria() {
    this.gerarTabuada();
    let x = parseInt(Math.random() * (10 - 2) + 2);
    let y = parseInt(Math.random() * (10 - 2) + 2);
    let tipoInt = parseInt(Math.random() * (3 - 0) + 0);
    console.log(x+'-'+' '+y);
    let operacoes = 'x,+,-,/';
    operacoes = operacoes.split(',');
    this.contaAtual = this.tabuada[x][y][operacoes[tipoInt]];
    //this.contaAtual = {'calc': this.tabuada[x][y][tipo.toString()]['calc'], 'res': this.tabuada[x][y]['x']['res']}
    return this.tabuada[x][y][operacoes[tipoInt]];
  }

  gerarRespostasAleatoria(){
    let resposta = this.contaAtual['res'];
    //this.respostasAleatorias=[ resposta+2,respost-1, resposta, resposta+1,]
  }
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
