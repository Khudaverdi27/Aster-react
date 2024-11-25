import { news } from "../api/news";
import { get, post } from "./request";

export const ServiceNewsBySearchList = async (params = {}) => {
  const res = await get(news.getNews, params);
  return res;
};

export const ServiceNewsFetchList = async (params = {}) => {
  const res = await get(news.getNews, params);
  return res;
};

export const ServiceLogin = async (params = {}) => {
  const res = await post(news.login, params);
  return res;
};
