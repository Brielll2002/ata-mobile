import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Professor.css';
import {Html5QrcodeScanner} from 'html5-qrcode'
import { useState, useEffect } from 'react';

const Professor = () => {

  const [lista, setLista] = useState([])
  const [scanrResult, setScanResult] = useState(null)

  useEffect(()=>{
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height :250
      },
      fps: 5,
    })
  
    scanner.render(success, error)
  
    function success(result){
      const newLista = [...lista, result]
      scanner.clear()
      setScanResult(result)
      setLista(newLista)
    }
  
    function error(err){
      console.warn(err)
    }
  },[lista])

  const copyToClipboard = () => {
    const resultsToCopy = lista.join('\n');
    navigator.clipboard.writeText(resultsToCopy)
      .then(() => alert('Resultados copiados para a área de transferência'))
      .catch((err) => console.error('Erro ao copiar para a área de transferência', err));
  };
  
  return (
    <div>
      <Navbar />
      <Link className='voltar' to='/'>Voltar</Link>
      <main>
        {scanrResult && <div>Presença {lista.length} salva !</div>}
      <div id="reader"></div>
      </main>
      <button className='copiar' onClick={copyToClipboard}>Copiar</button>
    </div>
  );
}

export default Professor;