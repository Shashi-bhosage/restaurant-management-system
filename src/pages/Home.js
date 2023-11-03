import React from "react";
import Layout from "./../components/Layout/Layout";
import "../styles/HomeStyles.css";
import { Link } from "react-router-dom";

const Home = () => {
  let items = [
    {
      img: "./carosel/img1.jpeg",
      name: "dosha",
      price: "100/- rs",
    },
    {
      img: "./carosel/img2.jpeg",
      name: "veg",
      price: "200/- rs",
    },
    {
      img: "./carosel/img3.jpeg",
      name: "panner",
      price: "100/- rs",
    },
  ];

  return (
    <Layout>
      <div>
        <h1 style={{ color: "red", margin: 20, textAlign: "center" }}>
          {" "}
          Special offer
        </h1>
        <div className="contain-box">
          {items.map((value) => (
            <div className="img">
              <img
                src={value.img}
                alt="images"
                height="250px"
                width="500px"
              ></img>
              <div className="details">
                <Link to={"./menu"}>
                  <button>more details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
