import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { getItems, getItemsByCategoty } from "../../Services/firestore";
import ItemList from "../Products/ItemList";
import { useParams } from "react-router-dom";
import { DotSpinner } from "@uiball/loaders";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function ItemListContainer() {
  const [busqueda, setBusqueda] = useState("");
  const [listaData, setListaData] = useState([])
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { cat } = useParams();
 
// 2 maneras de consumir los datos  una es con axios y la otra mediante una promesa.

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (cat === undefined) {
  //     getItems()
  //       .then((respuesta) => {
  //         setData(respuesta);
  //       })
  //       .finally(() => setIsLoading(false));
  //   } else {
  //     getItemsByCategoty(cat)
  //       .then((respuesta) => {
  //         setData(respuesta);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }
  // }, [cat]);

  const peticionGet = async() =>{
    setIsLoading(true);
    if(cat === undefined){
      await getItems()
      .then((respuesta) => {
        setData(respuesta);
        setListaData(respuesta);
      })
      .finally(()=>setIsLoading(false)).catch(error =>{console.log(error)});
    }else{
      await getItemsByCategoty(cat)
      .then((respuesta)=>{
        setData(respuesta);
        setListaData(respuesta);
      })
      .finally(() => setIsLoading(false)).catch(error=>{console.log(error)});
    }
  }

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar=(terminoBusqueda)=>{
    var resultadosBusqueda = listaData.filter((elemento)=>{
      if(elemento.tittle.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()))return elemento;      
    });
    setData(resultadosBusqueda);
  }


  useEffect(() => {
    peticionGet();
  }, [cat])
  

  return (
    <>
      <div className="container-buscador">
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre"
          onChange={handleChange}
        />
         <button className="btn btn-success" id="btn-buscador">
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </div>
      {isLoading ? (
        <div className="loader">
          <DotSpinner size={40} speed={0.9} color="black" />
        </div>
      ) : (
        <ItemList data={data} />
      )}
    </>
  );
}

export default ItemListContainer;
