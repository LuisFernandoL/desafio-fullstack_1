import styled from "styled-components";

export const RegisterStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  gap: 2rem;
  height: calc(100vh-20rem);

  .divContainerRegister {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 12.6rem;
    height: 65vh;
    margin: 4rem 0;
    form {
      width: 56rem;
      background-color: rgba(0, 0, 0, 17%);
      border-radius: 0.5rem;
      padding: 2rem;
      align-items: center;
      justify-content: center;

      span {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
          min-width: clamp(150px, 100%, 412px);
          height: 4rem;
          background-color: #5ab47e;
          font-size: 1.6rem;
          border-radius: 0.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .divText {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h2 {
          font-size: 2rem;
          padding: 2rem 0;
        }
      }

      .divInput {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;
