import Head from 'next/head'
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  Link,
  SimpleGrid
} from '@chakra-ui/react'
import NHeader from '../components/NHeader'
import Footer from '../components/Footer'
import { FaArrowRight } from 'react-icons/fa'
import { FcFilmReel, FcGlobe, FcInvite } from 'react-icons/fc';
import Pricing from '../components/Pricing'

export default function YDHome() { 
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    );
  };

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://findmoremaps.com/" />

        <title>Find More Maps - Hand-Picked Farming Simulator Maps!</title>
        <meta name="description" content="Browse our collection of hand-curated maps - create new adventures and discover new maps, with the latest maps added every single week!" />

        <meta name="twitter:title" content="Find More Maps - Hand-Picked Farming Simulator Maps!" />
        <meta name="twitter:description" content="Browse our collection of hand-curated maps - create new adventures and discover new maps, with the latest maps added every single week!" />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/`}/>

        <meta property="og:title" content="Find More Maps - Hand-Picked Farming Simulator Maps!" />
        <meta property="og:description" content="Browse our collection of hand-curated maps - create new adventures and discover new maps, with the latest maps added every single week!" />
        <meta property="og:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta property="og:url" content={`https://findmoremaps.com/`}/>

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
      
        <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: `{
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Find More Maps - Hand-Picked Farming Simulator Maps!",
          "url": "https://findmoremaps.com/"
        }`
        }} 
      />
      </Head>
      <NHeader />
      <Flex as="main" mx="auto" mt={0} px={5}>
        <Container maxW={'7xl'}>
        <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            textAlign={{base:"center",md:"left"}}
            direction={{ base: 'column', md: 'row' }}>
            <Stack flex={1} spacing={3}>
            <Heading mb={0}
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
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
            <Text color={'gray.500'} fontSize={"lg"}
            fontFamily={"'Montserrat', sans-serif!important"}>
                Browse our collection of <strong>hand-curated Farming Simulator maps</strong> - create new adventures and discover new maps with <strong>video tours</strong>, <strong>detailed hand-written descriptions</strong>, and <strong>more</strong>!
            </Text>
            <Stack
                mt={1}
                spacing={{ base: 4, sm: 3 }}
                justifyContent={{base:"center",md:"left"}}
                direction={{ base: 'column', sm: 'row' }}>
                <Link href="/sign-up" _hover={{ textDecoration:"none" }}><Button
                rounded={'lg'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                fontFamily={"'Montserrat', sans-serif!important"}
                bg={'blue.400'}
                rightIcon={<FaArrowRight size={16} />}
                _hover={{ bg: 'blue.500' }}>
                Join Now
                </Button></Link>
                <Link href="/#Features" _hover={{ textDecoration:"none" }}><Button
                rounded={'lg'}
                size={'lg'}
                color={'gray.500'}
                fontFamily={"'Montserrat', sans-serif!important"}
                fontWeight={'normal'}
                px={6}>
                Learn More
                </Button></Link>
            </Stack>
            </Stack>
            <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            fontFamily={"'Montserrat', sans-serif!important"}
            w={'full'}>
            <Box
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                <Image
                alt={'Find More Maps'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  '/Hero-1.webp'
                }
                />
            </Box>
            </Flex>
        </Stack>
        <Flex mt={12} w={"100%"} alignItems="center" mb={8} flexDirection="column">
            <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center">What is <Text as="span" color={"#2f855ab8"}>Find More Maps</Text>?</Heading>
            <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>Find More Maps <strong>makes Farming Simulator a whole new game</strong>! With our <strong>hand-picked selection of maps</strong>, you&apos;re just <strong>a few clicks away</strong> from starting a brand new adventure!</Text>
        </Flex>
        <Box p={4} mb={12} id="Features">
            <SimpleGrid mb={16} columns={{ base: 1, md: 3 }} spacing={10}>
                <Feature
                icon={<Icon as={FcInvite} w={10} h={10} />}
                title={'Weekly Updates'}
                text={
                    'We add handfuls of new maps every single week, and send an email out to you straight after we do.'
                }
                />
                <Feature
                icon={<Icon as={FcFilmReel} w={10} h={10} />}
                title={'Map Tours'}
                text={
                    'With Find More Maps you can watch a video tour of every single map, and choose the one you like the most.'
                }
                />
                <Feature
                icon={<Icon as={FcGlobe} w={10} h={10} />}
                title={'New Adventures'}
                text={
                    'We only choose the best, top-rated maps - so you will always be embarking on a great adventure.'
                }
                />
            </SimpleGrid>
            </Box>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 5 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} alignItems="start" flexDirection="column">
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"}>Find <Text as="span" color={"#2f855ab8"}>Hundreds of Maps</Text></Heading>
                    <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="left" mt={4}>At Find More Maps we <strong>add new maps every single week</strong>, and notify you when we do! Our collection of maps is <strong>growing all the time</strong>, and we are aiming to have <strong>100s of hand-chosen maps</strong>.</Text>
                </Flex>
                <Box
                flex={1}
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                    <Image
                    alt={'Maps Dashboard'}
                    fit={'cover'}
                    align={'top'}
                    w={'100%'}
                    h={'100%'}
                    src={
                        '/FMM-Dashboard.webp'
                    }
                    />
                </Box>
            </Stack>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: 'column', md: 'row' }}>
                <Box
                flex={1}
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                  <Image
                  alt={'Maps Page'}
                  fit={'cover'}
                  align={'top'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    '/FMM-Maps.webp'
                  }
                  />
                </Box>
                <Flex flex={1} alignItems="start" flexDirection="column">
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"}>Learn About <Text as="span" color={"#2f855ab8"}>Every Map</Text></Heading>
                    <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="left" mt={4}>Read <strong>detailed, hand-written descriptions</strong>, watch <strong>map tours to get a visual feel</strong>, <strong>explore FAQs for the nitty-gritty details</strong>, and <strong>discover gameplay insights</strong> - finding the perfect map for you has never been easier!</Text>
                </Flex>
            </Stack>
            <Stack
            align={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 10, md: 14 }}
            direction={{ base: 'column', md: 'row' }}>
                <Flex flex={1} alignItems="start" flexDirection="column">
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"}>Pick The <Text as="span" color={"#2f855ab8"}>Perfect Map</Text></Heading>
                    <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="left" mt={4}>Finding the perfect map is hard, but with Find More Maps it is easy! In just a few clicks you can see <strong>everything there is to know about a map</strong> all in one page!</Text>
                </Flex>
                <Box
                flex={1}
                position={'relative'}
                height={'300px'}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}>
                  <Image
                  alt={'Map Tour'}
                  fit={'cover'}
                  align={'top'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    '/FMM-Tour.webp'
                  }
                  />
                </Box>
            </Stack>
            <Flex id="Price" mt={12} pt={12} w={"100%"} alignItems="center" mb={8} flexDirection="column">
              <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center"><Text as="span" color={"#2f855ab8"}>Pricing</Text></Heading>
              <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>We work on a simple, easy to follow subscription model. You <strong>can cancel at anytime</strong>, and re-subscribe when you choose.</Text>
            </Flex>
            <Pricing />
            <Flex mt={12} py={14} w={"100%"} alignItems="center" mb={8} flexDirection="column">
              <Heading fontFamily={"'Montserrat', sans-serif!important"} fontWeight={500} fontSize={"3xl"} textAlign="center"><Text as="span" color={"#2f855ab8"}>Ready To Start?</Text></Heading>
              <Text fontFamily={"'Montserrat', sans-serif!important"} color={'gray.500'} fontSize={"lg"} maxWidth={600} textAlign="center" mt={4}>Give Find More Maps a try and start <strong>your next adventure today</strong>! Don&apos;t like it? No problem - you can cancel at anytime.</Text>
              <Link href="/sign-up" _hover={{ textDecoration:"none" }}><Button
                rounded={'lg'}
                size={'lg'}
                maxWidth="400px"
                mt={12}
                width={"100%"}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                fontFamily={"'Montserrat', sans-serif!important"}
                bg={'blue.400'}
                rightIcon={<FaArrowRight size={16} />}
                _hover={{ bg: 'blue.500' }}>
                Get Started
                </Button></Link>
            </Flex>
        </Container>
      </Flex>
      <Footer />
    </div>
  )
}
