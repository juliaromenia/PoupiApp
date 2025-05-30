import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasEnergiatyles from './styles/paginas-energia';
import { BottomMenu } from '../../app//bottomMenu';

const TroqueLampadas = () => {
  const [fontsLoaded] = useFonts({
    PatrickHand_400Regular
  });

  const [filtro, setFiltro] = React.useState('');
  const router = useRouter();

  const textoDescricao = `Lâmpadas LED consomem até 80% menos energia que as incandescentes e duram muito mais. É um investimento que compensa rapidamente.\n\nAlém disso, elas esquentam menos, ajudam a manter o ambiente mais fresco e estão disponíveis em diferentes cores e modelos.`;

  const descricaoFiltrada = textoDescricao.toLowerCase().includes(filtro.toLowerCase());

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
        <Text style={paginasEnergiatyles.title}>Troque lâmpadas por LED</Text>
        <View style={paginasEnergiatyles.line} />

        <Text style={paginasEnergiatyles.subtitle}>Você sabia?</Text>
        {descricaoFiltrada && (
          <Text style={paginasEnergiatyles.description}>
            {textoDescricao}
          </Text>
        )}

        <Image
          source={require('../../../assets/images/energia.png')}
          style={paginasEnergiatyles.icon}
        />
      </ScrollView>
      <BottomMenu
        backgroundColor="#ffe249"
        onSearch={setFiltro}
      />
    </View>
  );
};

export default TroqueLampadas;
