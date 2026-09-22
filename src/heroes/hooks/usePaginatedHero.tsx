import {useQuery} from "@tanstack/react-query";
import {getHeroesByPageAction} from "@/heroes/actions/get-heroes-by-page.actions.ts";

export const usePaginatedHero = (page:number, limit:number, category:string = 'all') => {

    return useQuery({
        queryKey: ['heroes', {page, limit, category}],
        queryFn: () => getHeroesByPageAction(Number(page), Number(limit), category),
        staleTime: 1000 * 60 * 5 //5 minutos
    });
};
