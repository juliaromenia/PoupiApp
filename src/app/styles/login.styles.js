import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({

  container: {
  flex: 1,
  backgroundColor: '#adadd9',
  alignItems: 'center',
},

logoContainer: {
 marginBottom:0,
 alignItems: 'center',
},

logo: {
  width: 200,
  height: 300,
},
 backButton: {
        padding: 20,
      },
      backIcon: {
        width: 40,
        height: 40,
      },

subContainer: {
  position: 'relative',
  marginTop: -50,
  backgroundColor: '#f6d5aa',
  borderRadius: 30,
  width: '85%',
  height: 500,
  alignContent: 'center',
  alignItems: 'center',
},
imagem: {
  width: 100,
  height: 100,
  position: 'absolute',
  top: 10,
  left: '60%',
  marginLeft: -50,
  transform: [{ translateX: -100 }],
  alignItems: 'center'
},
titulo: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
  textAlign: 'center',
  marginTop: 50,
  marginLeft: 50,
  marginBottom: 60,
  fontFamily: 'Baloo2_700Bold',
},
subtexto: {
  fontSize: 14,
  color: '#fff',
  marginBottom: 20,
  paddingHorizontal: 50,
  textAlign: 'center',
  fontFamily: 'Baloo2_700Bold',
},
inputContainer: {
  flexDirection: 'row',
  textAlign: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 10,
  marginBottom: 20,
  backgroundColor: '#fff',
  width: '85%',
  height: 50, 
  fontSize: 14,
  fontFamily: 'Baloo2_700Bold', 
},

iconEmail: {
  width: 20,
  height: 20,
  marginRight: -20,
  resizeMode: 'contain',
},
iconUser: {
  width: 27,
  height: 27,
  marginRight: -20,
  marginLeft: -4,
  resizeMode: 'contain',
},

input: {
  flex: 1,
  fontSize: 14,
  fontFamily: 'Baloo2_700Bold',
  color: '#000',
  textAlign: 'center',
},

button: {
    backgroundColor: '#F48FB1',
    paddingVertical: 8,
    width: 200,         
    borderRadius: 25,
    marginBottom: 30,
    alignItems: 'center',
  },
   buttonText: {
    fontSize: 16,
    fontFamily: 'Baloo2_700Bold',
    color: '#fff',
    
  },
  buttonCadastro: {
    backgroundColor: '#F48FB1',
    paddingVertical: 5,
    width: 200,         
    borderRadius: 25,
    alignItems: 'center',
    marginVertical: -30
  },

});


export default loginStyles;