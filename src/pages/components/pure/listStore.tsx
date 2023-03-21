import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/free-regular-svg-icons";
import Product from "./product";

export default function ListStore(data: any) {
  const [dataStore, setDataStore] = useState({});
  const [busqueda, setBusqueda] = useState("");
  const [temp, setTemp] = useState(false);

  

  const handleOnChange = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (b: string) => {
    const filterData = data.data?.filter((item: any) =>
      item?.title.toLowerCase().includes(b)
    );
    setDataStore([...filterData]);
  };

  const sort = () => {
    if(temp){
      const dataCopy = data.data?.sort((a: any, b: any) => b.price - a.price);
      setDataStore([...dataCopy]);
      setTemp(!temp)
    }else{
      const dataCopy = data.data?.sort((a: any, b: any) => a.price - b.price);
      setDataStore([...dataCopy]);
      setTemp(!temp)
    }
  };
   useEffect(() => {
    setDataStore(data.data);
   
  }, [data]);
  return (
    <div className="container-fluid">
      <div className="container d-flex align-items-center justify-content-between">
        <div
          className="containerInput d-flex m-3 w-40"
          style={{ width: "50vw" }}
        >
          <input
            className="form-control inputBuscar"
            value={busqueda}
            placeholder="search by Name"
            onChange={handleOnChange}
          />
          <button className="btn btn-success m-1"
          onClick={()=>setBusqueda("")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <button className="btn btn-success m-1"
          onClick={sort}>
          <FontAwesomeIcon icon={faSort} />
          </button>
        </div>
        <div className="d-flex">
          <button className="btn btn-success m-1" >
            <FontAwesomeIcon icon={faMinusSquare} />
          </button>
          <button className="btn btn-success m-1" >
            <FontAwesomeIcon icon={faPlusSquare} />
          </button>
        </div>
      </div>
      <div className="row m-3 p-2">
        {dataStore?.map?.((d: any, i: number) => (
          <Product d={d} key={i} />
        ))}
      </div>
    </div>
  );
}
