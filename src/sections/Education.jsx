import { AspectRatio, Box, Heading, Image, Stack } from "@chakra-ui/react"

import { useContext } from "react"
import ModeContext from "../contexts/ModeContext"
import University from "../components/education/University"



const Education = () => {
  const { mode } = useContext(ModeContext)
  return(
  <Stack
    px={36}
    gap={48}
    justify={"space-between"}
    height={"100vh"}
    width={"100wh"}
    direction={"row"}>
    <Stack
      width={"100%"}>
      <Heading py={4} color={mode ? 'darkText' : 'lightText' } id="Education">
        Education
      </Heading>
      <University/>
    </Stack>
    {/* <Box boxSize={"sm"} align={"center"}>
      <AspectRatio maxW={1000} ratio={2}>
        <Image zIndex={"auto"} src="../public/cityu.jpg" alt="Dannel Mulja" fit={"cover"} />
      </AspectRatio>        
    </Box> */}
  </Stack>
  )
}

export default Education