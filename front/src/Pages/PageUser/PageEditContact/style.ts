import { Link } from "react-router-dom";
import styled from "styled-components";

export const StylePageEditContact = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  flex-wrap: wrap;

  .divPageEdit {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .divForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: clamp(150px, 100%, 555px);

    > form {
      display: flex;
      flex-direction: column;
      /* gap: 2rem; */
      justify-content: center;
      align-items: center;
      height: 43rem;
      background-color: #d9d9d9;
      border-radius: 0.5rem;
      min-width: clamp(150px, 100%, 555px);

      > label {
        justify-content: flex-start;
        align-items: center;
        display: flex;
        margin-top: 2rem;
        font-size: 1.5rem;
        min-width: clamp(150px, 100%, 412px);
      }
      > input {
        min-width: clamp(150px, 100%, 370px);
      }

      .btnSave {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        flex-direction: column;
        gap: 2rem;
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: clamp(150px, 100%, 300px);

          height: 4.2rem;
          /* padding: 2rem; */
          background-color: #5ab47e;
          border-radius: 0.5rem;
        }
      }
    }
  }
`;

export const StyleLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: clamp(150px, 100%, 300px);

  height: 4.2rem;
  /* padding: 2rem; */
  background-color: #5ab47e;
  border-radius: 0.5rem;
`;
