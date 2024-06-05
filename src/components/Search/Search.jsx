import TitleCard from "../../Pages/TitlesPage/TitleCard";
import { useAniContext } from "../../context/AniContext";
import Loader from "../Loader/Loader";

const Search = () => {
  const { setSearchAnime, titleSearch, getSearchTitles, loading } =
    useAniContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <form className="py-8">
          <input
            className="w-[500px] py-[10px] px-[40px] rounded-xl text-slate-900"
            onChange={(e) => setSearchAnime(e.target.value)}
            onInput={(e) => {
              setSearchAnime(e.target.value);
            }}
            type="text"
            placeholder="Поиск..."
          />
          <button
            className="text-white border-2 py-[9px] px-[40px] mx-2 rounded-xl bg-slate-600 focus:bg-red-900"
            onClick={(e) => {
              e.preventDefault();
              getSearchTitles();
              setSearchAnime("");
            }}
          >
            Поиск
          </button>
        </form>

        <div className="">
          {titleSearch ? (
            <div className=" flex items-center gap-[45px] flex-wrap mb-9">
              {titleSearch?.map((el, index) => (
                <TitleCard key={index} el={el} />
              ))}
              <div className="w-[100%] h-2 bg-red-800"></div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
