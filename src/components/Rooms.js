import React, { useContext } from "react";
// Context
import { RoomContext } from "../context/RoomContext";
// Components
import Room from "../components/Room";
// Loader
import { SpinnerDotted } from "spinners-react";

const Rooms = () => {
  const { rooms, loading } = useContext(RoomContext);
  return (
    <section className="py-24">
      {/* Overlay & Spinner */}

      <div className="container mx-auto lg:px-0">
        <div className="grid grid-col-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {rooms.map((room, index) => {
            return <Room room={room} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Rooms;
