import styled from "styled-components";

export const StyleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 100%;

  li {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    border: 1px solid;
    padding: 2rem;

    > div {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
      flex-direction: column;
    }

    .divLi {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
    /* min-width: clamp(150px, 100%, 370px); */

    li {
      display: flex;
      flex-direction: row;
      width: 100%;
      /* min-width: clamp(150px, 100%, 370px); */
      align-items: center;
      justify-content: space-between;
      border: 1px solid;
      padding: 2rem;

      > div {
        display: flex;
        align-items: flex-start;
        gap: 1.5rem;
        flex-direction: column;
      }

      .divLi {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
  }
`;
