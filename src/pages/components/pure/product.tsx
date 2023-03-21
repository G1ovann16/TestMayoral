/* eslint-disable @next/next/no-img-element */
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';

const Product = (d:any, key:number) => {
 const {name,id}=d.d
  return (
    <div id={id} className="col-lg-2 card">
        <img src="https://maximmart.com/images/detailed/1/12%D0%BD%D0%B012_small-photo(3).jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
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
