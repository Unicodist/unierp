import {
    Box,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber
} from "@chakra-ui/react";
import Hero from "@/components/hero";
import React from "react";
import hyperlink from "@/types/hyperlink";
export default function Home() {

    const path:hyperlink[] = [
        {title:'home',url:'/home'},
        {title:'dashboard',url:'/home/dashboard'}
    ]
  return (
      <>
          <Hero path={path} title='Dashboard'/>
          <Box padding='20px'>
              <StatGroup>
                  <Stat>
                      <StatLabel>Income</StatLabel>
                      <StatNumber>56</StatNumber>
                      <StatHelpText>
                          <StatArrow type='increase'/>
                          45%
                      </StatHelpText>
                  </Stat>
              </StatGroup>
          </Box>
      </>
      )
}
