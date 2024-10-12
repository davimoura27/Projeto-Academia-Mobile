import {  View, TouchableOpacity, Text, ImageBackground} from "react-native";
import stylesClasse from '../style/styleClasseDeTreino'
import { useNavigation } from "@react-navigation/native";
import stylesImage from "../style/StyleImg";


const Series = [
{id:'1', Exercicio:'Supino inclinado', repeticoes: '4x10'},
{id:'1', Exercicio:'Supino inclinado com halter', repeticoes: '4x8 Carga maxima'} ,   
{id:'1', Exercicio:'Voador', repeticoes: '4x12'},
{id:'1', Exercicio:'Supino articulado', repeticoes: '4x10 Ate a falha'},
{id:'1', Exercicio:'Triceps corda', repeticoes: '5x15'},
{id:'1', Exercicio:'triceps frances', repeticoes: '4x15'},
{id:'1', Exercicio:'Elevação lateral', repeticoes: '4x10,12,15 diminuindo carga' },

{id:'2', Exercicio:'Extensora', repeticoes: '4x15'} ,   
{id:'2', Exercicio:'Agachamento Smith', repeticoes: '5x12'},
{id:'2', Exercicio:'Passada', repeticoes: '3x30 10s descanso entre serie'},
{id:'2', Exercicio:'Cadeira flexora', repeticoes: '5x12'},
{id:'2', Exercicio:'Stiff', repeticoes: '4x10 Ate a falha'},
{id:'2', Exercicio:'Mesa flexora', repeticoes: '4x15'},

{id:'3', Exercicio:'Puxada aberta', repeticoes: '4x15'} ,   
{id:'3', Exercicio:'Puxada Triangulo', repeticoes: '4x12'},
{id:'3', Exercicio:'Pull down', repeticoes: '3x30'},
{id:'3', Exercicio:'Remada Aberta', repeticoes: '5x12'},
{id:'3', Exercicio:'Remada com triangulo', repeticoes: '4x10 Ate a falha'},
{id:'3', Exercicio:'Biceps barra W', repeticoes: '4x Rosca 21'},
{id:'3', Exercicio:'Voador invertido', repeticoes: '4x15'},
{id:'3', Exercicio:'Elevação frontal', repeticoes: '4x12'},
{id:'3', Exercicio:'Desenvolvimento', repeticoes: '4x12'}
]

export default function ClasseDeTreino(){
    const navigation = useNavigation();
    
    
    const filtrarSerie = (classe) => {
        return Series.filter((serie)=> serie.id ===classe);
    }

  return (
    <ImageBackground source={require('../assets/Classe.jpeg')}
     style = {stylesImage.logo}>
      <View style ={stylesClasse.containerClasse}>
            
            <TouchableOpacity onPress={()=> navigation.navigate('ListaDeExercicio', 
                { series: filtrarSerie('1') })}
                style = {stylesClasse.buttonClasse}
                >
                <Text style={ stylesClasse.textStyle}> Classe A</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('ListaDeExercicio', 
                { series: filtrarSerie('2')})}
                style = {stylesClasse.buttonClasse}
                >
                <Text style={ stylesClasse.textStyle}> Classe B</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('ListaDeExercicio', 
                { series: filtrarSerie('3') })}
                style = {stylesClasse.buttonClasse}
                >
                <Text style={ stylesClasse.textStyle}> Classe C</Text>
            </TouchableOpacity>
         
    </View>
    </ImageBackground>
  )



}