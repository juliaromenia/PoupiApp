import { StyleSheet } from 'react-native';

const energiaStyles = StyleSheet.create({
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
        paddingVertical: 30,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoEsquerda: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
    },
    logoDireita: {
        width: 160,
        height: 160,
    },
    content: {
        marginTop: 20,
        width: '80%',
        paddingHorizontal: 10,
    },
    cards: {
        backgroundColor: '#fcad04',
        padding: 20,
        borderRadius: 20,
        marginVertical: 15,
        textAlign: 'center',
        fontSize: 20,
        color: '#545454',
        fontFamily: 'Baloo2_700Bold',
    }
});

export default energiaStyles;