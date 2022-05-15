import React from "react";
import ListItem from "./ListItem";

const UniversitiesList = ({ universities }) => {
  return universities.map((item) => <ListItem data={item} />);
};

export default UniversitiesList;
