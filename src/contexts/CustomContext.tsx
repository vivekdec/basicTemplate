import React, { cloneElement } from 'react';
import LoadingContextProvider from './LoadingContext';
import DialogContextProvider from './DialogContext';
import ToastContextProvider from "./ToastContext";
import ThemeContextProvider from "./ThemeContext";
import StringContextProvider from "./StringContext";

// to merge all providers
function ProviderComposer({ contexts, children }) {
    return contexts.reduce(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids,
            }),
        children
    );
}

export default function CustomContextProvider({children}) {

    return (
        <ProviderComposer
            // add providers to array of contexts
            contexts={[
                <LoadingContextProvider/>,
                <DialogContextProvider/>,
                <ToastContextProvider/>,
                <ThemeContextProvider/>,
                <StringContextProvider/>
            ]}>

            {children}

        </ProviderComposer>
    );

}
