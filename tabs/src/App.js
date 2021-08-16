import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "./Loading";
import axios from "axios";
import "./App.css";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const url = "https://course-api.com/react-tabs-project";

const boxInfo = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    axios.get(url).then((res) => {
      setJobs(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <>
      <section>
        <div className="container border-info p-0">
          <div className="text-center my-5 ">
            <h2> Expierence</h2>
            <div
              className=" mx-auto bg-primary rounded"
              style={{ width: 90, height: 4 }}
            ></div>
          </div>

          <div className=" row">
            {/* left and right */}
            <div className="col-100 col-lg-2 pt-4 " style={{}}>
              <div className="d-flex flex-sm-row flex-lg-column justify-content-center align-items-center mt-lg-5">
                <div className=" d-sm-flex d-lg-block">
                {jobs.map((item, index) => {
                  return (
                      <div className=" mb-3 ">
                        <button
                          onClick={() => setValue(index)}
                          className={` h6 text-center px-3 ${
                            index === value ? "activebtn " : "border-0"
                          }`}
                          style={{ backgroundColor: "transparent" }}
                          key={item.id}
                        >
                          {item.company}
                        </button>
                      </div>
                  );
                })}
                </div>
              </div>
            </div>
            <motion.div
              variants={boxInfo}
              initial="hidden"
              animate="visible"
              className="col-100 col-lg-10 border shadow pt-4"
            >
              <div className="text-center">
                <h5 style={{ color: "#a9a9a9" }}>{title}</h5>
                <p className="bg-secondary  text-light d-inline-block px-2 rounded">
                  {company}
                </p>
                <p style={{ color: "#666" }}>{dates}</p>
              </div>
              {duties.map((duty, index) => {
                return (
                  <div
                    className="d-flex p-1 mb-2 align-items-baseline"
                    key={index}
                  >
                    <FaAngleDoubleRight className="text-success mx-2" />
                    <p>{duty}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
