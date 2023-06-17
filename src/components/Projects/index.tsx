import { Carousel } from '@mantine/carousel';
import { Button, Container, Paper, Title, Text, createStyles, useMantineColorScheme, rem } from '@mantine/core';
import Image from 'next/image'

import cyber_img from "@/images/cyber_security2.jpg"
import printing_automation_img from "@/images/printing_automation.jpg"
import wiki_img from "@/images/wiki_platform.jpg"
import serverless_API_img from "@/images/serverless_API.jpg"


const useStyles = createStyles((theme) => ({
    card: {
        height: rem(440),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    
      title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
      },
    
      category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
      },
  }))

const data = [
    {
        image: cyber_img.src,
        title: 'Enhancing Application Security: Implementing OAuth for Robust Authentication and Authorization',
        category: 'Cyber Security',
    },
    {
        image: printing_automation_img.src,
        title: 'Automating letter generation and printing',
        category: 'Automating manual processes',
    },
    {
        image: wiki_img.src,
        title: 'Wiki Platform Implementation: Empowering Collaboration and Knowledge Sharing',
        category: 'Collaboration',
    },
    {
        image: serverless_API_img.src,
        title: 'Unlocking Scalability and Flexibility: Building APIs with Serverless Technologies',
        category: 'Cloud',
    },
];

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    const { classes } = useStyles();

    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button>
                Read article
            </Button>
        </Paper>
    );
    }




interface ProjectCarouselProps {
    isMobileOrTablet: boolean;
}

export function ProjectCarousel(params: ProjectCarouselProps) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const { classes } = useStyles();
    let slide_size = ""

    if (params.isMobileOrTablet) {
        slide_size = "80%"
    } else {
        slide_size = "33.333333%"
    }
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel height="80vh" slideGap="md" slideSize={slide_size} align="center" controlsOffset="md" controlSize={28} loop withIndicators>
            {slides}
        </Carousel>
    )
}