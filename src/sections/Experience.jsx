import { useContext } from "react";
import ModeContext from "../contexts/ModeContext";
import { Box, Heading } from "@chakra-ui/react";
import Jobs from "../components/experience/Jobs";

const Experience = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Box
      height={"100vh"}
      width={"100wh"}
      px={36}
    >
      <Heading py={4} color={mode ? 'darkText' : 'lightText'} id="Experience">
        Experience
      </Heading>
      <Jobs/>
    </Box>
  )
}

export default Experience