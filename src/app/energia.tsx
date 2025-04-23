import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import energiaStyles from './styles/energia.styles';

const Energia = () => {
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
        showsVerticalScrollIndicator={false} // Esconde a barra de rolagem
      >
        <TouchableOpacity>
          <Text style={energiaStyles.cards}>Troque lâmpadas por LED</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={energiaStyles.cards}>Desligue aparelhos da tomada</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={energiaStyles.cards}>Use eletrodomésticos fora do horário de pico</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={energiaStyles.cards}>Mantenha a geladeira longe de fontes de calor</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={energiaStyles.cards}>Regule o ar condicionado corretamente</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Energia;
