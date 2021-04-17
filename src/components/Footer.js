import anterior from '../img/music/anterior.png'
import siguiente from '../img/music/siguiente.png'
import play from '../img/music/play.png'
import adele from '../img/music/adele.jpg'
function Footer(){

return(
    <footer>
    <div className="infoCancion">
        <img alt="Imagen no encontrada" src={adele}/>
        <div className="atributosCancionFooter">
            <h2>Cancion</h2>
            <p>Artista-</p> <p>Album</p>
        </div>    
    </div>
    
    <div className="controles">
        <button><img src={anterior} /></button>
        <button><img src={play} /></button>
        <button><img src={siguiente} /></button>
    </div>
    
    <div className="controlVolumen">
        <input type="range" min="1" max="100" value="20"/>
    </div>
    </footer>
)

}
export default Footer