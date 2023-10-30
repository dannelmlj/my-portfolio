import { AspectRatio, Box, Heading, Image, Stack, Text } from "@chakra-ui/react"
import '@fontsource/fira-code/500.css'
import { useContext } from "react";
import ModeContext from "../contexts/ModeContext";

const About = () => {
  const { mode } = useContext(ModeContext);
  return (
      <Stack
        px={36}
        pb={24}
        gap={48}
        align={"center"}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 2, 2]}
        height={"100vh"}
        width={"100vw"}
      >
        <Stack
          direction={"column"}
          justify={"center"}
        >
          <Heading fontSize={"xx-large"} color={mode ? 'darkText' : 'lightText'} id="About">Hi! I'm Dannel (he/him/his) &#128075;</Heading>
          <Text fontSize={"x-large"}color={mode ? 'darkText' : 'lightText'}>DEVELOPER &#128104;&#8205;&#128187; / STUDENT &#128104;&#8205;&#127891; / MENTOR &#128104;&#8205;&#127979;</Text>
          <Text
            pt={4}
            color={mode ? 'darkText' : 'lightText'}
          >
            An aspiring Software Engineer from Indonesia &#127470;&#127465;, based in Hong Kong &#127469;&#127472;
          </Text>
          <Text
            color={mode ? 'darkText' : 'lightText'}
          >
            Currently a penultimate Computer Science &#128187; student at the City University of Hong Kong 
          </Text>
          <Text
            color={mode ? 'darkText' : 'lightText'}
          >
            Passionate about all things Computer Science, devoted to both learning and mentoring
          </Text>
        </Stack>
        <Box boxSize={"sm"} align={"center"}>
          <AspectRatio maxW={300} ratio={1/2}>
            <Image zIndex={"auto"} src="../public/me.png" alt="Dannel Mulja" fit={"cover"} />
          </AspectRatio>        
        </Box>
      </Stack>
  )
}

export default About;