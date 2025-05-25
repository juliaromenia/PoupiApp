import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasAguastyles from './styles/paginas-agua';
//import paginasEnergiatyles from './styles/paginas-energia';

const maquinaDica = () =>{
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
          <Text style={paginasAguastyles.title}>Reaproveite a água da máquina de lavar</Text>
          <View style={paginasAguastyles.line} />
    
          <Text style={paginasAguastyles.subtitle}>Você sabia?</Text>
          <Text style={paginasAguastyles.description}>
            A água usada na lavagem de roupas pode ser reutilizada para lavar o quintal, calçada ou até mesmo para dar descarga.
          </Text>
          <Image
            source={require('../../../assets/images/agua.png')}
            style={paginasAguastyles.icon}
          />
    
           </ScrollView>
          </View>
          
      );
    };
    
    export default maquinaDica;
    
      

