// Write your Character component here
import React from 'react';
import styled from 'styled-components'

const StarStyled = styled.div`
.data {
    display:inline-block;
    justify-content: space-around;
    color: white;
    text-shadow: 2px 2px 5px rgb(230, 20, 20);
    
}
`

const data = (props) => { 
const {data} = props 


return  (
    <StarStyled>
    <div class="H1">
        <h1>{data.name}</h1>
     </div>
    <div class="data"> 
        <p>Birth year: {data.birth_year}</p>
        <p>Eyes color: {data.eye_color}</p>
        <p>Gender: {data.gender}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Mass: {data.mass}</p>
        <p>Skin Color: {data.skin_color}</p>
    </div>
    </StarStyled>
  );
}

export default data;


