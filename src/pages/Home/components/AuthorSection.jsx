import React from "react";
import { AuthorItem } from "./AuthorItem";
import { Section } from "../../../components/widget/Section";

export const AuthorSection = ({ title, items = [], loading }) => {
  return (
    <Section title={title}>
      <div className="grid grid-cols-5 gap-8">
        {loading ? (
          <p className="loader text-center"></p>
        ) : (
          items.map((author, index) => (
            <div key={index} className="">
              <AuthorItem item={author} />
            </div>
          ))
        )}
      </div>
    </Section>
  );
};
