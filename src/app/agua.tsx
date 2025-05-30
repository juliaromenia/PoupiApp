import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import aguaStyles from './styles/agua.styles'
import { useRouter } from 'expo-router';
import { BottomMenu } from '../app/bottomMenu';

const Agua = () => {
  const [filtro, setFiltro] = useState('');
  const router = useRouter();

  const dicas = [
    { label: 'Feche a torneira ao escovar os dentes ou ensaboar as mãos', pagina: 'torneira' },
    { label: 'Reaproveite a água da máquina de lavar', pagina: 'maquina-lavar' },
    { label: 'Verifique e conserte vazamentos', pagina: 'vazamento' },
    { label: 'Tome banhos mais curtos', pagina: 'banho' },
    { label: 'Regue plantas no início da manhã ou à noite', pagina: 'regar-plantas' },
  ];

  const dicasFiltradas = dicas.filter(dica =>
    dica.label.toLowerCase().includes(filtro.toLowerCase())
  );

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
        {dicasFiltradas.map(dica => (
          <TouchableOpacity key={dica.pagina}>
            <Text
              style={aguaStyles.cards}
              onPress={() => navegarPara(dica.pagina)}
            >
              {dica.label}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={{ height: 80 }} />
      </ScrollView>
      <BottomMenu
        backgroundColor="#89ccff"
        onSearch={setFiltro} />
    </View>
  );
};

export default Agua;
