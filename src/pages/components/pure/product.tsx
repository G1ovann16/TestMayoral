/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

const Product = (d: any, key: number) => {
  const { title, id, image, price } = d.d;
  
  const desktop = {
    height: "50vh",
    width: "auto",
  };
 const mobile ={
  height: "20vh",
    width: "auto",
 }

  return (
    <div
      id={id}
      className="col-lg-2 col-xl-2 col-xxl-2 col-md-6 col-md-6 col-6 card"
    >
      <img
        src={image}
        className="card-img-top"

        style={desktop}
        alt="..."
      />
      <div className="card-body m-1">
        <h4 className="card-title m-2">{title}</h4>
        <h5
          className="card-text"
          style={{"text-decoration": "line-through", color: "red" }}
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
