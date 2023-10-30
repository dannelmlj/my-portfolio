import { Heading, Stack } from "@chakra-ui/react"

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
  </Stack>
  )
}

export default Education