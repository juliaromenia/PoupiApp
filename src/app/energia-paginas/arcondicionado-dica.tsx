import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasEnergiatyles from './styles/paginas-energia';

const geladeiraDica = () => {
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
      <Text style={paginasEnergiatyles.title}>Regule o ar condicionado corretamente</Text>
      <View style={paginasEnergiatyles.line} />

      <Text style={paginasEnergiatyles.subtitle}>Você sabia?</Text>
      <Text style={paginasEnergiatyles.description}>
        Ajustar o ar-condicionado na temperatura ideal evita o consumo excessivo de energia. O recomendado é mantê-lo em torno de 23°C a 25°C. Limpe os filtros regularmente e evite deixar portas e janelas abertas enquanto o aparelho estiver ligado. Isso garante mais conforto e economia na conta de luz.
      </Text>

      <Image
        source={require('../../../assets/images/energia.png')}
        style={paginasEnergiatyles.icon}
      />

       </ScrollView>
      </View>
      
  );
};

export default geladeiraDica;
