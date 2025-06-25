import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'; 
import AppLoading from 'expo-app-loading'; 
import { useRouter } from 'expo-router';
import loginStyles from './styles/login.styles';
import axios from 'axios';
import { API_URL } from '../config/api';

const Login = () => {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold, 
  });

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter(); 

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function fazerLogin() {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: email,
        senha: senha,
      });
      console.log('Login realizado:', response.data);
      alert('Login realizado com sucesso!');
      router.push('/inicial');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Email ou senha inválidos.');
    }
  }

  function cadastro() {
    router.push('/cadastro'); 
  }

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoContainer}>
        <Image
          style={loginStyles.logo}
          source={require('../../assets/images/logo_poupi_semfundo.png')}
          resizeMode="contain"
        />
      </View>

      <View style={loginStyles.subContainer}>
        <Image
          source={require('../../assets/images/login-conta.png')}
          style={loginStyles.imagem}
        />
        <Text style={loginStyles.titulo}>Login</Text>

        <View style={loginStyles.inputContainer}>
          <Image
            source={require('../../assets/images/icon-email.png')}
            style={loginStyles.iconEmail}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={loginStyles.inputContainer}>
          <Image
            source={require('../../assets/images/icon-cadeado.png')}
            style={loginStyles.iconUser}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry 
          />
        </View>

        <TouchableOpacity
          style={loginStyles.button}
          onPress={fazerLogin}
        >
          <Text style={loginStyles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <Text style={loginStyles.subtexto}>
          Não tem uma conta?{"\n"}
        </Text>

        <TouchableOpacity
          style={loginStyles.buttonCadastro}
          onPress={cadastro}
        >
          <Text style={loginStyles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
