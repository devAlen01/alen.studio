import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IMG_API, VIDEO_HOST } from "../../API/api";
import ReactPlayer from "react-player";
import { useAniContext } from "../../context/AniContext";

const DetailPage = () => {
  const { getTitle, title, episode } = useAniContext();
  const [activeEpisode, setActiveEpisode] = useState(1);
  const navigate = useNavigate();
  const { code } = useParams();

  const [video, setVideo] = useState("sd");

  useEffect(() => {
    getTitle(code);
  }, [code]);

  if (!code) {
    console.log("Loading");
  }

  return (
    <div className="p-6 ">
      {title ? (
        <div>
          <div className="">
            <button
              className="text-violet-400 hover:text-violet-800"
              onClick={() => navigate("/")}
            >
              Главная страница
            </button>

            <br />
            <button
              className="text-violet-400 hover:text-violet-800"
              onClick={() => navigate("/titles")}
            >
              К списку
            </button>
          </div>
          <h1 className="sm:text-[10px] sm:bg-red-500 sm:rounded-lg   lg:text-3xl  text-center py-4">
            {title?.names.ru}
          </h1>
          <div className="flex w-full py-4 justify-center items-center ">
            <div className="w-full p-6 text-xs">
              <div className=" p-2 bg-red-600 w-full h-full  flex justify-center">
                <img
                  width={500}
                  src={`${IMG_API}/${title?.posters.original.url}`}
                  alt={title.names.ru}
                />
              </div>
              <div className="w-ful">
                Жанр:
                {title?.genres.map((el, index) => (
                  <span key={index} className="px-1 ">
                    {el}
                  </span>
                ))}
              </div>
              <br />
              <span>
                Год: {title?.season.year} / {title?.season.string}
              </span>
            </div>
            <p className="px-2 w-full h-full max-sm:text-[9px]">
              {title?.description}
            </p>
          </div>

          <div className=" flex justify-center flex-col items-center">
            <div className=" w-[640px] py-3 flex justify-between items-center">
              <select
                onChange={(e) => setActiveEpisode(e.target.value)}
                value={activeEpisode}
                className="bg-purple-800 rounded-lg p-2"
              >
                {episode.map((episode, index) => (
                  <option value={episode.episode} key={index}>
                    Эпизод: {episode.episode}
                  </option>
                ))}
              </select>
              <select
                onChange={(e) => setVideo(e.target.value)}
                className="bg-purple-800 rounded-lg p-2"
              >
                <option value="sd">SD</option>
                <option value="fhd">FHD</option>
                <option value="hd">HD</option>
              </select>
            </div>
            <div className=" pb-[40px]">
              {episode?.map((play, index) =>
                play?.episode == activeEpisode ? (
                  <div
                    key={index}
                    className=" w-full bg-red-500 p-3 flex justify-center items-center"
                  >
                    <ReactPlayer
                      url={`${VIDEO_HOST}/${play?.hls[video]}`}
                      controls
                    />
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen gap-[40px]">
          <div className="rounded-full h-20 w-20 bg-green-500 animate-ping"></div>
          <div className="rounded-full h-20 w-20 bg-red-500 animate-ping"></div>
          <div className="rounded-full h-20 w-20 bg-violet-500 animate-ping"></div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
