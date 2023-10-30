import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";
import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ModeSwitch = () => {
  const modeContext = useContext(ModeContext);
  const isDark = modeContext.mode;
  return (
    <IconButton
      aria-label="Toggle Dark Mode"
      colorScheme="buttonColor"
      isActive={isDark}
      icon={isDark ? <MoonIcon/> : <SunIcon/>} 
      onClick={() => {
        modeContext.changeMode();
      }}
      size={"md"}
      w={8}
    />
  )
}

export default ModeSwitch;