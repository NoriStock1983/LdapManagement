import React, { forwardRef } from "react";
import './input.css';

import { useFormContext } from "../form/formContext";

type Props = JSX.IntrinsicElements["input"];

export const Input = forwardRef<HTMLInputElement, Props>(
  (props, forwardedRef) => {
    const { id, errorTextId, isError } = useFormContext();
    return (
      <input
        type="search"
        id={id}
        aria-describedby={[errorTextId || ""].join(" ")}
        aria-invalid={isError as boolean}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";