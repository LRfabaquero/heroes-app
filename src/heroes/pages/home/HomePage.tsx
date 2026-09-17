import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {CustomJumboTron} from "@/components/custom/CustomJumboTron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {HeroGrid} from "@/heroes/pages/hero/HeroGrid.tsx";
import {useMemo} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";
import {useSearchParams} from "react-router";
import {useHeroSummary} from "@/heroes/hooks/useHeroSummary.tsx";
import {usePaginatedHero} from "@/heroes/hooks/usePaginatedHero.tsx";

export const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const activeTab = searchParams.get('tab') || 'all';


    const selectedTab = useMemo(() => {
        const validTab = ['all', 'favorites', 'heroes', 'villains'].includes(activeTab);
        return validTab ? activeTab : 'all';
    }, [activeTab]);

    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '6';
    const {data: HeroesResponse} = usePaginatedHero(Number(page), Number(limit));
    const {data: summary} = useHeroSummary();

    console.log({HeroesResponse});

    return (
        <>
            <>
                {/* Header */}
                <CustomJumboTron
                    title={"Universo de super heroes"}
                    description={"Descubre, explora y administra tu superheroe y villanos favoritos"}
                >
                </CustomJumboTron>
                <CustomBreadcrumbs currentPage={"Super héroes"}></CustomBreadcrumbs>


                {/* Stats Dashboard */}
                <HeroStats></HeroStats>

                {/* Tabs */}
                <Tabs value={selectedTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'all');
                            return prev;
                        })}>All Characters ({summary?.totalHeroes})</TabsTrigger>
                        <TabsTrigger value="favorites" className="flex items-center gap-2"
                                     onClick={() => setSearchParams((prev) => {
                                         prev.set('tab', 'favorites');
                                         return prev;
                                     })}>
                            {/*<Heart className="h-4 w-4" />*/}
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'heroes');
                            return prev;
                        })}>Heroes ({summary?.heroCount})</TabsTrigger>
                        <TabsTrigger value="villains" onClick={() => setSearchParams((prev) => {
                            prev.set('tab', 'villains');
                            return prev;
                        })}>Villains ({summary?.villainCount})</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                        <h1>Todos los personajes</h1>
                        <HeroGrid heroes={HeroesResponse?.heroes ?? []}></HeroGrid>
                    </TabsContent>
                    <TabsContent value="favorites">
                        <h1>Favoritos</h1>
                        <HeroGrid heroes={[]}></HeroGrid>
                    </TabsContent>
                    <TabsContent value="heroes">
                        <h1>Heroes</h1>
                        <HeroGrid heroes={[]}></HeroGrid>
                    </TabsContent>
                    <TabsContent value="villains">
                        <h1>Villanos</h1>
                        <HeroGrid heroes={[]}></HeroGrid>
                    </TabsContent>
                </Tabs>

                {/* Character Grid */}
                {/*<HeroGrid></HeroGrid>*/}

                {/* Pagination */}
                <CustomPagination totalPages={HeroesResponse?.pages ?? 1}></CustomPagination>
            </>
        </>
    )
}