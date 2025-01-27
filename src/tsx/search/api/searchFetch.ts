export const searchFetch = async (search: string) => {
    const params = new URLSearchParams({ q: search });
    const response = await fetch(`${import.meta.env.VITE_SKILLS_SEARCH_URL}?${params}`)
    
    if(!response.ok) {
        throw new Error(response.statusText)
    }

    return await response.json()
}