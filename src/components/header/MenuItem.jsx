import { Link, Text } from "@chakra-ui/react"
import ModeContext from "../../contexts/ModeContext";
import '@fontsource/fira-code/500.css'
import { useContext } from "react";
import { ParallaxContext } from "../../contexts/ParallaxContext";



const MenuItem =  ({to, children}) => {
  const { mode } = useContext(ModeContext);
  const { parallax } = useContext(ParallaxContext)
  console.log("par Dalem banget", parallax)
  console.log("par banget", to)

  return (
    <Link onClick={() => parallax.current.scrollTo(to)}>
      <Text color={mode ? 'darkText' : 'lightText'}>
        {children}
      </Text>
    </Link>
  )
}

export default MenuItem;