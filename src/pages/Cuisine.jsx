import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesComplexSearchService } from '../service/recipes.service';
import _ from 'lodash';
import styled from "styled-components";
import Title from '../components/ui/Title';

const Cuisine = () => {

  const {type} = useParams();
  const [cuisine,setCuisine] = useState([]);
  
  useEffect(() => {
    getCuisine();
  }, [type]);

  const getCuisine = async () => {
      const data = await getRecipesComplexSearchService(_.capitalize(type));
      if(data && data.results){
          setCuisine(data.results);
      }
  }

  return (
    <>
      <Title>{_.capitalize(type)}</Title>
      <Grid>
          {cuisine.map(item => {
            return(
              <Card key={item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4> 
              </Card>
            );
          })}
      </Grid>
    </>
  )
}

const Grid = styled.div`
  display : grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
      border-radius: 2rem;
      width : 100%,
  }
  a {
      text-decoration: none;
      width : 100%,
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
