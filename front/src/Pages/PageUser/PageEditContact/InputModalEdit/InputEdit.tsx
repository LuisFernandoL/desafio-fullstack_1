import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import { StyleInputEdit } from "./StyleInputEddit";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
}

export const InputEdit = forwardRef(
  (
    { label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <StyleInputEdit>
        <input ref={ref} {...rest} />
        {error ? <p>{error}</p> : null}
      </StyleInputEdit>
    );
  }
);
