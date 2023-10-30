import { Link, Text } from "@chakra-ui/react"
import React, { useContext } from "react"
import '@fontsource/fira-code/500.css'
import ModeContext from "../../contexts/ModeContext";
import { ParallaxContext } from "../../contexts/ParallaxContext";

const Logo = ({to}) => {
  const { mode } = useContext(ModeContext);
  const { parallax } = useContext(ParallaxContext)
  return (
    <Link onClick={() => parallax.current.scrollTo(to)}>
      <Text font fontSize={"xx-large"} fontWeight={"extrabold"} color={mode ? 'darkText' : 'lightText'}>Dannel Mulja</Text>
    </Link>
  )
}

export default Logo;