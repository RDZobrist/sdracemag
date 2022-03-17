import React, { useState, useEffect, Fragment } from "react";
import "./Main.css";
import Cards from "./Cards";

const Main = ({ socket }) => {

  const [openRooms, setOpenRooms] = useState([])

  useEffect(() => {
    socket.emit("rooms");
    socket.on("rooms", (data) => {
      let i = 0 
      const rooms = data.map((element) => {
        i ++;
        return <Cards key={i} room={element} socket={socket}/>
      })
      setOpenRooms(rooms)
    })
  }, [socket])

  return (
    <Fragment>
      <div className="main-data">
        <div className="main-heading">
          <span>Games:</span>
        </div>
        <div className="cards">
          {openRooms}
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
