import React from "react";

const url = "https://jsonplaceholder.typicode.com/todos";

const fetchTodos = async () => {
  await new Promise((resolve) => {
    setInterval(resolve, 1000);
  });
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};

type Data = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

const About = async () => {
  const data: Data[] = await fetchTodos();
  console.log(data);
  return (
    <>
      <div>Title List</div>
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </>
  );
};

export default About;
