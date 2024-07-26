import Head from 'next/head'
import Header from '../components/Header'
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Text, TableCaption, TableContainer, Button, IconButton, Spinner, useToast,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip,
  Heading,
  Divider,
  Checkbox,
  CheckboxGroup,
  Stack,
  Box,
  NumberInput,
  NumberInputField,
  Input,
  Alert,
  AlertIcon,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Wrap,
  WrapItem,
  SimpleGrid, 
  Image,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  UnorderedList,
  ListItem,
  ListIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack
} from '@chakra-ui/react'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { FaChevronRight, FaRegStar, FaChevronLeft, FaXbox, FaPlaystation, FaStar, FaArrowRight, FaLaptop } from 'react-icons/fa'
import { GrPowerCycle } from 'react-icons/gr'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { useRouter } from 'next/router'
import { supabase } from '../components/utils/supabase'

export default function Maps() {

  async function fetchData(url) {
    const response = await fetch(url)
    return response.json()
  }

  // users

  const [user, setUser] = useState({})  
  const toast = useToast()
  const router = useRouter()
  const [userType, setUserType] = useState("")  

  useEffect(() => {
    (async () => { 
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        const id = 'redir-toast'
        if (!toast.isActive(id)) {
          toast({
            id,
            title: "Redirecting...",
            description: "Sign in to use Find More Maps.",
            status: "warning",
            position: "top-end",
            duration: 7500,
            isClosable: true,
          })
        }
        router.push('/sign-in')
        return
      }
      setUserType(user.user_metadata.type)
      setUser(user)
      fetchMaps()
    })();
  }, [])

  // rest

  const arrowStylesA = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    mt: "-22px",
    ml: 3,
    transition: "0.6s ease",
    userSelect: "none",
  };

  const arrowStylesB = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    mt: "-22px",
    mr: 3,
    transition: "0.6s ease",
    userSelect: "none",
  };

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [modalMapID, setModalMapID] = useState()

  const [showPage, setShowPage] = useState(1)

  const [mapsContent, setMapsContent] = useState([])
  const [mapsLoading, setMapsLoading] = useState(false)
  const [pagesAva, setPagesAva] = useState([])

  async function fetchMaps() {
    const { data: { user } } = await supabase.auth.getUser()
    setMapsLoading(true)
    fetchData(user.user_metadata.type === "subscribed" ? "https://findmoremaps.com/get-maps?authenticated=true" : "/data/placeholder.json").then((result) => {
      console.log(result)
      if (user.user_metadata.type === "subscribed") {
        let arrayOfPages = Array.apply(null, Array(Math.ceil(result.length/8)).map(function (x, i) { return i; }))
        setPagesAva(arrayOfPages)
      }
      setMapsContent([...result])
      setMapsLoading(false)
    })
  }
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://findmoremaps.com/maps" />

        <title>Maps - Find More Maps</title>
        <meta name="description" content="Browse our collection of hand-curated maps, or let us choose one at random! Create new adventures and discover new maps - all right here!" />

        <meta name="twitter:title" content="Maps - Find More Maps" />
        <meta name="twitter:description" content="Browse our collection of hand-curated maps, or let us choose one at random! Create new adventures and discover new maps - all right here!" />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/maps`}/>

        <meta property="og:title" content="Maps - Find More Maps" />
        <meta property="og:description" content="Browse our collection of hand-curated maps, or let us choose one at random! Create new adventures and discover new maps - all right here!" />
        <meta property="og:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta property="og:url" content={`https://findmoremaps.com/maps`}/>

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-image-preview:large" />

        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white-translucent" />

        <link rel="apple-touch-icon" sizes="180x180" href="https://findmoremaps.com/s/i/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="manifest" href="https://findmoremaps.com/s/i/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:locale" content="en_US"/>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JDFHV6RBBD"></script>
        <script dangerouslySetInnerHTML={{
            __html:`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-JDFHV6RBBD');`
        }} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {mapsContent.length > 0 && modalMapID ? <Modal motionPreset="slideInBottom" onClose={onClose} size={"full"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent backgroundColor={"#FFFEFC"}>
            <Header />
            <ModalBody backgroundColor={"#FFFEFC"}> 
            <Flex px={{ base:4, md:0 }} width="100%" pt={6} justifyContent={"center"}>          
              <Flex justifyContent={"start"} width="100%" flexDirection={{ base:"column", md:"row" }} maxWidth={"1392px"}>
                    <Flex flexDirection={"column"} justifyContent={"start"} width={{ base:"100%", md:"70%" }} px={{ base:"none", md:4 }}>
                        <Breadcrumb spacing='8px' separator={<FaChevronRight size={12} opacity='0.8' color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink onClick={onClose} _hover={{ textDecoration:"none", opacity:0.9 }} opacity={0.8}>Maps</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink textOverflow={'ellipsis'} href='#' _hover={{ textDecoration:"none" }}>{mapsContent.filter(el => el.id == modalMapID)[0].name}...</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading 
                        as="h1"
                        fontFamily={"'Montserrat', sans-serif!important"}
                        mt={5}
                        fontWeight={500}
                        pb={5}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                          {mapsContent.filter(el => el.id == modalMapID)[0].name}
                        </Heading>
                  <Flex mb={2} width={"100%"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
                  <Flex borderRadius={"md"} mt={5} w="full" overflow="hidden" pos="relative">
                    <Flex borderRadius={"md"} w="full" {...carouselStyle}>
                      {Array.apply(null, Array(mapsContent.filter(el => el.id == modalMapID)[0].images)).map(function (x, i) { return i; }).map((slide, sid) => (
                        <Box borderRadius={"md"} key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                          <Text
                            color="white"
                            fontSize="xs"
                            p="8px 12px"
                            pos="absolute"
                            top="0"
                          >
                            {sid + 1} / {mapsContent.filter(el => el.id == modalMapID)[0].images}
                          </Text>
                          <Image border={"1px solid #E2E8F0"}
                            boxSize="full"
                            backgroundSize="cover" borderRadius={"md"} src={`https://c.findmoremaps.com/${mapsContent.filter(el => el.id == modalMapID)[0].name.replace(/ /g, "_")}_${sid+1}.webp`} alt={mapsContent.filter(el => el.id == modalMapID)[0].name} />
                        </Box>
                      ))}
                    </Flex>
                    <IconButton backgroundColor={"#00000069"} color={"white"} border={"1px solid #E2E8F0"} {...arrowStylesA} left="0" onClick={() => { setCurrentSlide((s) => (s === 0 ? mapsContent.filter(el => el.id == modalMapID)[0].images - 1 : s - 1))}} icon={<FaChevronLeft/>} borderRadius={"100%"} />
                    <IconButton backgroundColor={"#00000069"} color={"white"} border={"1px solid #E2E8F0"} {...arrowStylesB} right="0" onClick={() => { setCurrentSlide((s) => (s === mapsContent.filter(el => el.id == modalMapID)[0].images - 1 ? 0 : s + 1))}} icon={<FaChevronRight/>} borderRadius={"100%"} />
                    <HStack justify="center" pos="absolute" bottom="12px" w="full">
                      {Array.from({
                        length: mapsContent.filter(el => el.id == modalMapID)[0].images,
                      }).map((_, slide) => (
                        <Box
                          key={`dots-${slide}`}
                          cursor="pointer"
                          boxSize={["7px", null, "15px"]}
                          m="0 2px"
                          border={"1px solid #E2E8F0"}
                          bg={currentSlide === slide ? "white" : "transparent"}
                          rounded="50%"
                          display="inline-block"
                          transition="background-color 0.6s ease"
                          _hover={{
                            bg: "blackAlpha.800",
                          }}
                          onClick={() => setSlide(slide)}
                        ></Box>
                      ))}
                    </HStack>
                  </Flex>
                </Flex> 
                <Heading 
                  as="h3"
                  fontFamily={"'Montserrat', sans-serif!important"}
                  mt={5}
                  mb={3}
                  fontWeight={500}
                  fontSize={'2xl'}
                  pb={3}
                  boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                  >
                  Map Overview
                </Heading>
                <Text whiteSpace={"pre-line"} fontSize={'1.075rem'} lineHeight={1.65} mb={4} fontFamily={"'Montserrat', sans-serif!important"}>
                    {mapsContent.filter(el => el.id == modalMapID)[0].overview}
                </Text>
                <Heading 
                  as="h3"
                  fontFamily={"'Montserrat', sans-serif!important"}
                  mt={2}
                  mb={5}
                  fontWeight={500}
                  fontSize={'2xl'}
                  pb={3}
                  boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                  >
                  Gameplay Tour
                </Heading>
                <div style={{position:"relative",paddingTop:"56.25%",borderRadius:7.5}}><iframe src={mapsContent.filter(el => el.id == modalMapID)[0].video} loading="lazy" style={{border:0,position:"absolute",top:0,height:"100%",width:"100%",borderRadius:7.5}} allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" allowfullscreen="true"></iframe></div>
                <Heading 
                  as="h3"
                  fontFamily={"'Montserrat', sans-serif!important"}
                  mt={7}
                  mb={5}
                  fontWeight={500}
                  fontSize={'2xl'}
                  pb={3}
                  boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                  >
                  Learn More
                </Heading>
                <Accordion defaultIndex={[0]} width={"100%"} allowToggle>
                  <AccordionItem borderWidth={"1px 1px 0 1px"} borderRadius={"7.5px 7.5px 0 0"}>
                    <AccordionButton p={5}>
                      <Heading fontWeight={"400"} color={"blue.400"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                        Map Features
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      {mapsContent.filter(el => el.id == modalMapID)[0].name} has <strong>many key features</strong>. You can find, experience, and explore:
                      <UnorderedList px={3}>{mapsContent.filter(el => el.id == modalMapID)[0].features.map((el,ind) => <ListItem key={ind} mt={3}>{el}</ListItem>)}</UnorderedList>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem borderWidth={"1px 1px 0 1px"} borderRadius={"0 0 7.5px 7.5px"}>
                    <AccordionButton p={5}>
                      <Heading fontWeight={"400"} color={"blue.400"} fontFamily={"'Montserrat', sans-serif!important"} as="span" fontSize="lg" flex='1' textAlign='left'>
                        Frequently Asked Questions
                      </Heading>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Flex flexDirection="column">
                      {mapsContent.filter(el => el.id == modalMapID)[0].faq.map((el,ind) => <Flex key={ind} flexDirection="column"><Text mb={2} fontSize={'1.075rem'} fontWeight={600} lineHeight={1.65}>{el.question}</Text><Text fontSize={'1.075rem'} mb={4} lineHeight={1.65}>{el.answer}</Text></Flex>)}      
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
              <Box px={4} mt={{ base:6, md:0 }} justifyContent={"start"} width={{ base:"100%", md:"30%" }}>
                <Flex direction={"column"} p={6} borderRadius='6px' border={"1px solid rgba(0, 0, 0, 0.1)"}>
                  <Heading 
                  as="h3"
                  fontFamily={"'Montserrat', sans-serif!important"}
                  fontWeight={500}
                  fontSize={'xl'}
                  width="100%"
                  pb={3}
                  boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                  >
                      Map Summary
                  </Heading>
                  <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} mx={0} lineHeight={1.65}>
                      <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                          <strong>Name:&nbsp;</strong>{mapsContent.filter(el => el.id == modalMapID)[0].name}
                      </ListItem>
                      <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                        <Text fontFamily={"'Montserrat', sans-serif!important"}><strong>Author: </strong>{mapsContent.filter(el => el.id == modalMapID)[0].author}</Text>
                      </ListItem>
                      <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                        <strong>Rating: </strong><Flex ml={2} alignItems={"center"}>{Array.apply(null, Array(mapsContent.filter(el => el.id == modalMapID)[0].rating)).map(function (x, i) { return i; }).map((el,ind,arr) => <Box key={ind} mr={"3px"}><FaStar /></Box>)}{Array.apply(null, Array(5-mapsContent.filter(el => el.id == modalMapID)[0].rating)).map(function (x, i) { return i; }).map((el,ind,arr) => <Box key={ind} mr={"3px"}><FaRegStar /></Box>)}</Flex><Text as="span" fontSize={"xs"} alignItems={"center"} ml={2} maxHeight={"16px!important"} fontWeight={400}>({mapsContent.filter(el => el.id == modalMapID)[0].ratingSum})</Text>
                      </ListItem>
                      <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                        <Text fontFamily={"'Montserrat', sans-serif!important"}><Flex alignItems={"center"} flexDirection={"row"}><strong>Platforms: </strong><Flex ml={2}>{mapsContent.filter(el => el.id == modalMapID)[0].platforms.map((el, ind) => el=="PS4"||el=="PS5"?<Flex key={ind} ml={2}><FaPlaystation size={19} /></Flex>:el=="XB1"||el=="XBS"?<Flex key={ind} ml={2}><FaXbox size={19} /></Flex>:el=="PC/MAC"?<Flex key={ind} ml={2}><FaLaptop size={19} /></Flex>:null)}</Flex></Flex></Text>
                      </ListItem>
                  </UnorderedList>
                  </Flex>
                  <Link target='_blank' _hover={{ textDecoration:"none" }} href={mapsContent.filter(el => el.id == modalMapID)[0].download}><Button width={"100%"} mt={5} mb={2} size="lg" colorScheme={'blue'} rightIcon={<FaArrowRight />}>
                    Get This Map
                  </Button></Link>
                </Box>
              </Flex>
            </Flex>
            </ModalBody>
            <Footer />
          </ModalContent>
        </Modal> : null}
      <Flex as="main" mx="auto" mt={6} px={5}>
        <Flex flexDirection={"column"} w={"100%"} minHeight="100vh" mx="auto" maxWidth={"1250px"}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          pt={15}
          mx={"auto"}
          maxWidth={750}
          textAlign="center"
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 4 }}>
            <Heading
              lineHeight={1.35}
              fontWeight={600}
              fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}>
              <Text fontFamily={"'Montserrat', sans-serif!important"} as={'span'}       
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: '#197b4d52',
                zIndex: -1,
              }}>
                Discover maps,
              </Text>
              <br />
              <Text
                fontFamily={"'Montserrat', sans-serif!important"}
                as={'span'} color={'#2f855ab8'}>
                start new adventures.
              </Text>
            </Heading>
            {userType === "subscribed" ? <Text color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
              Browse the collection of hand-curated maps, or let us choose one at random! <strong>Create new adventures</strong>, <strong>discover new maps</strong>, and <strong>enjoy the game even more</strong> - all right here!
            </Text> : <Text color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
              <strong>Subscribe to Find More Maps</strong> to browse the collection of hand-curated maps, or let us choose one at random! <strong>Create new adventures</strong>, <strong>discover new maps</strong>, and <strong>enjoy the game even more</strong> - all right here!
            </Text>}
            <Stack
              mt={"3!important"}
              mb={"0!important"}
              justifyContent="center"
              spacing={{ base: 4, sm: 3 }}
              direction={{ base: 'column', sm: 'row' }}>
              {userType === "subscribed" ? null : 
              <form target="_blank" action="https://findmoremaps.com/checkout" method="POST">
                <input type="hidden" name="userEmail" value={user.email} />
                <input type="hidden" name="userId" value={user.id} />
                <Tooltip textAlign={"center"} p={2} borderRadius={"md"} label='Subscribe to Find More Maps to start exploring the best and most recent maps in Farming Simulator!'><Button
                rounded={'lg'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                mb={2}
                variant={"solid"}
                type="submit"
                fontFamily={"'Montserrat', sans-serif!important"}
                colorScheme='blue'
                minWidth={200}
                rightIcon={<MdShoppingCartCheckout size={20} />}
                _hover={{ bg: 'blue.500' }}>
                Subscribe Now
                </Button></Tooltip>
              </form>}
            </Stack>
          </Stack>
        </Stack>
        <Divider id='Maps' mb={6} mt={8} />
        {mapsLoading ? <Spinner mx={"auto"} mt={6} /> : <SimpleGrid pointerEvents={userType === "subscribed" ? "all" : "none"} filter={userType === "subscribed" ? null : "blur(3px)"} spacing={4} minChildWidth={"400px"}>
            <Flex mx="auto" width={"100%"} background={"#40576d12"} justifyContent={"center"} alignItems={"center"} p={2} flex={1} minHeight={250} border={"1px solid #E2E8F0"} borderRadius={"md"}>
              <IconButton onClick={() => {
                let randomVal = Math.floor((Math.random()*mapsContent.length) + 0)
                let modalId = mapsContent[randomVal].id
                setModalMapID(modalId)
                onOpen()
              }} icon={<GrPowerCycle size={18} />} borderRadius={"100%"} variant={"outline"} background={"white"} />
            </Flex>
            {mapsContent.slice(showPage * 8 - 8, showPage * 8).map((el,ind,arr) => <Flex key={ind} width={"100%"} mx="auto" backgroundImage={`https://c.findmoremaps.com/${el.name.replace(/ /g, "_")}_1.webp`} backgroundSize={"cover"} justifyContent={"center"} alignItems={"end"} flex={1} minHeight={250} border={"1px solid #E2E8F0"} borderRadius={"md"}>
              <Box height={85} p={4} backgroundColor={"#e4e8ecf0"} borderBottomRadius={"sm"} width={"100%"}>
                <Flex justifyContent={"space-between"} alignItems={"center"}>
                  <Flex flexDirection={"column"}>
                    <Heading as="h3" color={'gray.600'} fontSize={"md"} fontFamily={"'Montserrat', sans-serif!important"}><Link textDecoration={"none"} _hover={{color:"blue.400!important"}} onClick={() => {
                  if(userType === "subscribed"){
                    setModalMapID(el.id)
                    console.log(el.id)
                    onOpen()
                  }
                }}>{el.name}</Link></Heading>
                    <Flex mt={3} alignItems={"center"} flexDirection={"row"}><Flex alignItems={"center"}>{Array.apply(null, Array(el.rating)).map(function (x, i) { return i; }).map((el,ind,arr) => <Box key={ind} mr={"3px"}><FaStar /></Box>)}{Array.apply(null, Array(5-el.rating)).map(function (x, i) { return i; }).map((el,ind,arr) => <Box key={ind} mr={"3px"}><FaRegStar /></Box>)}</Flex><Text as="span" fontSize={"xs"} alignItems={"center"} ml={2} maxHeight={"16px!important"} fontWeight={400}>({el.ratingSum})</Text></Flex>
                  </Flex>
                  <IconButton onClick={() => {
                  if(userType === "subscribed"){
                    setModalMapID(el.id)
                    console.log(el.id)
                    onOpen()
                  }
                }} icon={<FaChevronRight/>} borderRadius={"100%"} />
                </Flex>
              </Box>
            </Flex>)}
          </SimpleGrid>}
          {userType === "subscribed" ? mapsContent.length > 0 ? <Stack mt={8} direction={"row"} spacing={3} alignItems={"center"} justifyContent={"center"}>
            <IconButton isDisabled={showPage == 1} onClick={() => setShowPage(showPage - 1)} icon={<FaChevronLeft />} />
            {[...pagesAva.keys()].map((val) => <Button key={val+1} isDisabled={val+1 == showPage ? true : false} display={{ base:val+1 == showPage ? "flex" : "none", md:"flex" }} onClick={() => setShowPage(val + 1)}>{val + 1}</Button>)}
            <IconButton isDisabled={showPage == Math.ceil(pagesAva.length)} onClick={() => setShowPage(showPage + 1)} icon={<FaChevronRight />} />
          </Stack> : null : null}
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}
