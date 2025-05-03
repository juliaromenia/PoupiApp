import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasFinancasStyles from './styles/paginas-financas';

const cuidadosDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    
      const router = useRouter();
    
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
          <Text style={paginasFinancasStyles.description}>
          O cartão de crédito pode ser um recurso útil, desde que utilizado com responsabilidade. Procure evitar o acúmulo de parcelas e priorize o pagamento do valor total da fatura. O uso descontrolado pode comprometer o orçamento e gerar dívidas com altos encargos.
          </Text>
    
          <Image
            source={require('../../../assets/images/cofrinho.png')}
            style={paginasFinancasStyles.icon}
          />
    
           </ScrollView>
          </View>
          
      );
    };
    
    export default cuidadosDica;