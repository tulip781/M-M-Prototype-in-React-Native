import React from "react"
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
const Card = () => {
  return (
    <Box
    safeArea
      maxW="80"
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
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
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
          Daddy's Pasta
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            Veggie Dhal
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
            Pasta, Tomato, Salad
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
