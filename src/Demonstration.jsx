import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react"


function Demonstration() {
  return (
  <Box height="92vh" width="100vw" bg="blue.300" justifyContent="center" alignItems="center">
    <Flex h="100%">
  <Box flex="1" bg="blue.300" justifyItems="center" paddingTop="15vh">

    <iframe
        width="900"
        height="560"
        src="https://www.youtube.com/embed/C9YFn1GDVGo"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
</Box>
</Flex>
</Box>
  );
}

export default Demonstration;
