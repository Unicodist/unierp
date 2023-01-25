import React, {Component} from 'react';
import {border, color, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {TfiSearch} from "react-icons/tfi";

class Searchbox extends Component {
    displaySearchResult(){

    }
    render() {
        return (
            <InputGroup
                width='30rem'
            >
                <InputLeftElement
                    children={<TfiSearch color='gray.300' size='25px'/>}
                />
                <Input
                    type='text'
                    placeholder='Search ...'
                    border={0}
                    borderRadius='none'
                    focusBorderColor='black'
                    _focusVisible={{borderBottomColor:'textColor'}}
                />
            </InputGroup>
        );
    }
}

export default Searchbox;