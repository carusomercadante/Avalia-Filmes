import styled from "styled-components"

export const Container = styled.div`
h1 {
  text-align: center;
  margin: 4rem 0;
}

`

export const Movielist = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
    
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

img{
  width: 200px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
}

span {
  font-weight: bold;
  font-size: 120%;
  text-align: center;
}

a {
  transition: all 0.3s;
}

a: hover{
  transform: scale(1.2);
}

p{
  margin-top: 8px;
  font-weight: bold;
  color: yellow;   
}

`
