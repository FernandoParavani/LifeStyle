import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    containerTask: {
        flex: 1,
        padding: 20,
        backgroundColor: themas.colors.primary,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    backgroundLogo: {
        position: 'absolute',
        width: width * 0.7, 
        height: width * 0.7, 
        top: (height - width * 0.7) / 2, 
        left: (width - width * 0.7) / 2, 
        opacity: 0.1, 
        zIndex: 0, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        zIndex: 1, 
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: themas.colors.secondary,
        zIndex: 1,
    },
    checkbox: {
        marginRight: 10,
        zIndex: 1,
    },
    taskTitle: {
        fontSize: 18,
        flex: 1,
        zIndex: 1,
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: themas.colors.secondary,
        zIndex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 10,
        zIndex: 1,
    },
    clearButton: {
        backgroundColor: '#C4C4C4',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        zIndex: 1,
    },
    clearButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#0B3B60', 
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        zIndex: 1,
    },
    saveButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1,
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        zIndex: 1,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        zIndex: 1,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        zIndex: 1,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
    },
    emptyMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: '#757575',
        marginTop: 20,
        zIndex: 1,
    },
});
