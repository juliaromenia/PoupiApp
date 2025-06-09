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

subContainer: {
  position: 'relative',
  backgroundColor: '#f6d5aa',
  borderRadius: 30,
  width: '85%',
  height: 500,
  alignContent: 'center',
  alignItems: 'center',
},

titulo: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#fff',
  marginBottom: 20,
  marginTop: 50,
  fontFamily: 'Baloo2_700Bold',
},
input: {
  width: '85%',
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 8,
  paddingHorizontal: 15,
  marginBottom: 15,
  fontSize: 12,
  color: '#333',
  fontFamily: 'Baloo2_700Bold',
  textAlign: 'center',
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

});


export default loginStyles;