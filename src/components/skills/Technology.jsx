import { Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import { SiUbuntu } from "react-icons/si";
import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";

const technologyList = [
  {
    name: "Linux Ubuntu",
    icon: SiUbuntu,
  }
]

const Technology = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack
      spacing={8}
      align={"center"}
      direction={'row'}
      pt={[4, 4, 0, 0]}
    >
      {technologyList.map((technology) => {
        const { name, icon } = technology;
        return (
          <Stack
            align={"center"}>
            <Icon as={icon} color={mode ? 'darkText' : 'lightText' } w={7} h={7} />
            <Text color={mode ? 'darkText' : 'lightText' }>{name}</Text>
          </Stack>
        )
      })}

    </Stack>
  )
}

export default Technology;