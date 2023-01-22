import { SetStateAction } from "react";

export const changeValue = (value: any, setState:SetStateAction<any>) => {
    setState(value)
}