import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import { BottomMenu } from '../../app//bottomMenu';
import paginasEnergiatyles from './styles/paginas-energia';

const geladeiraDica = () => {
  const [fontsLoaded] = useFonts({
    PatrickHand_400Regular
  });

  const [filtro, setFiltro] = React.useState('');
  const router = useRouter();

  const textoDescricao = `Evite posicionar a geladeira próxima ao fogão, ao forno ou exposta ao sol. Fontes de calor forçam o motor a trabalhar mais para manter a temperatura interna, aumentando o consumo de energia. Deixe um espaço ao redor para ventilação e garanta mais eficiência e economia no uso do aparelho`;

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
        <Text style={paginasEnergiatyles.title}>Mantenha a geladeira longe de fontes de calor</Text>
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

export default geladeiraDica;
