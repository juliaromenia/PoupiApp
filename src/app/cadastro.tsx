import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'; 
import AppLoading from 'expo-app-loading'; 
import { useRouter } from 'expo-router';
import cadastroStyles from './styles/cadastro.styles';

const Cadastro = () => {
    const [fontsLoaded] = useFonts({
    Baloo2_700Bold, 
  });
 
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter(); 


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  function login() {
    console.log('Cadastro realizado:', { nome, email, senha });
    router.push('/login'); 
  }

  function voltar() {
    router.push('/'); 
  }

return (
  <View style={cadastroStyles.container}>
     <View>
      <TouchableOpacity
        style={cadastroStyles.backButton}
        onPress={voltar}
      >
        <Image
          source={require('../../assets/images/seta-esquerda.png')}
          style={cadastroStyles.backIcon}
        />
      </TouchableOpacity>
      </View>
     <View style={cadastroStyles.logoContainer}>
    
      <Image
        style={cadastroStyles.logo}
        source={require('../../assets/images/logo_poupi_semfundo.png')}
        resizeMode="contain"
      />
     </View>
     <View style={cadastroStyles.subContainer}>

      
    
      <Image
        source={require('../../assets/images/cadastro.png')}
        style={cadastroStyles.imagem}
      />
      <Text style={cadastroStyles.titulo}>Cadastro</Text>
      
      <TextInput
        style={cadastroStyles.inputContainer}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
       />

      <TextInput
        style={cadastroStyles.inputContainer}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={cadastroStyles.inputContainer}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry 
      />
      <TouchableOpacity style={cadastroStyles.button} onPress={login}>
        <Text style={cadastroStyles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <Text style={cadastroStyles.buttonText}>
        Já tem uma conta? Faça{' '}
        <Text style={cadastroStyles.link} onPress={login}>
          Login
        </Text>
      </Text>

    </View>


  </View>
);


}

export default Cadastro;
