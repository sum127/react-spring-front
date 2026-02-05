import {lazy, Suspense} from "react";
import Loading from "../pages/loading";
import { Navigate } from "react-router";

const TodoIndex = lazy(() => import("../pages/todo/indexPage"));
const ListPage = lazy(() => import("../pages/todo/listPage"));
const ReadPage = lazy(() => import("../pages/todo/readPage"));
const TodoAdd = lazy(() => import("../pages/todo/addPage"));
const ModifyPage = lazy(() => import("../pages/todo/modifyPage"));

const todoRouter = () => {
    return(
        {
            path: 'todo',
            Component: TodoIndex,
            children : [
                {
                    path: "list",
                    element: <Suspense fallback={<Loading />}><ListPage/></Suspense>
                },
                {
                    path: "read/:tno",
                    element: <Suspense fallback={<Loading />}><ReadPage/></Suspense>
                },
                {
                    path: "add",
                    element: <Suspense fallback={<Loading />}><TodoAdd/></Suspense>
                },
                {
                    path: "modify/:tno",
                    element: <Suspense fallback={<Loading />}><ModifyPage/></Suspense>
                },
                {
                    path: "",
                    element : <Navigate to={'/todo/list'}></Navigate>
                }
            ]
            
        }
    )
}


export default todoRouter;