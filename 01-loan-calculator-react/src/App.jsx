import { useState } from 'react';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx'

function App() {
  // Código JavaScript
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;


  // Hooks
  const [cantidad, setCantidad] = useState(10000);

  function handleChange(e) {
    setCantidad(e.target.value);
  }

  function handleClickDecremento() {
    const valor = cantidad - STEP;

    if (valor < 0) {
      alert('Cantidad no valida');
      return;
    }

    setCantidad(valor);
  }

  function handleClickIncremento() {
    const valor = +cantidad + STEP;

    if (valor > MAX) {
      alert('Cantidad no valida');
      return;
    }
    
    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className="flex justify-between my-6">
        <Button 
          operador="-"
          fn={handleClickDecremento}
        />
        <Button 
          operador="+"
          fn={handleClickIncremento}
        />
      </div>

      <input 
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        type="range"
        className="w-full h-5 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={ handleChange }
      />

      <p className="text-center my-10 text-2xl font-extrabold text-indigo-600"> 
        {cantidad}
      </p>

    </div>
  )
}

export default App