import styled from "styled-components";

export const InputStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: clamp(150px, 100%, 370px);
  width: 100%;


  input {
    display: flex;
    min-width: clamp(150px, 100%, 412px);
    font-family: "Inter", sans-serif;
    height: 5rem;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    padding: 0 2.4rem;
    width: 100%;
    background-color: #FFFFFF;
    margin-bottom: 2rem;
  }
`;
