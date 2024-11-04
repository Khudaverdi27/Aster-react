import React, { useEffect } from "react";
import { NewsSection } from "./components/NewsSection";
import { useFetchAuthorList, useFetchNewsList } from "../../hooks/useFetch";
import { AuthorSection } from "./components/AuthorSection";

export const Home = () => {
  const [newsList, fetchNewsList, newsLoading] = useFetchNewsList();
  const [authorList, fetchAuthorList, authorLoading] = useFetchAuthorList();

  useEffect(() => {
    fetchNewsList();
    fetchAuthorList();
  }, []);
  return (
    <>
      <div>
        <NewsSection
          title={"En son Xeberler"}
          items={newsList}
          loading={newsLoading}
        />
      </div>

      <div>
        <AuthorSection
          title={"Yazarlar"}
          items={authorList}
          authorLoading={authorLoading}
        />
      </div>
      <div>
        <NewsSection
          title={"En cox oxunan Xeberler"}
          items={newsList}
          loading={newsLoading}
        />
      </div>
    </>
  );
};
