import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasFinancasStyles from './styles/paginas-financas';

const reservaDica = () =>{
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
          <Text style={paginasFinancasStyles.title}>Tenha uma reserva de emergência</Text>
          <View style={paginasFinancasStyles.line} />
    
          <Text style={paginasFinancasStyles.subtitle}>Você sabia?</Text>
          <Text style={paginasFinancasStyles.description}>
          Manter uma reserva financeira é fundamental para lidar com imprevistos, como despesas médicas, consertos ou perda de renda. O ideal é guardar o equivalente a pelo menos três meses do seu custo de vida em uma aplicação segura e de fácil acesso.
          </Text>
    
          <Image
            source={require('../../../assets/images/cofrinho.png')}
            style={paginasFinancasStyles.icon}
          />
    
           </ScrollView>
          </View>
          
      );
    };
    
    export default reservaDica;