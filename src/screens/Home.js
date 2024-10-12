import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, ImageBackground, View, Text } from "react-native";
import stylesImage from "../style/StyleImg";
import stylesHome from "../style/StyleHome";

export default function Home() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/logo.jpg')}
            style={stylesImage.logo}
        >
            <Text style={stylesHome.title}>Bem vindo! </Text>
            <View style={stylesHome.container}>

                <Text style={stylesHome.font}>Consultar lista de treino</Text>
                <TouchableOpacity onPress={() => navigation.navigate('ClasseDeTreino')}
                    style={stylesHome.button}
                >
                    <Text style={stylesHome.font}>Enter</Text>

                </TouchableOpacity>


            </View>
        </ImageBackground>
    )
}