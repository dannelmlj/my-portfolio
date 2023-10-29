import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";


const MenuToggle = ({toggle, isOpen}) =>{
  return(
    <Box display={{base: "block", md: "none"}}>
      {isOpen ? <CloseIcon/> : <HamburgerIcon/> }
    </Box>
  )
}