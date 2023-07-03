
import {Route,Routes,BrowserRouter } from 'react-router-dom'
import Principal from './components/principal/Principal';
import  PokeDetalle  from './components/pokeDetalle/PokeDetalle';
import ContactForm from './components/contactos/ContactForm';

function App() {
  return (
    <>
          <BrowserRouter>
      <Routes>
      <Route path= "/" element= {<Principal/>}  ></Route>
      <Route path='/poke/:pokeid' element= {<PokeDetalle/>}/>
      <Route path= "/contacto" element= {<ContactForm/>}  ></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
