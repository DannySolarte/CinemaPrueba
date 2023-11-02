import Image from "next/image"
const Movies = () => {
    return (
      <div>
        <div className="titulo-cartelera"><h1>En Cartelera</h1></div>
        <div className="peliculas-cartelera">
            <div className="container-pelicula">
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/saw-x" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2Fsawx.png?alt=media&token=2ef5371f-d693-4f51-a37a-573306b06cfd&_gl=1*1uodlfx*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5MzUwNS41MC4wLjA." width={250} height={380}/></a>
                <span><h4>Saw X: El Juego del Miedo</h4></span>
                <span><h7>Género: Terror</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/medellin/peliculas/moana" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2Fmoana.png?alt=media&token=93853c29-5a56-48d6-967f-52bf3aeb5614&_gl=1*1crb79t*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5MzI2Mi4yNC4wLjA." width={250} height={380}/></a>
                <span><h4>Moana: Un mar de aventuras</h4></span>
                <span><h7>Género: Familiar, Animada, Aventura</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/five-nights-at-freddy-s" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2Ffnaf.jpg?alt=media&token=12850e9c-1d84-4e3b-9aad-cbd01cc2be8e&_gl=1*lj50sl*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5Mzk5NC42MC4wLjA." width={250} height={380}/></a>
                <span><h4>Five Nights at Freddy's</h4></span>
                <span><h7>Género: Terror</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/the-equalizer-3" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2F1.jpg?alt=media&token=41f45a4c-ff1a-4d0e-885c-141122d6a78a&_gl=1*cpj1ld*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5NDUyMC42MC4wLjA." width={250} height={380}/></a>
                <span><h4>The Equalizer 3</h4></span>
                <span><h7>Género: Aciion, Triller</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/killers-of-the-flower-moon" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2Fkfm.jpg?alt=media&token=eba05753-ff98-4d56-8933-d7e2e66b9fcb&_gl=1*1smlohb*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5NDg3MS41OS4wLjA." width={250} height={380}/></a>
                <span><h4>Los Asesinos De La Luna</h4></span>
                <span><h7>Género: Crimen, Drama, Historia</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/trolls-band-together" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2Ftrolls.jpg?alt=media&token=e010fbdc-754e-4296-b40c-a785f2058ed6&_gl=1*12aoz3j*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5NTE0Ny42MC4wLjA." width={250} height={380}/></a>
                <span><h4>Trolls 3</h4></span>
                <span><h7>Género: Animacion, Aciion, Comedia</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/the-exorcist-believer" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2Fexorcista.jpg?alt=media&token=9d81a3be-a9c9-4a9f-a6e0-9ceaea052aaf&_gl=1*1q22fog*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5NTM2My41LjAuMA.." width={250} height={380}/></a>
                <span><h4>El Exorcista</h4></span>
                <span><h7>Género: Terror</h7></span>
            </div>
            <div className="container-pelicula" >
                <a className="btn-link" href="https://www.cinecolombia.com/bogota/peliculas/the-dive" target="_blank"><Image href="#" className="img-pelicula" src="https://firebasestorage.googleapis.com/v0/b/cinea-ninjasdev.appspot.com/o/Cartelera%2F86ac3319962c-2_poster_480x670.png?alt=media&token=7267e30c-ed2d-48b3-ae3c-8eee28db7af5&_gl=1*1yv3oer*_ga*MTQ1MDA0MTE5OC4xNjk3NzU4OTU2*_ga_CW55HF8NVT*MTY5ODg5MTg5My42LjEuMTY5ODg5NTM5Ni42MC4wLjA." width={250} height={380}/></a>
                <span><h4>Sin Aire</h4></span>
                <span><h7>Género: Suspenso</h7></span>
            </div>
        </div>
      </div>
    )
  }
  
  export default Movies
