
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, } from 'react-native';
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2'; 
import AppLoading from 'expo-app-loading'; 
import { useRouter } from 'expo-router';
import indexStyles from './styles/index.styles';



const TelaInicial = () => {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold, 
  });

  const router = useRouter(); 

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function paginaLogin() {
    router.push('/login'); 
  }

  function paginaCadastro() {
    router.push('/cadastro'); 
  }

  return (
    <View style={indexStyles.container}>
      
      <Image
        style={indexStyles.logo}
        source={require('../../assets/images/logo_poupi_semfundo.png')}
        resizeMode="contain"
      />

      {/* Fundo arredondado com os botões */}
      <View style={indexStyles.subContainer}>
        <Text style={indexStyles.subtitle}>
          Bem Vindo(a) ao Poupi!
        </Text>

        <TouchableOpacity style={indexStyles.buttons}
          onPress={paginaLogin}  
        >
          <Text style={indexStyles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={indexStyles.buttons}
          onPress={paginaCadastro}
        >
          <Text style={indexStyles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaInicial;