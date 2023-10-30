import { Stack } from "@chakra-ui/react"
import MenuItem from "./MenuItem";

const MenuStack = () => {
  return(
    <Stack
      spacing={8}
      align={"center"}
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={['column', 'row', 'row', 'row']}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to={1}>Skills</MenuItem>
      <MenuItem to={2}>Experience</MenuItem>
      <MenuItem to={3}>My Work</MenuItem>
      <MenuItem to={4}>Education</MenuItem>
      {/* <MenuItem to="/">Achievements</MenuItem> */}

    </Stack>
  )
}

export default MenuStack;