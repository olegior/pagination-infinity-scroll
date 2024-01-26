const URL = 'https://pokeapi.co/api/v2/pokemon?';

export const api = async (limit, offset) => {
    const link = `${URL}${offset ? `offset=${offset}&` : ''}limit=${limit}`
    const response = await fetch(link);
    if (!response.ok) {
        return []
    }
    return response.json()
}