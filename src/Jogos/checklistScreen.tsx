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
    const [tasks, setTasks] = useState<Task[]>([]); // Lista de tarefas
    const [newTask, setNewTask] = useState<string>(''); // Texto da nova tarefa
    const [modalVisible, setModalVisible] = useState<boolean>(false); // Estado do modal

    // Adicionar nova tarefa
    const addTask = () => {
        if (newTask.trim() === '') {
            console.warn('O campo de tarefa está vazio.');
            return;
        }

        const task: Task = {
            id: Date.now().toString(),
            title: newTask,
            completed: false,
        };

        setTasks((prevTasks) => [...prevTasks, task]);
        setNewTask('');
        setModalVisible(false);
    };

    // Alternar o estado de conclusão da tarefa
    const toggleTaskCompletion = (id: string) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <View style={style.containerTask}>
            {/* Adicionando o logo ao fundo */}
            <Image source={Logo} style={[style.backgroundLogo, { zIndex: -1, position: 'absolute' }]} />

            {/* Título da lista */}
            <Text style={style.title}>Lista de tarefas</Text>

            {/* FlatList para exibir tarefas */}
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={style.taskContainer}>
                        {/* Checkbox */}
                        <TouchableOpacity
                            onPress={() => toggleTaskCompletion(item.id)}
                            style={style.checkbox}>
                            <MaterialIcons
                                name={item.completed ? 'check-box' : 'check-box-outline-blank'}
                                size={24}
                                color={item.completed ? '#4CAF50' : '#757575'}/>
                        </TouchableOpacity>
                        {/* Título da tarefa */}
                        <Text style={[style.taskTitle, item.completed && style.completedText]}>
                            {item.title || 'Tarefa sem título'}
                        </Text>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={style.emptyMessage}>Nenhuma tarefa adicionada.</Text>
                }
            />

            {/* Botões de limpar e adicionar */}
            <View style={style.buttonsContainer}>
                <TouchableOpacity style={style.clearButton} onPress={() => setTasks([])}>
                    <Text style={style.clearButtonText}>Limpar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.addButton} onPress={() => setModalVisible(true)}>
                    <Text style={style.saveButtonText}>Adicionar Tarefa</Text>
                </TouchableOpacity>
            </View>

            {/* Modal para adicionar tarefa */}
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Adicionar Nova Tarefa</Text>
                        <TextInput
                            style={style.modalInput}
                            value={newTask}
                            onChangeText={setNewTask}
                            placeholder="Digite a tarefa"
                            placeholderTextColor="#aaa"/>
                        <View style={style.modalButtons}>
                            <TouchableOpacity
                                style={style.clearButton}
                                onPress={() => setModalVisible(false)}>
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
