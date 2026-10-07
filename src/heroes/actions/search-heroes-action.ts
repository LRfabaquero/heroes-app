import {heroApi} from "@/heroes/api/hero.api.ts";
import type {Hero} from "@/heroes/types/hero.interface.ts";

interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL

export const searchHeroesAction = async (options: Options = {}) => {

    const {name, status, team, strength, universe, category} = options
    if (!name && !status && !team && !strength && !universe && !category) {
        return []
    }

    const { data } = await heroApi.get<Hero[]>(`/search`, {
        params: {
            name,
            team,
            category,
            universe,
            status,
            strength
        }
    });

    return data.map((hero) => ({
            ...hero,
            image: `${BASE_URL}/images/${hero.image}`
    }))
}