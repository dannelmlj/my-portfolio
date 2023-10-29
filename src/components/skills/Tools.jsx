import { Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import {
  SiGraphql,
  SiReact,
  SiMongodb,
  SiPrisma,
  SiAnsible,
  SiPacker,
  SiJest,
  SiGithubactions,
  SiGit
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useContext } from "react";
import ModeContext from "../../contexts/ModeContext";

const toolList = [
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
  },
  {
    name: "Prisma ORM",
    icon: SiPrisma,
  },
  {
    name: "Ansible",
    icon: SiAnsible,
  },
  {
    name: "Packer",
    icon: SiPacker,
  },
  {
    name: "Jest",
    icon: SiJest,
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
  },
  {
    name: "Git",
    icon: SiGit,
  },
]

const Tools = () => {
  const { mode } = useContext(ModeContext)
  return (
    <Stack
    direction={"column"}>
      <Stack
        spacing={8}
        align={"center"}
        direction={'row'}
        pt={[4, 4, 0, 0]}
      >
        {toolList.slice(0,5).map((tool) => {
          const { name, icon } = tool;
          return (
            <Stack
              align={"center"}>
              <Icon as={icon} color={mode ? 'darkText' : 'lightText'} w={7} h={7} />
              <Text color={mode ? 'darkText' : 'lightText'}>{name}</Text>
            </Stack>
          )
        })}
      </Stack>
      <Stack
        spacing={8}
        align={"center"}
        direction={'row'}
        pt={[4, 4, 0, 0]}
      >
        {toolList.slice(5,10).map((tool) => {
          const { name, icon } = tool;
          return (
            <Stack
              align={"center"}>
              <Icon as={icon} color={mode ? 'darkText' : 'lightText'} w={7} h={7} />
              <Text color={mode ? 'darkText' : 'lightText'}>{name}</Text>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}

export default Tools;