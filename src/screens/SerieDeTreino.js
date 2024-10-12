import { View, Text } from "react-native";

export default function SerieDeTreino({route}){
    const {serie} = route.params;
    return(
        <View>
        
        <Text>{serie.Exercicio}</Text>
        <Text>{serie.repeticoes}</Text>
        </View>
    );

}