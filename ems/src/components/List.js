import React from "react";

export default function List() {
  const getItem = () => {
    const list = localStorage.getItem("list");
    console.log(JSON.parse(list));
    if (list) {
      return list;
    } else {
      return [];
    }
  };
  let items = getItem();
  return (
    <>
      <p>{items[0]}</p>
    </>
  );
}
