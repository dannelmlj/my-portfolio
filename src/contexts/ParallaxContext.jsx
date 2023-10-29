import{ useRef, createContext, useContext } from "react";

export const ParallaxContext = createContext(null);

export const ParallaxProvider = ParallaxContext.Provider;
// export const ParallaxProvider = ({ children }) => {
//   const parallax = useRef(null)

//   return(
//     <ParallaxContext.Provider value={parallax}>
//       {children}
//     </ParallaxContext.Provider>
//   )
// }

// export const useParallax = () => {
//   return useContext(ParallaxContext)
// }