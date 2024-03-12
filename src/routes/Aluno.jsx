import { useState } from 'react'
import './Aluno.css'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; 
var ano = dataAtual.getFullYear();
var dataFormatada = (dia < 10 ? '0' : '') + dia + '/' + (mes < 10 ? '0' : '') + mes + '/' + ano;

const Aluno = () => {

    const [valor, setValor] = useState([])
    const [nome, setNome] = useState("")
    const [matricula, setMatricula] = useState("")
    const [curso, setCurso] = useState("")

    const create = (e) =>{
      e.preventDefault()
      if(!nome || !matricula || !curso){
        alert('Preencha todos os campos !')
      }
      else if(matricula.trim().length != 8){
        alert('A matrícula está incorreta !')
      }
      else{
        const aluno = [nome, " "+dataFormatada, " "+matricula, " "+curso]
        setValor(aluno)
      }
    }

  return (
    <div>
      <Navbar/>
      <Link className='voltar' to='/'>Voltar</Link>
        <main>
        <div id='qr-code'>
        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valor}`} alt="" />
        </div>
        <form onSubmit={create}>
          <label>
          <input type="text" placeholder='Escreva seu nome completo' id='text-input' value={nome} onChange={(e) => setNome(e.target.value)}/>
          </label>
          <br />
          <label>
          <input type="text" placeholder='Escreva sua matricula' id='text-input' value={matricula} onChange={(e) => setMatricula(e.target.value)}/>
          </label>
          <br />
          <label>
          <input type="text" placeholder='Escreva o nome do curso' id='text-input' value={curso} onChange={(e) => setCurso(e.target.value)}/>
          </label>
          <input type="submit" className='criar' value="Criar QRCode" />
        </form>
      </main>
    </div>
  )
}

export default Aluno