import { useEffect, useState } from "react";
import "./Pokemones.css";
import { Link, useNavigate } from "react-router-dom";
import Buscador from "./Buscador";
import usePokemones from './hooks/usePokemones';

function Pokemon({ id, name, img }) {
  return (
    <div className="pokemon-card">
      <img src={img} alt={name} className="pokemon-img" />
      <p className="pokemon-title">
        <span>{id}</span>
        <span>{name}</span>
      </p>
    </div>
  );
}

function Pokemones() {
  

  const [pokemones, setPokemones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    const getPokemones = async () => {
      //Obtenemos el listado de los pokemones
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );
      const listaPokemones = await response.json();
      const { results } = listaPokemones;

      const newPokemones = results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        const poke = await response.json();

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default,
        };
      });
      setPokemones(await Promise.all(newPokemones));
    };

    getPokemones();
  }, []);

  const searchPokemon = async (busqueda) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`;
    const response = await fetch(url);
    
    try {
      const poke = await response.json();
      console.log(url);
      return await poke;
    } catch (error) {
      console.log(url);
      console.log('paso');
      
      return ('error')
    }
   
  };
  const buscarPokemon = async (e) => {
    e.preventDefault();
    if (!busqueda) return;
    console.log("voy a la busqueda");
    const pokemon = await searchPokemon(busqueda);
      
    console.log("mostrando pokemon");
    console.log(pokemon);
    
    console.log('estoy')
    if(pokemon== 'error'){
      navigate('/')
    }else{

      navigate(`/poke/${pokemon.id}`)
    }

  };

  return (
    <>
      <div className="grilla">
        <Buscador
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          buscarPokemon={buscarPokemon}
        />
        <section className="pokemon-container">
          {pokemones.map((pokemon) => (
            <div key={pokemon.id}>
              <Link to={`/poke/${pokemon.id}`}>
                <Pokemon {...pokemon} />
              </Link>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default Pokemones;
