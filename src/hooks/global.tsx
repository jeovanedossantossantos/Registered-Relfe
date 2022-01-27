import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type PropsQuemChamou = {
    quemChamou: string;

    setquemChamou:React.Dispatch<
    React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {
    quemChamou: "",

    setquemChamou:()=>{},
    
};

export const QuemChamouContext = createContext<PropsQuemChamou>(DEFAULT_VALUE);

const ContextProvider = ({ children }: any) => {
    const [quemChamou, setquemChamou] = useState(DEFAULT_VALUE.quemChamou)
    
    return (
        <QuemChamouContext.Provider
            value={{quemChamou,setquemChamou}}
        >

        {children}
    
        </QuemChamouContext.Provider>
    );
      
}

export default ContextProvider
