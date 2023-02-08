import {Avatar, Box, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text} from "@chakra-ui/react";
import React, {Component, PropsWithChildren, ReactNode} from "react";
import {getImage} from "@/helpers/image-helper";

type AvatarProps ={
    name:string
    designation:string
    avatar?:string
}
class AvatarWithName extends Component<AvatarProps> {
    name:string
    designation:string
    constructor(props:AvatarProps) {
        super(props);
        this.name = props.name
        this.designation = props.designation
    }
    render() {
        return (
            <Flex>
                <Box mx='3'>
                    <Text fontWeight='bold'>
                        {this.name}
                    </Text>
                    <Text fontSize='sm'>{this.designation}</Text>
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