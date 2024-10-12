import React from "react";
import { View, FlatList, ImageBackground } from "react-native";
import CardSerie from "./components/CardSerie";
import stylesList from "../style/styleListaExercicio"
import stylesCard from "../style/styleCard";

export default function ListaExercicio({ route }) {

    const { repeticoes, series } = route.params;

    return (
        <ImageBackground source={require('../assets/lista.jpg')}
            style={stylesCard.image}
        >
            <FlatList

                data={series}
                keyExtractor={(item) => item.Exercicio}
                renderItem={({ item }) => <CardSerie serie={item} />}

            />

        </ImageBackground>
    )


}