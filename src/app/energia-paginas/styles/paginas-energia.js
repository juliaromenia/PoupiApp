import { StyleSheet } from 'react-native';

const paginasEnergiatyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8eddd',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 0,
      },
      header: {
        backgroundColor: '#ffe249',
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      backButton: {
        padding: 20,
      },
      backIcon: {
        width: 40,
        height: 40,
      },
      logo: {
        width: 160,
        height: 160,
        resizeMode: 'contain',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#d88c94',
        marginTop: 20,
        fontFamily: 'Baloo2_700Bold',
        textAlign: 'center',
      },
      line: {
        height: 1,
        width: '90%',
        backgroundColor: '#a6a6a6',
        marginVertical: 10,
        alignSelf: 'center',
      },
      subtitle: {
        fontSize: 28,
        fontFamily: 'Baloo2_700Bold',
        color: '#fcad04',
        marginBottom: 10,
        textAlign: 'center',
      },
      description: {
        fontSize: 30,
        fontFamily: 'PatrickHand_400Regular',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
        marginVertical: 10,
      },
      icon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 40,
      },

});

export default paginasEnergiatyles;