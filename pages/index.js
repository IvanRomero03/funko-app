import {
  Text,
  Box,
  Heading,
  Center,
  VStack,
  Flex,
  Image,
  HStack,
  Button,
  Spacer,
  Code,
} from "@chakra-ui/react";

const FunkoComponent = ({ name, image, price, description }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      _hover={{
        bg: "gray.200",
      }}
    >
      <Image src={image} alt={name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {price}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>

        <Box>{description}</Box>
      </Box>
    </Box>
  );
};

export default function Home() {
  return (
    <>
      <Flex
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="3.5"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h1" size="2xl" fontFamily={"monospace"}>
          Funko Pop!
        </Heading>
      </Flex>

      <Heading as="h2" size="xl" alignSelf={"center"} ml="10%" m="2.5%">
        Featured
      </Heading>
      <HStack
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        padding="3.5"
        textAlign="center"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        bg="pink.100"
        _before={{
          opacity: 0.4,
        }}
        _hover={{
          opacity: 0.8,
        }}
        backgroundBlendMode={"overlay"}
      >
        <Image
          src="/images/featuredFunko.png"
          alt="Featured Funko"
          width="30%"
          height="30%"
        />
        <VStack>
          <Code m="5%">
            Demon Slayer: Kimetsu no Yaiba - Tanjiro Kamado (Nezuko Ver.)
          </Code>
          <Text m="5%">Special Edition - Limited to 5000 pieces worldwide</Text>
        </VStack>
        <Button colorScheme="blue">Buy Now</Button>
        <Spacer />
      </HStack>
      <Flex m="2.5%" justifyContent="right">
        <Heading as="h2" size="xl" alignSelf={"center"} mr="5%">
          Most Popular
        </Heading>
      </Flex>
      <HStack justifyContent={"center"}>
        <FunkoComponent
          name="Demon Slayer: Kimetsu no Yaiba - Tanjiro Kamado (Nezuko Ver.)"
          image="/images/featuredFunko.png"
          price="$20.00"
          description="Special Edition - Limited to 5000 pieces worldwide"
        />
        <FunkoComponent
          name="Demon Slayer: Kimetsu no Yaiba - Tanjiro Kamado (Nezuko Ver.)"
          image="/images/featuredFunko.png"
          price="$20.00"
          description="Special Edition - Limited to 5000 pieces worldwide"
        />
        <FunkoComponent
          name="Demon Slayer: Kimetsu no Yaiba - Tanjiro Kamado (Nezuko Ver.)"
          image="/images/featuredFunko.png"
          price="$20.00"
          description="Special Edition - Limited to 5000 pieces worldwide"
        />
      </HStack>

      <Code justifySelf={"center"}>By: Ivan Romero</Code>
    </>
  );
}
