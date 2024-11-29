import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Image } from 'react-native';
import { style } from "../components/Input/stylesReadingScreen";
import Logo from '../assets/Logo.png'; 

export default function ReadingScreen() {
    const resources = [
        { id: '1', title: 'Educação Física e qualidade de vida', link: 'https://www.scielo.br/j/sausoc/a/N9HvQRc6CfvzkG6XnCyvCNg/?utm_source=chatgpt.com' },
        { id: '2', title: 'Mindfulness na Educação', link: 'https://www.scielosp.org/pdf/icse/2020.v24/e200015/pt?utm_source=chatgpt.com' },
        { id: '3', title: 'Benefícios do exercício físico para a saúde mental', link: 'https://www.scielo.br/j/csc/a/T57NLtQCjwKmBXYyvWVW5qq/?utm_source=chatgpt.com' },
        { id: '4', title: 'Os 7 segredos para uma vida organizada', link: 'https://loopdesucesso.com/organizacao-pessoal/?utm_source=chatgpt.com' },
        { id: '5', title: 'Entenda o que é a procrastinação', link: 'https://etalent.com.br/artigos/autoconhecimento/procrastinacao/?utm_source=chatgpt.com' }
    ];

    const renderItem = ({ item }: any) => (
        <TouchableOpacity style={style.item} onPress={() => Linking.openURL(item.link)}>
            <Text style={style.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={style.containerReading}>
   
            <View style={style.logoContainer}>
                <Image source={Logo} style={style.logo}/>
            </View>

            
            <Text style={style.headerReading}>Artigos e Livros Gratuitos</Text>

            <FlatList
                data={resources}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
