import React from 'react'
import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {CustomJumboTron} from "@/components/custom/CustomJumboTron.tsx";

export const SearchPage = () => {
    return (
        <div>
            {/* Header */}
            <CustomJumboTron
                title={"Universo de super heroes"}
                description={"Descubre, explora y administra tu superheroe y villanos favoritos"}
            >
            </CustomJumboTron>

            {/* Stats Dashboard */}
            <HeroStats></HeroStats>
        </div>
)
}

export default SearchPage
