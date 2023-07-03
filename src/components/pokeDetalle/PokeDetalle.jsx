import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokeDetalle.css";
import Footer from "../footer/Footer"
import Navbar from "../Navbar";

export const PokeDetalle = () => {
  const { pokeid } = useParams();
  const [cargardo, setCargado] = useState(true);
  const [poke, setPoke] = useState(null);
  useEffect(() => {
    //Obtenemos el listado de los pokemones

    setCargado(true);
    console.log("paso");
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeid}`)
      .then((response) => response.json())
      .then((data) => {
        setPoke(data);
        setCargado(false);
        console.log("sale data");
      });
  }, [pokeid]);
  if (cargardo) {
    return <div>Cargando...</div>;
  }

  if (!poke) {
    return null;
  }

  // const imgURL = `https://image.tmdb.org/t/p/w300${po.poster_path}`
  return (
    <>
      <Navbar />
     <div className="personaje">

     
      <h1 className="titulo"> Nombre de Poke: {poke.name}</h1>
      <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">

            
          <img
            className="imagen"
            src={poke.sprites.other.dream_world.front_default}
            alt="" 
          ></img>
          </div>
        
        <div className="flip-card-back">
          <h4 className="titulo"> Nombre de Poke: {poke.name}</h4>
          <p className="peso">
            <strong>Peso: </strong>
            {poke.weight}
          </p>
          <p className="altura">
            <strong>Altura: </strong>
            {poke.height}
          </p>
          <p className="experiencia">
            <strong>Experiencia: </strong>
            {poke.base_experience}
          </p>

          <p className="genero">
            <strong>Habilidades:</strong>

            {poke.abilities.map((ability) => ability.name).join("/")}
          </p>
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};
export default PokeDetalle;
