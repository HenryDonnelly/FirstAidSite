import { Box, Text } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react"


function Documentation() {
  return (
  <Box height="92vh" width="100vw" bg="blue.300">
    <Flex h="100%">
  <Box flex="1" bg="blue.300">
  <Box pt="14vh" pl="2vw">
    <Text fontSize="xl" fontWeight="bold">
      Installation
    </Text>

    <Text mt={3} fontSize="l">
      To run the app, simply download the APK from the download link in the heading which leads to the GitHub project page.
    </Text>

    <Text fontSize="xl" fontWeight="bold" mt={8}>
      Using the app
    </Text>

    <Text mt={3} fontSize="l">
      To begin performing QCPR on your Meta Quest 3 headset, first launch the APK from the Download page. Once starting the app, a virtual manikin will appear along with some text on getting started. Align the virtual manikin over your real world manikin (if you have one, otherwise just align the manikin on the floor). Press the "Lock Position" button to lock the manikin in place and press "Begin CPR", once you get in position, you are now ready to begin your QCPR session. 
    </Text>

    <Text fontSize="xl" fontWeight="bold" mt={8}>
      How to perform CPR
    </Text>

    <Text mt={3} fontSize="l">
      When using the app for training, It looks for a compression rate of 100-120 compressions per minute at a depth of 5cm. 
    </Text>

    <Text fontSize="xl" fontWeight="bold" mt={8}>
      "How do I give feedback?"
    </Text>

    <Text mt={3} fontSize="l">
      To give feedback, you are more than welcome to email N00220105@iadt.ie. If you enjoyed using the app and would like to submit a quick feedback form please see the links below:
    </Text>

    <Text mt={3} fontSize="small">
    - QCPR interest form: https://forms.cloud.microsoft/e/Dss1FRpnnD
    </Text>

    <Text mt={3} fontSize="small">
    - QCPR usability form: https://forms.cloud.microsoft/e/duki6Nie6s
    </Text>

  </Box>
</Box>
      <Box flex="1" bg="blue.300">
        
        </Box>
</Flex>
</Box>
  );
}

export default Documentation;
