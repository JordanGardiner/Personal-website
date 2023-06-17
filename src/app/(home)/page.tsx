"use client";

import { ProjectCarousel } from "@/components/Projects"
import { 
  Container,
  createStyles,
  Flex,
  Image,
  Text,
  rem
} from '@mantine/core';
import { useMediaQuery } from 'react-responsive'

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "yellow",
    height: "100%"
  }
}))

export default function Home() {
  const { classes } = useStyles();
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isNarrowScreen = isMobileOrTablet && isPortrait ? true : false
  
  return (
      <div className={classes.container}>
        <Flex h={"90vh"} bg={"green"} justify="center" align="center" direction="row" wrap="wrap" gap="xl">
          <Image width={isNarrowScreen ? "100%" : "50%"} src={null} alt="With default placeholder" withPlaceholder />
          <Text>
              Welcome to this great place
          </Text>
          <Flex>

          </Flex>
        </Flex>
        <ProjectCarousel isMobileOrTablet={isMobileOrTablet}/>
      </div>
  )
}
