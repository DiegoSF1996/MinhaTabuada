import * as React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

let oJogar = require('../controller/JogarController.js');

let valor = '';
function teste() {
  valor = oJogar.tabuadaAleatoria();
}
teste();
const Jogar = function Jogar({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>Tempo: 10:00</Text>
        </View>
        <View onPress={teste()} style={styles.middle}>
          <Text onPress={teste()}>{valor}</Text>
        </View>
        <View style={styles.bottom}>
          <View style={styles.row}>
            <Pressable
              activeOpacity={0.6}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.buttonPlay,
              ]}
              onPress={() => navigation.navigate('Teste')}>
              <Text style={styles.text}>PLAY</Text>
            </Pressable>
            <Pressable
              style={styles.buttonPlay}
              onPress={() => navigation.navigate('Teste')}>
              <Text style={styles.text}>PLAY</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.buttonPlay}
              onPress={() => navigation.navigate('Teste')}>
              <Text style={styles.text}>PLAY</Text>
            </Pressable>
            <Pressable
              style={styles.buttonPlay}
              onPress={() => navigation.navigate('Teste')}>
              <Text style={styles.text}>PLAY</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttonPlay: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '17%',
    paddingHorizontal: '17%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#47FA6C',
    margin: 7,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    flex: 0.3,
  },
  middle: {
    flex: 0.3,
  },
  bottom: {
    flex: 0.3,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});

export default Jogar;
