import {Avatar, Box, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text} from "@chakra-ui/react";
import React, {Component, PropsWithChildren, ReactNode} from "react";
import AvatarProps from "@/types/avatarprops";
import {getImage} from "@/helpers/image-helper";
class AvatarWithName extends Component {
    props:AvatarProps
    constructor(props:AvatarProps) {
        super(props);
        this.props = props
    }
    render() {
        return (
            <Flex>
                <Box mx='3'>
                    <Text fontWeight='bold'>
                        {this.props.name}
                    </Text>
                    <Text fontSize='sm'>{this.props.designation}</Text>
                </Box>
                <Menu>
                    <MenuButton>
                        <Avatar src={getImage('ashishneupane999@gmail.com')}/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Settings</MenuItem>
                        <MenuDivider/>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

        );
    }
}

export default AvatarWithName;