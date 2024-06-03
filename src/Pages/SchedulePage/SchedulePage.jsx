import { useState } from "react";
import { useAniContext } from "../../context/AniContext";
import TitleCard from "../TitlesPage/TitleCard";
import { API } from "../../API/api";
import axios from "axios";

const SchedulePage = () => {
  const { schedule, feed } = useAniContext();
  const [searchAnime, setSearchAnime] = useState("");
  const [title, setTitle] = useState([]);

  const newAnime = schedule?.map((el) => el.list);

  async function getSearchTitles() {
    let { data } = await axios.get(`${API}/title/search`, {
      params: {
        search: searchAnime,
        items_per_page: 10,
      },
    });

    setSearchAnime(data);
    setTitle(data?.list);
  }

  return (
    <>
      {newAnime.length ? (
        <div className=" flex justify-center items-center flex-col">
          <div className="flex flex-col justify-center items-center py-4">
            <form className="py-8">
              <input
                className="w-[500px] py-[10px] px-[40px] rounded-xl text-slate-900"
                onChange={(e) => setSearchAnime(e.target.value)}
                type="text"
                placeholder="Поиск..."
              />
              <button
                className="text-white border-2 py-[9px] px-[40px] mx-2 rounded-xl"
                onClick={(e) => {
                  e.preventDefault();
                  getSearchTitles();
                  setSearchAnime("");
                }}
              >
                Поиск
              </button>
            </form>

            <div className="flex flex-wrap w-full gap-[30px]">
              {title?.map((el, index) => (
                <TitleCard key={index} el={el} />
              ))}
            </div>
          </div>
          <h1 className="text-3xl text-center py-8">Новые эпизоды</h1>
          <div className="flex justify-center items-center flex-wrap gap-[30px]">
            {feed.map((newEpi, index) => (
              <TitleCard key={index} el={newEpi.title} />
            ))}
          </div>

          <div className="">
            <h1 className="text-3xl text-center">Расписание релизов </h1>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
                Понедельник
              </h1>
              <div className="flex flex-wrap gap-[20px]">
                {newAnime[0]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
                Вторник
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[1]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
                Среда
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[2]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
                Четверг
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[3]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
                Пятница
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[4]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
                Суббота
              </h1>
              <div className="flex flex-wrap gap-[30px]">
                {newAnime[5]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl">
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
