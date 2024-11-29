import { Dimensions, StyleSheet } from 'react-native';
import { themas } from '../../global/themes';

const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
    containerTask: {
        flex: 1,
        padding: 20,
        backgroundColor: themas.colors.primary,
    },
    backgroundLogo: {
        position: 'absolute',
        width: width * 0.7, 
        height: width * 0.7,
        top: height * 0.25, // Mantém o logo centralizado no eixo vertical
        left: (width - width * 0.7) / 2,
        opacity: 0.1,
        zIndex: -1, // Coloca o logo atrás do conteúdo
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: themas.colors.secondary, // Certifique-se de que contrasta com o fundo
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: themas.colors.secondary,
    },
    checkbox: {
        marginRight: 10,
    },
    taskTitle: {
        fontSize: 18,
        flex: 1,
        color: themas.colors.text, // Certifique-se de usar uma cor visível
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#757575', // Cor cinza para tarefas concluídas
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingBottom: 10,
    },
    clearButton: {
        backgroundColor: '#C4C4C4',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    clearButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#0B3B60',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
    },
    saveButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        color: '#000', // Certifique-se de que o texto do input seja visível
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    emptyMessage: {
        textAlign: 'center',
        fontSize: 16,
        color: '#757575',
        marginTop: 20,
    },
});
