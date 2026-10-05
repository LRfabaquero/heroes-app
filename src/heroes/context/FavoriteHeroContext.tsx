import type {Hero} from "@/heroes/types/hero.interface.ts";
import {createContext, type PropsWithChildren, useEffect, useState} from "react";

interface FavoriteHeroContext {
    //state
    favoriteHero: Hero[];
    favoriteCount: number;

    //Methods
    isFavorite: (hero: Hero) => boolean;
    toogleFavorite: (hero: Hero) => void;

}


// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favorites');
    if(!favorites) return [];
    return JSON.parse(favorites);
}

export const FavoriteHeroProvider = ({children}: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage());

    const toggleFavorite =(hero: Hero) => {
        const heroExists = favorites.find((h) => h.id === hero.id);
        if(heroExists){
            const newFavorites = favorites.filter((h) => h.id !== hero.id);
            setFavorites(newFavorites);
            return;
        }
        setFavorites([...favorites, hero]);
    }

    const isFavorite = (hero: Hero) => favorites.some((h) => h.id === hero.id);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    return (
        <FavoriteHeroContext value={{
            favoriteHero: favorites,
            favoriteCount: favorites.length,
            isFavorite: isFavorite,
            toogleFavorite: toggleFavorite
        } as FavoriteHeroContext}>
            {children}
        </FavoriteHeroContext>
    )
}
