import {heroApi} from "@/heroes/api/hero.api.ts";
import type {HeroesResponse} from "@/heroes/types/get-heroes-response.ts";
import type {Hero} from "@/heroes/types/hero.interface.ts";


const BASE_URL = import.meta.env.VITE_API_URL;

export const getHeroesByPageAction = async (): Promise<HeroesResponse> => {
    const {data} = await heroApi.get('/');
    const heroes: Hero[] = data.heroes.map((hero) => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`,
    }));
    return {
        ...data,
        heroes: heroes
    };
}