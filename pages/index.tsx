import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {
    Avatar,
    Box,
    Flex,
    Heading,
    Stat,
    StatArrow,
    StatGroup,
    StatHelpText,
    StatLabel,
    StatNumber
} from "@chakra-ui/react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
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
      )
}
