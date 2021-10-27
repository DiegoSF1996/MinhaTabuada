/* let oCliente = require('../model/Cliente'); */
class JogarController {
  gerarTabuada() {
    this.tabuada = [];
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
    return this.tabuada;
  }
  tabuadaAleatoria() {
    let tabueada = this.gerarTabuada();
    let x = parseInt(Math.random() * (10 - 1) + 1);
    let y = parseInt(Math.random() * (10 - 1) + 1);
    console.log(x+' '+y)
    return tabueada[x][y]['x']['calc'];
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
