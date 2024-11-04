import React from "react";
import { NewsItem } from "./NewsItem";
import { Section } from "../../../components/widget/Section";

export const NewsSection = ({ items, loading, title }) => {
  return (
    <Section title={title} loading={loading}>
      <div className="grid grid-cols-2  gap-8">
        {loading ? (
          <p className="loader text-center"></p>
        ) : (
          items.map((news, index) => (
            <div key={index} className="">
              <NewsItem item={news} />
            </div>
          ))
        )}
      </div>
    </Section>
  );
};
