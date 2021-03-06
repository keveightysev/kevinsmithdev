import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import { Background, Nav, About, Contact, Work, Project } from "./components";

function App() {
  return (
    <main className="App">
      <Container>
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:slug" component={Project} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Container>
      <Background />
    </main>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  // overflow: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
