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
      .filtered(`tab_codigo = ${_tab_codigo}`);
  }
  deleteAllTabuadas() {
    this.realm.write(() => {
      this.realm.delete(this.getAllTabuada());
    });
  }

  update(_tab_codigo, _tab_x) {
    this.realm.write(() => {
      let tabuada = this.getNivelById(_tab_codigo)[0];
      tabuada.tab_x = _tab_x;
    });
  }
}
export default new Tabuada();
