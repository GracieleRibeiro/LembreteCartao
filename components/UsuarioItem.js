import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Cartao from './Cartao';
import Cores from '../cores/cores.js'
import SombrasUsuario from '../sombras/SombrasUsuarioItem'
import MedidasUsuario from '../medidas/MedidasUsuarioItem'

const UsuarioItem = (props) => {
    
    const handleClick = () => {
        Alert.alert('Clique longo para excluir o usuario -> ' + props.nome)
    }

    return (
        <Cartao>
            <TouchableOpacity 
            onLongPress={props.onDelete.bind(this, props.chave)}
            onPress={handleClick}
            >
                <View 
                    style={styles.itemNaLista}  
                    backgroundColor={Cores.accent}
                    borderColor={SombrasUsuario.UsuarioBordarCor}
                    marginBottom={MedidasUsuario.UsuarioMarginBottom}
                >
                    <Text>Id:{props.chave} Nome: {props.nome} Telefone:{props.telefone}</Text>
                </View>
            </TouchableOpacity>        
        </Cartao>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        borderRadius: 8
    }
});

export default UsuarioItem;