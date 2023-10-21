import React, { createContext, useEffect, useState } from 'react';
import { IAppContext, IAppState, IAppStateChange } from '@/entities/types';
import {usePathname} from "next/navigation";

const appState: IAppState = {
    isMenuOpen: false,
};

const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, setState] = useState({ ...appState });
    const pathname = usePathname();

    useEffect(() => {
        setState({isMenuOpen : false})
    }, [pathname]);
    const updateState = (newState: IAppStateChange) => {
        setState((prevState: IAppState) => ({
            ...prevState,
            ...newState
        }));
    };


    return (
        <AppContext.Provider value={{ ...state, updateState: updateState }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;
