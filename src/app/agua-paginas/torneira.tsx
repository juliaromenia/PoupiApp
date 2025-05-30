import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasAguastyles from './styles/paginas-agua';
import { BottomMenu } from '../../app/bottomMenu';

const torneiraDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    const [filtro, setFiltro] = React.useState('');
    const router = useRouter();

    const textoDescricao = `Manter a torneira aberta enquanto escova os dentes ou ensaboa as mãos pode desperdiçar até 12 litros de água por minuto. Fechá-la durante essas ações simples pode gerar uma economia de até 180 litros por mês por pessoa!\n\nAlém de reduzir o valor da conta de água, esse hábito ajuda a preservar os recursos naturais e incentiva um estilo de vida mais consciente e sustentável.`;
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
          <Text style={paginasAguastyles.title}>Feche a torneira ao escovar os dentes ou ensaboar as mãos</Text>
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

export default torneiraDica;



