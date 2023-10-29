import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";
import { Box, Heading } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Job1 from "./Job1";
import Job2 from "./Job2";

const Jobs = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Box
      height={"70vh"}
      width={"100wh"}
      backgroundColor={mode ? 'darkCard' : "lightCard"}
      shadow={mode ? '' : '2xl'}
    >
      <Parallax pages={2} 
      style={{
        width: "100vw", 
        height: "70vh",
      }}>
        <ParallaxLayer offset={0} speed={1}>
          <Job1/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <Job2/>
          
        </ParallaxLayer>
      </Parallax>
    </Box>
  )
}

export default Jobs