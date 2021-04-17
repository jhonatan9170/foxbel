import Footer from '../components/Footer'
import Sidebar from './SideBar'
import AlbumSearch from '../pages/AlbumSearch'
import ArtistasSearch from '../pages/ArtistasSearch'
import page from '../pages/page'
import CancionesSearch from '../pages/CancionesSearch'
import {
    BrowserRouter as Router,Route,Switch
  } from "react-router-dom";

//https://cors-anywhere.herokuapp.com/corsdemo
function App() {


  return (
    <div className="body">
    <Router>
    <Sidebar/>
    <Switch>
    <Route exact path="/" component={AlbumSearch}/>
    <Route exact path="/album" component={AlbumSearch}/>
    <Route  exact path="/artist" component={ArtistasSearch}/>
    <Route  exact path="/canciones" component={CancionesSearch}/>
    </Switch>
    </Router>
    <Footer/>
    </div>
  );
}



export default App;
