import { styled } from "styled-components";

export const ContainerFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  /* position: static; */

  /* height: 10rem; */
  width: 100%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 32px -12px;

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 12rem;
  }
`;
