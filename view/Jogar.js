import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

let oJogar = require('../controller/JogarController.js');

export default class Jogar extends Component {
  constructor({navigation, route}) {
    super();
    this.navigation = navigation;
    this.route = route;

    this.state = {
      nivel: 1,
      acertos: 0,
      erros: 0,
      conta: null,
    };
    //this.state.conta = this.proximaConta()['calc'];
  }
  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      console.log(this.props.route.params.nivel + '  -- 1');
      console.log(this.state.nivel + '   -  2');

      this.setState(
        {
          acertos: 0,
          erros: 0,
          nivel: this.props.route.params.nivel,
        },
        () => {
          console.log(this.state.nivel + '   -  3');
          this.setState({conta: this.proximaConta()['calc']});
        },
      );
    });
  }
  validaResposta(res) {
    if (res === oJogar.respostasAleatorias[4]) {
      this.setState({
        acertos: this.state.acertos + 1,
      });
      console.log('Acertou Mizeravi');
      alert('Acertou Mizeravi!');

      this.updateText();
    } else {
      this.setState({
        erros: this.state.erros + 1,
      });
      console.log('Errow Mizeravi :(');
      alert('Errow Mizeravi :(!');
      this.updateText();
    }
  }
  updateText = () => {
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
            <Text style={styles.text}>NIVEL: {this.state.nivel}</Text>
            <Text style={styles.text}>ERROS: {this.state.erros}</Text>
            <Text style={styles.text}>ACERTOS: {this.state.acertos}</Text>
          </View>
          <View style={styles.middle}>
            <Text style={styles.text}>{this.state.conta} = ?</Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.row}>
              <Pressable
                activeOpacity={0.6}
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[0])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[0]}</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[1])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[1]}</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[2])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[2]}</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[3])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[3]}</Text>
              </Pressable>
            </View>
          </View>
        </View>
        {/*  <View style={styles.container}>
          <View style={styles.top}>
            <Text>{this.state.conta}</Text>
            <Text>Tempo: 10:00</Text>
          </View>
          <View style={styles.middle}>
            <Text
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
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[0])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[0]}</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[1])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[1]}</Text>
              </Pressable>
            </View>
            <View style={styles.row}>
              <Pressable
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[2])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[2]}</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPressOut={() =>
                  this.validaResposta(oJogar.respostasAleatorias[3])
                }>
                <Text style={styles.text}>{oJogar.respostasAleatorias[3]}</Text>
              </Pressable>
            </View>
          </View>
        </View> */}
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
    flex:1,
    
    justifyContent:'space-between',
  },
  buttonPlay: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: 'oldlace',
    alignSelf: 'flex-start',
    marginHorizontal: '1%',
    marginBottom: 6,
    minWidth: '48%',
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: '#47FA6C',
    
  },
  container: {
    flex: 1,
    justifyContent:'space-between',
    backgroundColor: '#fff',
    width: '100%',
    padding: 5,
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
  text: {
    fontSize: 24,
    color: 'black',
  },
});
