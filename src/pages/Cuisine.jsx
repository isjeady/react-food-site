import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getRecipesComplexSearchService } from '../service/recipes.service';
import _ from 'lodash';
import styled from "styled-components";
import Title from '../components/ui/Title';
import { motion } from 'framer-motion'

const Cuisine = () => {

  const {type} = useParams();
  const [cuisine,setCuisine] = useState([]);
  
  

  useEffect(() => {
    const getCuisine = async () => {
      const data = await getRecipesComplexSearchService(_.capitalize(type));
      if(data && data.results){
          setCuisine(data.results);
      }
    }
    getCuisine();
  }, [type]);


  return (
    <>
      <Title>{_.capitalize(type)}</Title>
      <motion.div
        animate={{ opacity: 1}}
        initial={{ opacity: 0}}
        exit={{ opacity: 0}}
        transition={{ dutaion : 0.5}}
      >
        <Grid>
            {cuisine.map(item => {
              return(
                <Card key={item.id}>
                  <Link to={`/detail/${item.id}`}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4> 
                  </Link>
                </Card>
              );
            })}
        </Grid>
      </motion.div>
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
