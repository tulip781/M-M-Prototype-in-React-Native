import React, { useState, useEffect }from "react"

import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base"
const Card = (props) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getMovies = async () => {
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos/1');
      const json = await response.json();
      setData(json);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  });



  return (
    <Box
    safeArea
      maxW="80"
      my="2"
      rounded="lg"
      overflow="hidden"
      borderColor="coolGray.200"
      borderWidth="1"
      _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "amber.50",
      }}
      _web={{
        shadow: 2,
        borderWidth: 0,
      }}
      _light={{
        backgroundColor: "amber.50",
      }}
    >
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image
            source={{
              uri: props.image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg="yellow.500"
          _dark={{
            bg: "yellow.400",
          }}
          _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs",
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5"
        >
         {props.title}
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            {props.title}
          </Heading>
          <Text
            fontSize="xs"
            _light={{
              color: "amber.500",
            }}
            _dark={{
              color: "violet.400",
            }}
            fontWeight="500"
            ml="-0.5"
            mt="-1"
          >
            {props.ingredients}
          </Text>
        </Stack>
        <Text fontWeight="400">
          Daddy’s Pasta is made using a rich meaty tomato sauce with free range beef and pork, slowly simmered with organic courgettes, lentils, onions and carrots. This is combined with whole grain fusilli and topped with a cheese and bread crumb.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontWeight="400"
            >
              220g
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  )
}

export default Card;
