import { Box, Center, Divider, Stack } from "@chakra-ui/react";
import { forwardRef, useContext, useState } from "react"
import Logo from "./Logo";
import ModeSwitch from "./ModeSwitch";
import MenuStack from "./MenuStack";
import MenuSocials from "./MenuSocials";
import ModeContext from "../../contexts/ModeContext";


const Header = () => {
  const { mode } = useContext(ModeContext); 
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Box 
      position={"fixed"}
      top={0}
      left={0}
      margin={"auto"}
      width={"100%"}
      zIndex={+1}>
    <Stack
      px={36}
      spacing={8}
      align={"center"}
      justify={"space-between"}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 2, 2]}
      // zIndex={+1}
      backgroundColor={mode ? "darkBackground" : "lightBackground"}
      >
        <Logo/>
      <Stack
        direction={"row"}
        gap={8}
        >
        <MenuStack />
        <Divider orientation="vertical" h={10} />
        <MenuSocials/>
        <Divider orientation="vertical" h={10} />
        <ModeSwitch/>
      </Stack>
    </Stack>
    </Box>
  )
}

export default Header;