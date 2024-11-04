import React from "react";

export const Section = ({ title, children, loading }) => {
  return (
    <section className="mt-32">
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <div>{children}</div>
    </section>
  );
};
