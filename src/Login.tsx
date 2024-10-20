import { VStack,Image, Text, Box, FormControl, Input, Button, Link } from "native-base";
import Logo from './assets/Logo.png'
import { TouchableOpacity } from "react-native";
import { Titulo } from "./componentes/Titulo";
import { EntradaTexto } from "./componentes/EntradaTexto";

export default function Login({navigation}) {
    return (
        <VStack flex={1} alignItems="center"  justifyContent="center" p={5}>
            <Image source={Logo} alt="Logo LifeStyle" />

            <Titulo>
                Faça o login em sua conta
            </Titulo>    
            <Box mb={2}>
                <EntradaTexto
                    label="Email"
                    placeholder="Insira seu endereço de e-mail"
                />
                <EntradaTexto
                    label="Senha"
                    placeholder="Insira sua senha"
                />    
            </Box>
            <Button onPress={() =>navigation.navigate('Tabs')}>Entrar</Button>
            <Link href='http://www.alura.com.br' mt={2}>
            Esqueceu sua senha? 
            </Link>
            <Box w="100%" flexDirection='row' justifyContent="center" mt={5}>
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text color="blue.500">
                        Faça o seu cadastro!
                    </Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}