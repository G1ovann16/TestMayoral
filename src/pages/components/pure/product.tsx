/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

const Product = (d:any, key:number) => {
 const {title,id, image, price}=d.d
 console.log(title,id, image, price)

  return (
    <div id={id} className="col-lg-2 card">
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <h5 className="card-text">{price}</h5>
          <h6 className="card-text">{price}</h6>
          <a href="#" className="btn btn-primary">Add to car</a>
        </div>
      </div>
  );
};
// Products.propType={
//   dataStore: PropTypes.arrayOf(
//     PropTypes.shape(
//       {
//         id:PropTypes.number.isRequired
//       }
//     ).isRequired
//   ).isRequired
// }
export default Product;
