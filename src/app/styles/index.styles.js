import { StyleSheet } from 'react-native';

const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#adadd9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  subContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#C8E6C9',
    overflow: 'hidden',
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 550, 
    height: 320, 
    marginTop: 100, 
    marginBottom: 20 ,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold', 
    color: '#fff',
    marginBottom: 60, 
    fontFamily: 'Baloo2_700Bold' 
  },
  buttons: {
    backgroundColor: '#F48FB1',
    paddingVertical: 12,
    width: 300,         
    borderRadius: 25,
    marginVertical: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
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

export default indexStyles;