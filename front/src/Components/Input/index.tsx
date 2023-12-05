import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import { InputStyle } from "./style";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: FieldError;
}

export const Input = forwardRef(
    (
        { label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <InputStyle>
                {label ? <label htmlFor={rest.name}>{label}</label> : null}
                <input ref={ref} type="text" {...rest} />
                {error ? <p>{error.message}</p> : null}
            </InputStyle>
        )
    }
)

