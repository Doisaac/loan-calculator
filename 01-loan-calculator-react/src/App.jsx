import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Button from './components/Button.jsx';
import {
  formatearDinero,
  calcularTotalAPagar
} from './helpers';

function App() {
  // Código JavaScript
  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;


  // Hooks
  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const resultadoTotalAPagar = calcularTotalAPagar(cantidad, meses);
    setTotal(resultadoTotalAPagar);
  }, [cantidad]);

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
        {formatearDinero(cantidad)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-500 text-center">
        Elige un <span className="text-indigo-500">Plazo</span> a pagar
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg font-bold text-center text-xl text-gray-500"
        value={meses}
        onChange={e => setMeses(+e.target.value)}
       >
        <option value="6">6 Meses</option>
        <option value="12">12 Meses</option>
        <option value="24">24 Meses</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Resumen <span className="text-indigo-500">de pagos</span>
        </h2>

        <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>

        <p className="text-xl text-gray-500 text-center font-bold"> 
          {formatearDinero(total)} Total a pagar
        </p>

        <p className="text-xl text-gray-500 text-center font-bold">Mensuales</p>
      </div>

    </div>
  )
}

export default App