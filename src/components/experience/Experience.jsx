import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";
import { Box, Heading } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Job1 from "./Job1";
import Jobs from "./Jobs";

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