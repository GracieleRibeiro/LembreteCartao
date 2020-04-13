import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Cores from '../cores/cores.js'
import MedidasCabecalho from '../medidas/MedidasCabecalho'

const Cabecalho = (props) => {
    return (
        <View 
            backgroundColor={Cores.primary}
            width={MedidasCabecalho.CabecalhoWidth}
            height={MedidasCabecalho.CabecalhoHeight}
            paddingTop={MedidasCabecalho.CabecalhoPaddinTop}            
            justifyContent={MedidasCabecalho.CabecalhoJustifyContent}
            alignItems={MedidasCabecalho.CabecalhoAlignItems}
        >
            <Text 
                color={Cores.black}
                style={estilos.titulo}
            >{props.titulo}</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
    },
    titulo: {
        fontSize: 22
    }
});

export default Cabecalho;