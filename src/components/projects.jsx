import React, { useState } from "react";
import Slider from "react-slick";
import {
  ChakraProvider,
  Box,
  VStack,
  HStack,
  Image,
  Text,
  Grid,
  GridItem,
  Center,
  Spacer,
  IconButton,
  Tag,
  TagLabel,
  useBreakpointValue
} from "@chakra-ui/react";
import "../App.css";
import {
  Project_PantryPal,
  Project_Rehabilitation,
  Project_EMG
} from "./projectcomponents.jsx";
import EMGProsthesis from "../assets/projectgrid/EMG Project.png";
import PantryPal from "../assets/projectgrid/pantrypal.jpg";
import Rehabilitation from "../assets/projectgrid/rehabilitation-backgroundless.png";
import "boxicons";
import colors from "../colors.js";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// Updated projectData with images
// Updated projectData with external links for specific projects
const projectData = [
  {
    id: 1,
    name: "Finger Rehabilitation Device",
    description:
      "Developed a motorized prototype to quantify recovery progress in stroke patients with hemiparesis, writing Arduino code for motor control and force measurement, and leading the 3D printing process to ensure precise part tolerances.",
    component: <Project_Rehabilitation />,
    image: Rehabilitation,
    tags: ["SolidWorks", "C++", "PrusaSlicer", "LTSpice", "Arduino"],
    route: "/projectrehabilitation",
    margin: "0px",
  },
  {
    id: 2,
    name: "Motorized EMG Driving Prosthesis",
    description:
      "Prototyped an EMG-controlled prosthesis capable of gripping and turning a steering wheel, leading the 3D-printed mechanical design while conducting FEA to ensure stress resilience, meeting peer-reviewed standards.",
    component: <Project_EMG />,
    image: EMGProsthesis,
    tags: ["SolidWorks", "C++", "PrusaSlicer", "LTSpice", "Arduino"],
    route: "/projectemg",
    margin: "-20px",
  },
  {
    id: 3,
    name: "DeltaHacks X: PantryPal Project",
    component: <Project_PantryPal />,
    description:
      "Developed a user-friendly website that simplifies pantry management by allowing clients to input the details of their grocery purchases in cloud storage accessible anywhere.",
    image: PantryPal,
    tags: ["JavaScript", "CSS", "HTML"],
    externalLink: "https://github.com/MenHackers/PantryPal", 
    margin: "-20px",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  
  const handleProjectSelect = (project) => {
    if (project.externalLink) {
      window.open(project.externalLink, "_blank"); // Open external link in a new tab
    } else {
      setSelectedProject(project);
      navigate(project.route);
    }
  };

  const titleFontSize = useBreakpointValue({ base: '16px', md: '16px', lg: '20px' });
  const descriptionFontSize = useBreakpointValue({ base: '12px', md: '10px', lg: '12px' });
  const tagFontSize = useBreakpointValue({ base: '8px', md: '8px', lg: '10px' });
  const spacing = useBreakpointValue({ base: 2, md: 2, lg: 4 });
  

  return (
    <ChakraProvider>
      <Grid
        h="100%"
        w="100%"
        templateRows={{ base: "1fr", md: "repeat(3, 100%)", lg: "repeat(3, 30%)" }}
        templateColumns={{ base: "1fr", md: "repeat(1, 1fr)" }}
        gap={spacing}
        p={spacing}
        overflowY="scroll"
        borderRadius={15}
        transition="all 0.3s ease"
        className="custom-scrollbar"
        maskedelement="linear-gradient(rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 100%)"
      >
        {projectData.map((project) => (
          <GridItem
            key={project.id}
            position="relative"
            className="griditem"
            borderRadius={15}
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => handleProjectSelect(project)}
            overflow="hidden"
            backgroundColor={colors.tertiaryblack}
            p="3"
            boxShadow="md"
            _hover={{
              boxShadow: "lg",
              transition: "all 0.3s ease-in-out",
              "& .icon-rotate": {
                transform: "rotate(-45deg)",
                opacity: 1,  
                transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", 
              },
              backgroundColor: colors.quinaryblack,
            }}
          >
            <HStack h="100%" w="100%" gap="3" overflow="hidden" align="center">
              <Image
                src={project.image}
                alt={project.name}
                width="50%"
                height="100%"
                objectFit="cover"
                borderRadius={12}
                minW="50%"
                flexShrink={0}
              />
              <VStack align="start" w="100%" overflow="hidden" spacing={1} h="100%">
                <Text className="h1" fontSize={titleFontSize} color="white" noOfLines={3} w="100%" flexShrink={0}>
                  {project.name}
                </Text>
                <Text className="h3" fontSize={descriptionFontSize} color="white" w="100%" flex={1} overflow="hidden">
                  {project.description}
                </Text>
                <HStack spacing={1} flexWrap="wrap" w="100%" flexShrink={0}>
                  {project.tags.map((tag, index) => (
                    <Tag
                      key={index}
                      textColor={colors.secondaryblack}
                      backgroundColor={colors.blue}
                      fontSize={tagFontSize}
                    >
                      <TagLabel>{tag}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            </HStack>

            <IconButton
              position="absolute"
              top={1}
              right={1}
              transition= "all 0.3s ease-in-out"
              opacity={0}
              variant="link"
              aria-label="Send email"
              icon={
                <box-icon
                  name="right-arrow-alt"
                  size="md"
                  color={colors.blue}
                ></box-icon>
              }
              className="icon-rotate"
            />
          </GridItem>
        ))}
      </Grid>
    </ChakraProvider>
  );
};

export default Projects;

