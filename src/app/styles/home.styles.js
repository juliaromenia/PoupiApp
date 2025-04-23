import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adadd9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#f6d5aa',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 70,
  },
  logo: {
    width: 180,
    height: 80,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Baloo2_700Bold',
    marginTop: 10,
    fontSize: 18,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  button: {
    width: 220,
    height: 90,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 28,
    fontFamily: 'Baloo2_700Bold',
    color: '#fff',
  },
  energia: {
    backgroundColor: '#ffe249',
  },
  agua: {
    backgroundColor: '#89ccff',
  },
  financas: {
    backgroundColor: '#9ed32b',
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 10,
    resizeMode: 'contain',
  },
});

export default homeStyles;