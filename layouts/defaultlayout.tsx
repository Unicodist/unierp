import React, {Component} from 'react';
import Navbar from "@/layouts/navbar";
import {Grid, GridItem} from "@chakra-ui/react";
import {Sidebar} from "@/components/sidebar";

class Defaultlayout extends Component {
    private readonly children: React.ReactNode | undefined;
    constructor(props:React.PropsWithChildren) {
        super(props);
        this.children = props.children
    }
    render() {
        return (
            <Grid
                h='100vh'
                templateColumns='20vw 1fr'
                templateRows='70px 200px 1fr'
                >
                    <GridItem
                    rowSpan={3}
                    backgroundColor={'#53667B'}
                    >
                        <Sidebar/>
                    </GridItem>
                    <GridItem>
                        <Navbar/>
                    </GridItem>
                    <GridItem>
                        {this.children}
                    </GridItem>
                    
            </Grid>
        );
    }
}

export default Defaultlayout;