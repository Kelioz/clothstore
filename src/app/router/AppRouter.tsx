import { Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

const HomePage = lazy(()=>import('../../page/mainpage/page.tsx'))

export const AppRouter = () => {
    return(
    <Routes>
        <Route
            path={'/'}
            element={
            <Suspense>
                <HomePage />
            </Suspense>
            }>
        </Route>

    </Routes>
    )
}
