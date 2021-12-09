import React from "react";
import { BsPersonCircle, BsTrash } from "react-icons/bs";
import { RiPencilFill } from "react-icons/ri";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { BiMessageRoundedMinus, BiDotsVertical } from "react-icons/bi";
import { MdLocalPhone } from "react-icons/md";
export default function PersonCard() {
  return (
    <div className="bg-white p-3 ms-3 mb-3 width">
      <div className="d-flex">
        <div className="d-flex flex-column justify-content-center align-items-center border-end p-3">
          <figure>
            <BsPersonCircle className="w-100 height" />
          </figure>
          <div className="d-flex">
            <RiPencilFill className="ms-1" />
            <AiOutlinePauseCircle className="ms-1" />
            <BsTrash className="ms-1" />
          </div>
        </div>
        <div className="p-3">
          <p className="mb-0 fs-2 text-primary">Sara Khaled Ahmed</p>
          <p className="mb-0 fs-4">HR Head</p>
          <p className="mb-0 text-primary">Buisiness Development</p>
          <label className="text-warning ">Present</label>
        </div>
        <div className="d-flex justify-content-around align-items-end">
          <BiMessageRoundedMinus />
          <MdLocalPhone />
          <BiDotsVertical />
        </div>
      </div>
    </div>
  );
}
