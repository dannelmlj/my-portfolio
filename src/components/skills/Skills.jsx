import { Box, Heading, Stack, Text } from "@chakra-ui/react"
import Languages from "./Languages"
import Technology from "./Technology"
import Tools from "./Tools"
import { useContext } from "react"
import ModeContext from "../../contexts/ModeContext"



const Skills = () => {
  const { mode } = useContext(ModeContext)
  return(
  <Stack
    px={36}
    gap={48}
    justify={"space-between"}
    height={"100vh"}
    width={"100wh"}
    direction={"row"}>
    <Box>
      <p>hello</p>
    </Box>
    <Stack
      width={"60%"}>
      <Heading py={4} color={mode ? 'darkText' : 'lightText' } id="Skills">
        Skills
      </Heading>
      <Text color={mode ? 'darkText' : 'lightText' }>
        As an aspiring software engineer, I am actively mastering various programming languages, tools, and technologies.
        <br/>
        Here are the tech stacks that I am currently familiar with through my studies and internships.
        <br/>
        I am also a big fan of Linux Ubuntu, and have been using it as my main operating system for the past 4 months.
      </Text>

      <Text pt={4} fontWeight={"bold"}color={mode ? 'darkText' : 'lightText' }>
        Languages
      </Text>
      <Languages/>
      <Text pt={4} fontWeight={"bold"}color={mode ? 'darkText' : 'lightText' }>
        Tools/Frameworks
      </Text>
      <Tools/>
      <Text pt={4} fontWeight={"bold"}color={mode ? 'darkText' : 'lightText' }>
        Technology
      </Text>
      <Technology/>
    </Stack>
  </Stack>
  )
}

export default Skills