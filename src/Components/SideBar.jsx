import React from "react";
import { MdDashboard } from "react-icons/md";
import { RiComputerLine, RiCupFill } from "react-icons/ri";
import { FaUserFriends, FaHands } from "react-icons/fa";
export default function SideBar() {
  return (
    <div className="side ">
      <div className="between-icons">
        <MdDashboard className="icons" />
        <p className="icon-text">Dashboard</p>
      </div>
      <div className="between-icons">
        <RiComputerLine className="icons" />
        <p className="icon-text">WorkPlace</p>
      </div>
      <div className="between-icons">
        <RiCupFill className="icons" />
        <p className="icon-text">Holidays</p>
      </div>
      <div className="between-icons">
        <FaUserFriends className="icons" />
        <p className="icon-text">Employees</p>
      </div>
      <div className="between-icons">
        <FaHands className="icons" />
        <p className="icon-text">
          Inbound <span className="d-block">Requests</span>
        </p>
      </div>
    </div>
  );
}
