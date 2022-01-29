import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type PropsQuemChamou = {
    quemChamou: string;
    quemNome:string;

    setquemChamou:React.Dispatch<
    React.SetStateAction<string>>;
    setquemNome:React.Dispatch<
    React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
    quemChamou: "",
    quemNome:"",
    setquemChamou:()=>{},
    setquemNome:()=>{}
    
};

export const QuemChamouContext = createContext<PropsQuemChamou>(DEFAULT_VALUE);

const ContextProvider = ({ children }: any) => {
    const [quemChamou, setquemChamou] = useState(DEFAULT_VALUE.quemChamou)
    const [quemNome, setquemNome] = useState(DEFAULT_VALUE.quemNome)
    
    return (
        <QuemChamouContext.Provider
            value={{quemChamou,setquemChamou,quemNome,setquemNome}}
        >

        {children}
    
        </QuemChamouContext.Provider>
    );
      
}

export default ContextProvider
