import { Carousel } from '@mantine/carousel';
import { useMantineColorScheme } from '@mantine/core';

interface ProjectCarouselProps {}

export default function ProjectCarousel(params: ProjectCarouselProps) {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Carousel slideSize="70%" height="100%" slideGap="md" controlsOffset="md" controlSize={28} loop withIndicators sx={{ flex: 1 }}>
            <Carousel.Slide>
                <div style={{"backgroundColor":"red"}}>
                    {`${colorScheme}`}

                </div>
            </Carousel.Slide>
            <Carousel.Slide>
                <div>
                    meh
                </div>
            </Carousel.Slide>
            
            <Carousel.Slide>
                <div>
                    mehmeh
                </div>
            </Carousel.Slide>
        </Carousel>
    )
}