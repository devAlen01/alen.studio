import React, { useState } from "react";
import { API } from "../../API/api";
import axios from "axios";
import TitleCard from "../../Pages/TitlesPage/TitleCard";

const Search = () => {
  const [searchAnime, setSearchAnime] = useState("");
  const [title, setTitle] = useState([]);

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
    <div>
      <div className="flex flex-col justify-center items-center ">
        <form className="py-8">
          <input
            className="w-[500px] py-[10px] px-[40px] rounded-xl text-slate-900"
            onChange={(e) => setSearchAnime(e.target.value)}
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

        <div className="flex flex-wrap w-full gap-[30px]">
          {title?.map((el, index) => (
            <TitleCard key={index} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
