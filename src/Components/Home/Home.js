import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/allTours")
      .then((res) => console.log(res.data));
  }, []);
  return <div></div>;
};

export default Home;
