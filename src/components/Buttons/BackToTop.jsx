import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";
import { Flex, IconButton } from "@chakra-ui/react";
import { ArrowUpIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const BackToTop = ({parallax}) => {
  // const modeContext = useContext(ModeContext);
  return (
    <Flex
      position="fixed"
      bottom={8}
      right={8}
      zIndex={1}>
      <IconButton
        colorScheme="buttonColor"
        icon={<ArrowUpIcon/>} 
        onClick={() => parallax.current.scrollTo(0)}
        size={"md"}
        w={8}
        id="back-to-top"
      />
    </Flex>
  )
}

export default BackToTop;