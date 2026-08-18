import {RouterProvider} from "react-router";
import {appRouter} from "@/router/app.router.tsx";

export const HeroesApp = () => {
    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    )
}
