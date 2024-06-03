import { useState } from "react";
import { useAniContext } from "../../context/AniContext";
import TitleCard from "../TitlesPage/TitleCard";
import { API } from "../../API/api";
import axios from "axios";
import Search from "../../components/Search/Search";

const SchedulePage = () => {
  const { schedule, feed } = useAniContext();
  const [searchAnime, setSearchAnime] = useState("");

  const newAnime = schedule?.map((el) => el.list);

  return (
    <>
      {newAnime.length ? (
        <div className=" flex justify-center items-center flex-col">
          <Search />
          <h1 className="text-3xl text-center py-[10px] px-[90px] my-2 bg-slate-600 rounded-2xl">
            Новые эпизоды
          </h1>
          <div className="flex justify-center items-center flex-wrap gap-[30px]">
            {feed.map((newEpi, index) => (
              <TitleCard key={index} el={newEpi.title} />
            ))}
          </div>

          <div className="">
            <h1 className="text-3xl text-center py-[10px] px-[90px] my-2 bg-slate-600 rounded-2xl">
              Расписание релизов{" "}
            </h1>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Понедельник
              </h1>
              <div className="flex flex-wrap gap-[20px]">
                {newAnime[0]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Вторник
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[1]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Среда
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[2]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Четверг
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[3]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Пятница
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[4]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Суббота
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[5]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Воскресенье
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[6]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
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
    </>
  );
};

export default SchedulePage;
