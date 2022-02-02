import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type PropsQuemChamou = {
    quemChamou: string;
    quemNome:string;
    qualId:number

    setquemChamou:React.Dispatch<
    React.SetStateAction<string>>;
    setquemNome:React.Dispatch<
    React.SetStateAction<string>>;
    setqualId:React.Dispatch<
    React.SetStateAction<number>>;
}

const DEFAULT_VALUE = {
    quemChamou: "",
    quemNome:"",
    qualId:0,
    setquemChamou:()=>{},
    setquemNome:()=>{},
    setqualId:()=>{}
    
};

export const QuemChamouContext = createContext<PropsQuemChamou>(DEFAULT_VALUE);

const ContextProvider = ({ children }: any) => {
    const [quemChamou, setquemChamou] = useState(DEFAULT_VALUE.quemChamou)
    const [quemNome, setquemNome] = useState(DEFAULT_VALUE.quemNome)
    const [qualId,setqualId] = useState(DEFAULT_VALUE.qualId)
    
    return (
        <QuemChamouContext.Provider
            value={{quemChamou,setquemChamou,quemNome,setquemNome,qualId,setqualId}}
        >

        {children}
    
        </QuemChamouContext.Provider>
    );
      
}

export default ContextProvider
