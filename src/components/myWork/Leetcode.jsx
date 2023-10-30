import { useContext } from "react"
import ModeContext from "../../contexts/ModeContext"
import { Box, CircularProgress, CircularProgressLabel, Link, Progress, Stack, Text } from "@chakra-ui/react"

const LeetCode = ({easy, medium, hard}) => {
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
          <Link href="https://leetcode.com/dannelmlj/" isExternal>
            <Text
            as={"u"}
              fontSize={"xl"}
              fontWeight={"bold"}
              color={mode ? 'darkText' : 'lightText'}
              fontStyle={""}>
                Leet Code
            </Text>
          </Link>
        <Box alignContent={"center"}>
          <CircularProgress children value={16} max={2920} color="green.400" size="160px" thickness="10px">
            <CircularProgressLabel color={mode ? 'darkText' : 'lightText'}>
              <Stack >
                <Text color={mode ? 'darkText' : 'lightText'} fontSize={"md"}>{easy + medium + hard}</Text>
                <Text color={mode ? 'darkText' : 'lightText'} fontSize={"md"}>Solved</Text>
              </Stack>
              </CircularProgressLabel>
          </CircularProgress>
        </Box>
        </Stack>
      </Box>
      <Box py={10}
        pr={12} boxSize={"sm"}>
        <Stack
        direction={"column"}>
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Easy</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>{easy}/742</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>Beats 10.2%</Text>
          </Stack>
          <Progress value={easy} max={742} colorScheme="green" size="sm" />
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Medium</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>{medium}/1538</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>Beats 38.8%</Text>
          </Stack>
          <Progress value={medium} max={1538} colorScheme="green" size="sm" />
          <Stack
          direction={"row"}
          justify={"space-between"}>
            <Text color={mode ? 'darkText' : 'lightText'}>Hard</Text>
            <Text color={mode ? 'darkText' : 'lightText'}>{hard}/640</Text>
          </Stack>
          <Progress value={hard} max={640} colorScheme="green" size="sm" />
        </Stack>
      </Box>    
    </Stack>
  )
}

export default LeetCode;