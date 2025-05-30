import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import financasStyles from './styles/financas.styles';
import { BottomMenu } from '../app//bottomMenu';

const Financas = () => {
  const [filtro, setFiltro] = useState('');
  const router = useRouter();

  const dicas = [
    { label: 'Tenha um controle de gastos mensal', pagina: 'controle-gastos' },
    { label: 'Cuidado com o cartão de crédito', pagina: 'cuidados-cartao' },
    { label: 'Compre com consciência, não por impulso', pagina: 'compre-conciencia' },
    { label: 'Tenha uma reserva de emergência', pagina: 'reserva-emergencia' },
    { label: 'Aprenda sobre investimentos básicos', pagina: 'investimentos' },
  ];

  const dicasFiltradas = dicas.filter(dica =>
    dica.label.toLowerCase().includes(filtro.toLowerCase())
  );

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
        {dicasFiltradas.map(dica => (
          <TouchableOpacity key={dica.pagina}>
            <Text
              style={financasStyles.cards}
              onPress={() => navegarPara(dica.pagina)}
            >
              {dica.label}
            </Text>
          </TouchableOpacity>
        ))}
        <View style={{ height: 80 }} />
      </ScrollView>
      <BottomMenu
        backgroundColor="#9ed32b"
        onSearch={setFiltro}
      />
    </View>
  );
};

export default Financas;
