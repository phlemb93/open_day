import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'


const Navbar = () => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/');
  }
  return (
    <header>
        <nav>
          <img src={logo} alt="" width={50} height={50} onClick={handleClick}/>
        </nav>
    </header>
  )
}

export default Navbar