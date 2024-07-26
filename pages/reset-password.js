import Head from 'next/head'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useToast
} from '@chakra-ui/react'
import { useRef } from 'react'
import NHeader from '../components/NHeader'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import { supabase } from '../components/utils/supabase.js'

export default function ResetPassword() {  
  const toast = useToast()
  const userEmail = useRef("");
  const router = useRouter()

  const resetPassword = async () => {
    try {
      let email = String(userEmail.current.value)
      await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://findmoremaps.com/change-password',
      }).then(() => {
        toast({
            title: "Email Sent!",
            description: "Check your inbox for your password reset link.",
            status: "success",
            position: "top-end",
            duration: 7500,
            isClosable: true,
        })
        router.push("/change-password")
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Head>
        <link rel="canonical" href="https://findmoremaps.com/reset-password" />

        <title>Reset Password - Find More Maps</title>
        <meta name="description" content="Reset your password in seconds to get back into your account." />
        
        <meta name="twitter:title" content="Reset Password - Find More Maps" />
        <meta name="twitter:description" content="Reset your password in seconds to get back into your account." />
        <meta name="twitter:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://findmoremaps.com/reset-password`}/>
        
        <meta property="og:title" content="Reset Password - Find More Maps" />
        <meta property="og:description" content="Reset your password in seconds to get back into your account." />
        <meta property="og:image" content="https://findmoremaps.com/s/i/FMM-nt.png" />
        <meta property="og:url" content={`https://findmoremaps.com/reset-password`}/>
        
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
      <Flex as="main" mx="auto" mt={6} px={5}>
        <Flex flexDirection={"column"} w={"100%"} align={'center'} justify={'center'} py={6} mx="auto" maxWidth={"1200px"}>
            <Flex
                flexDirection={"column"}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                    <Heading fontFamily={"'Montserrat',sans-serif!important"} textAlign="center" fontSize={'4xl'}>Reset your password</Heading>
                    <Text fontFamily={"'Montserrat',sans-serif!important"} textAlign="center" fontSize={'lg'} color={'gray.600'}>
                        to get back into your account! 🔐
                    </Text>
                    </Stack>
                    <Box
                    rounded={'lg'}
                    bg={'#fafafa'}
                    boxShadow={'lg'}
                    p={8}>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        resetPassword()
                    }}>
                    <Stack spacing={4} minWidth={300}>
                        <FormControl id="email" isRequired>
                        <FormLabel fontFamily={"'Montserrat',sans-serif!important"}>Email address</FormLabel>
                        <Input fontFamily={"'Montserrat',sans-serif!important"} ref={userEmail} type="email" />
                        </FormControl>
                        <Stack spacing={5}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            type='submit'
                            fontFamily={"'Montserrat',sans-serif!important"}
                            _hover={{
                            bg: 'blue.500',
                            }}>
                            Reset Password
                        </Button>
                        <Text fontFamily={"'Montserrat',sans-serif!important"} textAlign='center'>Need some help? <Link href="/contact" _hover={{ textDecoration:"none", opacity:0.8 }} color={'blue.300'}>Contact support</Link>.</Text>
                        </Stack>
                    </Stack>
                        </form>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
      </Flex>
      <Footer />
    </div>
  )
}