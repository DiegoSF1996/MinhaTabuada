import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

let oJogar = require('../controller/JogarController.js');

export default class Jogar extends Component {
  constructor(/* {navigation, route} */) {
    super();
    this.state = {
      nivel: 0,
      acertos: 0,
      erros: 0,
      conta: {},
      timer: null,
      number: 0.0,
      textoMiddle: {},
      opcaoCerta: [],
      opcaoEscolhida: [],
    };
  }

  componentDidMount() {
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params.nivel == null) {
        //this.props.navigation.navigate('Niveis');
      }
      this.setState(
        {
          acertos: 0,
          erros: 0,
          nivel: this.props.route.params.nivel,
          conta: this.proximaConta(),
        },
        () => {
          this.atualizaCabecalho(this.props.route.params.nivel);
          this.atualizaExibicaoConta();
        },
      );
    });
  }
  cronometro() {
    this.state.timer = setInterval(() => {
      let newState = this.state;
      newState.number += 0.1;
      this.setState(newState);
    }, 100);
  }
  atualizaCabecalho(_nivel) {
    //this.state.nivel;
    let oAcertosErros = oJogar.cabecalho(_nivel);
    this.setState({
      erros: oAcertosErros.totErros,
      acertos: oAcertosErros.totAcertos,
    });
  }
  atualizaExibicaoConta() {

    if (this.state.conta.tab_erros > this.state.conta.tab_acertos) {
      this.setState({
        textoMiddle: {textShadowColor: '#c97979', textShadowRadius: 100},
      });
    } else {
      this.setState({
        textoMiddle: {textShadowColor: 'green', textShadowRadius: 100},
      });
    }
  }
  validaResposta(res, indiceEscolhido) {
    let indiceRespostaCerta = oJogar.respostasAleatorias[4].indiceRespostaCerta;
    if (res === oJogar.respostasAleatorias[4].resposta) {
      oJogar.addAcertoErro(this.state.conta.tab_codigo, 'acerto');

      this.setState({
        opcaoCerta: {[indiceRespostaCerta]: {backgroundColor: '#659c6c'}},
      });

      //this.atualizaConta();
    } else {
      oJogar.addAcertoErro(this.state.conta.tab_codigo, 'erro');

      this.setState({
        opcaoCerta: {[indiceRespostaCerta]: {backgroundColor: '#659c6c'}},
      });
      this.setState({
        opcaoEscolhida: {[indiceEscolhido]: {backgroundColor: '#fa7970'}},
      });
      //this.atualizaConta();
    }
    setTimeout(() => {
      this.setState({
        opcaoCerta: {},
      });
      this.setState({
        opcaoEscolhida: {},
      });
      this.atualizaCabecalho(this.props.route.params.nivel);
      this.atualizaConta();
      this.atualizaExibicaoConta();
    }, 50);
  }
  atualizaConta = () => {
    this.setState({
      conta: this.proximaConta(),
    });
  };
  proximaConta() {
    let conta = false;
    while (conta == false) {
      conta = oJogar.nivelTabuadaAleatoria(this.props.route.params.nivel);
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
                {/* <Text style={styles.textHeader}>{this.state.number}</Text> */}
              </View>
            </View>
          </View>
          <View style={[/* styles.middle, */ styles.panelMiddle]}>
            <Text style={[styles.textMiddle, this.state.textoMiddle]}>
              {this.state.conta.calc} = ?
            </Text>
          </View>
          <View style={styles.bottom}>
            <View style={styles.row}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={[
                  styles.buttonOpcoes,
                  this.state.opcaoCerta[0],
                  this.state.opcaoEscolhida[0],
                ]}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[0], 0)
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[0]}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonOpcoes,
                  this.state.opcaoCerta[1],
                  this.state.opcaoEscolhida[1],
                ]}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[1], 1)
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[1]}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={[
                  styles.buttonOpcoes,
                  this.state.opcaoCerta[2],
                  this.state.opcaoEscolhida[2],
                ]}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[2], 2)
                }>
                <Text style={styles.textOpcoes}>
                  {oJogar.respostasAleatorias[2]}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.buttonOpcoes,
                  this.state.opcaoCerta[3],
                  this.state.opcaoEscolhida[3],
                ]}
                onPress={() =>
                  this.validaResposta(oJogar.respostasAleatorias[3], 3)
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
