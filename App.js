import React from 'react';
import {
  NativeBaseProvider,
  ScrollView,
  Spacer,
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Bar from './app/bottom.js';
import Card from './app/card.js';
import AppBar from './app/navbar.js'

export default function App() {
    const meals = require('./app/db.json');
    let mealList = []
    let mealsHTML = meals.forEach((meal, index)=>{
mealList.push(<Card key={index} image={meal.image} title={meal.title} ingredients={meal.ingredients} p="100"></Card>);

    })

  return (
    <NativeBaseProvider>
      <AppBar/>
      <ScrollView>
      <Center>
      {mealList}
       </Center>
       </ScrollView>

    <Bar/>
    </NativeBaseProvider>
  );
}

