import React, { useContext, useEffect } from "react";
import { UserContext } from "../data/context";

export const Rooms = () => {
  const { name } = useContext(UserContext);

  return (
    <>
      Select a room
      <div className="Rooms">
        <div className="Room" onClick>Single Room</div>
        <div className="Room">King Size</div>
      </div>
    </>
  );
};


export default Rooms;