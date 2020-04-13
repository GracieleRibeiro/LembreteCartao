import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const LembreteInput = (props) => {
    const [nome, setNome] = useState('');

    const [telefone, setTelefone] = useState('');

    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }

    return (
    <View style={styles.lembreteView}>
    <TextInput 
      placeholder="Nome..."
      style={styles.nomeTextInput}
      onChangeText={capturarNome}
      value={nome}
    />
    <TextInput 
      placeholder="Telefone..."
      style={styles.telefoneTextInput}
      onChangeText={capturarTelefone}
      value={telefone}
    />
    <Button 
      title="+"
      onPress={() => {props.onAdicionarUsuario(nome, telefone)}}
    />
    </View>
    );
}

const styles = StyleSheet.create({
    lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
      },
      lembreteTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2,
        marginBottom: 4
      }
});

export default LembreteInput;