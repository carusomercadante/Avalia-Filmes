import { Container, Movie, Movielist } from "./style";
import { APIKEY } from "../../config/key.js"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';


function Home() {

  const [filmes, setFilmes] = useState([])
  const image_path = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    //consumir a API

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setFilmes(data.results))

  }, [])

  return (
    <Container>
      <h1>OS 20 FILMES MAIS POPULARES</h1>
      <Movielist>
        {
          filmes.map(caruso => {
            return (
              <Movie key={caruso.id}>
                <Link to={`/notas/${caruso.id}`}><img src={`${image_path}${caruso.poster_path}`} alt={caruso.title}></img>
                </Link>
                <span>
                  {caruso.title}
                </span>
              </Movie>

            )
          })}
      </Movielist>
    </Container>

  )
}

export default Home;


