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
  const [searchAnime, setSearchAnime] = useState("");
  const [titleSearch, setTitleSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  async function getTitles() {
    setLoading(true);
    try {
      let { data } = await axios.get(`${API}/title/updates`, {
        params: {
          items_per_page: 10,
          page: activePage,
        },
      });
      setTitles(data.list);
      setPagination(data.pagination);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getTitle(code) {
    setLoading(true);
    try {
      let { data } = await axios.get(`${API}/title?code=${code}`);
      let animeList = data.player.list ? Object.values(data.player.list) : [];
      setTitle(data);
      setEpisode(animeList);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getSchedule() {
    setLoading(true);
    try {
      let { data } = await axios.get(`${API}/title/schedule`);
      setSchedule(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getFeed() {
    setLoading(true);
    try {
      let { data } = await axios.get(`${API}/feed`);
      setFeed(data?.list);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function getSearchTitles() {
    try {
      let { data } = await axios.get(`${API}/title/search`, {
        params: {
          search: searchAnime,
          items_per_page: 10,
        },
      });
      setSearchAnime(data);
      setTitleSearch(data?.list);
    } catch (error) {
      setError(error.message);
    }
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
    titleSearch,
    getSearchTitles,
    setSearchAnime,
    searchAnime,
    loading,
    error,
  };

  return (
    <AnimeContext.Provider value={values}>{children}</AnimeContext.Provider>
  );
};

export default AniContextProvider;
