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
  Flex
} from "@chakra-ui/react";
import NHeader from '../components/NHeader'
import Footer from '../components/Footer.jsx'
import { MdEmail } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'

export default function About() { 
  const { hasCopied, onCopy } = useClipboard('help@findmoremaps.com');

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://findmoremaps.com/about" />

        <title>About Us - Find More Maps</title>
        <meta name="description" content="Want to learn more about Find More Maps and what we do? Feel free to read about us here!" />

        <meta name="twitter:title" content="About Us - Find More Maps" />
        <meta name="twitter:description" content="Want to learn more about Find More Maps and what we do? Feel free to read about us here!" />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/about`}/>

        <meta property="og:title" content="About Us - Find More Maps" />
        <meta property="og:description" content="Want to learn more about Find More Maps and what we do? Feel free to read about us here!" />
        <meta property="og:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta property="og:url" content={`https://findmoremaps.com/about`}/>

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
                  fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                  fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                  lineHeight={'110%'}
                  color={'#2f855ab8'}>
                  About Us
                </Heading>
                <Text lineHeight={1.5} color={'gray.500'} fontSize="1.25rem" maxW={'3xl'}>
                Want to learn more about <strong>Find More Maps</strong> and what we do? Feel free to read about us here!
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
            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
            borderBottom={'1px solid #00000025'}>Who Are We?</Heading>
          <Text mb={12} color={"gray.600"} fontSize={"lg"}>Welcome to <strong>Find More Maps</strong>, your gateway to a world of <strong>exciting adventures in Farming Simulator</strong>! We&apos;re dedicated to bringing you an <strong>exceptional collection of hand-curated maps</strong> that will transform your Farming Simulator experience into something truly remarkable.
          <br /><br />
          Find More Maps was founded by myself, <Link href="https://mjh.codes/" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>Matthew</Link>, a Farming Simulator YouTuber and web developer.
          </Text>
          <Heading
            color={"gray.600"}
            fontSize={'xl'}
            pb={'0.8rem'}
            textAlign={'left'}
            mb={4}
            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
            borderBottom={'1px solid #00000025'}>What does Find More Maps do?</Heading>
          <Text mb={12} color={"gray.600"} fontSize={"lg"}>
              Choosing the perfect map for your Farming Simulator experience <strong>has never been easier</strong>. Watch <strong>map tours to get a visual feel</strong>, <strong>explore FAQs for the nitty-gritty details</strong>, and <strong>discover gameplay insights</strong> that help you decide. 
              Our platform ensures that you&apos;re equipped with all the knowledge you need to pick the map that suits your style.
              <br /><br />
              All of this is included in our <strong>$2.99 a month subscription</strong>.
          </Text>
          <Heading
            color={"gray.600"}
            fontSize={'xl'}
            pb={'0.8rem'}
            textAlign={'left'}
            mb={4}
            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
            borderBottom={'1px solid #00000025'}>What&apos;s next for Find More Maps?</Heading>
          <Text color={"gray.600"} fontSize={"lg"}>
          Our commitment to enhancing your gaming journey means that we&apos;re constantly expanding our map selection. With new maps added every week, you&apos;ll always have exciting new adventures to embark upon. And don&apos;t worry – we&apos;ll keep you updated through email notifications so that you never miss out on the latest additions.
          </Text>
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