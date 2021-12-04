import DAO from './DAO';
class Tabuada extends DAO {
  constructor() {
    super();
    this.nome_tabela = 'Tabuada';
  }
  getAllTabuada() {
    return this.realm.objects(this.nome_tabela);
  }
  addTabuada(_tab_x, _tab_y, _tab_operacao, _tab_resposta, _Nivel) {
    this.realm.write(() => {
      const Tabuada = this.realm.create(this.nome_tabela, {
        tab_codigo:
          this.realm.objects(this.nome_tabela).max('tab_codigo') > 0
            ? this.realm.objects(this.nome_tabela).max('tab_codigo') + 1
            : 1,
        tab_x: _tab_x,
        tab_y: _tab_y,
        tab_operacao: _tab_operacao,
        tab_resposta: _tab_resposta,
        Nivel: _Nivel,
      });
    });
  }
  getTabuadaById(_tab_codigo) {
    return this.realm
      .objects(this.nome_tabela)
      .filtered('tab_codigo = ' + _tab_codigo);
  }
  getTabuadaByNivel(_nivel) {
    return this.realm
      .objects(this.nome_tabela)
      .filtered(`Nivel.niv_codigo = ${_nivel}`)
      .filtered(
        '(tab_erros > tab_acertos )  or ( tab_acertos = null and tab_erros = null) or (tab_acertos <= 2)',
      );
  }
  getTotAcertosErrosByNivel(_nivel) {
    /*    RealmResults<User> results = realm.where(User.class).findAll();
 long   sum     = results.sum("age").longValue();
 long   min     = results.min("age").longValue();
 long   max     = results.max("age").longValue();
 double average = results.average("age");

 long   matches = results.size(); */
    let resultado = this.realm
      .objects(this.nome_tabela)
      .filtered(`Nivel.niv_codigo = ${_nivel}`);
    let totAcertos = resultado.sum('tab_acertos');
    let totErros = resultado.sum('tab_erros');
    return {totAcertos, totErros};
  }
  deleteAllTabuadas() {
    this.realm.write(() => {
      this.realm.delete(this.getAllTabuada());
    });
  }

  update(_tab_codigo, _tab_x) {
    this.realm.write(() => {
      let tabuada = this.getTabuadaByNivel(_tab_codigo)[0];
      tabuada.tab_x = _tab_x;
    });
  }
  addAcertoErro(_tab_codigo, _tipo) {
    this.realm.write(() => {
      let tabuada = this.getTabuadaById(_tab_codigo)[0];
      if (_tipo == 'acerto') {
        tabuada.tab_acertos++;
      } else {
        tabuada.tab_erros++;
      }
    });
  }
}
export default new Tabuada();
