'use client';
import {ReactNode, useEffect} from "react";
import Header from '@/components/organisms/Header'
import NextAuthSessionProvider from "@/providers/sessionProvider";
import {AppProvider} from "@/contexts/appContext";
import MenuSidebar from "@/components/organisms/MenuSidebar";

const AuthLayout = ({children} : {children : ReactNode}) => {


    return(
        <NextAuthSessionProvider>
            <AppProvider>
                <Header />
                <main id={"main"}>
                    {children}
                    <MenuSidebar />
                </main>

            </AppProvider>
        </NextAuthSessionProvider>
    )
}
export default AuthLayout
