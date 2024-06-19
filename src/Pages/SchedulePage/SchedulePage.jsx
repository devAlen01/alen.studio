import { useAniContext } from "../../context/AniContext";
import TitleCard from "../TitlesPage/TitleCard";
import Loader from "../../components/Loader/Loader";

const SchedulePage = () => {
  const { schedule, feed, loading, error } = useAniContext();

  const newAnime = schedule?.map((el) => el.list);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {newAnime.length ? (
        <div className=" flex justify-center items-center flex-col">
          <h1 className="text-3xl text-center mb-6 py-[10px] px-[90px] my-2 bg-slate-600 rounded-2xl">
            Новые эпизоды
          </h1>
          <div className="flex items-center gap-[35px] my-5  flex-wrap">
            {feed.map((newEpi, index) => (
              <TitleCard key={index} el={newEpi.title} />
            ))}
          </div>

          <div className="">
            <h1 className="text-2xl text-center py-[10px] px-[90px] my-2 bg-slate-600 rounded-2xl">
              Расписание релизов
            </h1>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Понедельник
              </h1>
              <div className="flex items-center gap-[45px] flex-wrap">
                {newAnime[0]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Вторник
              </h1>
              <div className="flex items-center gap-[45px]  flex-wrap">
                {newAnime[1]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Среда
              </h1>
              <div className="flex items-center gap-[45px]  flex-wrap">
                {newAnime[2]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Четверг
              </h1>
              <div className="flex items-center gap-[45px]  flex-wrap">
                {newAnime[3]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Пятница
              </h1>
              <div className="flex items-center gap-[45px]  flex-wrap">
                {newAnime[4]?.map((anime, index) => (
                  <TitleCard el={anime} key={index} />
                ))}
              </div>
            </div>
            <div className="py-4">
              <h1 className="text-2xl text-center bg-red-500 rounded-2xl my-5">
                Суббота
              </h1>
              <div className="flex items-center gap-[45px]  flex-wrap">
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
        <div className="">
          <div className="mt-[20%] text-3xl">{error}</div>
        </div>
      )}
    </>
  );
};

export default SchedulePage;
