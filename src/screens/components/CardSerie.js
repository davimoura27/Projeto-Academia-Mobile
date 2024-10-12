import { Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import stylesCard from "../../style/styleCard"

export default function CardSerie({ serie }) {
  const navigation = useNavigation();

  return (


    <TouchableOpacity
      onPress={() => navigation.navigate('Serie', { serie })}>
      <View style={stylesCard.container}>
        <Text style={stylesCard.font} >{serie.Exercicio}</Text>
        <Text style={stylesCard.font} >{serie.repeticoes}</Text>
      </View>

    </TouchableOpacity>

  )

}