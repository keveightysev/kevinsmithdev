import styled from "styled-components";

export default styled.section`
  min-width: 700px;
  width: 50vw;
  max-width: 1200px;
  margin-top: 90px;
  background: #000;
  padding: 10px 2%;
  overflow: auto;
  height: 40vh;

  @media (max-width: 400px) {
    min-width: auto;
    width: 95vw;
    height: 75vh;
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
