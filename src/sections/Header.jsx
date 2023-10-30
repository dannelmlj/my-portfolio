import { Box, Divider, Flex, Stack } from "@chakra-ui/react";
import { useContext, useState } from "react"
import Logo from "../components/header/Logo";
import ModeSwitch from "../components/header/ModeSwitch";
import MenuStack from "../components/header/MenuStack";
import MenuSocials from "../components/header/MenuSocials";
import ModeContext from "../contexts/ModeContext";


const Header = () => {
  const { mode } = useContext(ModeContext); 
  return (
    
      <Flex
        justify={"space-between"}
        position={"fixed"}
        px={36}
        pt={[4, 4, 2, 2]}
        top={0}
        left={0}
        margin={"auto"}
        width={"98%"}
        zIndex={1}
        backgroundColor={mode ? "darkBackground" : "lightBackground"}
        >
          <Logo to={0}/>
        <Stack
          direction={"row"}
          gap={8}
          >
          <MenuStack />
          <Divider orientation="vertical" h={10} colorScheme="purple"/>
          <MenuSocials/>
          <Divider orientation="vertical" h={10} />
          <ModeSwitch/>
        </Stack>
      </Flex>
  )
}

export default Header;