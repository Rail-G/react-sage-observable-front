/// <reference types="vite/client" />
/* eslint @typescript-eslint/no-explicit-any: 0 */

interface SearchStateData {
    items: SerachItem[],
    loading: boolean,
    error: string | null,
    search: string
}

interface SearchAction {
    type: string,
    payload: SearchStateData,
}

interface SerachItem {
    id: number,
    name: string
}

interface DetailsStateData {
    items: Detail[],
    item: Detail | null,
    loading: boolean,
    error: string | null,
}

interface Detail {
    id: number,
    name: string,
    price: number,
    content: string,
}