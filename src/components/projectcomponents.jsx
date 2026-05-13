import React from 'react';
import {
  ChakraProvider, Box, VStack, Text, IconButton, Center, HStack, Spacer, Button, useBreakpointValue
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projectDataRehabilitation = {
  name: "",
  description: "",
  navigateTo: '',
  images: [],
  tags: []
};

const projectDataEMG = {
  name: "",
  description: "",
  navigateTo: '',
  images: [],
  tags: []
};

const projectDataPantryPal = {
  name: "",
  description: "",
  navigateTo: '', // Internal navigation
  externalLink: '', // External link (optional)
  images: [],
  tags: []
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <IconButton
    aria-label="Next"
    icon={<ArrowRightIcon boxSize={8} />}
    position="absolute"
    top="30%" // Center vertically
    right="10px"
    zIndex={1}
    onClick={onClick}
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    _active={{ backgroundColor: 'transparent' }}
  />
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <IconButton
    aria-label="Previous"
    icon={<ArrowLeftIcon boxSize={8} />}
    position="absolute"
    top="30%" // Center vertically
    left="10px"
    zIndex={1}
    onClick={onClick}
    backgroundColor="transparent"
    _hover={{ backgroundColor: 'transparent' }}
    _active={{ backgroundColor: 'transparent' }}
  />
);



const Project = ({ projectData }) => {
  const navigate = useNavigate();

  const headingSize = useBreakpointValue({ base: '18px', md: '22px', lg: '28px' });
  const descSize = useBreakpointValue({ base: '12px', md: '14px', lg: '16px' });
  const tagSize = useBreakpointValue({ base: '10px', md: '11px', lg: '12px' });
  const imageH = useBreakpointValue({ base: '30vh', md: '38vh', lg: '45vh' });

  const handleProjectNavigation = () => {
    if (projectData.externalLink) {
      window.open(projectData.externalLink, '_blank');
    } else {
      navigate(projectData.navigateTo);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ChakraProvider>
      <VStack spacing={4} alignItems="flex-start" w="100%" h="100%">
        <HStack spacing={3} w="100%" alignItems="flex-start" flexWrap="wrap">
          <Text className="h1" fontSize={headingSize} color="white" textAlign="left" noOfLines={2} flex={1}>
            {projectData.name}
          </Text>
          <HStack spacing={2} flexWrap="wrap">
            {projectData.tags.map((tag, index) => (
              <Box key={index} bg="teal.500" color="white" p={2} borderRadius="md" fontSize={tagSize}>
                {tag}
              </Box>
            ))}
          </HStack>
        </HStack>

        <Box w="100%" h={imageH} borderWidth="1px" borderRadius="lg" overflow="hidden" flexShrink={0}>
          <Slider {...settings} style={{ height: '100%' }}>
            {projectData.images.map((image, index) => (
              <Box key={index} position="relative" h={imageH}>
                <Text
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bg="rgba(0,0,0,0.4)"
                  color="white"
                  pl={2}
                  py={1}
                  className="h3"
                  fontSize="sm"
                  zIndex={1}
                >
                  {image.caption}
                </Text>
                <img
                  src={image.src}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        <Text className="h3" fontSize={descSize} color="white" textAlign="left">
          {projectData.description}
        </Text>

        <HStack w="100%" justify="flex-end">
          <Button
            className="h1"
            onClick={handleProjectNavigation}
            color="white"
            variant="link"
            rightIcon={<ArrowRightIcon boxSize={3} />}
            fontSize={descSize}
            fontWeight="bold"
            _hover={{ textDecoration: 'underline' }}
            textDecoration="underline"
            mr={5}
          >
            View More
          </Button>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};


const Project_Rehabilitation = () => (
  <Project projectData={projectDataRehabilitation} />
);

const Project_EMG = () => (
  <Project projectData={projectDataEMG} />
);

const Project_PantryPal = () => (
  <Project projectData={projectDataPantryPal} />
);


export { Project_Rehabilitation, Project_EMG, Project_PantryPal };
