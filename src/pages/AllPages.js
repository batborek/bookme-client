import React, { useContext } from "react";
import { UserContext } from "../data/context";
import Login from "./Login";
import { Rooms } from "./Rooms";
import SignUp from "./SignUp";


export const AllPages = () => {
   

    const { currentPage } = useContext(UserContext);

    return (
        
        <>
        <form className="myForm">
            <div>
                {currentPage === 1 && <SignUp />}
                {currentPage === 2 && <Rooms />}
                {currentPage === 3 && <Login />}
            </div>
        </form>
        </>
    )
}

export default AllPages;