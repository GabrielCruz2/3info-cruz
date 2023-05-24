import {View} from "react-native"
import {Text, Button} from "react-native-paper"
import styles from "../utils/styles"


export default function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lets go a pesquisar coisas dos outros bora!</Text>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarProduto")}}
                style={styles.button}
            >Vamos dar umaa volta na tela de Buscar Produtos clique aqui e seja Feliz!</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarAnimal")}}
                style={styles.button}
            >Vamos dar uma volta na tela de Buscar Animal clique aqui e seja Feliz.</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarPessoa")}}
                style={styles.button}
            >Vamos dar uma volta na tela de Buscar uma Pessoa clique aqui e seja Feliz.</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarCarro")}}
                style={styles.button}
            >Vamos dar uma volta na tela de Buscar Carro clique aqui e seja Feliz.</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarFruta")}}
                style={styles.button}
            >Vamos dar uma volta na tela de Buscar Fruta clique aqui e seja Feliz.</Button>
            <Button
                mode="contained"
                onPress={()=>{navigation.navigate("BuscarCor")}}
                style={styles.button}
            >Vamos dar uma volta na tela de Buscar Cor clique aqui e seja Feliz.</Button>
        </View>
    )
}