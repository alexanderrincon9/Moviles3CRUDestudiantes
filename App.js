/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        Text > Open up App.js to start working on your app! < /Text> <
        StatusBar style = "auto" / >
        <
        /View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 
*/


import React from 'react';
import { Alert,StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends React.Component {


/*Estado
Hay dos tipos de datos que controlan un componente:
  propsy state. props los establece el padre y
  se fijan a lo largo de la vida útil de un componente.
  Para los datos que van a cambiar, tenemos que usar state.

  En general, debe inicializar state en el constructor y
  luego llamar setState cuando desee cambiarlo.*/


  constructor(props) {

    super(props)

    this.state = {
      TextInput_identificacion: '',
      TextInput_nombreCompleto: '',
      TextInput_asignatura: '',
      TextInput_telefono: '',
      TextInput_correo: '',
    }

  }

  //Codificación de funciones
  insertarEstudiante = () => {
   
  } 

  actualizarEstudiante = () => {
   
  } 

  borrarEstudiante = () => {
   
  } 

  buscarEstudiante = () => {
   
  } 


  listarEstudiante = () => {
   
  } 


  AlertBotones = () =>
    Alert.alert(
      "CRUD",
      "Estudiantes",
      [
        {
          text: "Luego",
          onPress: () => console.log("Luego")
        },
        {
          text: "Cancelar",
          onPress: () => console.log("Presionó Cancelar"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Presionado") }
      ],
      { cancelable: false }
    );

  //Fin de funciones generales

  //Comienzo de la aplicación
  render() {
    return (
      <View style={styles.Contenedor}>
        <Text style={{ fontSize: 20, textAlign: 'center', marginTop:80, marginBottom: 20 }}> CRUD para Estudiantes </Text>
        <TextInput
          placeholder="Digite su identificación"
          onChangeText={TextInputValue => this.setState({ TextInput_identificacion: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.ClaseEstilosTextInput}
          value={this.state.TextInput_identificacion}
        />

        <TextInput
          placeholder="Digite su nombre completo"
          onChangeText={TextInputValue => this.setState({ TextInput_nombreCompleto: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.ClaseEstilosTextInput}
          value={this.state.TextInput_nombreCompleto}
        />

        <TextInput
          placeholder="Digite asignatura"
          onChangeText={TextInputValue => this.setState({ TextInput_asignatura: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.ClaseEstilosTextInput}
          value={this.state.TextInput_asignatura}
        />
        
        <TextInput
          placeholder="Digite su telefono"
          onChangeText={TextInputValue => this.setState({ TextInput_telefono: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.ClaseEstilosTextInput}
          value={this.state.TextInput_telefono}
        />

        <TextInput
          placeholder="Digite su ema@il"
          onChangeText={TextInputValue => this.setState({ TextInput_correo: TextInputValue })}
          underlineColorAndroid='transparent'
          style={styles.ClaseEstilosTextInput}
          value={this.state.TextInput_correo}
        />

        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.insertarEstudiante}>
          <Text style={styles.TextStyle}> Insertar </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.actualizarEstudiante}>
          <Text style={styles.TextStyle}> Actualizar </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.borrarEstudiante}>
          <Text style={styles.TextStyle}> Borrar </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.buscarEstudiante}>
          <Text style={styles.TextStyle}> Buscar </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={.4} style={styles.TouchableOpacityStyle} onPress={this.listarEstudiante}>
          <Text style={styles.TextStyle}> Listar </Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({

  Contenedor: {

    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff'

  },

  ClaseEstilosTextInput: {

    textAlign: 'center',
    width: '80%',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#8BC34A',
    borderRadius: 20,

  },

  
  TouchableOpacityStyle: {

    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 7,
    width: '50%',
    backgroundColor: '#4CAF50'

  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }

});

