import React, { createContext, useEffect, useState } from "react";
import { roomData } from "../data";

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("1 Adult");
  const [childrens, setChildrens] = useState("0 Children");
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(childrens[0]));
  }, [adults, childrens]);

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    // Filter Rooms Based on Total Person
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false);
      setShow(true);
    }, 3000);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        setAdults,
        childrens,
        setChildrens,
        handleClick,
        loading,
        show,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
