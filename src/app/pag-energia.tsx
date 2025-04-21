import { View, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header da página */}
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo_poupi_semfundo.png')}
        />
      </View>

      {/* Conteúdo da página */}
      <View style={styles.content}>
        <Text style={styles.cards}>Troque lâmpadas por LED</Text>
        <Text style={styles.cards}>Desligue aparelhos da tomada</Text>
        <Text style={styles.cards}>Use eletrodomésticos fora do horário de pico</Text>
        <Text style={styles.cards}>Mantenha a geladeira longe de fontes de calor</Text>
        <Text style={styles.cards}>Regule o ar condicionado corretamente</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8eddd',
    paddingTop: 50, // Ajuste o espaçamento do topo para evitar sobreposição com o header
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#ffe249',
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'flex-end',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  image: {
    width: 150,
    height: 100,
  },
  content: {
    marginTop: 180, // Garantir que o conteúdo não sobreponha o header
    width: '80%',
    paddingHorizontal: 10,
  },
  cards: {
    backgroundColor: '#fcad04',
    padding: 20,
    borderRadius: 20,
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 17,
    color: '#545454',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30, // Espaço entre o conteúdo e o título
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: '#545454',
  },
});

export default App;

