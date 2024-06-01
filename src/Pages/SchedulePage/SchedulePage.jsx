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
      <div className="text-slate-950">
        <form>
          <input
            onChange={(e) => setSearchAnime(e.target.value)}
            value={searchAnime}
            type="text"
            placeholder="search..."
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              getSearchTitles();
              setSearchAnime("");
            }}
          >
            Search
          </button>
        </form>

        <div className="">
          {title?.map((el, index) => (
            <TitleCard key={index} el={el} />
          ))}
        </div>
      </div>
      {newAnime ? (
        <div className="">
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
