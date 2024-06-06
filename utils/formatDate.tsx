import React from "react";

const formatDate = (dbDate: string) => {
  const date = new Date(dbDate);
  const formattedDate = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formattedDate
};

export default formatDate;
