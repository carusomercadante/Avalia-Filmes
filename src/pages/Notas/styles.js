import styled from "styled-components"

export const Container = styled.div`
h2{
  margin-top: 0;
}

span{
  margin-top: 0;
  opacity:0.8;
  width: 700px;
}

.filme{
display: flex;
}

img{
  width:300px;
  border-radius:1rem;
}

.nota{
margin-top:0.8rem ;
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
  margin-top: 12px;
  cursor: pointer;
  border: none;
  width: 100px;
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
  color:black;
}

.s{
  background: lightblue;
  color:black;
}

p{
  display: flex;
  margin 12px;
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
  opacity:0.8;
  color:tomato;
  border-radius: 8px;
  
}

.descom{
  background: white;
  width: 500px;
  height: 150px;
  margin-left: 16px;
  font-weight: bold;
  color: tomato;
  opacity:0.8;
  border-radius: 8px;
  padding-top:12px;
  padding-left: 8px;
  
}



`

