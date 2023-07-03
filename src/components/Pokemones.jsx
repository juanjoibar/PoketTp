import usePokemones from '../hooks/usePokemones'
import './Pokemones.css'
import Buscador from './Buscador'
import { useState } from 'react'

function Pokemones() {
    const { pokemones, masPokemones, searchPokemon } = usePokemones()
    const [busqueda, setBusqueda] = useState('')

    const buscarPokemon = async(e) => {
        e.preventDefault()
        if(!busqueda) return
        const pokemon = await searchPokemon(busqueda)

        console.log('mostrando pokemon');
    }

    return (
        <>  
            <br/>
            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} buscarPokemon={buscarPokemon}/>
            <br/>
            <section className='pokemon-container'>
                {
                    pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} />)
                }
                <button className='btn-buscar' onClick={masPokemones}>Mostrar mas Pokemones</button>
            </section>
        </>
    )
}

function Pokemon({ id, name, img }) {
    return (
        <>
            <div className='pokemon-card'>
                <img src={img} alt={name} className='pokemon-img' />
                <p className='pokemon-title'>
                    <span>{id}</span>
                    <span>{name}</span>
                </p>
            </div>
        </>
    )
}

export default Pokemones