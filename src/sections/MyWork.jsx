import { useContext } from "react";
import ModeContext from "../contexts/ModeContext";
import { Box, Heading } from "@chakra-ui/react";
import AllWork from "../components/myWork/AllWork";

const MyWork = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Box
      height={"100vh"}
      width={"100wh"}
      px={36}
    >
      <Heading py={4} color={mode ? 'darkText' : 'lightText'} id="MyWork">
        My Work
      </Heading>
      <AllWork/>
    </Box>
  )
}

export default MyWork;