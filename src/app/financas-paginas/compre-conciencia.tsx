import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasFinancasStyles from './styles/paginas-financas';

const concienciaDica = () =>{
    const [fontsLoaded] = useFonts({
        PatrickHand_400Regular
      });
    
      const router = useRouter();
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
      function voltar() {
        router.push('/agua');
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
          <Text style={paginasFinancasStyles.title}>Tome banho mais curtos</Text>
          <View style={paginasFinancasStyles.line} />
    
          <Text style={paginasFinancasStyles.subtitle}>Você sabia?</Text>
          <Text style={paginasFinancasStyles.description}>
          Antes de realizar uma compra, reflita sobre a real necessidade do item. Avalie se trata-se de um gasto planejado ou apenas um desejo momentâneo. Evitar decisões por impulso contribui para uma gestão financeira mais equilibrada e consciente.
          </Text>
    
          <Image
            source={require('../../../assets/images/cofrinho.png')}
            style={paginasFinancasStyles.icon}
          />
    
           </ScrollView>
          </View>
          
      );
    };
    
    export default concienciaDica;