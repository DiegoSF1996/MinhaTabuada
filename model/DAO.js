import SQLite from 'react-native-sqlite-storage';
export default class DAO {
  constructor() {
    this.nomeDB = 'minhaTabuada.db';
    this.Sqlite = SQLite;
    this.db = this.conectarBD();
    this.Sqlite.DEBUG(true);
  }
  conectarBD() {
    return this.Sqlite.openDatabase({name: this.nomeDB});
  }
}
