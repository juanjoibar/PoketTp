import React, { useState } from 'react';
import Navbar from '../Navbar'
import './ContactForm.css' 
import Footer from '../footer/Footer'
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado');
    // Puedes reiniciar los campos del formulario después de enviarlo
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <>
    <Navbar/>
    <form className="contact-form" onSubmit={handleSubmit}>
     
     <h2>Contacto</h2>
     <div className="form-group">
       <label htmlFor="name">Nombre:</label>
       <input
         type="text"
         id="name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         required
       />
     </div>
     <div className="form-group">
       <label htmlFor="email">Email:</label>
       <input
         type="email"
         id="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         required
       />
     </div>
     <div className="form-group">
       <label htmlFor="message">Mensaje:</label>
       <textarea
         id="message"
         value={message}
         onChange={(e) => setMessage(e.target.value)}
         required
       ></textarea>
     </div>
     <button type="submit">Enviar</button>
   </form>
   <Footer/>
    
    </>

    
  );
};

export default ContactForm;
