import * as React from 'react';
import {Button, View, Text, StyleSheet, Pressable} from 'react-native';
import * as idioma from '../view/assets/language/pt-br.json';
import migration from '../model/migrations/create_table_nivel'
let oInicio = require('./controller/InicioController');

migration.up();
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
