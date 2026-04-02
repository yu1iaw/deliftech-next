'use client'

import { SelectedItem } from "@/lib/types";
import { createContext, useContext, useState } from "react";


type PreorderContext = {
    selectedItems: SelectedItem[];
    setSelectedItems: React.Dispatch<React.SetStateAction<SelectedItem[]>>;
}

export const PreorderContext = createContext<PreorderContext | null>(null);

export const PreorderContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

    return (
        <PreorderContext value={{ selectedItems, setSelectedItems }}>
            {children}
        </PreorderContext>
    );
}

export const usePreorderContext = () => {
    const value = useContext(PreorderContext);

    if (!value) {
        throw new Error(`usePreorder must be wrapped inside PreorderContextProvider`);
    }

    return value;
}