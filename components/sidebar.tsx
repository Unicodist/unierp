import React, {Component} from 'react';
import {Box, Divider, FormControl, FormLabel, HStack, Spacer, Switch, Text, VStack} from "@chakra-ui/react";
import {GiBrandyBottle} from "react-icons/gi";
import Link from "next/link";
import {useTheme} from "next-themes";
export function Sidebar() {
    const {theme,setTheme} = useTheme()
    return (
        <Box padding='20px'
            width='inherit'
            bgColor='#53667B'>
            <VStack >
                <HStack color='#FFFFFF' fontSize={30} as={Link} href='/'>
                    <GiBrandyBottle/>
                    <Text>ERP</Text>
                </HStack>
                <Box>
                    <Text fontSize={'small'} textAlign={['left','center']}>MENU</Text>
                    <p>Sales</p>
                    <p>Inventor</p>
                </Box>
                <Divider/>
                <HStack alignItems='center'>
                    <FormLabel>Dark Mode</FormLabel>
                    <Switch isChecked={theme==='dark'} colorScheme='blackAlpha' onChange={e=>{setTheme(theme==='light'?'dark':'light')}}/>
                </HStack>
            </VStack>
        </Box>
    );
}