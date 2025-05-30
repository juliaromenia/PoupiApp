import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasFinancasStyles from './styles/paginas-financas';
import { BottomMenu } from '../../app/bottomMenu';

const concienciaDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    const [filtro, setFiltro] = React.useState('');
    const router = useRouter();

    const textoDescricao = `Antes de realizar uma compra, reflita sobre a real necessidade do item. Avalie se trata-se de um gasto planejado ou apenas um desejo momentâneo. Evitar decisões por impulso contribui para uma gestão financeira mais equilibrada e consciente.`;
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
          <Text style={paginasFinancasStyles.title}>Compre com consciência, não por impulso</Text>
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

export default concienciaDica;