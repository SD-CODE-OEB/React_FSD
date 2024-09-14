import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import axios from "axios";
import "./cats.css";
const CatAPI = () => {
  const [cats, setCats] = useState([]);
  const [count, setCount] = useState(0);
  const url = "https://api.thecatapi.com/v1/images/search?limit=10";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCats(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const catImgs = cats.map((cat) => cat.url);
  useEffect(() => {
    if (catImgs.length > 0) {
      document.body.style.backgroundImage = `url(${catImgs[count]})`;
      document.body.style.backgroundSize = "cover";
      document.body.style.backdropFilter = "blur(1px)";
    }
  }, [catImgs, count]);

  return (
    <div className="cat-container">
      <h1>We Are Cat's</h1>
      <div className="cat-box">
        <p>
          {count < 1 ? (
            ""
          ) : (
            <button type="button" onClick={() => setCount(count - 1)}>
              <FaChevronLeft />
            </button>
          )}
        </p>
        <div className="cat-img-box">
          <img src={catImgs[count]} alt="cat" height={525} />
        </div>
        <p>
          {count === 9 ? (
            ""
          ) : (
            <button type="button" onClick={() => setCount(count + 1)}>
              <FaChevronRight />
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default CatAPI;
