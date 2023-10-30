import { Stack } from "@chakra-ui/react";
import LeetCode from "./Leetcode";
import Github from "./Github";


const AllWork = () => {
  return(
    <Stack
      height={"70vh"}
      width={"100wh"}
      direction={"row"}
    >
      <LeetCode easy={15} medium={1} hard={0}/>
      <Github/>
      
    </Stack>
  )
}

export default AllWork