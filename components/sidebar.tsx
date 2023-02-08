import React from 'react';
import {
    Heading,
    Flex, Divider
} from "@chakra-ui/react";
import SidebarMenu from "@/components/sidebar-menu";
import {routeMenu} from "@/types/menu-element";
export function Sidebar() {
    return (
            <Flex direction={'column'} alignItems={'center'} color={'white'} justifyContent={'center'}>
                <Heading my={10}>ERP</Heading>
                <Divider/>
                <SidebarMenu title={'Menu'} menu={routeMenu}/>
            </Flex>
    );
}