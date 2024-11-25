import React, { useEffect } from "react";
import { NewsSection } from "../Home/components/NewsSection";
import { useFetchByCategory } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export const Search = () => {
  const params = useParams();
  const [searchRes, fetchSearchRes, searchLoading] = useFetchByCategory(
    params?.slug
  );

  useEffect(() => {
    fetchSearchRes(params?.slug);
  }, [params?.slug]);
  return (
    <div>
      <NewsSection
        title={params?.slug.toUpperCase()}
        items={searchRes}
        loading={searchLoading}
      />
    </div>
  );
};
