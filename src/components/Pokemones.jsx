import { useEffect, useState } from 'react';
import './Pokemones.css'
import { Link } from "react-router-dom"

function Pokemon({id, name, img}) {
    return (
        <div className='pokemon-card'>
            <img src={img} alt={name} className='pokemon-img' />
            <p className='pokemon-title'>
                <span>{id}</span>
                <span>{name}</span>
            </p>
        </div>
    )
}

function Pokemones() {
    const [pokemones, setPokemones] = useState([])

    useEffect(() => {
        const getPokemones = async () => {
            //Obtenemos el listado de los pokemones
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            const listaPokemones = await response.json()
            const { results } = listaPokemones

            const newPokemones = results.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const poke = await response.json()

                return {
                    id: poke.id,
                    name: poke.name,
                    img: poke.sprites.other.dream_world.front_default
                }
            })
            setPokemones(await Promise.all(newPokemones));
        }

        getPokemones()
    }, [])


    return (
        <section className='pokemon-container'>
            {
                
                pokemones.map((pokemon) => (
                    <div>
                    
                    <Link to={`/poke/${pokemon.id}`}>
                      <Pokemon {...pokemon}/>
                      </Link>
                    </div>
                    
                ))
            }
        </section>
    )
}

export default Pokemones