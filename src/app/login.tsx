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
      <Text style={loginStyles.titulo}>LOGIN</Text>
        <TextInput
            style={loginStyles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            keyboardType="email-address"
        />

        <TextInput
            style={loginStyles.input}
            placeholder="Senha"
            placeholderTextColor="#888"
            keyboardType="email-address"
        />

        <TouchableOpacity
          style={loginStyles.buttons}
          onPress={inicial}
        >
          <Text style={loginStyles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
  </View>
);


}

export default Login;
