import {useQuery} from "@tanstack/react-query";
import {getHeroesByPageAction} from "@/heroes/actions/get-heroes-by-page.actions.ts";

export const usePaginatedHero = (page:number, limit:number) => {

    return useQuery({
        queryKey: ['heroes', {page, limit}],
        queryFn: () => getHeroesByPageAction(Number(page), Number(limit)),
        staleTime: 1000 * 60 * 5 //5 minutos
    });
};
