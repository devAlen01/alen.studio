import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import TitleCard from "./TitleCard";
import { useAniContext } from "../../context/AniContext";
import Search from "../../components/Search/Search";

const TitlesPage = () => {
  const { titles, pagination, setActivePage, activePage } = useAniContext();

  if (!titles) {
    return console.log("Loading...");
  }

  return (
    <div className=" flex flex-col justify-items-center items-center my-[30px]">
      <Search />

      {titles.length ? (
        <>
          <div className="  flex items-center justify-center gap-[30px] flex-wrap">
            {titles.map((el, index) => (
              <TitleCard key={index} el={el} />
            ))}
          </div>
          <div className="bg-slate-200/20 p-2 mt-8 w-[800px] rounded-xl">
            <ResponsivePagination
              current={activePage}
              total={pagination.pages}
              onPageChange={setActivePage}
            />
          </div>
        </>
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

export default TitlesPage;
