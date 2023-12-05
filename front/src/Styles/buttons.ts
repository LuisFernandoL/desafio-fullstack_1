import { css, styled } from "styled-components";

interface ButtonProps {
  variant: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${(props) => {
    const { width } = props;
    return css`
      padding: 1.2rem 0.5rem;
      border: none;
      border-radius: 0.4rem;
      font-family: Inter, sans-serif;
      font-weight: bold;
      cursor: pointer;
      ${width ? `width: ${width};` : `width: 100%;`}
    `;
  }}

  ${({ variant }: ButtonProps) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: var(--color-color-primary);
          color: white;
        `;
      case "secondary":
        return css`
          background-color: transparent;
          border: 1px solid var(--color-color-primary);
          color: var(--color-color-primary);
        `;
      default:
        return css`
          all: unset;
        `;
    }
  }}
`;
