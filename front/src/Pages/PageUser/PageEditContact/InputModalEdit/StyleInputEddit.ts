import { styled } from "styled-components";

export const StyleInputEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: clamp(150px, 100%, 412px);

  input {
    /* width: 100%; */
    min-width: clamp(150px, 100%, 412px);
    background-color: var(--color-grey-0);
    border-radius: 0.5rem;
    font-size: 2.1rem;
    padding: 0 2rem;
    margin-bottom: 1.5rem;
    height: 4rem;
  }
`;
