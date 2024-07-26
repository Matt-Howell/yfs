import { 
    Flex,
    Text,
    Heading,
    Button,
    Box,
    Stack,
    HStack,
    VStack,
    List,
    ListItem,
    ListIcon,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
  } from '@chakra-ui/react'
  import { FaCheckCircle } from 'react-icons/fa'
  
  function PriceWrapper({ children }) {
    return (
      <Flex
        flexDirection="column"
        mb={4}
        shadow="base"
        borderWidth="1px"
        maxWidth={450}
        height="100%"
        bg={'#fafafa'}
        flex={1}
        fontFamily={"'Montserrat', sans-serif!important"}
        alignSelf={{ base: 'center', md: 'flex-start' }}
        borderColor={'gray.200'}
        borderRadius={'xl'}>
        {children}
      </Flex>
    );
  }
  
  export default function Pricing() { 
    return (
      <div>
      <Flex py={1}>
        <Stack
          flexGrow="1"
          flexBasis="0"
          direction={{ base: 'column', md: 'row' }}
          textAlign="center"
          justify="center"
          flex={1}
          display="flex"
          spacing={{ base: 4, md: 10 }}
          py={8}>
          <PriceWrapper>
            <Box position="relative">
              <Box
                position="absolute"
                top="-15px"
                display={{ base:"flex", md:"none", lg:"flex" }}
                left="50%"
                style={{ transform: 'translate(-50%)' }}>
                <Text
                  textTransform="uppercase"
                  bg={'#197b4d61'}
                  px={3}
                  py={1}
                  color={'gray.900'}
                  fontSize="sm"
                  fontWeight="600"
                  rounded="xl">
                  Cancel Anytime
                </Text>
              </Box>
              <Box pt={8} pb={4} px={12}>
              <Text fontWeight="500" fontSize="2xl">
                Subscription
              </Text>
              <HStack justifyContent="center">
                <Text fontSize="3xl" fontWeight="600">
                  $
                </Text>
                <Text fontSize="5xl" fontWeight="900">
                  2.99
                </Text>
              </HStack>
              <Text display="flex" alignItems="center" justifyContent="center" fontSize="xl" color="gray.500">
                Per Month
              </Text>
            </Box>
            <VStack
              py={4}
              borderBottomRadius={'xl'}>
              <List spacing={3} textAlign="center" px={12}>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Access to all maps
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  New maps added every week
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  Video gameplay tours of each map
                </ListItem>
              </List>
              <Box w="80%" pt={7}>
              <Link href="/sign-up" _hover={{ textDecoration:"none" }}><Button w="full" colorScheme="green" variant="outline">
                  Join Now
                </Button></Link>
              </Box>
              </VStack>
            </Box>
          </PriceWrapper>
        </Stack>
        </Flex>
        <Flex id='FAQ' mt={12} pt={12} w={"100%"} alignItems="center" mb={8} flexDirection="column">
           <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center"><Text as="span" color={"#2f855ab8"}>FAQ</Text></Heading>
           <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>Have a question? <strong>Here are the questions we get the most</strong>, and if you&apos;re still unsure - then ask us directly!</Text>
          </Flex>
        <Flex justifyContent="center">
          <Accordion width={"100%"} maxWidth={700} allowToggle>
            <AccordionItem borderWidth={"1px 1px 0 1px"} borderRadius={"7.5px 7.5px 0 0"}>
              <AccordionButton p={5}>
                <Heading fontWeight={"400"} color={"blue.500"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                  What is Find More Maps
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={'gray.500'} pb={4}>
                Find More Maps <strong>makes Farming Simulator a whole new game</strong>! With our <strong>hand-picked selection of maps</strong>, you&apos;re just <strong>a few clicks away</strong> from starting a brand new adventure!
                <br /><br />
                With <strong>detailed, hand-written descriptions</strong>, <strong>FAQs</strong>, and <strong>gameplay of every single map</strong> - finding the perfect map for you has never been easier!
                <br /><br />
                <strong>All of this is included in the $2.99 a month subscription.</strong>
              </AccordionPanel>
            </AccordionItem>
  
            <AccordionItem borderWidth={"1px 1px 0 1px"}>
              <AccordionButton p={5}>
                <Heading fontWeight={"400"} color={"blue.500"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                  What is a Farming Simulator map?
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={'gray.500'} pb={4}>           
              A Farming Simulator map is a virtual environment within the game where players <strong>can experience owning and operating a farm</strong>. 
              <br /><br />
              It includes <strong>fields, buildings, animals</strong>, and various activities like<strong> planting, harvesting, and managing a farm</strong>.
              </AccordionPanel>
            </AccordionItem>
  
            <AccordionItem borderWidth={"1px 1px 0 1px"}>
              <AccordionButton p={5}>
                <Heading fontWeight={"400"} color={"blue.500"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                  When are new maps added?
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={'gray.500'} pb={4}>
                <strong>We add handfuls of new maps every single week, and send an email out to you straight after we do</strong>. You will also be able to view them in the maps dashboard too.
              </AccordionPanel>
            </AccordionItem>
  
            <AccordionItem borderWidth={"1px 1px 0 1px"} borderRadius={"0 0 7.5px 7.5px"}>
              <AccordionButton p={5}>
                <Heading fontWeight={"400"} color={"blue.500"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                  What is a map tour?
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={'gray.500'} pb={4}>
                  For all of the maps we add, we create <strong>a video showing off the map</strong> with a <strong>gameplay tour</strong>! 
                  <br /><br />
                  This can help you find a map that you think <strong>looks great</strong>, has all <strong>the features that you may want</strong>, and which <strong>runs smoothly</strong>!
              </AccordionPanel>
            </AccordionItem>
  
            <AccordionItem borderWidth={"1px 1px 0 1px"}>
              <AccordionButton p={5}>
                <Heading fontWeight={"400"} color={"blue.500"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                  What payment methods are available?
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={'gray.500'} pb={4}>
                We use Stripe to securely manage payments, allowing us to support <strong>Google & Apple Pay, as well as all major card providers</strong>.
              </AccordionPanel>
            </AccordionItem>
  
            <AccordionItem borderWidth={"1px 1px 0 1px"}>
              <AccordionButton p={5}>
                <Heading fontWeight={"400"} color={"blue.500"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                  Can I cancel my subscription?
                </Heading>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel color={'gray.500'} pb={4}>
                Yes, you can cancel your subscription whenever you want to. <br /><br />
                When you cancel your subscription before the next payment is due, you <strong>will still be subscribed until your subscription ends and you will not be charged</strong>.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </div>
    )
  }