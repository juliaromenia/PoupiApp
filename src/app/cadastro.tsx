import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, } from 'react-native';
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'; 
import AppLoading from 'expo-app-loading'; 
import { useRouter } from 'expo-router';
import cadastroStyles from './styles/cadastro.styles';

const Cadastro = () => {
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
  <View style={cadastroStyles.container}>
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

      <View style={cadastroStyles.inputContainer}>
        <Image
          source={require('../../assets/images/icon-email.png')}
          style={cadastroStyles.iconEmail}
        />
        <TextInput
          style={cadastroStyles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
        />
      </View>

      <View style={cadastroStyles.inputContainer}>
        <Image
          source={require('../../assets/images/icon-cadeado.png')}
          style={cadastroStyles.iconUser}
        />
        <TextInput
          style={cadastroStyles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={cadastroStyles.button}
        onPress={inicial}
      >
        <Text style={cadastroStyles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <Text style={cadastroStyles.subtexto}>
        Não tem uma conta?{"\n"}
      </Text>

      <TouchableOpacity
        style={cadastroStyles.buttonCadastro}
        onPress={cadastro}
      >
        <Text style={cadastroStyles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  </View>
);


}

export default Cadastro;
