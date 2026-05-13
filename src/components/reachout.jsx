import React from 'react';
import {
  ChakraProvider, Box, VStack, HStack, Text, Image, useBreakpointValue,
  Tag, TagLabel, TagLeftIcon, Wrap, WrapItem
} from '@chakra-ui/react';
import '../App.css';
import connor from '../assets/connor-background-free.png';
import colors from '../colors.js';
import { TypeAnimation } from 'react-type-animation';
import { SunIcon } from '@chakra-ui/icons';
import "boxicons";

const resume = "https://drive.google.com/file/d/1BUMpkz3J9xOAR8TGUdtnaT0ZdC6MsvFZ/view?usp=sharing";
const emailLink = "mailto:c3irvine@uwaterloo.ca";
const linkedin = "https://www.linkedin.com/in/connor-john-irvine/";
const github = "https://github.com/ConnorIrvine";

const ReachOut = () => {
  // Responsive font size and spacing values
  const textFontSize = useBreakpointValue({ base: '8px', md: '14px', lg: '32px' });
  const internFontSize = useBreakpointValue({ base: '7px', md: '14px', lg: '14px' });
  const titleFontSize = useBreakpointValue({ base: '28px', md: '18px', lg: '40px' });
  const buttonFontSize = useBreakpointValue({ base: '10px', md: '10px', lg: '14px' });
  const spacing = useBreakpointValue({ base: 3, md: 1, lg: 3 });

  // Responsive image size
  const imageSizeW = useBreakpointValue({ base: '80px', md: '120px', lg: '140px' });
  const imageSizeH = useBreakpointValue({ base: '450px', md: '100px', lg: '140px' });

  const buttonProps = {
    as: "button",
    flex: 1,
    height: "100%",
    minH: "36px",
    bgColor: colors.tertiaryblack,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s",
    p: spacing,
    _hover: {
      boxShadow: "lg",
      transition: "all 0.3s ease-in-out",
      backgroundColor: colors.quinaryblack,
    },
  };

  return (
    <ChakraProvider>
      <VStack
        h="100%"
        w="100%"
        p={spacing}
        spacing={spacing}
        align="stretch"
        backgroundColor={colors.secondaryblack}
        borderRadius={15}
      >
        {/* Top row: photo + name/title */}
        <HStack spacing={spacing} align="stretch" flexShrink={0}>
          <Box flexShrink={0} w={imageSizeW} h={imageSizeH} bg={colors.blue} borderRadius={15} overflow="hidden">
            <Image src={connor} alt="connor" w="100%" h="100%" objectFit="cover" />
          </Box>
          <VStack flex={1} align="flex-start" justify="center" spacing={1} overflow="hidden">
            <Tag backgroundColor={colors.tertiaryblack} textColor={colors.primarywhite} maxW="100%">
              <TagLeftIcon as={SunIcon} textColor="orange" />
              <TagLabel fontSize={internFontSize} noOfLines={1}>Looking for full time employment</TagLabel>
            </Tag>
            <Text className="h1" fontSize={titleFontSize} color={colors.primarywhite} noOfLines={1}>
              Connor Irvine
            </Text>
            <HStack spacing={2} align="center">
              <Text className="h3" fontSize={buttonFontSize} color={colors.secondarywhite}>
                I'm a
              </Text>
              <TypeAnimation
                sequence={[
                  'Backend Developer', 3000,
                  'Web Application Developer', 3000,
                  'Biomedical Engineering Student', 3000,
                ]}
                wrapper="span"
                speed={25}
                className="h1"
                style={{ fontSize: buttonFontSize, color: '#1dc5b4', display: 'inline-block' }}
                repeat={Infinity}
              />
            </HStack>
          </VStack>
        </HStack>

        {/* Middle: info tags */}
        <Box
          backgroundColor={colors.tertiaryblack}
          borderRadius={10}
          p={spacing}
          flexShrink={0}
        >
          <Wrap spacing={2} align="center">
            <WrapItem>
              <Tag p={2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} name="book-alt" type="solid" size="sm"></box-icon>
                <TagLabel ml={1}>Bachelors of Applied Science</TagLabel>
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag p={2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} type="solid" name="book-alt"></box-icon>
                <TagLabel ml={1}>Biomedical Engineering</TagLabel>
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag p={2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} type="solid" name="school"></box-icon>
                <TagLabel ml={1}>University of Waterloo</TagLabel>
              </Tag>
            </WrapItem>
            <WrapItem>
              <Tag p={2} backgroundColor={colors.quinaryblack} textColor={colors.secondarywhite} fontSize={buttonFontSize}>
                <box-icon color={colors.blue} name="current-location"></box-icon>
                <TagLabel ml={1}>Hamilton, ON</TagLabel>
              </Tag>
            </WrapItem>
          </Wrap>
        </Box>

        {/* Bottom row: action buttons */}
        <HStack spacing={spacing} flexShrink={0}>
          <Box {...buttonProps} onClick={() => window.open(resume, "_blank")}>
            <box-icon color={colors.blue} type="solid" name="file-doc"></box-icon>
            <Text ml="2" fontSize={buttonFontSize} color={colors.secondarywhite} className="h3">Resume</Text>
          </Box>
          <Box {...buttonProps} onClick={() => window.open(linkedin, "_blank")}>
            <box-icon color={colors.blue} type="logo" name="linkedin-square"></box-icon>
            <Text ml="2" fontSize={buttonFontSize} color={colors.secondarywhite} className="h3">LinkedIn</Text>
          </Box>
          <Box {...buttonProps} onClick={() => window.open(emailLink, "_self")}>
            <box-icon color={colors.blue} type="solid" name="envelope"></box-icon>
            <Text ml="2" fontSize={buttonFontSize} color={colors.secondarywhite} className="h3">Email</Text>
          </Box>
          <Box {...buttonProps} onClick={() => window.open(github, "_blank")}>
            <box-icon color={colors.blue} type="logo" name="github"></box-icon>
            <Text ml="2" fontSize={buttonFontSize} color={colors.secondarywhite} className="h3">GitHub</Text>
          </Box>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default ReachOut;
