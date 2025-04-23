import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import energiaStyles from './styles/energia.styles';
import { useRouter } from 'expo-router';

const Energia = () => {

  const router = useRouter();

  //com esse método eu consigo deixar a navegação com uma so função, e no botão onde passo ela você coloca o nome do arquivo que vai ser carregado
  function navegarPara(pagina: string) {
    router.push(`../energia-paginas/${pagina}`);
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
            onPress={() => navegarPara('energia-led')}
          >
            Troque lâmpadas por LED
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={() => navegarPara('desligar-aparelhos')}
          >
            Desligue aparelhos da tomada
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={() => navegarPara('horario-de-pico')}
          >
            Use eletrodomésticos fora do horário de pico
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={() => navegarPara('geladeira-dica')}
          >
            Mantenha a geladeira longe de fontes de calor
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={energiaStyles.cards}
            onPress={() => navegarPara('arcondicionado-dica')}
          >
            Regule o ar condicionado corretamente
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Energia;
