import { Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import MenuItem from "./MenuItem";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { EmailIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";

const MenuSocials = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack
      spacing={8}
      align={"center"}
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      <Icon as={BsGithub} color={mode ? 'darkText' : 'lightText' } w={7} h={7} />
      <Icon as={BsLinkedin} color={mode ? 'darkText' : 'lightText' } w={7} h={7} />
      <EmailIcon color={mode ? 'darkText' : 'lightText' } w={7} h={7} />


    </Stack>
  )
}

export default MenuSocials;