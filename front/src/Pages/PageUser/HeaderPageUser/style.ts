import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyleHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10rem;
  width: 100%;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 32px -12px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 120rem;

    span {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      background-color: var(--color-color-primary);
      color: white;
      height: 4.5rem;
      width: 4.5rem;
      margin-right: auto.5rem;
      border-radius: 2.25rem;

      font-size: 16px;
      font-weight: bold;
      font-family: "Inter", sans-serif;
      line-height: 4.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const StyleLink = styled(Link)`
  cursor: pointer;
  display: flex;
  width: 12rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  padding: 1.2rem 0.5rem;
  border: none;
  border-radius: 0.4rem;
  font-family: Inter, sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
`;
