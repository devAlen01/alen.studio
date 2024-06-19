import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import TitleCard from "./TitleCard";
import { useAniContext } from "../../context/AniContext";
import Search from "../../components/Search/Search";
import Loader from "../../components/Loader/Loader";

const TitlesPage = () => {
  const {
    titles,
    pagination,
    setActivePage,
    activePage,
    titleSearch,
    loading,
    error,
  } = useAniContext();

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" flex flex-col justify-items-center items-center my-[30px]">
      {titles.length ? (
        <>
          <Search />
          <div className="  flex items-center gap-[45px]  flex-wrap">
            {titles?.map((el, index) => (
              <TitleCard el={el} key={index} />
            ))}
          </div>

          <div className="bg-slate-200/20 p-2 mt-8 w-[800px] rounded-xl">
            <ResponsivePagination
              pageItemClassName=""
              current={activePage}
              total={pagination.pages}
              onPageChange={setActivePage}
            />
          </div>
        </>
      ) : (
        <div className="mt-[20%] text-3xl">{error}</div>
      )}
    </div>
  );
};

export default TitlesPage;
