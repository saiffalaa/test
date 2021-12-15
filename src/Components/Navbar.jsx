import React from "react";
import logo from "../assets/smallLogo.png";
export default function NavBar() {
  return (
    <nav className="d-flex justify-content-around mt-1 w-75 ms-auto me-5 align-items-center">
      <ul className="d-flex justify-content-around w-75">
        <li className="fs-5">طور التطبيق</li>
        <li className="fs-5">التطبيقات</li>
        <li className="fs-5">التصنيفات</li>
        <li className="fs-5">الرئيسيه</li>
      </ul>
      <div>
        <img src={logo} />
      </div>
    </nav>
  );
}
