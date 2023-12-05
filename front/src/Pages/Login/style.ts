import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  gap: 2rem;
  height: calc(100vh-20rem);

  .divContainerLogin {
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

      .divText {
        height: 8rem;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        h2 {
          font-size: 3.6rem;
        }
      }
      .divInput {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;

        span {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          /* width: 100%; */
          flex-wrap: wrap;
          padding: 4rem 0;
          gap: 2rem;
          min-width: clamp(150px, 100%, 412px);
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
      }
    }
  }
`;

export const StyleLinkLogin = styled(Link)`
  display: flex;
  min-width: clamp(150px, 100%, 412px);
  height: 4rem;
  background-color: #5ab47e;
  font-size: 1.6rem;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
`;
