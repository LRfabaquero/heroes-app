import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Link} from "react-router";

interface BreadcrumbProps {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumb?: BreadcrumbProps[];
}

export const CustomBreadcrumbs = ({ currentPage, breadcrumb=[] }: Props) => {
    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink render={<Link to={"/"} />}>
                        Inicio
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {
                    breadcrumb?.map((crumb) => (
                        <div key={crumb.to} className={"flex items-center"}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink render={<Link to={crumb.to} />}>
                                    {crumb.label}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </div>
                    ))
                }
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className={"text-black"}>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}