import { Box } from "@chakra-ui/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useRef } from "react";
import { ModeProvider } from "../contexts/ModeContext";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxProvider } from "../contexts/ParallaxContext";
import Experience from "./Experience";
import MyWork from "./MyWork";
import Education from "./Education";
import BackToTop from "../components/Buttons/BackToTop";


const Main = () => {
  const modePreference = window.matchMedia("(prefers-color-scheme: dark)");
  console.log("modepref", modePreference.matches)
  const [mode, setMode] = useLocalStorage("mode", modePreference.matches);
  const changeMode = () =>{
    setMode(!mode);
  };
  const parallax = useRef(null);
  return (
    <Box width="100vw"  backgroundColor={mode ? "darkBackground" : "lightBackground"}>
      <ParallaxProvider value={{parallax}}>
        <ModeProvider value={{ mode, changeMode }}>
          <Header/>
            <Parallax 
              pages={5} 
              horizontal={false}
              ref={parallax}
              style={{
                width: "100vw", 
                height: "100vh",
                backgroundColor: mode ? "#15202B" : "#E2E8F0",
              }}
            >
              <ParallaxLayer offset={0} speed={1}>
                <About/>
                
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.5}>
                <Box h={14}/>
                <Skills/>
              </ParallaxLayer>
              <ParallaxLayer offset={2} speed={0.5}>
                <Box h={14}/>
                <Experience/>
              </ParallaxLayer>
              <ParallaxLayer offset={3} speed={0.5}>
                <Box h={14}/>
                <MyWork/>
              </ParallaxLayer>
              <ParallaxLayer offset={4} speed={0.5}>
                <Box h={14}/>
                <Education/>
              </ParallaxLayer>
            </Parallax>
          <BackToTop parallax={parallax}/>
        </ModeProvider>
      </ParallaxProvider>

    </Box>

  )

}

export default Main;