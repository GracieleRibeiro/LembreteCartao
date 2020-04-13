import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';

const LembreteItem = (props) => {
    
    const handleClick = () => {
        Alert.alert('Clique longo para excluir o usuario -> ' + props.nome)
    }

    return (
        <TouchableOpacity 
        onLongPress={props.onDelete.bind(this, props.chave)}
        onPress={handleClick}
        >
            <View style={styles.itemNaLista}>
                <Text>Id:{props.chave} Nome: {props.nome} Telefone:{props.telefone}</Text>
            </View>
        </TouchableOpacity>        
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#CCC',
        borderColor: "black",
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }
});

export default LembreteItem;