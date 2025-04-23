import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasEnergiatyles from './styles/paginas-energia';

const horarioDePico = () => {
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
      <Text style={paginasEnergiatyles.title}>Use eletrodomésticos fora do horário de pico</Text>
      <View style={paginasEnergiatyles.line} />

      <Text style={paginasEnergiatyles.subtitle}>Você sabia?</Text>
      <Text style={paginasEnergiatyles.description}>
        Para economizar na conta de luz, aproveite para usar eletrodomésticos como lavadoras, secadoras e ferros de passar fora do horário de pico de energia. Isso ajuda a reduzir os custos e contribui para um consumo mais consciente.{"\n\n"}
        Os horários de pico geralmente acontecem entre 18h e 21h, então tente programar o uso desses aparelhos para horários alternativos.
      </Text>

      <Image
        source={require('../../../assets/images/energia.png')}
        style={paginasEnergiatyles.icon}
      />

       </ScrollView>
      </View>
      
  );
};

export default horarioDePico;
