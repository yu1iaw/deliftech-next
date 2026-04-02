import { Item } from "@/generated/prisma/client";


export type SelectedItem = Item & { quantity?: number };

export type Order = {
    selectedItems: SelectedItem[];
    total: number;
}

export type FieldErrors = {
    errors: {
        name?: string[];
        email?: string[];
        phone?: string[];
        address?: string[];
    }
}