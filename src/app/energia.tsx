import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import energiaStyles from './styles/energia.styles';
import { useRouter } from 'expo-router';
import { BottomMenu } from '../app//bottomMenu';

const Energia = () => {

  const router = useRouter();
  const [filtro, setFiltro] = useState('');

  const dicas = [
    { label: 'Troque lâmpadas por LED', pagina: 'energia-led' },
    { label: 'Desligue aparelhos da tomada', pagina: 'desligar-aparelhos' },
    { label: 'Use eletrodomésticos fora do horário de pico', pagina: 'horario-de-pico' },
    { label: 'Mantenha a geladeira longe de fontes de calor', pagina: 'geladeira-dica' },
    { label: 'Regule o ar condicionado corretamente', pagina: 'arcondicionado-dica' },
  ];

  const dicasFiltradas = dicas.filter(dica =>
    dica.label.toLowerCase().includes(filtro.toLowerCase())
  );

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
        {dicasFiltradas.map(dica => (
          <TouchableOpacity key={dica.pagina}>
            <Text
              style={energiaStyles.cards}
              onPress={() => navegarPara(dica.pagina)}
            >
              {dica.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <BottomMenu
        backgroundColor="#ffe249"
        onSearch={setFiltro}
      />
    </View>
  );
};

export default Energia;
