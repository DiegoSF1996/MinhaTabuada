import DAO from './DAO';
class Nivel extends DAO {
  constructor() {
    super();
    this.nome_tabela = 'Nivel';
  }
  getAllNivel() {
    return this.realm.objects(this.nome_tabela);
  }
  getSumNivel() {
    return this.realm.objects(this.nome_tabela).max('niv_codigo');
  }
  addNivel(_niv_descricao) {
    this.realm.write(() => {
      const Nivel = this.realm.create(this.nome_tabela, {
        niv_codigo:
          this.realm.objects(this.nome_tabela).max('niv_codigo') > 0
            ? this.realm.objects(this.nome_tabela).max('niv_codigo') + 1
            : 1,
        niv_descricao: _niv_descricao,
      });
    });
  }
  getNivelById(_niv_codigo) {
    return this.realm
      .objects(this.nome_tabela)
      .filtered(`niv_codigo = ${_niv_codigo}`);
  }
  deleteAllNiveis() {
    this.realm.write(() => {
      this.realm.delete(this.getAllNivel());
    });
  }

  update(_niv_codigo, _niv_descricao) {
    this.realm.write(() => {
      let niveis = this.getNivelById(_niv_codigo)[0];
      niveis.niv_descricao = _niv_descricao;
    });
  }
}
export default new Nivel();
