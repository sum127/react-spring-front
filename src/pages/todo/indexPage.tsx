import { Outlet, useNavigate } from "react-router";

const navigate = useNavigate();

const handleClickList = () => {
    navigate({pathname:'list'})
}
const handleClickAdd = () => {
    navigate({pathname:'add'})
}

function IndexPage() {
    return (
        <div>
            <div className="w-full flex m-2 p-2">
                <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline" onClick={handleClickList}>
                    List
                </div>
                <div className="text-xl m-1 p-2 w-20 font- font-extrabold text-center underline" onClick={handleClickAdd}>
                    ADD
                </div>
            </div>
            <div className="flex flex-wrap w-full">
                <Outlet/>
            </div>
        </div>
    );
}

export default IndexPage;