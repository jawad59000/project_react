import React, { useEffect, useState } from "react";
import axios from "axios";
import Tour from "./Tour";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState(data);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios.get(url).then((res) => setData(res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteItem = (id) => {
    const newVoyages = data.filter((voyage) => voyage.id != id);
    setData(newVoyages);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!data.length) {
    return (
      <main>
        <div className="title">
          <h2>NO tour left</h2>
          <div className="underline"></div>
          <button
            className="btn"
            onClick={() => {
              fetchData();
            }}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {data.map((tour) => {
            return <Tour {...tour} key={tour.id} deleteItem={deleteItem} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default Tours;
