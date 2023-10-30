import { useContext } from "react"
import ModeContext from "../../contexts/ModeContext"
import { AspectRatio, Box, Center, Icon, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import me from "../../assets/images/me.png"


const Job1 = ({expParallax}) => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack direction={"column"}>
      <Stack
        direction={"row"}
      >
        <Box
          width={"60%"}
          py={12}
          px={10}>
          <Stack
            direction={"row"}
            justify={"space-between"}>
            <Text
              fontSize={"xl"}
              fontWeight={"bold"}
              color={mode ? 'darkText' : 'lightText'}>
                Manulife Investment Management
            </Text>
            <Text
              color={mode ? 'darkText' : 'lightText'}>
              Hong Kong
            </Text>
          </Stack>
          <Stack
            direction={"row"}
            justify={"space-between"}>
            <Text
              color={mode ? 'darkText' : 'lightText'}>
              Tech Placement Intern, GWAM Retirement Technology
            </Text>
            <Text
              color={mode ? 'darkText' : 'lightText'}>
              August 2023 - Present
            </Text>
          </Stack>
          <UnorderedList color={mode ? 'darkText' : 'lightText'}
            pl={6}
            spacing={3}
            pt={3}>
            <ListItem>
              Working on an internal workflow management system that integrates task automation, process modeling, and data integration to optimize business processes.
            </ListItem>
            <ListItem>
            Developing a generalization of the workflow system to create abstract, reusable components that save tens of man-hours of future developments. Involved in creating proof of concept, development, and demo to product owners.
            </ListItem>
            <ListItem>
            Working on e2e regression testing automation by utilizing Github Actions, saving 3 days of manual testing per release.
            </ListItem>
          </UnorderedList>
          <Text
            color={mode ? 'darkText' : 'lightText'}
            pl={6}
            py={4}
            fontWeight={"bold"}>
            Skills: React, JavaScript, ServiceNow, Github Actions, Cypress, Jest, Jira
          </Text>
        </Box>
        <Box boxSize={"sm"} align={"center"}>
          <AspectRatio maxW={300} ratio={1/2}>
            <Image zIndex={"auto"} src={me} alt="Dannel Mulja" fit={"cover"} />
          </AspectRatio>        
        </Box>    
      </Stack>
      <Center
        pt={12}
        width={"80%"}
        >
        <Icon onClick={() => expParallax.current.scrollTo(1)} as={ChevronDownIcon} color={mode ? 'darkText' : 'lightText' } w={12} h={12} />
      </Center>
    </Stack>
  )
}

export default Job1;