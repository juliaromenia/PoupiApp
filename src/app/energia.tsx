import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import energiaStyles from './styles/energia.styles';
import { useRouter } from 'expo-router';

const Energia = () => {

  const router = useRouter();

  function energiaLed() {
    router.push('../energia-paginas/energia-led'); 
  }

  function desligarAparelhos() {
    router.push('../energia-paginas/desligar-aparelhos'); 
  }

  function horarioDePico() {
    router.push('../energia-paginas/horario-de-pico'); 
  }

  function geladeiraDicas() {
    router.push('../energia-paginas/geladeira-dica'); 
  }

  function arcondicionadoDica() {
    router.push('../energia-paginas/arcondicionado-dica'); 
  }

  return (
    <View style={energiaStyles.container}>
      <View style={energiaStyles.header}>
        <Image
            style={energiaStyles.logoEsquerda}
            source={require('../../assets/images/energia-sol.png')}
            resizeMode="contain"
          />
        <Image
            style={energiaStyles.logoDireita}
            source={require('../../assets/images/logo_poupi_semfundo.png')}
          />
      </View>

      <ScrollView 
        contentContainerStyle={energiaStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={energiaLed}
          >
            Troque lâmpadas por LED
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={desligarAparelhos}
          >
            Desligue aparelhos da tomada
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={horarioDePico}
          >
            Use eletrodomésticos fora do horário de pico
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={geladeiraDicas}
          >
            Mantenha a geladeira longe de fontes de calor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={arcondicionadoDica}
          >
            Regule o ar condicionado corretamente
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Energia;
