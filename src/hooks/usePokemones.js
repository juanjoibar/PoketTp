import { useEffect, useState } from 'react';
const URL_DEFAULT = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
const URL_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon/'

function usePokemones() {
    const [pokemones, setPokemones] = useState([])
    const [siguienteUrl, setSiguienteUrl] = useState('')

    const fetchPokemon = async(url) => {
        const response = await fetch(url)
        const poke = await response.json()

        return {
            id: poke.id,
            name: poke.name,
            img: poke.sprites.other.dream_world.front_default
        }
    }

    const getPokemones = async (url = URL_DEFAULT) => {
        //Obtenemos el listado de los pokemones
        const response = await fetch(url)
        const listaPokemones = await response.json()
        const { next, results } = listaPokemones

        const newPokemones = await Promise.all(
            results.map((pokemon) => fetchPokemon(pokemon.url))
        )
        return { next, newPokemones}
    }   

    const obtenerPokemones = async () => {
        const {next, newPokemones} = await getPokemones()
        setPokemones(newPokemones)
        setSiguienteUrl(next)
    }

    const masPokemones = async () => {
        const { next, newPokemones} = await getPokemones(siguienteUrl)
        setPokemones(prev => [...prev, ...newPokemones])
        setSiguienteUrl(next)
    }

    const searchPokemon = async(busqueda) => {
        const url = `${URL_ENDPOINT}${busqueda.tolocaleLowerCase()}`
        return await fetchPokemon(url)
    }
 
    useEffect(() => {obtenerPokemones() }, [])

    return{pokemones, masPokemones, searchPokemon}
}

export default usePokemones