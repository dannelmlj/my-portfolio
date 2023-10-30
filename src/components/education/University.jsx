import { useContext } from "react"
import ModeContext from "../../contexts/ModeContext"
import { AspectRatio, Box, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"
import cityu from "../../assets/images/cityu.jpg"
const University = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack
      direction={"row"}>
      <Stack direction={"column"}
      width={"60%"}>
          <Box
            width={"100%"}
            py={8}
            >
            <Stack
              direction={"row"}
              justify={"space-between"}>
              <Text
                fontSize={"2xl"}
                fontWeight={"bold"}
                color={mode ? 'darkText' : 'lightText'}>
                  City University of Hong Kong
              </Text>
            </Stack>
            <Stack
              direction={"row"}
              justify={"space-between"}>
              <Text
                color={mode ? 'darkText' : 'lightText'}
                fontStyle={"italic"}>
                Bsc in Computer Science
              </Text>
              <Text
                color={mode ? 'darkText' : 'lightText'}>
                August 2021 - June 2025
              </Text>
            </Stack>
            <UnorderedList color={mode ? 'darkText' : 'lightText'}
              pl={6}
              spacing={3}
              pt={3}>
              <ListItem>
                Top 10 %
              </ListItem>
              <ListItem>
                Full Tuition Scholarship
              </ListItem>
              <ListItem>
                Dean's List Semester B 2021/2022
              </ListItem>

            </UnorderedList>
            <Text
              color={mode ? 'darkText' : 'lightText'}
              py={4}
              fontWeight={"bold"}>
              Coursework: Data Structures, Database Systems, Operating Systems, C++ Programming, Java Programming, Python Programming, 
              Discrete Mathematics, Computer Organization, Computer Networks, Software Engineering, Web Development.
            </Text>
          </Box>   
        </Stack>
        <Box boxSize={"md"} width={"40%"} align={"center"} py={8}>
          <AspectRatio maxW={600} ratio={2}>
            <Image zIndex={"auto"} src={cityu} alt="Dannel Mulja" fit={"cover"} />
          </AspectRatio>        
        </Box>
      </Stack>
  )
}

export default University;