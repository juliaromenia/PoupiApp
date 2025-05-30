import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasAguastyles from './styles/paginas-agua';
import { BottomMenu } from '../../app/bottomMenu';

const banhoDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    const [filtro, setFiltro] = React.useState('');
    const router = useRouter();

    const textoDescricao = `Tome banhos mais curtos! Reduzir o tempo de banho não só economiza água, mas também ajuda a diminuir o gasto com energia elétrica, especialmente se o seu chuveiro for elétrico. Apenas alguns minutos a menos por dia podem resultar em uma economia significativa ao longo do mês`;
    const descricaoFiltrada = textoDescricao.toLowerCase().includes(filtro.toLowerCase());

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    function voltar() {
      router.push('/agua');
    }

    return (
      <View style={paginasAguastyles.container}>
        <View style={paginasAguastyles.header}>
          <TouchableOpacity
            style={paginasAguastyles.backButton}
            onPress={voltar}
          >
            <Image
              source={require('../../../assets/images/seta-esquerda.png')}
              style={paginasAguastyles.backIcon}
            />
          </TouchableOpacity>
          <Image
            source={require('../../../assets/images/logo_poupi_semfundo.png')}
            style={paginasAguastyles.logo}
          />
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
        >
          <Text style={paginasAguastyles.title}>Tome banho mais curtos</Text>
          <View style={paginasAguastyles.line} />

          <Text style={paginasAguastyles.subtitle}>Você sabia?</Text>
          {descricaoFiltrada && (
            <Text style={paginasAguastyles.description}>
              {textoDescricao}
            </Text>
          )}
          <Image
            source={require('../../../assets/images/agua.png')}
            style={paginasAguastyles.icon}
          />
        </ScrollView>
        <BottomMenu
          backgroundColor="#89ccff"
          onSearch={setFiltro}
        />
      </View>
    );
};

export default banhoDica;



