import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasFinancasStyles from './styles/paginas-financas';
import { BottomMenu } from '../../app/bottomMenu';

const gastosDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    const [filtro, setFiltro] = React.useState('');
    const router = useRouter();

    const textoDescricao = `Anote tudo: desde contas fixas até aquele cafezinho. Pode ser em um caderno, planilha ou app. Saber pra onde seu dinheiro vai é o primeiro passo pra economizar.`;
    const descricaoFiltrada = textoDescricao.toLowerCase().includes(filtro.toLowerCase());

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    function voltar() {
      router.push('/financas');
    }

    return (
      <View style={paginasFinancasStyles.container}>
        <View style={paginasFinancasStyles.header}>
          <TouchableOpacity
            style={paginasFinancasStyles.backButton}
            onPress={voltar}
          >
            <Image
              source={require('../../../assets/images/seta-esquerda.png')}
              style={paginasFinancasStyles.backIcon}
            />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/images/logo_poupi_semfundo.png')}
            style={paginasFinancasStyles.logo}
          />
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
        >
        <Text style={paginasFinancasStyles.title}>Tenha um controle de gastos mensal</Text>
        <View style={paginasFinancasStyles.line} />

        <Text style={paginasFinancasStyles.subtitle}>Você sabia?</Text>
        {descricaoFiltrada && (
          <Text style={paginasFinancasStyles.description}>
            {textoDescricao}
          </Text>
        )}
        <Image
          source={require('../../../assets/images/cofrinho.png')}
          style={paginasFinancasStyles.icon}
        />

         </ScrollView>
        <BottomMenu
          backgroundColor="#9ed32b"
          onSearch={setFiltro}
        />
      </View>
      
  );
};

export default gastosDica;