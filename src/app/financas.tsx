import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import financasStyles from './styles/financas.styles';

const Financas = () => {

  const router = useRouter();

  //com esse método eu consigo deixar a navegação com uma so função, e no botão onde passo ela você coloca o nome do arquivo que vai ser carregado
  function navegarPara(pagina: string) {
    router.push(`../financas-paginas/${pagina}`);
  }

  return (
    <View style={financasStyles.container}>
      <View style={financasStyles.header}>
        <Image
            style={financasStyles.logoEsquerda}
            source={require('../../assets/images/cofre.png')}
            resizeMode="contain"
          />
        <Image
            style={financasStyles.logoDireita}
            source={require('../../assets/images/logo_poupi_semfundo.png')}
          />
      </View>

      <ScrollView 
        contentContainerStyle={financasStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Text
            style={financasStyles.cards}
            onPress={() => navegarPara('contole-gastos')}
          >
            Tenha um controle de gastos mensal
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={financasStyles.cards}
            onPress={() => navegarPara('cuidados-cartao')}
          >
           Cuidado com o cartão de crédito
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={financasStyles.cards}
            onPress={() => navegarPara('compre-consiencia')}
          >
            Compre com consciência, não por impulso

          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={financasStyles.cards}
            onPress={() => navegarPara('reserva-emergencia')}
          >
            Tenha uma reserva de emergência
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={financasStyles.cards}
            onPress={() => navegarPara('investimentos')}
          >
           Aprenda sobre investimentos básicos
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Financas;
