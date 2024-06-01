import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { API } from "../API/api";

const AnimeContext = createContext();

export const useAniContext = () => useContext(AnimeContext);

const AniContextProvider = ({ children }) => {
  const [titles, setTitles] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [title, setTitle] = useState(null);
  const [episode, setEpisode] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [feed, setFeed] = useState([]);
  const [searchAnime, setSearchAnime] = useState([]);

  async function getTitles() {
    let { data } = await axios.get(`${API}/title/updates`, {
      params: {
        items_per_page: 30,
        page: activePage,
      },
    });
    setTitles(data.list);
    setPagination(data.pagination);
  }

  async function getTitle(code) {
    let { data } = await axios.get(`${API}/title?code=${code}`);
    let animeList = data.player.list ? Object.values(data.player.list) : [];
    setTitle(data);
    setEpisode(animeList);
  }

  async function getSchedule() {
    let { data } = await axios.get(`${API}/title/schedule`);
    setSchedule(data);
  }

  async function getFeed() {
    let { data } = await axios.get(`${API}/feed `);
    setFeed(data?.list);
  }

  async function getSearchTitles() {
    let { data } = await axios.get(`${API}/title/search`);
    setSearchAnime(data);
  }

  useEffect(() => {
    getFeed();
  }, []);

  useEffect(() => {
    getTitles();
  }, [activePage]);

  useEffect(() => {
    getSchedule();
  }, []);

  let values = {
    getTitles,
    titles,
    pagination,
    setActivePage,
    activePage,
    getTitle,
    title,
    episode,
    getSchedule,
    schedule,
    feed,
  };

  return (
    <AnimeContext.Provider value={values}>{children}</AnimeContext.Provider>
  );
};

export default AniContextProvider;
