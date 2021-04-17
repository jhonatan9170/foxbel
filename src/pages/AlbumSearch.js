import React, { useState, useEffect } from 'react';
import userlogo from '../img/user.png'
function AlbumSearch(){

function onsubmit(event){
    setValues();
    event.preventDefault();
}
function handleChange(event) {
    setAlbumSearch(event.target.value)
}

function PlayMusic(){

    fetch('https://cors-anywhere.herokuapp.com/'+album.tracklist)
    .then((response) => response.json())
    .then((data)=>{
       var a = new Audio (data.data[0].preview)
       a.play()
    })
}
    const [albumSearch,setAlbumSearch]=useState("21");
    const [results ,setResult]=useState([])
    const [album, setAlbum] = useState({
        title:"",
        cover: "",
        artist: "",
        followers: "",
        tracklist:""
      });
      function setValues(search){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+albumSearch)
        .then((response) => response.json())
          .then((data) =>{ 

              setResult(data.data);
              fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+data.data[0].artist.id)
              .then((response) => response.json())
              .then((artist)=>{
                  console.log(artist)
                  setAlbum({
                      title:data.data[0].title,
                      cover:data.data[0].cover_xl,
                      artist:artist.name,
                      followers:artist.nb_fan,
                      tracklist:data.data[0].tracklist
                  })
              })
            }
            )
    
          .catch(function(error) { console.log(error); });

      }
      
     useEffect(() => {
       
         setValues()}, []);


    return(
    <section id="section">
    <div className="top">
            <form onSubmit={onsubmit} className="formulario">
                <input type="text" id="albumArtista" name="artista" placeholder="Buscar" onChange={handleChange}/>
                <input type="submit" name="submit" className="btn btn-primary" value="Buscar" />
            </form>
            <div className="data-user">
                <img src={userlogo} alt="Imagen no encontrada"></img>
                <p>Francisco M.</p>
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
                    <h1 id="albumName">{album.artist} {album.title}</h1>
                    <h4>Lo mejor de  {album.artist}</h4>
                  
                    <p id="followers">{album.followers} seguidores</p>
                    <p>Lorem m ea naudantium ea nelaudantium ea nelaudantium ea 
                    nelaudantium ea nemo asperiores.</p>
                    

                        <input type="submit" name="reproducir" value="Reproducir" className="reproducir" onClick={PlayMusic}/>
                        <input type="submit" name="seguir" value="Seguir" className="seguir"/>
            </div>    
     </div>
     <div className="result">
            <h1>Resultados</h1>
            {results.map(
                result=>
                <div className="artistas"  >
                <img src={result.cover_medium} id="4" value="hoña" alt="Img not found" onClick={()=>{
                   fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+result.artist.id)
                   .then((response) => response.json())
                   .then((artist)=>{
                       console.log(artist)
                       console.log(artist)
                       setAlbum({

                           title:result.title,
                           cover:result.cover_xl,
                           artist:artist.name,
                           followers:artist.nb_fa,
                           tracklist:result.tracklist
                           })
                           })
                }               
                }/>
                <h4>{result.title}</h4>
                <p>{result.artist.name}</p>
            </div>
            )}
    </div>  
    </section>
    )
}
export default AlbumSearch