import {useQuery} from "@tanstack/react-query";
import {searchHeroesAction} from "@/heroes/actions/search-heroes-action.ts";
import {useSearchParams} from "react-router";

export const useSearchHeroes = () => {

    const [searchParams] = useSearchParams();

    const name = searchParams.get('name') ?? '';
    const team = searchParams.get('team') ?? '';
    const category = searchParams.get('category') ?? '';
    const universe = searchParams.get('universe') ?? '';
    const status = searchParams.get('status') ?? '';
    const strength = searchParams.get('strength') ?? '';

    return  useQuery({
        queryKey: ['search', {name, team, category, universe, status, strength}],
        queryFn: () => searchHeroesAction({name, team, category, universe, status, strength}),
        staleTime: 1000 * 60 * 5, //5minutos
        retry: false
    });
}
