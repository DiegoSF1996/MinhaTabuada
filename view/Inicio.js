import * as React from 'react';
import {Button, View, Text, StyleSheet, Pressable} from 'react-native';
import * as idioma from '../view/assets/language/pt-br.json';

let oInicio = require('./controller/InicioController');
import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);

//SQLite.enablePromise(true);
let db = SQLite.openDatabase(
  {
    name: 'minhaTabuada.db',
  },
  () => {},
  error => {
    console.log('ERROR: ' + error);
  },
);
/*  db.transaction(
  function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS DemoTable (name, score)');
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Alice', 101]);
    tx.executeSql('INSERT INTO DemoTable VALUES (?,?)', ['Betty', 202]);
  },
  function (error) {
    console.log('Transaction ERROR: ' + error.message);
  },
  function () {
    console.log('Populated database OK');
  },
);  */
db.transaction(tx => {
  tx.executeSql('SELECT * FROM nivel', [], (tx, results) => {
    console.log('Query completed');

    // Get rows with Web SQL Database spec compliance.

    var len = results.rows.length;
    for (let i = 0; i < len; i++) {
      let row = results.rows.item(i);
      console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`);
    }

    // Alternatively, you can use the non-standard raw method.

    /*
        let rows = results.rows.raw(); // shallow copy of rows Array

        rows.map(row => console.log(`Employee name: ${row.name}, Dept Name: ${row.deptName}`));
      */
  });
});
function Inicio({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        style={styles.buttonPlay}
        onPress={() => navigation.navigate('Niveis')}>
        <Text style={styles.text}>{idioma.inicio.textos[0]}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#9457FA',
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
export default Inicio;
