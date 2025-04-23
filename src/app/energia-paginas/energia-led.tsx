import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useFonts, Kalam_400Regular, Kalam_700Bold } from '@expo-google-fonts/kalam';
import AppLoading from 'expo-app-loading';

const TroqueLampadas = () => {
  const [fontsLoaded] = useFonts({
    Kalam_400Regular,
    Kalam_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../../../assets/images/seta-esquerda.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/logo_poupi_semfundo.png')}
          style={styles.logo}
        />
      </View>

      {/* Título */}
      <Text style={styles.title}>Troque lâmpadas por LED</Text>
      <View style={styles.line} />

      {/* Conteúdo */}
      <Text style={styles.subtitle}>Você sabia?</Text>
      <Text style={styles.description}>
        Lâmpadas LED consomem até{"\n"}
        80% menos energia que as{"\n"}
        incandescentes e duram muito{"\n"}
        mais. É um investimento que{"\n"}
        compensa rapidamente.
      </Text>

      <Image
        source={require('../../../assets/images/energia-sol.png')}
        style={styles.icon}
      />

      {/* Footer (ícones de navegação) 
      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/search.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/user.png')} style={styles.footerIcon} />
        </TouchableOpacity>
          </View>
          */}
      </View>
      
  );
};

export default TroqueLampadas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eddd',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffe249',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d88c94',
    marginTop: 20,
    fontFamily: 'Kalam_700Bold',
  },
  line: {
    height: 1,
    width: '90%',
    backgroundColor: '#545454',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Kalam_700Bold',
    color: '#fcad04',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Kalam_400Regular',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#ffe249',
    width: '100%',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
