import styled from "styled-components"

export const Container = styled.div`

h2{
  margin-top: 0;
}

h6{
 color: lemonchiffon;
}

.filme{
display: flex;
}

img{
  width:300px;
  border-radius:1rem;
}

.nota{
margin-top:16px ;
display:flex;
flex-direction: column;
align-items: flex-start;
margin-left: 1rem;
max-width: 60%;
}

.nt{
  margin-left: 72px;
}

button{
  margin-top: 24px;
  cursor: pointer;
  width: 100px;
  border: none;
  padding: 0.5rem 1.7rem;
  border-radius: 0.6rem;
  font-weight: bold;
  transition: all 0.3s;
    
}

button:hover{
 opacity:0.5;
}

.a{
  background: red;
  color:white;
}
.s{
  background: MediumSpringGreen;
  color:black;
}

p{
  display: flex;
  margin-top: 32px;
  margin-left: 16px;
  font-weight: bold;
  color: tomato;

}

.com{
  margin-top: 16px;
  margin-left: 16px;
  font-weight: bold;
  color: tomato;
  opacity:0.8;

}


.avalia{
  background: white;
  width: 70px;
  height: 26px;
  text-align: center;
  margin-left: 22px;
  font-weight: bold;
  color:black;
  border-radius: 8px;
 
}

.descom{
  background: white;
  width: 500px;
  height: 150px;
  margin-left: 16px;
  font-weight: bold;
  color: black;
  border-radius: 8px;
  padding-top:12px;
  padding-left: 8px;
   }




`

