import { useState } from "react";
import { ServiceCategoryFetchList } from "../services/CategoryService";

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
