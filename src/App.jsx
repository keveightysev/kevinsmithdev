import styled from "styled-components";
import { Navigate, Route, Routes } from 'react-router-dom';

import { Background, Nav, About, Contact, Work, Project } from './components';

function App() {
  return (
    <main className='App'>
      <Container>
        <Nav />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/:slug' element={<Project />} />
          <Route render={() => <Navigate to='/' />} />
        </Routes>
      </Container>
      <Background />
    </main>
  );
}

export default App;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
