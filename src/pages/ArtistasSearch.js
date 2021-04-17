import React, { useState, useEffect } from 'react';
import userlogo from '../img/user.png'
function ArtistasSearch(){

function onsubmit(event){
    setValues();
    event.preventDefault();
}
function handleChange(event) {
    setArtistSearch(event.target.value)
}

function PlayMusic(){
    fetch('https://cors-anywhere.herokuapp.com/'+artist.tracklist)
    .then((response) => response.json())
    .then((data)=>{
       var a = new Audio (data.data[0].preview)
       a.play()
    })
}



    const [artistSearch,setArtistSearch]=useState("blink");
    const [results ,setResult]=useState([])
    const [artist, setArtist] = useState({
        name:"",
        image:"",
        followers: "",
        tracklist:""
      });
      function setValues(search){
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+artistSearch)
        .then((response) => response.json())
          .then((data) =>{ 
              setResult(data.data);
              setArtist({
                name:data.data[0].name,
                image:data.data[0].picture_xl,
                followers:data.data[0].nb_fan,
                tracklist:data.data[0].tracklist
            })

            
            }).catch(function(error) { console.log(error); });

      }
      
     useEffect(() => {setValues()}, []);
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
            <img src={artist.image}></img>
            </div>
             <div className="info-principal">
                    <h1 id="albumName"> </h1>
                    <h4>Lo mejor de  {artist.name}</h4>
                  
                    <p id="followers">{artist.followers} seguidores</p>
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
                <img src={result.picture_xl}  alt="Img not found" onClick={()=>{

                       setArtist({
                           name:result.name,
                           image:result.picture_xl,
                           followers:result.nb_fan,
                           tracklist:result.tracklist
                           }
                           )

                }               
                }/>
                <h4>{result.name}</h4>
                <p>{}</p>
            </div>
            )}
    </div>  
    </section>
    )
}
export default ArtistasSearch