import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import MedidasUsuarioInput from '../medidas/MedidasUsuarioInput';
import SombrasUsuarioInput from '../sombras/SombrasUsuarioInput'

const UsuarioInput = (props) => {
    const [nome, setNome] = useState('');

    const [telefone, setTelefone] = useState('');

    const capturarNome = (nome) => {
        setNome(nome);
    }

    const capturarTelefone = (telefone) => {
        setTelefone(telefone);
    }

    return (
    <View
        flexDirection={MedidasUsuarioInput.UsuarioInputFlexDirectionView}
        justifyContent={MedidasUsuarioInput.UsuarioInputJustifyContentView}
        alignItems={MedidasUsuarioInput.UsuarioInputAlignItemsView}
        marginBottom={MedidasUsuarioInput.UsuarioInputMarginBottomView}
    >
    <TextInput 
      placeholder="Nome..."
      padding={MedidasUsuarioInput.USuarioInputPadding}
      marginBottom={MedidasUsuarioInput.UsuairoInputMarginBttm}
      borderBottomColor={SombrasUsuarioInput.UsuarioInputColor}
      onChangeText={capturarNome}
      value={nome}
    />
    <TextInput 
      placeholder="Telefone..."
      
      padding={MedidasUsuarioInput.USuarioInputPadding}
      marginBottom={MedidasUsuarioInput.UsuairoInputMarginBttm}
      borderBottomColor={SombrasUsuarioInput.UsuarioInputColor}
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


export default UsuarioInput;