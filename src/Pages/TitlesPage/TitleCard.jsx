import React from "react";
import { IMG_API } from "../../API/api";
import { useNavigate } from "react-router-dom";
import { delay, motion } from "framer-motion";

const TitleCard = ({ el }) => {
  const navigate = useNavigate();

  const cardVariants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: i * 90,
      },
    }),
    hidden: { opacity: 0, y: -500, x: 300 },
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        color: "orange",
      }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={el}
      className="bg-slate-700/90 rounded-xl hover:bg-slate-800"
    >
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

          <h2 className="text-center py-[6px]  px-[3px] mt-[5px] w-[190px] h-[80px] truncate flex-col text-wrap ">
            {el?.names?.ru}
          </h2>
        </div>
      ) : null}
    </motion.div>
  );
};

export default TitleCard;
