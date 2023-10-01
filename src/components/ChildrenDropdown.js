import React, { useContext } from "react";
// Room Context
import { RoomContext } from "../context/RoomContext";
// Headless UI Menu
import { Menu } from "@headlessui/react";
// Icons
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "0 Children" },
  { name: "1 Child" },
  { name: "2 Childrens" },
  { name: "3 Childrens" },
  { name: "4 Childrens" },
];

const KidsDropdown = ({ childrens, setChildrens }) => {
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* Button */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8 font-tertiary tracking-[3px]">
        {childrens}
        <BsChevronDown className="text-base text-accent" />
      </Menu.Button>
      {/* Items */}
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              as="li"
              onClick={() => setChildrens(li.name)}
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white flex justify-center items-center cursor-pointer font-tertiary tracking-[3px]"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
