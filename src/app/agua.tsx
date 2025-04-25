import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import aguaStyles from './styles/agua.styles'
import { useRouter } from 'expo-router';

const Agua = () => {

  const router = useRouter();

  //com esse método eu consigo deixar a navegação com uma so função, e no botão onde passo ela você coloca o nome do arquivo que vai ser carregado
  function navegarPara(pagina: string) {
    router.push(`../agua-paginas/${pagina}`);
  }
  
  return (
    <View style={aguaStyles.container}>
      <View style={aguaStyles.header}>
        <Image
            style={aguaStyles.logoEsquerda}
            source={require('../../assets/images/agua-gota.png')}
            resizeMode="contain"
          />
        <Image
            style={aguaStyles.logoDireita}
            source={require('../../assets/images/logo_poupi_semfundo.png')}
          />
      </View>

      <ScrollView 
        contentContainerStyle={aguaStyles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity>
          <Text
            style={aguaStyles.cards}
            onPress={() => navegarPara('torneira')}
          >
            Feche a torneira ao escovar os dentes ou ensaboar as mãos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={aguaStyles.cards}
            onPress={() => navegarPara('maquina-lavar')}
          >
            Reaproveite a água da máquina de lavar
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={aguaStyles.cards}
            onPress={() => navegarPara('vazamento')}
          >
            Verifique e conserte vazamentos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={aguaStyles.cards}
            onPress={() => navegarPara('banho')}
          >
            Tome banhos mais curtos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={aguaStyles.cards}
            onPress={() => navegarPara('regar-plantas')}
          >
            Regue plantas no início da manhã ou à noite
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Agua;
