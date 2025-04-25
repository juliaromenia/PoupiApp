import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts, PatrickHand_400Regular } from '@expo-google-fonts/patrick-hand';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import paginasAguastyles from './styles/paginas-agua';
//import paginasEnergiatyles from './styles/paginas-energia';

const regarDica = () =>{
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
          <Text style={paginasAguastyles.title}>Regue plantas no início da manhã ou à noite</Text>
          <View style={paginasAguastyles.line} />
    
          <Text style={paginasAguastyles.subtitle}>Você sabia?</Text>
          <Text style={paginasAguastyles.description}>
          Regar plantas no início da manhã ou à noite ajuda a economizar água porque nesses períodos a temperatura está mais baixa e há menos incidência de sol direto. Isso reduz a evaporação da água, fazendo com que ela fique mais tempo disponível no solo para ser absorvida pelas raízes.
          </Text>
    
          <Image
            source={require('../../../assets/images/agua.png')}
            style={paginasAguastyles.icon}
          />
    
           </ScrollView>
          </View>
          
      );
    };
    
    export default regarDica;

      


    
      

