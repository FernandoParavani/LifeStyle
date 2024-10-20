import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/Titulo";


export default function Perfil(){
    return(
        <ScrollView flex={1} p={20}>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar size="xl" source={{uri:"https://github.com/FernandoParavani.png" }} mt={5}/>

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Fernando Juan</Titulo>
                <Text>17/07/1997</Text>
                <Text>São Paulo</Text>

                <Divider mt={5}/>

                <Titulo color="blue.500" mb={1}>Historico Piscologico</Titulo>
                <Text>Ansiedade</Text>
                <Text>Hiperatismo</Text>
            </VStack>
        </ScrollView>
    )

}