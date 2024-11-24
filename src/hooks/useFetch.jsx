import { useState } from "react";
import { ServiceCategoryFetchList } from "../services/CategoryService";
import {
  ServiceNewsBySearchList,
  ServiceNewsFetchList,
} from "../services/NewsService";
import { ServiceAuthorFetchList } from "../services/AuthorService";
import { serviceWeather } from "../services/WeatherService";

const useFetch = (state = false) => {
  const [data, setData] = useState(state);
  const [loading, setLoading] = useState(false);

  const fetchData = async (service, params, id = false) => {
    setLoading(true);
    const res = await service(params, id);
    setData(res);
    setLoading(false);
  };

  return [data, fetchData, loading];
};

export const useFetchCategoryList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(ServiceCategoryFetchList);
  };

  return [data, apiFetch, loading];
};

export const useFetchBySearch = (text) => {
  const [data, fetch, loading] = useFetch([]);
  const params = { limit: 5, title: text };
  const featchSearch = async () => {
    fetch(ServiceNewsBySearchList, params);
  };

  return [data?.data || [], featchSearch, loading];
};

export const useFetchNewsList = () => {
  const [data, fetch, loading] = useFetch([]);
  const newsFetch = async () => {
    fetch(ServiceNewsFetchList, { limit: 6 });
  };

  return [data?.data || [], newsFetch, loading];
};

export const useFetchAuthorList = () => {
  const [data, fetch, loading] = useFetch([]);

  const authorFetch = async () => {
    fetch(ServiceAuthorFetchList, { limit: 5 });
  };

  return [data?.data || [], authorFetch, loading];
};

export const useFetchWeatherData = () => {
  const [data, fetch, loading] = useFetch();
  const apiFetch = async () => {
    fetch(serviceWeather);
  };

  return [data || {}, apiFetch, loading];
};
