import React, {Component} from 'react';
import {Box, Flex, Spacer, HStack} from "@chakra-ui/react";
import Searchbox from "@/components/searchbox";

class PagingTableToolbar extends Component {
    render() {
        return (
            <HStack width='100%'>
                <HStack gap={2}>
                    <p>Tool1</p>
                    <p>Tool2</p>
                    <p>Tool3</p>
                </HStack>
                <Spacer/>
                <Searchbox/>
            </HStack>
        );
    }
}

export default PagingTableToolbar;