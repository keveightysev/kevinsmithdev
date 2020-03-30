import React from "react";
import styled from "styled-components";

import { Background, Header } from "./components";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
      </Container>
      <Background />
    </div>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;
