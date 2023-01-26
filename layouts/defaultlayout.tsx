import React, {Component} from 'react';
import Navbar from "@/layouts/navbar";
import {Grid, GridItem} from "@chakra-ui/react";
import Hero from "@/components/hero";
import hyperlink from "@/types/hyperlink";
import {Sidebar} from "@/components/sidebar";

class Defaultlayout extends Component {
    private readonly children: React.ReactNode | undefined;
    path:hyperlink[] = [{title:'home',url:'/home'},{title:'dashboard',url:'/home/dashboard'}]
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
                    >
                        <Sidebar/>
                    </GridItem>
                    <GridItem>
                        <Navbar/>
                    </GridItem>
                    <GridItem bgColor='#81a1c122'>
                        <Hero path={this.path} title='Dashboard'/>
                    </GridItem>
                    <GridItem>
                        {this.children}
                    </GridItem>
                    
            </Grid>
        );
    }
}

export default Defaultlayout;