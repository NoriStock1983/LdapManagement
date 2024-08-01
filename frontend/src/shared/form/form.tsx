import { useId } from "react";
import { FormContext } from "./formContext";
import React from "react";
import './form.css';

export type FormProps = {
    labelText: string;
    className?: string;
    error?: boolean | string;
    children: React.ReactNode;
}

export function FormCtl({
    labelText,
    className,
    error = false,
    children,
}: FormProps){
    const id = useId();
    const labelId = `${id}-label`;
    const errorTextId = `${id}-error-text`;
    const ctxValue ={
        id,
        labelId,
        errorTextId,
        isError: !!error,
    };

    return (
        <FormContext.Provider value={ctxValue}>
            <div className={className}>
                <div>
                    <label htmlFor={id} id={labelId}>{labelText}</label>
                </div>
                {children}
                <div>
                    {typeof error === "string" && <span id={errorTextId}>{error}</span>}
                </div>
                
            </div>
        </FormContext.Provider>
    );
}