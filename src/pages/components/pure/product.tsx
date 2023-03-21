/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const Product = (d: any, key: number) => {
  const { title, id, image, price } = d.d;
  const [screen, setScreen] = useState(true);
  const [numMob, setNumMob] = useState(6);
  const [numDesktop, setNumDesktop] = useState(2);
  
  const handleResize = () => {
    if (window.innerWidth < 500) setScreen(true);
    else setScreen(false);
  };

  const desktop = {
    height: "12rem",
    width: "auto",
  };
  const mobile = {
    height: "7rem",
    width: "auto",
  };
const arrMobile = ['card', 'col-lg-2', 'col-xl-2', 'col-xxl-2']
const arrDesktop = ['card','col-md-6', 'col-md-6', 'col-6']
  console.log(arrDesktop)
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div
      id={id}
      // className={screen ? arrMobile.join(" "): arrDesktop.join(" ")}
      className='card col-lg-2 col-xl-2 col-xxl-2 col-md-6 col-md-6 col-6'
    >
      <img
        src={image}
        className="card-img-top"
        style={screen ? mobile : desktop}
        alt="..."
      />
      <div className="card-body m-1">
        <h4 className="card-title m-2">{title}</h4>
        <h5
          className="card-text"
          style={{ textDecoration: "line-through", color: "red" }}
        >
          {price}
        </h5>
        <h6 className="card-text">{price - 3}</h6>
      </div>
      <a href="#" className="btn btn-primary align-items-end">
        Add to car
      </a>
    </div>
  );
};
export default Product;
