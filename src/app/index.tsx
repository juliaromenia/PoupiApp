import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Image style={styles.logo}
          source={require('../../assets/images/logo_poupi.png')
          }
        />
        <Text style={styles.subtitle}>
          SEU APP DE DICAS PARA ECONOMIZAR{"\n"}
          ENERGIA, ÁGUA E ORGANIZAR FINANÇAS{"\n"}
          PESSOAIS
        </Text>
      </View>

      {/* Botões */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.energia]}>
        <Image source={require('../../assets/images/energia.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Energia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.agua]}>
        <Image source={require('../../assets/images/agua.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Água</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.financas]}>
        <Image source={require('../../assets/images/cofrinho.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Finanças</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B7AEE0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  header: {
    backgroundColor: '#f6d5aa',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 180,
    height: 80,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 15,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    width: 220,
    height: 80,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  energia: {
    backgroundColor: '#FFDE59',
  },
  agua: {
    backgroundColor: '#7ED6FC',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 10,
    resizeMode: 'contain',
  },
  financas: {
    backgroundColor: '#A3DD57',
  },
});
