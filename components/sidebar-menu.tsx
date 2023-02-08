import React, {Component} from "react";
import {MenuElement} from "@/types/menu-element";
import {Box, Flex, Link, Text} from "@chakra-ui/react";

type SideBarMenuProps = {
    title:string
    menu:MenuElement[]
}
class SidebarMenu extends Component<SideBarMenuProps> {
    title:string
    menu:MenuElement[]
    constructor(props:SideBarMenuProps) {
        super(props)
        this.menu = props.menu
        this.title = props.title
    }
    render(){
        return (
            <Box width={'100%'} mt={10} px={3}>
                <Text ml={3}>Menu</Text>
                {
                    this.menu.map((menuItem,i)=>{
                        return(
                            <Link key={i} href={menuItem.url} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
                                <Flex
                                    align="center"
                                    borderRadius={2}
                                    py={4}
                                    px={3}
                                    role="group"
                                    cursor="pointer"
                                    _hover={{
                                        bg: '#FFFFFF',
                                        color: '#000000',
                                    }}
                                >
                                    {React.createElement(menuItem.icon)}
                                    <Text ml={7}>{menuItem.title}</Text>
                                </Flex>
                            </Link>
                        )
                    })
                }
            </Box>

        )
    }
}
export default SidebarMenu;