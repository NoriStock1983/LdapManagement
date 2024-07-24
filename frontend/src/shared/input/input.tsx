import React from "react";

import { useFormContext } from "../form/formContext";

type Props = JSX.IntrinsicElements["input"];

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (props, forwardedRef) => {
    const { id, errorTextId, isError } = useFormContext();
    return (
      <input
        type="search"
        id={id}
        aria-describedby={[errorTextId || ""].join(" ")}
        aria-invalid={isError}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";