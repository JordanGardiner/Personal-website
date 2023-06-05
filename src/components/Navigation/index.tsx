"use client";

import { useState } from "react"
import {
  Flex,
  createStyles,
  Text,
  useMantineColorScheme,
  Collapse,
  ActionIcon,
  rem,
  Burger,
  Grid,
  Header,
} from "@mantine/core"

import { IconSun, IconMoonStars } from '@tabler/icons-react';

import Link from 'next/link';
import { useMediaQuery } from 'react-responsive'

const useStyles = createStyles((theme) => ({
  navbar: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.light[0],
    border: "0",
    backgroundColor: "transparent"
  },
  actionIcon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.light[1],
  },
  text: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.light[1],
  },
  overlay: {
    zIndex: 9,
    border: "0",
    position: "absolute"
  },
  header: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.light[0],
    border: "0",
  },
}))

function Navbar({ links }: NavigationProps) {
  // This is used for Mobile only
  const { classes } = useStyles();

  const items = links.map((link) => {
    return <Link key={link.label} href={link.link}>
        <Text className={classes.text}>{link.label}</Text>
      </Link>
  });

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  
  const [navVisible, setNavVisible] = useState(true)

  function toggleNav() {
    setNavVisible(!navVisible)
  }
  return (
    <Flex className={classes.overlay} w={"20%"} justify="center" align="center" direction="column" gap="xl" bg={"yellow"}>
      <Burger opened={navVisible} onClick={toggleNav} aria-label="Menu"/>
      <Collapse in={navVisible}>
        <Flex justify="center" align="center" direction="column" wrap="wrap" gap="xl">
          {items}
        </Flex>
      </Collapse>
    </Flex>
  )
}


const HEADER_HEIGHT = rem(60);

interface NavigationProps {
  links: { 
    link: string; 
    label: string; 
  }[];
}

function HeaderNav({ links }: NavigationProps) {
  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <Link
        key={link.label}
        href={link.link}
      >
        <Text className={classes.text}>{link.label}</Text>
      </Link>
    );
  });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <Header className={classes.header} height={HEADER_HEIGHT}>
      <Grid h={"100%"} justify="center" align="center" gutter={0}>
        <Grid.Col span={"auto"}>
          <Text>
            Jordan Gardiner
          </Text>
        </Grid.Col>
        <Grid.Col span={8}>
          <Flex justify="center" align="center" direction="row" wrap="wrap" gap="xl">
            {items}
          </Flex>
        </Grid.Col>
        <Grid.Col span={"auto"}>
          <Flex justify="center" align="center">
            <ActionIcon
              variant="outline"
              className={classes.actionIcon}
              onClick={() => toggleColorScheme()}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
            </ActionIcon>
          </Flex>
        </Grid.Col>
      </Grid>
    </Header>
  );
}

export default function Navigation(links:NavigationProps ){
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const navBar = Navbar(links)
  const headerNav = HeaderNav(links)
  if (isMobileOrTablet && isPortrait){
    return navBar
  } else {
    return headerNav 
  }
}