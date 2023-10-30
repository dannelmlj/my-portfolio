import { useContext, useRef } from "react";
import ModeContext from "../../contexts/ModeContext";
import { Box } from "@chakra-ui/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Job1 from "./Job1";
import Job2 from "./Job2";

const Jobs = () => {
  const { mode } = useContext(ModeContext)
  const expParallax = useRef(null)
  return(
    <Box
      height={"65vh"}
      width={"100wh"}
      backgroundColor={mode ? 'darkCard' : "lightCard"}
      shadow={mode ? '' : '2xl'}
    >
      <Parallax pages={2} 
      style={{
        width: "100vw", 
        height: "65vh",
      }}
      ref={expParallax}>
        <ParallaxLayer offset={0} speed={1}>
          <Job1 expParallax={expParallax}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <Job2 expParallax={expParallax}/>
          
        </ParallaxLayer>
      </Parallax>
    </Box>
  )
}

export default Jobs