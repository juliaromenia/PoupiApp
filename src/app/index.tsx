import React from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { useFonts, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { useRouter } from 'expo-router';
import AppLoading from 'expo-app-loading';
import homeStyles from './styles/home.styles';

const Home = () => {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function paginaEnergia() {
    router.push('/energia'); 
  }
  function paginaAgua() {
    router.push('/agua'); 
  }
  
  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header}>
        <Image style={homeStyles.logo}
            source={require('../../assets/images/logo_poupi.png')
            }
        />
        <Text style={homeStyles.subtitle}>
          SEU APP DE DICAS PARA ECONOMIZAR{"\n"}
          ENERGIA, ÁGUA E ORGANIZAR FINANÇAS{"\n"}
          PESSOAIS
        </Text>
      </View>

      <View style={homeStyles.buttonsContainer}>
        <TouchableOpacity
          style={[homeStyles.button, homeStyles.energia]}
          onPress={paginaEnergia}
        >
          <Image
            source={require('../../assets/images/energia.png')}
            style={homeStyles.icon}
          />
          <Text style={homeStyles.buttonText}>Energia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[homeStyles.button, homeStyles.agua]}
          onPress={paginaAgua}
        >
          <Image
            source={require('../../assets/images/agua.png')}
            style={homeStyles.icon}
          />
            <Text style={homeStyles.buttonText}>Água</Text>
          </TouchableOpacity>

        <TouchableOpacity style={[homeStyles.button, homeStyles.financas]}>
          <Image
            source={require('../../assets/images/cofrinho.png')}
            style={homeStyles.icon}
          />
          <Text style={homeStyles.buttonText}>Finanças</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
