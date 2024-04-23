import { Link } from "react-router-dom";
import Popup from "./Popup";
import { useState } from "react";

const Card = ({ food, onDelete }) => {
  const { _id, foodName, foodImg, foodPrice } = food;
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Popup foodName={foodName} onDelete={onDelete} id={_id} isShow={isShow} setIsShow={setIsShow}/>

      <div className="overflow-hidden rounded-xl border shadow-sm bg-white border-border">
        <div className="relative">
          <img
            src={foodImg}
            alt="foodImg"
            className="h-[22vh] w-full object-cover"
          />
          <span className="absolute top-4 right-4 z-20 bg-price px-3 py-1 rounded-md text-white">
            {foodPrice} BDT
          </span>
        </div>
        <div className="px-4 py-3">
          <p className="line-clamp-2">{foodName}</p>

          <div className="flex gap-3 mt-3">
            <Link
              to={`/api/edit-food/${_id}`}
              className="py-2 px-6 bg-green-100 rounded-md border border-green-300 text-sm"
            >
              Edit
            </Link>
            <button onClick={() => {setIsShow(true);}} className="py-2 px-6 bg-red-100 rounded-md border border-red-300 text-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
