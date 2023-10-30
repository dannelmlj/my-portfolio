import { Icon, Stack, Text } from "@chakra-ui/react"
import { SiCplusplus, SiPython, SiJavascript, SiTypescript } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";

const languageList = [
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Java",
    icon: FaJava,
  }
]

const Languages = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack
      spacing={8}
      align={"center"}
      direction={'row'}
      pt={[4, 4, 0, 0]}
    >
      {languageList.map((language) => {
        const { name, icon } = language;
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

export default Languages;