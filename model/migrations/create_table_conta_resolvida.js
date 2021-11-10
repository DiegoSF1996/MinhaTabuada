import DAO from '../DAO';

class conta_resolvida extends DAO {
  up() {
    this.db.transaction(
      function (tx) {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS conta_resolvida (conres_codigo INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, tab_codigo CHAR (18) NOT NULL REFERENCES tabuada (tab_codigo), conres_acertou boolean NOT NULL)',
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

module.exports = new conta_resolvida();