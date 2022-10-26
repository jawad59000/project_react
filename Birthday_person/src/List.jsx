import React from "react";

const List = ({ data: data }) => {
  return (
    <>
      {data.map((people) => {
        const { image, name, age, id } = people;
        return (
          <article className="person" key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
