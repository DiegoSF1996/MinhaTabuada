import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

let oJogar = require('../controller/JogarController.js');

export default class Jogar extends Component {
  constructor({navigation, route}) {
    super();
    this.navigation = navigation;
    this.route = route;
    this.state = {
      nivel: route.params.nivel,
      acertos: 0,
      erros: 0,
      conta: null,
      timer: null,
      number: 0.0,
    };
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params.nivel == null) {
        this.navigation.navigate('Niveis');
      }
      this.setState(
        {
          acertos: 0,
          erros: 0,
          nivel: this.props.route.params.nivel,
        },
        () => {
          this.setState({conta: this.proximaConta()['calc']});
        },
      );
    });
  }
  cronometro() {
    this.state.timer = setInterval(() => {
      let newState = this.state;
      newState.number += 0.1;
      console.log(newState.number);
      this.setState(newState);
    }, 100);
  }
  validaResposta(res) {
    if (res === oJogar.respostasAleatorias[4]) {
      this.setState({
        acertos: this.state.acertos + 1,
      });
      alert('Acertou Mizeravi!');
      this.atualizaConta();
    } else {
      this.setState({
        erros: this.state.erros + 1,
      });
      alert('Errow Mizeravi :(!');
      this.atualizaConta();
    }
  }
  atualizaConta = () => {
    this.setState({
      conta: this.proximaConta()['calc'],
    });
    console.log(this.state.conta);
  };
  proximaConta() {
    let conta = false;
    while (conta == false) {
      conta = oJogar.nivelTabuadaAleatoria(this.state.nivel);
    }
    return conta;
  }
  render() {
    return (
      <View
        style={{
          width: '100%',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.row}>
              <View style={styles.panelHeader}>
                <Text style={styles.textHeader}>NÍVEL: {this.state.nivel}</Text>
                <Text style={styles.textHeader}>ERROS: {this.state.erros}</Text>
                <Text style={styles.textHeader}>
                  ACERTOS: {this.state.acertos}
                </Text>
                <Text style={styles.textHeader}>{this.state.number}</Text>
              </View>
            </View>
          </View>
          <View style={(styles.middle, styles.panelMiddle)}>
            <Text style={styles.textMiddle}>{this.state.conta} = ?</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.buttonOpcoes}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[0])
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[0]}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonOpcoes}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[1])
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[1]}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.buttonOpcoes}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[2])
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[2]}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonOpcoes}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[3])
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[3]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {
    flex: 0.2,
  },
  middle: {
    flex: 0.1,
  },
  bottom: {
    flex: 0.5,
  },
  panelHeader: {
    backgroundColor: '#FABB70',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 5,
  },
  textHeader: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },

  panelMiddle: {
    borderRadius: 5,
  },

  textMiddle: {
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonOpcoes: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    borderWidth: 5,
    backgroundColor: '#47FA6C',
    borderColor: '#34AD4C',
  },
  textOpcoes: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    flex: 1,
  },
});
