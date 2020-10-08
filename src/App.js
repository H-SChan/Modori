import React from "react";
import { createGlobalStyle } from "styled-components";
import Canvas from "./pages/Canvas";
const GlobalStyle = createGlobalStyle`
  body {
    background : #f2f2f2; 
    
  }
`;
//GlobalStyle 컴포넌트는 전역에 적용되는 컴포넌트이다.

function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Canvas></Canvas>
        </>
    );
}

export default App;
