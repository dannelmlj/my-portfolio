import { Box, Button } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useRef } from "react";
import { ModeProvider } from "../contexts/ModeContext";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Skills from "../components/skills/Skills";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxProvider } from "../contexts/ParallaxContext";
import Experience from "../components/experience/Experience";


const Main = () => {
  const modePreference = window.matchMedia("(prefers-color-scheme: dark)");
  console.log("modepref", modePreference.matches)
  const [mode, setMode] = useLocalStorage("mode", modePreference.matches);

  const changeMode = () =>{
    setMode(!mode);
  };
  const parallax = useRef(null);
  console.log("par outside", parallax)
  return (
    <Box width="100vw"  backgroundColor={mode ? "darkBackground" : "lightBackground"}>
      <ParallaxProvider value={{parallax}}>
        <ModeProvider value={{ mode, changeMode }}>
            <Parallax 
              pages={3} 
              horizontal={false}
              ref={parallax}
              style={{
                width: "100vw", 
                height: "100vh",
                backgroundColor: mode ? "#15202B" : "#E2E8F0",
              }}
            >
              <Header />
              <ParallaxLayer offset={0} speed={1}>
                <About/>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.5}>
                <Skills/>

              </ParallaxLayer>

              <ParallaxLayer offset={2} speed={0.5}>
                <Experience/>
              </ParallaxLayer>
            </Parallax>
        </ModeProvider>
      </ParallaxProvider>

    </Box>

  )

}

export default Main;