
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import ClasseDeTreino from './src/screens/ClasseDeTreino';
import SerieDeTreino from './src/screens/SerieDeTreino';
import ListaExercicio from './src/screens/ListaExercicio';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName ='Home' 

       screenOptions={{
        headerStyle: {
          backgroundColor: '#1E90FF',  
        },
        headerTintColor: '#fff',       
        headerTitleStyle: {
          fontWeight: 'bold',          
          fontSize: 24,              
        },
       
        headerTitleAlign: 'center',    
      
     
      }}
      >
        <Stack.Screen name='Home'  component={Home}/>
        <Stack.Screen name='ClasseDeTreino' component={ClasseDeTreino} options={ {title:'Classes de treino'}}/> 
         <Stack.Screen name='SerieDeTreino' component={SerieDeTreino}/>
        <Stack.Screen name='ListaDeExercicio' component={ListaExercicio} options={{title:'Lista de treino'}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


