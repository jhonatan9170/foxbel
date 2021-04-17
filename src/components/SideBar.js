import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
function SideBar(){
    return  (
    <nav>
    <img src={logo} width="10%"></img>
        <div className="cerrar">x</div>
        <h1>Mi Librería</h1>
        <ul className="links">
            <li><a href="">Recientes</a></li>
            <li><Link to="/artist">Artistas</Link></li>
            <li><Link to="/album">Álbums</Link></li>
            <li><Link to="canciones">Canciones</Link></li>
            <li><a href="">Estaciones</a></li>
        </ul>  
        <h1>PlayList</h1>
        <ul className="links">
            <li><a href="">Metal</a></li>
            <li><a href="">Para Bailar</a></li>
            <li><a href="">Rock 90s</a></li>
            <li><a href="">Baladas</a></li>    
        </ul>
    </nav>)
}
export default SideBar;