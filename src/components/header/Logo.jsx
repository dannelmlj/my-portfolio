import { Link, Text } from "@chakra-ui/react"
import React, { useContext } from "react"
import '@fontsource/fira-code/500.css'
import ModeContext from "../../contexts/ModeContext";

const Logo = () => {
  const { mode } = useContext(ModeContext);
  return (
    <Link href='#'>
      <Text font fontSize={"xx-large"} fontWeight={"extrabold"} color={mode ? 'darkText' : 'lightText'}>Dannel Mulja</Text>
    </Link>
  )
}

export default Logo;