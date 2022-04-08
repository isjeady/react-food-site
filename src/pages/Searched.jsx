import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesComplexSearchService } from '../service/recipes.service';
import _ from 'lodash';
import styled from "styled-components";
import Title from '../components/ui/Title';

const Searched = () => {

  const {searchValue} = useParams();
  const [results,setResults] = useState([]);
  
  useEffect(() => {
    getSearched();
  }, [searchValue]);

  const getSearched = async () => {
      const data = await getRecipesComplexSearchService(null,10,searchValue);
      if(data && data.results){
        setResults(data.results);
      }
  }

  return (
    <>
      <Title>{_.capitalize(searchValue)}</Title>
      <Grid>
          {results.map(item => {
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

export default Searched;
