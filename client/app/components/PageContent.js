import React from "react";
import { useState, useEffect } from "react";
const PageContent = (pageNumber) => {
  const [list, setList] = useState();
  const getResource = async (url, page) => {
    const urlres = url + page.pageNumber;
    const res = await fetch(urlres);
    if (!res.ok) {
      throw new Error(`Cound not fetch ${url}${page},status ${res.status}`);
    }
    return await res.json();
  };

  useEffect(() => {
    getResource("https://reqres.in/api/users?page=", pageNumber).then(
      (data) => {
        setList(data.data);
      }
    );
  }, [pageNumber]);
  const content = list ? <MainContent list={list} /> : null;

  return <div>{content}</div>;
};

const MainContent = ({ list }) => {
  console.log(list);
  const cont = list.map((el) => {
    return (
      <div key={el.key}>
        <div>Имя {el.first_name}</div>
        <div>Фамилия {el.last_name}</div>
        <div>email {el.email}</div>
        <img src={el.avatar} alt="s" />
      </div>
    );
  });
  return <>{cont}</>;
};

export default PageContent;
