import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

let oJogar = require('../controller/JogarController.js');

export default class Jogar extends Component {
  constructor({navigation}) {
    super();
    this.navigation = navigation;
    this.state = {
      conta: oJogar.tabuadaAleatoria()['calc'],
    };
  }
  validaResposta(res) {
    if(res == oJogar.respostasAleatorias[4]){
      console.log('Acertou Mizeravi');
    }
  };  
  updateText = () => {
    this.setState({
      conta: oJogar.tabuadaAleatoria()['calc'],
    });
    console.log(this.state.conta);
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text onPress={this.updateText}>{this.state.conta}</Text>
            <Text>Tempo: 10:00</Text>
          </View>
          <View onPress={this.updateText} style={styles.middle}>
            <Text
              onPress={this.updateText}
              style={{
                fontSize: 100,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {this.state.conta}=?
            </Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.row}>
              <Pressable
                activeOpacity={0.6}
                style={styles.buttonPlay}
                onPress={this.validaResposta(oJogar.respostasAleatorias[0])}>
                <Text style={styles.text}>{oJogar.respostasAleatorias[0]}</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={this.validaResposta(oJogar.respostasAleatorias[1])}>
                <Text style={styles.text}>{oJogar.respostasAleatorias[1]}</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable
                style={styles.buttonPlay}
                onPress={this.validaResposta(oJogar.respostasAleatorias[2])}>
                <Text style={styles.text}>{oJogar.respostasAleatorias[2]}</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={this.validaResposta(oJogar.respostasAleatorias[3])}>
                <Text style={styles.text}>{oJogar.respostasAleatorias[3]}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

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
