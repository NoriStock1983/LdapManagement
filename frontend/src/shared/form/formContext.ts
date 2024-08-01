import { createContext, useContext } from "react";

export type FormContextValue ={
    id: string | undefined;
    labelId: string | undefined;
    errorTextId: string | undefined;
    isError: boolean | string;

};

export const FormContext = createContext<FormContextValue>({
    id: undefined,
    labelId: undefined,
    errorTextId: undefined,
    isError: false,
});

export function useFormContext(){
    return useContext(FormContext);
}