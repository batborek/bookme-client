import React, { useContext, useEffect } from "react";
import { UserContext } from "../data/context";

export const RoomDetail = () => {
  const { name } = useContext(UserContext);

  return (
    <>
      Select a room
      <div className="Rooms">
        <div className="Room">Single Room</div>
        
        <button
            type="button"
            className="forwardButton"
            disabled={false}
            onClick={() => {
              Book();
            }}
          >
            <b>Book</b>
          </button>
      </div>
    </>
  );
};

export default RoomDetail;
