import React, { useState, useEffect } from 'react';
import userlogo from '../img/user.png'
function CancionesSearch(){

function onsubmit(event){
    setValues();
    event.preventDefault();
}
function PlayMusic(){
    var a = new Audio(album.cancion);
    a.play()
}



function handleChange(event) {
    setCancion(event.target.value)
}
    const [cancion,setCancion]=useState("Girl");
    const [results ,setResult]=useState([])
    const [album, setAlbum] = useState({
        title:"",
        cover: "",
        artist: "",
        followers: "",
        nombre:"",
        cancion:""
      });
      function setValues(search){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q='+cancion)
        .then((response) => response.json())
          .then((data) =>{ 
              setResult(data.data);
              fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+data.data[0].artist.id)
              .then((response) => response.json())
              .then((artist)=>{
                  console.log(artist)
                  setAlbum({
                      title:data.data[0].album.title,
                      cover:data.data[0].album.cover_xl,
                      artist:artist.name,
                      followers:artist.nb_fan,
                      nombre:data.data[0].title,
                      cancion:data.data[0].preview
                  })
              })
            }
            )
    
          .catch(function(error) { console.log(error); });

      }
      
     //useEffect(() => {setValues()}, []);


    return(
    <section id="section">
    <div className="top">
            <form onSubmit={onsubmit} className="formulario">
                <input type="text" id="albumArtista" name="artista" placeholder="Buscar" onChange={handleChange}/>
                <input type="submit" name="submit" className="btn btn-primary" value="Buscar" />
            </form>
            <div className="data-user">
                <img src={userlogo} alt="Imagen no encontrada"></img>
                <p>Francisco M.m</p>
            </div>
            <div className="burger" id="burger" >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
    </div>
    <div className="card-container" id="cardContainer">
            <div id="Imagen">
            <img src={album.cover}></img>
            </div>
             <div className="info-principal">

                    <h1 id="albumName"> {album.nombre}</h1>
                    <h4> {album.title}</h4>
                    <h4>Lo mejor de  {album.artist}</h4>
                  
                    <p id="followers">{album.followers} seguidores</p>
                    <p>Lorem m ea naudantium ea nelaudantium ea nelaudantium ea 
                    nelaudantium ea nemo asperiores.</p>
                        <input type="submit" name="reproducir" value="Reproducir" className="reproducir"  onClick={PlayMusic}  />
                        <input type="submit" name="seguir" value="Seguir" className="seguir"/>
            </div>    
     </div>
     <div className="result">
            <h1>Resultados</h1>
            {results.map(
                result=>
                <div className="artistas"  >
                <img src={result.album.cover_medium} id="4" value="hoña" alt="Img not found" onClick={()=>{
                   fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+result.artist.id)
                   .then((response) => response.json())
                   .then((artist)=>{
                       console.log(artist)
                       console.log(artist)
                       setAlbum({
                           title:result.album.title,
                           cover:result.album.cover_xl,
                           artist:artist.name,
                           followers:artist.nb_fan,
                           nombre:result.title,
                           cancion:result.preview
              })
          })
                }               
                }/>
                <h4>{result.title}</h4>
                <p>{result.album.title}</p>
                <p>{result.artist.name}</p>
            </div>
            )}
    </div>  
    </section>
    )
}
export default CancionesSearch