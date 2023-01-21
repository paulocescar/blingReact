import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

//Tipagem dos dados
type LoadingContextType = {
    isLoading: boolean;
}

//Tipagem das Props do contexto
type LoadingContextProps = {
    state: LoadingContextType;
    setState: Dispatch<SetStateAction<LoadingContextType>>;
}

//Valores Default do contexto
const DEFAULT_VALUE = {
    state: {
        isLoading: false
    },
    setState: () => { }, // função de inicialização e mudança de estado
}

//Cria a Context
export const LoadingContext = createContext<LoadingContextProps>(DEFAULT_VALUE);

//PROVEDOR DO CONTEXTO
const LoadingContextProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);
    return (
        <LoadingContext.Provider value={{
            state, setState
        }}>
            {children}
        </LoadingContext.Provider>
    )
}

export default LoadingContextProvider