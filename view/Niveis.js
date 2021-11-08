import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';


export default class Niveis extends Component {
  constructor({navigation}) {
    super();
    this.navigation = navigation;
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.container}>
          <View style={styles.bottom}>
            <View style={styles.row}>
              <Pressable
                activeOpacity={0.6}
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 1,
                  })
                }>
                <Text style={styles.text}>1</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 2,
                  })
                }>
                <Text style={styles.text}>2</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 3,
                  })
                }>
                <Text style={styles.text}>3</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 4,
                  })
                }>
                <Text style={styles.text}>4</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 5,
                  })
                }>
                <Text style={styles.text}>5</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 6,
                  })
                }>
                <Text style={styles.text}>6</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 7,
                  })
                }>
                <Text style={styles.text}>7</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 8,
                  })
                }>
                <Text style={styles.text}>8</Text>
              </Pressable>
              <Pressable
                style={styles.buttonPlay}
                onPress={() =>
                  this.navigation.navigate('Jogar', {
                    nivel: 9,
                  })
                }>
                <Text style={styles.text}>9</Text>
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
    paddingVertical: '7%',
    paddingHorizontal: '7%',
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
