import { createBrowserRouter } from "react-router";
import {lazy, Suspense} from "react";
import Loading from "../pages/loading";
import BasicLayOut from "../layouts/basicLayout";
import todoRouter from "./todoRouter";

const Main = lazy(() => import("../pages/mainPage"));
const About = lazy(() => import("../pages/aboutPage"));

// component와 children이 outlet과 연관되어있음
const router = createBrowserRouter([
    {
        path : "",
        Component: BasicLayOut,
        children: [
            {
                index : true,
                element : <Suspense fallback={<Loading />}><Main /></Suspense>
            },
            {
                path: "about",
                element : <Suspense fallback={<Loading />}><About /></Suspense>
            },
            todoRouter()
        ]   
    }
])

export default router;