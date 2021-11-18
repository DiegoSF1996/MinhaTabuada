import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Inicio from './view/Inicio';
import Jogar from './view/Jogar';
import Niveis from './view/Niveis';
import Nivel from './model/Nivel';
import Tabuada from './model/Tabuada';

import * as idioma from './view/assets/language/pt-br.json';
import AppController from './controller/AppController';

function Teste({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        style={styles.buttonPlay}
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
      <Text>{JSON.stringify(getAllBooks())}</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  //addBook("Chronicles of JavaScript", Math.floor(Math.random() * 500), null, getAuthorById(1)[0])
  //let teste = addAuthor('Diego','Figueiredo');
  //let n = addNivel('Nível 1')
  // Nivel.update(1, 'teste');
  let tabuada = Tabuada.getAllTabuada();
  let livros = Nivel.getAllNivel();
  /* Nivel.deleteAllNiveis();
  Tabuada.deleteAllTabuadas() */
  console.log(tabuada[1000]);

  return (
    <NavigationContainer>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#34AD4C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button onPress={() => alert('This is a button!')} title="Info" />
          ),
        }}
        initialRouteName="Inicio">
        <Drawer.Screen
          name="Inicio"
          options={{
            title: 'Início',
          }}
          component={Inicio}
        />
        <Drawer.Screen name="Teste" component={Teste} />
        <Drawer.Screen name="Jogar" component={Jogar} />
        <Drawer.Screen
          options={{
            title: 'Níveis',
          }}
          name="Niveis"
          component={Niveis}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
export default App;
