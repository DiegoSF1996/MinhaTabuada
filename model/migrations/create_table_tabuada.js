import DAO from '../DAO';

class tabuada extends DAO {
  up() {
    this.db.transaction(
      function (tx) {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tabuada (tab_codigo INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, niv_codigo CHAR (18) NOT NULL REFERENCES nivel (niv_codigo), tab_x CHAR (1) NOT NULL, tab_y CHAR (1) NOT NULL, tab_operacao CHAR (1) NOT NULL, tab_resposta INTEGER NOT NULL)',
        );
      },
      function (error) {
        console.log('Transaction ERROR: ' + error.message);
      },
      function () {
        console.log('Populated database OK');
      },
    );
  }
}

module.exports = new tabuada();
