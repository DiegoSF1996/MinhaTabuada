import DAO from '../DAO';

class nivel extends DAO {
  up() {
    this.db.transaction(
      function (tx) {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS nivel (niv_codigo INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, niv_descricao VARCHAR (20) NOT NULL)',
        );
        tx.executeSql(
          'INSERT INTO nivel (niv_codigo, niv_descricao) VALUES (?,?)',
          [1, 'Nivel 1'],
        );
        tx.executeSql(
          'INSERT INTO nivel (niv_codigo, niv_descricao) VALUES (?,?)',
          [2, 'Nivel 2'],
        );
        tx.executeSql(
          'INSERT INTO nivel (niv_codigo, niv_descricao) VALUES (?,?)',
          [3, 'Nivel 3'],
        );
        tx.executeSql(
          'INSERT INTO nivel (niv_codigo, niv_descricao) VALUES (?,?)',
          [4, 'Nivel 4'],
        );
        tx.executeSql(
          'INSERT INTO nivel (niv_codigo, niv_descricao) VALUES (?,?)',
          [5, 'Nivel 5'],
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

module.exports = new nivel();
