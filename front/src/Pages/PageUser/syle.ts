import styled from "styled-components";

export const StylePageUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: calc(100vh-20rem);
  flex-wrap: wrap;
  .divContainerPageUser {
    display: flex;
    align-items: center;
    justify-content: center;
    .divBack {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 90%;
  
      span {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      ul {
        margin-top: 2.4rem;
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        gap: 2rem;
        margin-bottom: 15rem;
      }
    }
  }

  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: calc(100vh-20rem);
    .divContainerPageUser {
      display: flex;
      align-items: center;
      justify-content: center;
      .divBack {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 90%;
        padding: 4rem 2rem;
        span {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
          /* border:  solid black; */
        }
        ul {
          /* justify-content: center;
        align-items: center; */
          border: solid 1px;
          width: 100%;
          height: 28vw;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          overflow-x: auto;
          padding: 2rem 0;
        }
      }
    }
  }
`;
