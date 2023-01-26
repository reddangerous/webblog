import Logo from './images/Logo.png';
import DehazeIcon from '@mui/icons-material/Dehaze';
const Header =() => {
  return (
    <div className="App-header">
     <div className="App-header-Logo">
        <img src={Logo} alt="Logo" />
        </div>
    <div className="Title-bar">
        <h1>WEBGLITCH⚡ TECHNOLOGIES</h1>
    </div>
        <div className="App-header-Menu">
            <button>
               <DehazeIcon />
            </button>
        </div>
    </div>
  )
}

export default Header