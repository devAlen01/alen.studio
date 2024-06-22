import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_API, VIDEO_HOST } from "../../API/api";
import ReactPlayer from "react-player";
import { useAniContext } from "../../context/AniContext";
import Loader from "../../components/Loader/Loader";

const DetailPage = () => {
  const { getTitle, title, episode, loading, error } = useAniContext();
  const [activeEpisode, setActiveEpisode] = useState(1);
  const [video, setVideo] = useState("hd");
  const { code } = useParams();

  useEffect(() => {
    getTitle(code);
  }, [code]);

  if (loading) {
    return <Loader />;
  }

  console.log(title);

  return (
    <div className="">
      {title ? (
        <div>
          <div className="mb-8">
            <div className=" flex flex-col gap-2 pb-3 text-xl max-sm:text-[14px] text-red-600 max-sm:w-[200px]">
              <Link to="/">Главная страница</Link>
              <Link to="/titles">Список тайтлов</Link>
            </div>

            <h1 className="text-[22px] md:test-2xl text-center p-3">
              {title.names.ru}
            </h1>
            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
              <div className="flex flex-col gap-1 w-full md:w-1/3 rounded-lg">
                <img
                  src={IMG_API + title?.posters.original.url}
                  alt={title?.names.ru}
                  width={400}
                />
                <div className="w-ful px-2">
                  Жанр:
                  {title?.genres.map((el, index) => (
                    <span
                      key={index}
                      className="p-[2px] mx-[2px] w-full rounded-md bg-red-500 "
                    >
                      {el}
                    </span>
                  ))}
                  <br />
                  <span>
                    Сезон: {title?.season.year} / {title?.season.string}
                  </span>
                </div>
              </div>
              <p className="text-justify md:w-2/3">{title?.description}</p>
            </div>
          </div>
          <div className=" p-5">
            <div className="p-5 bg-slate-300/20 rounded-lg w-full">
              <div className="text-center">
                <select
                  value={activeEpisode}
                  onChange={(e) => setActiveEpisode(e.target.value)}
                  className=" bg-slate-800 p-1 m-1 w-[200px] truncate rounded-lg outline-none cursor-pointer text-white"
                >
                  {episode?.map((episode, index) => (
                    <option
                      key={index}
                      value={episode?.episode}
                      className="bg-slate-700 text-white"
                    >
                      Серия {episode?.episode}: {episode?.name}
                    </option>
                  ))}
                </select>
                <select
                  onChange={(e) => setVideo(e.target.value)}
                  className="mt-4 bg-slate-800 p-1 rounded-lg outline-none cursor-pointer text-white"
                >
                  <option value="sd" className="bg-slate-700 text-white">
                    SD
                  </option>
                  <option value="hd" className="bg-slate-700 text-white">
                    HD
                  </option>
                  <option value="fhd" className="bg-slate-700 text-white">
                    FHD
                  </option>
                </select>
              </div>

              {episode?.map((play, index) =>
                play?.episode == activeEpisode ? (
                  <div
                    key={index}
                    className=" flex justify-center items-center w-[60%] mx-auto"
                  >
                    <ReactPlayer
                      url={`${VIDEO_HOST}/${play?.hls[video]}`}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-[20%] text-3xl">{error}</div>
      )}
    </div>
  );
};

export default DetailPage;
