
import {Route,Routes,BrowserRouter } from 'react-router-dom'
import Principal from './components/principal/Principal';
import  PokeDetalle  from './components/pokeDetalle/PokeDetalle';

function App() {
  return (
    <>
          <BrowserRouter>
      <Routes>
      <Route path= "/" element= {<Principal/>}  ></Route>
      <Route path='/poke/:pokeid' element= {<PokeDetalle/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
