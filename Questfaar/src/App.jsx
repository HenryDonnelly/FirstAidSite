import { useState, useEffect } from "react";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Flex, Spacer } from "@chakra-ui/react"
import { Routes, Route, Link } from "react-router-dom";
import Documentation from "./Documentation";


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    // Fade icon after 1.5s
    const iconTimeout = setTimeout(() => setShowIcon(false), 1500);

    // Remove black screen after 3s
    const splashTimeout = setTimeout(() => setShowSplash(false), 3000);

    return () => {
      clearTimeout(iconTimeout);
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "lightyellow",
              zIndex: 1000,
            }}
          >
            <Center h="100%" w="100%">
              <AnimatePresence>
                {showIcon && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1 }}
                  >
                    <Image src="/vr1.svg" boxSize="100px" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Center>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <Box height="10vh" width="100vw" bg="lightblue">
      <Flex gap="4" justify="space-between">
      <Box as="a" href="https://github.com/HenryDonnelly/FirstAidMetaQ" height="10vh" width="60" textAlign="center" alignContent="center"><Text fontSize="2xl" fontWeight="bold">
    Download
  </Text></Box>
      <Box height="10vh" width="60" marginEnd="auto" textAlign="center" alignContent="center"><Link to="/docs">
            <Text fontSize="2xl" fontWeight="bold">Documentation</Text>
          </Link></Box>
      <Box height="10vh" width="40" alignContent="center">  <Link to="/">
<Image src="/vr1.svg" boxSize="100px" /></Link></Box>
    </Flex>
      </Box>

      <Routes>
        <Route path="/" element={
      <Box height="90vh" width="100vw" bg="white">
  <Flex h="100%">
    {/* Left Section */}
  <Box flex="1" bg="blue.300">
  <Box pt="30vh" pl="2vw">
    <Text fontSize="6xl" fontWeight="bold">
      What is QCPR?
    </Text>

    <Text mt={8} fontSize="xl">
      Quality cardiopulmonary resuscitation (QCPR) is a method of performing CPR that 
      emphasizes the quality of chest compressions (and ventilations) to improve patient outcomes 
      during cardiac arrest. QCPR involves monitoring and providing feedback on performance 
      metrics such as compression depth and rate to ensure that 
      rescuers are delivering effective CPR.
    </Text>
  </Box>
</Box>

    {/* Right Section */}
      <Box flex="1" bg="blue.400">
      <Box pt="30vh" pl="2vw" color="white">
    <Text fontSize="6xl" fontWeight="bold">
      My Goal
    </Text>

    <Text mt={8} fontSize="xl">
      The aim of this project is to create an open-source app for QCPR training and feedback,
      Where users can practice their CPR skills through augmented reality to receive real-time feedback on their performance
      with the Meta Quest 3 VR headset.
    </Text>
  </Box>
</Box>
  </Flex>
</Box>
        }
        />
  <Route path="/docs" element={<Documentation />} />
</Routes>
    </>
  );
}

export default App;
