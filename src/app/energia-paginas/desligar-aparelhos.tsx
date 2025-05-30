import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasEnergiatyles from './styles/paginas-energia';
import { BottomMenu } from '../../app//bottomMenu';

const DesligarAparelhos = () => {
  const [fontsLoaded] = useFonts({
    PatrickHand_400Regular
  });

  const [filtro, setFiltro] = React.useState('');
  const router = useRouter();

  const textoDescricao = `Mesmo quando desligados, aparelhos como TVs, micro-ondas e carregadores continuam consumindo energia em modo stand-by. Desligue-os completamente da tomada quando não estiver usando para evitar desperdícios e economizar na conta de luz.\n\nExemplos de aparelhos que podem ser retirados da tomada incluem: televisores, carregadores de celular, computadores, micro-ondas, cafeteiras, e até mesmo o roteador de Wi-Fi.`;

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
        <Text style={paginasEnergiatyles.title}>Desligue aparelhos da tomada</Text>
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

export default DesligarAparelhos;
