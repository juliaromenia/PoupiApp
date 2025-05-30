import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasFinancasStyles from './styles/paginas-financas';
import { BottomMenu } from '../../app/bottomMenu';

const cuidadosDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    const [filtro, setFiltro] = React.useState('');
    const router = useRouter();

    const textoDescricao = `O cartão de crédito pode ser um recurso útil, desde que utilizado com responsabilidade. Procure evitar o acúmulo de parcelas e priorize o pagamento do valor total da fatura. O uso descontrolado pode comprometer o orçamento e gerar dívidas com altos encargos.`;
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
        <Text style={paginasFinancasStyles.title}>Cuidado com o cartão de crédito</Text>
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

export default cuidadosDica;