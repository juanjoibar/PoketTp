import { Buscar } from './Icons'
import './Buscador.css'


const Buscador = ({ busqueda, setBusqueda, buscarPokemon }) => {
    return (
        <>
            <form className='container-buscar' onSubmit={buscarPokemon}>
                <input type="text" placeholder='Busca tu Pokemon' className='input-buscar' value={busqueda} onChange={(e) => setBusqueda(e.target.value)} />
                <button className='btn-buscar' type='submit'>
                    < Buscar />Buscar
                </button>
            </form> 
        </>
    )
}

export default Buscador