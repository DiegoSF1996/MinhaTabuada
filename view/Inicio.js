import * as React from 'react';
import {Button, View, Text, StyleSheet, Pressable} from 'react-native';

let oInicio = require('./controller/InicioController');
function Inicio({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable
        style={styles.buttonPlay}
        onPress={() => navigation.navigate('Jogar')}>
        <Text style={styles.text}>PLAY</Text>
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
