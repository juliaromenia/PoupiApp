import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'; 
import AppLoading from 'expo-app-loading'; 
import { useRouter } from 'expo-router';
import loginStyles from './styles/login.styles';
import inicial from './inicial';

const Login = () => {
    const [fontsLoaded] = useFonts({
    Baloo2_700Bold, 
  });

  const router = useRouter(); 


  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function cadastro() {
    router.push('/cadastro'); 
  
  }

  function inicial() {
    router.push('/inicial');
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
      <Text style={loginStyles.titulo}>LOGIN</Text>

      <View style={loginStyles.inputContainer}>
        <Image
          source={require('../../assets/images/icon-email.png')}
          style={loginStyles.iconEmail}
        />
        <TextInput
          style={loginStyles.input}
          placeholder="Email"
          placeholderTextColor="#888"
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
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={loginStyles.button}
        onPress={inicial}
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
