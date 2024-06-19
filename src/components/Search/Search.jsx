import TitleCard from "../../Pages/TitlesPage/TitleCard";
import { useAniContext } from "../../context/AniContext";
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";

const Search = () => {
  const {
    setSearchAnime,
    searchAnime,
    titleSearch,
    getSearchTitles,
    loading,
    error,
  } = useAniContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <form className="py-8">
          <input
            className="w-[500px] py-[10px] px-[40px] rounded-xl text-slate-900"
            onChange={(e) => {
              setSearchAnime(e.target.value);
            }}
            type="text"
            placeholder="Поиск..."
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white border-2 py-[9px] px-[40px] mx-2 rounded-xl bg-slate-600 focus:bg-red-900"
            onClick={(e) => {
              e.preventDefault();
              getSearchTitles();
              setSearchAnime("");
            }}
          >
            Поиск
          </motion.button>
        </form>

        <div className="">
          {titleSearch.length ? (
            <div className=" flex items-center gap-[45px] flex-wrap mb-9">
              {titleSearch?.map((el, index) => (
                <TitleCard el={el} key={index} />
              ))}
              <div className="w-[100%] h-2 bg-red-800"></div>
            </div>
          ) : (
            <div className="mt-[20%] mb-[20%] text-3xl">
              {error ? "Ничего не найдено" : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
