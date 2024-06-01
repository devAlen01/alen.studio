import React from "react";
import { IMG_API } from "../../API/api";
import { useNavigate } from "react-router-dom";

const TitleCard = ({ el }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      {el !== undefined ? (
        <div
          onClick={() => navigate(`/title/${el?.code}`)}
          className=" p-3 flex flex-col justify-center items-center"
        >
          <img
            className="w-[210px] rounded-lg "
            src={`${IMG_API}/${el?.posters?.original?.url}`}
            alt={el?.names?.ru}
          />

          <h2 className="text-center py-[6px]  px-[3px] mt-[5px] w-[190px] h-[100px] flex-col">
            {el?.names?.ru}
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default TitleCard;
