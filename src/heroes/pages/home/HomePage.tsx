import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {CustomJumboTron} from "@/components/custom/CustomJumboTron.tsx";
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {HeroGrid} from "@/heroes/pages/hero/HeroGrid.tsx";
import {useState} from "react";
import {CustomPagination} from "@/components/custom/CustomPagination.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";

export const HomePage = () => {

    const [activeTab, setActiveTab] = useState<
    'all'| 'favorites' | 'heroes' | 'villains'>('all')


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
                <Tabs value={activeTab} className="mb-8">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" onClick={()=> setActiveTab('all')}>All Characters (16)</TabsTrigger>
                        <TabsTrigger value="favorites" className="flex items-center gap-2"
                        onClick={()=> setActiveTab('favorites')}>
                            {/*<Heart className="h-4 w-4" />*/}
                            Favorites (3)
                        </TabsTrigger>
                        <TabsTrigger value="heroes" onClick={()=> setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
                        <TabsTrigger value="villains" onClick={()=> setActiveTab('villains')}>Villains (2)</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all" >
                        <h1>Todos los personajes</h1>
                        <HeroGrid></HeroGrid>
                    </TabsContent>
                    <TabsContent value="favorites" >
                        <h1>Favoritos</h1>
                        <HeroGrid></HeroGrid>
                    </TabsContent>
                    <TabsContent value="heroes" >
                        <h1>Heroes</h1>
                        <HeroGrid></HeroGrid>
                    </TabsContent>
                    <TabsContent value="villains" >
                        <h1>Villanos</h1>
                        <HeroGrid></HeroGrid>
                    </TabsContent>
                </Tabs>

                {/* Character Grid */}
                <HeroGrid></HeroGrid>

                {/* Pagination */}
                <CustomPagination totalPages={8}></CustomPagination>
            </>
        </>
    )
}