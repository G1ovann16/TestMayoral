import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./api/data";

export default function index() {
  return (
    <div>
      <div className="container-fluid">
      
        <div className="container d-flex">
          <Data />
        </div>
      </div>
    </div>
  );
}
