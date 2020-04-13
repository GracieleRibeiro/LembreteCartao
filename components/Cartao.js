import React from 'react';
import {View, StyleSheet} from 'react-native';
import Cores from '../cores/cores.js'
import MedidasCartao from '../medidas/MedidasCartao'
import SombrasCartao from '../sombras/SombrasCartao'

const Cartao = (props) => {
    return(
        <View 
            style={{...estilos.cartao, ...props.estilos}} 
            backgroundColor={Cores.accent}
            padding={MedidasCartao.cartaoPadding}
            margin={MedidasCartao.cartaoMargin}
            elevation={SombrasCartao.cartaoElevacaoSombra}
        >
            {props.children}
        </View>

    );
}

const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.32,
//        backgroundColor: 'white',
//        elevation: 8,
//        padding: 12,
        borderRadius: 12,
//        margin: 2,
        alignItems: 'center'
    }
});

export default Cartao;