import React, {Component} from 'react';
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text} from "@chakra-ui/react";
import HeroProps from "@/types/heroprops";
import Link from "next/link";

class Hero extends Component {
    props:HeroProps
    constructor(props:HeroProps) {
        super(props);
        this.props = props
    }
    render() {
        return (
            <Box padding='20px'>
                <Breadcrumb fontWeight='medium' separator='✦'>
                    {this.props.path.map((item)=>{
                        return (
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} href={item.url}>
                                    {item.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        )
                    })}
                </Breadcrumb>
                <Text fontSize='lg' mt={5} fontWeight='bold'>{this.props.title}</Text>
            </Box>
        );
    }
}

export default Hero;