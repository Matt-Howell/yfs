import Head from 'next/head'
import {
  Container,
  Heading,
  Text,
  Stack,
  Box,
  useClipboard,
  Tooltip,
  IconButton,
  Link,
  Divider,
  Flex,
  Card,
  CardBody,
  CardHeader
} from "@chakra-ui/react";
import NHeader from '../../components/NHeader'
import Footer from '../../components/Footer'
import { MdEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'

export default function Tutorials() { 
  const { hasCopied, onCopy } = useClipboard('help@findmoremaps.com');
  
  const popBack = "#fafafa";

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://findmoremaps.com/tutorials/" />

        <title>Tutorials - Find More Maps</title>
        <meta name="description" content="Learn more about using Find More Maps to the best of its ability right here with our detailed tutorials!" />

        <meta name="twitter:title" content="Tutorials - Find More Maps" />
        <meta name="twitter:description" content="Learn more about using Find More Maps to the best of its ability right here with our detailed tutorials!" />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/tutorials/`}/>

        <meta property="og:title" content="Tutorials - Find More Maps" />
        <meta property="og:description" content="Learn more about using Find More Maps to the best of its ability right here with our detailed tutorials!" />
        <meta property="og:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta property="og:url" content={`https://findmoremaps.com/tutorials/`}/>

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
      <NHeader />
      <Box as='main'>
          <Box width="100%" padding="1rem 0" bg={'#f0f5f9'}>
            <Container maxW={'5xl'}>
              <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 2, md: 3 }}
                py={{ base: 10, md: 14 }}>
                <Heading
                  fontWeight={600}
                  as="h1"
                  mb={3}
                  fontFamily={"'Montserrat', sans-serif!important"}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                  lineHeight={'110%'}
                  color={'#2f855ab8'}>
                  Tutorials
                </Heading>
                <Text lineHeight={1.5} color={'gray.500'} fontSize="1.25rem" maxW={'3xl'}>
                Learn more about using Find More Maps to the best of its ability right here with our detailed tutorials 📖
                </Text>
              </Stack>
            </Container>
          </Box>
          <Container pt={5} maxW={'1500px'}>
          <Heading
            color={"gray.600"}
            fontSize={'xl'}
            pb={'0.8rem'}
            textAlign={'left'}
            mb={4}
            fontFamily={"'Montserrat', sans-serif!important"}
            borderBottom={'1px solid #00000025'}>All Our Tutorials</Heading>
          <Text mb={8} color={"gray.600"} fontSize={"lg"}>We add new tutorials and guides all the time, but right now you can read through each of these to get an advanced understanding of Find More Maps.</Text>
          <Stack display={"flex"} width={"100%"} spacing={4}>
            <Card pb={0} backgroundColor={popBack}>
                <CardHeader pb={0} mb={0}>
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} color={"gray.600"} size='md'><Link href="/tutorials/finding-maps" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>Finding New Maps</Link></Heading>
                </CardHeader>
                <CardBody pt={4}>
                <Text fontFamily={"'Montserrat', sans-serif!important"} color={"gray.600"}>Here is how to find new maps on our platform.</Text>
                </CardBody>
            </Card>
            <Card pb={0} backgroundColor={popBack}>
                <CardHeader pb={0} mb={0}>
                    <Heading fontFamily={"'Montserrat', sans-serif!important"} color={"gray.600"} size='md'><Link href="/tutorials/learning-more-about-maps" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>Learning More About Maps</Link></Heading>
                </CardHeader>
                <CardBody pt={4}>
                <Text fontFamily={"'Montserrat', sans-serif!important"} color={"gray.600"}>Here is how to learn more about each map you find.</Text>
                </CardBody>
            </Card>
          </Stack>
          <Divider my={8} />
            <Flex flexDirection={"row"} width={"100%"} justifyContent={"center"}>
              <Link href="https://twitter.com/findmoremaps">
                <IconButton
                  aria-label="twitter"
                  variant="ghost"
                  size="lg"
                  icon={<BsTwitter size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: 'white',
                  }}
                  isRound
                />
              </Link>
              <Tooltip
                label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                closeOnClick={false}
                hasArrow>
                <IconButton
                  ml={4}
                  onClick={onCopy}
                  aria-label="Email"
                  variant="ghost"
                  size="lg"
                  icon={<MdEmail size="28px" />}
                  _hover={{
                    bg: 'blue.500',
                    color: 'white',
                  }}
                  isRound
                />
              </Tooltip>
              </Flex>
        </Container>
        </Box>
      <Footer />
    </div>
  )
}