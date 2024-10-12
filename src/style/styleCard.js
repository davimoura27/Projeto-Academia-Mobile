import { StyleSheet } from "react-native";

const stylesCard = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',

    },

    font: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#5556',
        paddingLeft:20,
        borderRadius:5


    },

})
export default stylesCard