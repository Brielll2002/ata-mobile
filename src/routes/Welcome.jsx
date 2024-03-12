import { Link } from 'react-router-dom'
import './Welcome.css'
import Navbar from '../components/Navbar'

const Welcome = () => {
  return (
    <div>
        <Navbar/>
        <div className='choice'>
        <Link to='/aluno' className='aluno'>Aluno</Link>
        <Link to='/professor' className='professor'>Professor</Link>
        </div>
    </div>
  )
}

export default Welcome