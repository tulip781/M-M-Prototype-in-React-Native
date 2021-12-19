import React from 'react';
import {
  NativeBaseProvider,
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

export default function App() {

  return (
    <NativeBaseProvider>
      <Center>
      <Box  safeArea>
      <Card  />
      </Box>
       </Center>
      <Bar />

    </NativeBaseProvider>
  );
}

