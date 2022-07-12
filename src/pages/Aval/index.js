import { React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { APIKEY } from "../../config/key.js"
import { Container } from "./styles.js"



function Aval() {
  const { id } = useParams()
  const [filmes, setFilmes] = useState({})
  const image_path = "https://image.tmdb.org/t/p/w500"

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
  const [comen, setComen] = useState(data.comen)
  const [avalia, setAvalia] = useState(data.avalia)


  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => {
        const { title, poster_path, vote_average } = data
        const filme = {
          id,
          title,
          avaliacaogeral: vote_average,
          image: `${image_path}${poster_path}`
        }
        setFilmes(filme)
      }
      )

  }, [id])

  const Avaliation = () => {
    const moveObject = { avalia, comen }
    if (localStorage.getItem(`filmes${id}`) === null) {
      localStorage.setItem(`filmes${id}`, JSON.stringify(moveObject))
      alert("Avaliação CRIADA com sucesso");
    } else {
      localStorage.setItem(`filmes${id}`, JSON.stringify(moveObject))
      alert("Avaliação ATUALIZADA com sucesso");
    }
  }

  return (
    <Container>
      <form>
        <div className="filme">
          <img src={filmes.image} alt={filmes.sinopse} />
          <div className="nota">
            <h2>{filmes.title}</h2>
            <span>Avaliação dos Usuários: {filmes.avaliacaogeral}</span>
            <h6>Obs. Esta avaliação é uma adaptação da pesquisa dos internautas</h6>
            <p className="nt"> Nota:
              <input
                autoFocus
                className="avalia"
                type="number"
                value={avalia}
                onChange={(e) => setAvalia(e.target.value)}

              />
            </p>

            <p> Comentários:
              <textarea
                value={comen}
                className="descom"
                typeof="text"
                onChange={(e) => setComen(e.target.value)}

              />
            </p>
            <Link to={`/notas/${id}`}><button className="v">Voltar</button></Link>
            <Link to={`/notas/${id}`}><button className="s" type="submit" onClick={Avaliation} >Salvar</button></Link>
          </div>
        </div>
      </form>

    </Container>
  )
}

export default Aval;

