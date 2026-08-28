import {HeroStats} from "@/heroes/components/HeroStats.tsx";
import {CustomJumboTron} from "@/components/custom/CustomJumboTron.tsx";
import {SearchControls} from "@/heroes/pages/search/ui/SearchControls.tsx";
import {CustomBreadcrumbs} from "@/components/custom/CustomBreadcrumbs.tsx";

export const SearchPage = () => {
    return (
        <div>
            {/* Header */}
            <CustomJumboTron
                title={"Universo de super heroes"}
                description={"Descubre, explora y administra tu superheroe y villanos favoritos"}
            >
            </CustomJumboTron>

            <CustomBreadcrumbs currentPage={"Buscador de héroes"} breadcrumb={[
                {label: "home", to: "/"},

            ]}></CustomBreadcrumbs>

            {/* Stats Dashboard */}
            <HeroStats></HeroStats>

            {/*Filter and Search*/}
            <SearchControls></SearchControls>
        </div>
    )
}

export default SearchPage
