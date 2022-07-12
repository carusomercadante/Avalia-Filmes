import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { APIKEY } from "../../config/key.js"
import { Container } from "./styles.js";


function Notas() {
  const { id } = useParams()
  const [filmes, setFilmes] = useState({})
  const image_path = "https://image.tmdb.org/t/p/w500"
  const [comen, setComen] = useState({})
  const [avalia, setAvalia] = useState({})

  const isLocalStorage = () => {
    let data = ""
    if (localStorage.getItem(`filmes${id}`) === null) {
      data = ""
    } else {
      data = JSON.parse(localStorage.getItem(`filmes${id}`))
    }

    return data;
  }

  const [data, setData] = useState(isLocalStorage)



  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, overview } = data
        const filme = {
          id,
          title,
          sinopse: overview,
          image: `${image_path}${poster_path}`
        }
        setFilmes(filme)
      }
      )

  }, [id])

  const Exclusao = () => {
    if (window.confirm(`Deseja excluir a avaliaçao do filme "${filmes.title}" ?`) === true) {
      localStorage.removeItem(`filmes${id}`)
    }
  }


  return (
    <Container>
      <form>
        <div className="filme">
          <img src={filmes.image} alt={filmes.sinopse} />
          <div className="nota">
            <h2>{filmes.title}</h2>
            <span>Sinopse: {filmes.sinopse}</span>
            <p className="nt"> Nota:
              <input
                value={data.avalia ? data.avalia : ""}
                disabled
                className="avalia"
                type="number"
                onChange={(e) => setAvalia(e.target.value)}
                placeholder="Nota"
              />
            </p>

            <p> Comentários:
              <textarea
                value={data.comen ? data.comen : ""}
                disabled
                className="descom"
                type="text"
                onChange={(e) => setComen(e.target.value)}
                placeholder="Comentários"
              />
            </p>
            <Link to="/"><button className="v">Voltar</button></Link>
            <Link to={`/aval/${id}`}><button className="s">Avaliar</button></Link>
            <button className="a" type="submit" onClick={Exclusao}>Excluir</button>
          </div>
        </div>
      </form>

    </Container>
  )
}



export default Notas;


