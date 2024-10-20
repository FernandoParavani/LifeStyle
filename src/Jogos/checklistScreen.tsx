import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from "../components/Input/stylesChecklist";
import Logo from '../assets/Logo.png'; 

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

export default function Checklist() {
    const [tasks, setTasks] = useState<Task[]>([]); 
    const [newTask, setNewTask] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const toggleTaskCompletion = (id: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks(prevTasks => [
                ...prevTasks,
                { id: Date.now().toString(), title: newTask, completed: false }
            ]);
            setNewTask('');
            setModalVisible(false);
        }
    };

    return (
        <View style={style.containerTask}>
            {/* Adicionando o logo de fundo centralizado */}
            <Image source={Logo} style={style.backgroundLogo} />

            {/* Conteúdo da lista de tarefas */}
            <Text style={style.title}>Lista de tarefas</Text>

            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <View style={style.taskContainer}>
                        <TouchableOpacity onPress={() => toggleTaskCompletion(item.id)} style={style.checkbox}>
                            <MaterialIcons
                                name={item.completed ? 'check-box' : 'check-box-outline-blank'}
                                size={24}
                                color={item.completed ? '#4CAF50' : '#757575'}
                            />
                        </TouchableOpacity>
                        <Text style={[style.taskTitle, item.completed && style.completedText]}>{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                ListEmptyComponent={<Text style={style.emptyMessage}>Nenhuma tarefa adicionada.</Text>} // Mensagem quando não há tarefas
            />

            {/* Botões de Limpar e Adicionar Tarefa */}
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.clearButton} onPress={() => setTasks([])}>
                    <Text style={style.clearButtonText}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={style.saveButtonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

            {/* Modal para Adicionar Tarefa */}
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Adicionar Nova Tarefa</Text>
                        <TextInput
                            style={style.modalInput}
                            value={newTask}
                            onChangeText={setNewTask}
                            placeholder="Nome da tarefa"
                        />
                        <View style={style.modalButtons}>
                            <TouchableOpacity style={style.clearButton} onPress={() => setModalVisible(false)}>
                                <Text style={style.clearButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.addButton} onPress={addTask}>
                                <Text style={style.saveButtonText}>Adicionar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
