import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import LeetCode from "./Leetcode";
import Github from "./Github";


const AllWork = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack
      height={"70vh"}
      width={"100wh"}
      direction={"row"}
    >
      <LeetCode easy={15} medium={1} hard={0}/>
      <Github/>
      
    </Stack>
  )
}

export default AllWork