import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const url = "https://course-api.com/react-tabs-project";
const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);
  const [className, setClassName] = useState("job-btn");

  useEffect(() => {
    axios(url)
      .then((res) => setJobs(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
    // fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section-loading">
        <h1>loading</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Onglet</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"} `}
                key={index}
                onClick={() => {
                  setValue(index);
                }}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((dutie, index) => {
            return (
              <div className="job-desc" key={index}>
                <p> {dutie}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default App;
