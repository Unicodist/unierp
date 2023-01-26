import React, {Component} from 'react';
import {
    Box, Flex, HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider, MenuItem,
    MenuList
} from "@chakra-ui/react";
import {BsBell} from "react-icons/bs";
import Searchbox from "@/components/searchbox";
import AvatarWithName from "@/components/avatarWithName";

class Navbar extends Component {
    render() {
        return (
            <Box boxShadow='md' padding='10px'>
                <Flex justifyContent={'space-between'}>
                    <Searchbox/>
                    <HStack>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<BsBell size='25px'/>}
                                variant='transparent'
                            />
                            <MenuList>
                                <MenuItem>
                                    Notification 1
                                </MenuItem>
                                <MenuItem>
                                    Notification 2
                                </MenuItem>
                                <MenuItem>
                                    Notification 3
                                </MenuItem>
                                <MenuDivider/>
                                <MenuItem>
                                    See more ...
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <AvatarWithName name='Ashish Neupane' designation='Web Developer'/>
                    </HStack>
                </Flex>
            </Box>
        );
    }
}

export default Navbar;