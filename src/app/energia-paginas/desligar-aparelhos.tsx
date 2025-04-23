import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasEnergiatyles from './styles/paginas-energia';

const TroqueLampadas = () => {
  const [fontsLoaded] = useFonts({
    PatrickHand_400Regular
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function voltar() {
    router.push('/energia');
  }

  return (
    <View style={paginasEnergiatyles.container}>
      <View style={paginasEnergiatyles.header}>
        <TouchableOpacity
          style={paginasEnergiatyles.backButton}
          onPress={voltar}
        >
          <Image
            source={require('../../../assets/images/seta-esquerda.png')}
            style={paginasEnergiatyles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/logo_poupi_semfundo.png')}
          style={paginasEnergiatyles.logo}
        />
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
      >
      <Text style={paginasEnergiatyles.title}>Desligue aparelhos da tomada</Text>
      <View style={paginasEnergiatyles.line} />

      <Text style={paginasEnergiatyles.subtitle}>Você sabia?</Text>
      <Text style={paginasEnergiatyles.description}>
        Mesmo quando desligados, aparelhos como TVs, micro-ondas e carregadores continuam consumindo energia em modo stand-by. Desligue-os completamente da tomada quando não estiver usando para evitar desperdícios e economizar na conta de luz.{"\n\n"}
        Exemplos de aparelhos que podem ser retirados da tomada incluem: televisores, carregadores de celular, computadores, micro-ondas, cafeteiras, e até mesmo o roteador de Wi-Fi.
      </Text>

      <Image
        source={require('../../../assets/images/energia.png')}
        style={paginasEnergiatyles.icon}
      />

       </ScrollView>
      </View>
      
  );
};

export default TroqueLampadas;
