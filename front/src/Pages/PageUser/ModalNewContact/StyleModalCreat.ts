import styled from "styled-components";

export const ModalContainerCreate = styled.div`
  position: fixed;

  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(85, 163, 255, 0.3);
  flex-direction: column;
  z-index: 1;
  

  > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-color: #ffffff;
    min-width: clamp(150px, 100%, 79.8rem);
    border-radius: 0.5rem;
    max-height: 66.1rem;
    padding: 4rem;

    button {
      margin-top: 2rem;
    }

    .btn-close {
      position: absolute;
      padding: 1rem;
      right: 1.5rem;
      top: 0;
    }

    header {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      
      width: 100%;

      background-color: #ffffff;
      color: #000000;
 
      font-size: 3.2rem;
      font-weight: 700;

      h2 {
        margin: 0 0 2rem;
      }

      h1 {
        font-weight: 700;
      }
    }
  }
`;
