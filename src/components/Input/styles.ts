import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

export const style = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop: {
        height: Dimensions.get('window').height / 3.5,
        width: '100%',
        backgroundColor: themas.colors.primary,
        alignItems: 'center',
        justifyContent: 'center'

    },
    boxMid: {
        height: Dimensions.get('window').height / 2.2,
        width: '100%',
        backgroundColor: themas.colors.primary,
        paddingHorizontal: 37
    },
    boxBottom: {
        height: Dimensions.get('window').height / 5,
        width: '100%',
        backgroundColor: themas.colors.primary,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150
    },
    text: {
        fontWeight: "bold",
        marginTop: 20,
        color: themas.colors.secondary,
        fontSize: 18
    },
    titleInput: {
        marginLeft: 5,
        color: themas.colors.secondary,
        marginTop: 20
    },
    boxInput: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: themas.colors.fundoInput,
        borderColor: themas.colors.fundoInput
    },
    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
    },
    button: {
        textAlign: 'center',
        height: 50,
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themas.colors.secondary,
        borderRadius: 40,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    textButton: {
        fontWeight: "bold",
        color: themas.colors.fundoInput,
        fontSize: 18
    },
    textBottom: {
        fontSize: 16,
        color: themas.colors.secondary
    },
    textBottomAccount: {
        fontSize: 16,
        color: themas.colors.secondary,
    },
})

