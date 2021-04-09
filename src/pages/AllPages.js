import React, { useContext } from "react";
import { UserContext } from "../data/context";
import Login from "./Login";
import { Rooms } from "./Rooms";


export const AllPages = () => {
   

    const { currentPage } = useContext(UserContext);

    return (
        
        <>
        <form className="myForm">
            <div>
                {currentPage === 1 && <Login />}
                {currentPage === 2 && <Rooms />}
            </div>
        </form>
        </>
    )
}

export default AllPages;