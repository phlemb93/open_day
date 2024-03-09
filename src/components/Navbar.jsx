import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'


const Navbar = () => {

  const navigate = useNavigate();

  //Redirect back to homepage and reload the page
  const handleClick = () => {
      navigate('/');
      location.reload();
  }

  return (
    <header>
        <nav>
          <img src={logo} alt="cardiff-university-logo" width={50} height={50} onClick={handleClick}/>
        </nav>
    </header>
  )
}

export default Navbar