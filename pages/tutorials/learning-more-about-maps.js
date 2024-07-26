import Head from 'next/head'
import {  Box, Text, Heading,
    Flex, Breadcrumb, BreadcrumbLink, BreadcrumbItem, Image, UnorderedList,
    ListItem, ListIcon, Link, Button
} from "@chakra-ui/react";
import NHeader from '../../components/NHeader'
import Footer from '../../components/Footer'
import { FaChevronRight, FaClock, FaArrowRight } from 'react-icons/fa'

export default function Tutorial() { 
  return (
    <div>
      <Head>       
        <link rel="canonical" href="https://findmoremaps.com/tutorials/learning-more-about-maps" />

        <title>Learning More About Maps - Find More Maps</title>
        <meta name="description" content="Explore, choose, and create farming adventures with Find More Maps. Detailed descriptions, video tours, and FAQs make map selection a breeze!" />
        
        <meta name="twitter:title" content="Learning More About Maps - Find More Maps" />
        <meta name="twitter:description" content="Explore, choose, and create farming adventures with Find More Maps. Detailed descriptions, video tours, and FAQs make map selection a breeze!" />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/tutorials/learning-more-about-maps.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/tutorials/learning-more-about-maps`}/>
        
        <meta property="og:title" content="Learning More About Maps - Find More Maps" />
        <meta property="og:description" content="Explore, choose, and create farming adventures with Find More Maps. Detailed descriptions, video tours, and FAQs make map selection a breeze!" />
        <meta property="og:image" content="https://findmoremaps.com/s/i/tutorials/learning-more-about-maps.webp" />
        <meta property="og:url" content={`https://findmoremaps.com/tutorials/learning-more-about-maps`}/>
        
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
            <Flex pb={12} px={{ base:4, md:0 }} width="100%" pt={10} justifyContent={"center"}>
                <Flex justifyContent={"start"} width="100%" flexDirection={{ base:"column", md:"row" }} maxWidth={"1392px"}>
                    <Flex flexDirection={"column"} justifyContent={"start"} width={{ base:"100%", md:"70%" }} px={{ base:"none", md:4 }}>
                        <Breadcrumb spacing='8px' separator={<FaChevronRight size={12} opacity='0.8' color='gray.500' />}>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/tutorials/' _hover={{ textDecoration:"none", opacity:0.9 }} opacity={0.8}>Tutorials</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink textOverflow={'ellipsis'} href='/tutorials/learning-more-about-maps' _hover={{ textDecoration:"none" }}>Learning More About Maps...</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                        <Heading 
                        as="h1"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={5}
                        fontWeight={500}
                        pb={5}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Learn More About Maps
                        </Heading>
                        <Image alt='Learning More About Maps' src="https://c.findmoremaps.com/learning-more-about-maps.webp" mt={5} borderRadius='6px' border={"1px solid rgba(0, 0, 0, 0.1)"} />
                        <Heading 
                        as="h3"
                        fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                        mt={7}
                        fontWeight={500}
                        fontSize={'2xl'}
                        color={"gray.600"}
                        pb={3}
                        boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                        >
                            Learning More About Each Map
                        </Heading>
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        Welcome to Find More Maps, your ultimate resource for Farming Simulator maps. Our platform is designed to make discovering, exploring, and creating new adventures a breeze. 
                        <br /><br />
                        In this tutorial, we&apos;ll walk you through the simple steps to find the perfect map for your farming journey.
                        </Text>
                        <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            <ListItem fontWeight={600} display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Accessing Find More Maps</ListItem>
                            <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                                Register and set up your Find More Maps account then become a member through the button in the dashboard upon logging in.
                                <br /><br />
                                <strong>Find More Maps is a $2.99 a month subscription</strong> - you can cancel at any time for no extra cost.
                            </Text>
                        </UnorderedList>
                        <UnorderedList spacing={3} mt={6} fontSize={'1.075rem'} lineHeight={1.65}>
                            <ListItem fontWeight={600} display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Browsing the Map Collection</ListItem>
                            <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                            Upon logging in, you&apos;ll land on the Find More Maps dashboard, showcasing our hand-curated map collection.
                            Scroll through the thumbnails to see an overview of available maps.
                            <br /><br />
                            Click on a map thumbnail to access detailed information.
                            </Text>
                        </UnorderedList>
                        <UnorderedList spacing={3} mt={6} fontSize={'1.075rem'} lineHeight={1.65}>
                            <ListItem fontWeight={600} display={'flex'} alignItems="center" listStyleType={'none'}><ListIcon as={FaChevronRight} fontSize="md" opacity={0.8} />Exploring Map Details</ListItem>
                            <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                                On the map details page, you&apos;ll find comprehensive information about the selected map.
                                <br /><br />
                                Read the detailed, hand-written descriptions to understand the map&apos;s unique features and challenges.
                                Watch video tours for a visual feel of the map&apos;s environment.
                                Dive into the FAQs section to get nitty-gritty details about mods, requirements, and gameplay insights.
                            </Text>
                        </UnorderedList>
                        <br />
                        <Text color={"gray.600"} whiteSpace={"pre-line"} mt={4} fontSize={'1.075rem'} lineHeight={1.65}>
                        With Find More Maps, your Farming Simulator experience is elevated to a new level. Discovering the perfect map for your adventures is now easier than ever, thanks to detailed descriptions, video tours, FAQs, and valuable gameplay insights. <strong>Start your farming journey today!</strong>
                        </Text>
                        <Flex mt={12} pt={14} pb={0} w={"100%"} alignItems="center" mb={8} flexDirection="column">
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
                        </Flex>
                    <Box px={4} mt={{ base:6, md:0 }} justifyContent={"start"} width={{ base:"100%", md:"30%" }}>
                        <Flex direction={"column"} p={6} borderRadius='6px' border={"1px solid rgba(0, 0, 0, 0.1)"}>
                            <Heading 
                            as="h3"
                            fontFamily={'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'}
                            fontWeight={500}
                            fontSize={'xl'}
                            width="100%"
                            pb={3}
                            boxShadow={"rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset"}
                            >
                                Post Summary
                            </Heading>
                            <UnorderedList spacing={3} mt={4} fontSize={'1.075rem'} mx={0} lineHeight={1.65}>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    Learning More About Maps
                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    Explore, choose, and create farming adventures with Find More Maps. Detailed descriptions, video tours, and FAQs make map selection a breeze!                                </ListItem>
                                <ListItem display={'flex'} flexWrap="wrap" alignItems="center" listStyleType={'none'}>
                                    <ListIcon as={FaClock} fontSize="md" opacity={0.8} />
                                    <strong>Last Updated:&nbsp;</strong> 2nd September, 2023
                                </ListItem>
                            </UnorderedList>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
      <Footer />
    </div>
  )
}