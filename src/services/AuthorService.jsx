import { news } from "../api/news";
import { get } from "./request";

export const ServiceAuthorFetchList = async (params = {}) => {
  const res = await get(news.author, params);

  return res;
};
