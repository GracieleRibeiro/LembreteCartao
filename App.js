import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import UsuarioItem from './components/UsuarioItem.js'
import UsuarioInput from './components/UsuarioInput';
import Cabecalho from './components/Cabecalho.js';
import TelaPrincal from './medidas/MedidasTelaPrincipal'

export default function App() {
  
  const [usuarios, setUsuarios] = useState([]);

  let [contadorUsuarios, setContadorUsuarios] = useState(10);

  const adicionarNome = (nome,telefone) => {
    setUsuarios (usuarios => {
      console.log (usuarios);
      setContadorUsuarios(contadorUsuarios + 1);
      return [{key: contadorUsuarios, vNome: nome, vTelefone: telefone}, ...usuarios];
    });
  }

  const removerLembrete = (keyASerRemovida) => {
    setUsuarios(usuarios =>{
      return usuarios.filter(nome => nome.key !== keyASerRemovida);
    })
  }
  

  return (
    
    <View>
      <Cabecalho titulo={'Cadastro de usuario'}/>
      <View padding={TelaPrincal.TelaPrincipalPadding}>
        <UsuarioInput onAdicionarUsuario={adicionarNome}/>
        <FlatList
          data={usuarios}
          renderItem={
            ({item}) => (
              <UsuarioItem
                nome={item.vNome}
                telefone={item.vTelefone}
                chave={item.key}
                onDelete={removerLembrete}
              />
            )          
          }
        />
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
});
