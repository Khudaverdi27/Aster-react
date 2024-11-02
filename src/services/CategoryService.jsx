import { news } from "../api/news";
import { get } from "./request";

export const ServiceCategoryFetchList = async () => {
  const res = await get(news.getCategories);

  return res;
};
