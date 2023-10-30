import { useContext } from "react"
import ModeContext from "../../contexts/ModeContext"
import { Box, Link, Progress, Stack, Text } from "@chakra-ui/react"

const Github = () => {
  const { mode } = useContext(ModeContext)
  return(
    <Stack
      direction={"row"}
      width={"50%"}
      height={"40%"}
      backgroundColor={mode ? 'darkCard' : "lightCard"}
      shadow={mode ? '' : '2xl'}
      justify={"space-between"}
      rounded={"2xl"}
     >
      <Box
        width={"30%"}
        py={4}
        pl={10}
        >
        <Stack
        >
          <Link href="https://github.com/dannelmlj/" isExternal>
            <Text
            as={"u"}
              fontSize={"xl"}
              fontWeight={"bold"}
              color={mode ? 'darkText' : 'lightText'}
              fontStyle={""}>
                Github
            </Text>
          </Link>
        <Box alignContent={"center"} pt={8}>
         <Text color={mode ? 'darkText' : 'lightText'} fontSize={"lg"}>196</Text>
          <Text color={mode ? 'darkText' : 'lightText'} fontSize={"lg"}>Contributions</Text>
        </Box>
        </Stack>
      </Box>
      <Box py={8}
        pr={12} boxSize={"sm"}>
        <Stack
        direction={"column"}>
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Commits</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>91%</Text>
          </Stack>
          <Progress value={91}colorScheme="green" size="sm" />
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Pull Request</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>6%</Text>
          </Stack>
          <Progress value={6} colorScheme="green" size="sm" />
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Code Review</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>2%</Text>
          </Stack>
          <Progress value={2} colorScheme="green" size="sm" />
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Issues</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>1%</Text>
          </Stack>
          <Progress value={1} colorScheme="green" size="sm" />
        </Stack>
      </Box>    
    </Stack>
  )
}

export default Github;