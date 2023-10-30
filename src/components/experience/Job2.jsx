import { useContext } from "react"
import ModeContext from "../../contexts/ModeContext"
import { AspectRatio, Box, Center, Icon, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import { ChevronUpIcon } from "@chakra-ui/icons"

const Job2 = ({expParallax}) => {
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
                Deploifai Limited
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
              Software Engineer Intern
            </Text>
            <Text
              color={mode ? 'darkText' : 'lightText'}>
              June 2023 - August 2023
            </Text>
          </Stack>
          <UnorderedList color={mode ? 'darkText' : 'lightText'}
            pl={6}
            spacing={3}
            pt={3}>
            <ListItem>
              Examine and fixed bugs on the company's website to improve web functionality and user experience. Improved design principles that promote code reusability
            </ListItem>
            <ListItem>
              Designed and develop a full-stack web application using Typescript, React, GraphQL, and Prisma ORM to implement new features to meet specific business requirements, contributed to 1000+ lines of code.
            </ListItem>
            <ListItem>
            Designed and implemented data validation and transformation algorithms to ensure data consistency
            </ListItem>
            <ListItem>
              Worked on virtual machine image migration, build Golden Images for various cloud providers. Automate installation using provisioner tool Implemented Ansible as the provisioner tool.
            </ListItem>
          </UnorderedList>
          <Text
            color={mode ? 'darkText' : 'lightText'}
            pl={6}
            py={4}
            fontWeight={"bold"}>
            Skills: React, TypeScript, GraphQL, Prisma ORM, Packer, Ansible, AWS, Azure, GCP
          </Text>
        </Box>
        <Box boxSize={"sm"} align={"center"}>
          <AspectRatio maxW={300} ratio={1/2}>
            <Image zIndex={"auto"} src="../src/assets/images/me.png" alt="Dannel Mulja" fit={"cover"} />
          </AspectRatio>        
        </Box>
      </Stack>
      <Center
        width={"80%"}>
          <Icon onClick={() => expParallax.current.scrollTo(0)} as={ChevronUpIcon} color={mode ? 'darkText' : 'lightText' } w={12} h={12} />
        </Center>    
    </Stack>
  )
}

export default Job2;