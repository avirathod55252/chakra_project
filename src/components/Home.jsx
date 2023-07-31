import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50% , -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg'} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]}> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, recusandae eos illo quia quam suscipit eaque omnis odit
            natus id iste cum maiores, laudantium repellat laborum. Dolor, sit.
            Obcaecati quaerat enim aut molestias! Labore mollitia quia adipisci
            incidunt minima, amet ex, natus aliquam eligendi tenetur, optio
            dolorum inventore ducimus alias repudiandae nisi error? Eius ex
            illum et provident laboriosam mollitia, totam nam? Rerum sapiente
            quae, accusamus veniam similique, voluptate iusto expedita ratione
            error vero fugit. Illum impedit veniam fugit, possimus corporis
            quaerat optio sint quasi quibusdam, facilis, sit atque qui deleniti
            aut deserunt repellat ea repellendus quos? Dolorem excepturi
            distinctio velit voluptatem, adipisci nemo, tenetur tempore
            mollitia, odit possimus laborum. Voluptatibus ipsa nobis repudiandae
            minima tenetur architecto harum quae eveniet id eos illo, impedit
            repellat tempora, nesciunt ullam. Dicta, voluptatibus cupiditate?
            Distinctio provident cumque harum eius modi sed, ipsum ex soluta
            impedit nihil voluptatem deleniti obcaecati necessitatibus fuga
            excepturi voluptatum eveniet voluptates, repellat rem dolorum, non
            dolorem. Neque praesentium omnis nihil officia blanditiis ratione
            qui a voluptatibus rem aliquam beatae laudantium facere earum
            adipisci, quos quod veritatis, quam dolor deleniti? Accusamus
            impedit corrupti, numquam eligendi nesciunt culpa dolorem error,
            optio explicabo recusandae beatae iusto. Porro suscipit quis eos
            laborum magni?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w="full" h={'90vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Future is gaming
      </Heading>
    </Box>
    <Box w="full" h={'90vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming on console
      </Heading>
    </Box>

    <Box w="full" h={'90vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night life is console
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
