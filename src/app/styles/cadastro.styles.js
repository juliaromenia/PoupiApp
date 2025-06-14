import { StyleSheet } from 'react-native';

const cadastroStyles = StyleSheet.create({

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
  padding: 10,
  position: 'absolute',
  top: 20,
  marginLeft: -100,
  transform: [{ translateX: -100 }],

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
  left: '70%',
  marginLeft: -80,
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
  fontSize: 10,
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
  link: {
  color: '#F48FB1',
  textDecorationLine: 'underline',
},
});


export default cadastroStyles;
