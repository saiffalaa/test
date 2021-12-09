import React from "react";
import { MdNotificationsActive } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
export default function TopBar() {
  return (
    <div className="topBar d-flex justify-content-end align-items-center">
      <p className="date">Thursday, 03 Oct 02:08:07 PM</p>
      <button className="signInButton text-center p-1">Sign In</button>
      <MdNotificationsActive className="notification" />
      <div className="d-flex align-items-center">
        <BsPersonCircle className="person-icon" />
        <p className="bottom name-color">Ahmed Khaled</p>
      </div>
      <AiOutlineDown className="bottom down-arrow name-color" />
      <AiOutlineDown className="bottom down-arrow2 name-color" />
    </div>
  );
}
