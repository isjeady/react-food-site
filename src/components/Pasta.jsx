import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getPopularService, getRecipesComplexSearchService } from '../service/recipes.service';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import Gradient from './ui/Gradient';
import Card from './ui/Card';

const Pasta = () => {
  const localStorageKey = "pasta"
  const [pasta,setPasta] = useState([]);
  
  useEffect(() => {
      getPopular();
  }, []);


  const getPopular = async () => {
      const localStore = localStorage.getItem(localStorageKey);

      if(localStore){
          setPasta(JSON.parse(localStore));
      }else{
          const data = await getPopularService(10,'pasta');
          console.log(data);
          if(data && data.recipes){
              localStorage.setItem(localStorageKey, JSON.stringify(data.recipes))
              setPasta(data.recipes);
          }
      }
  }

  return <Wrapper>
      <h3>Pasta</h3>
      <Splide aria-label="Popular" options={{
          perPage : 3,
          arrows : false,
          pagination : false,
          drag : 'free',
          gap : "5rem"
      }}>
          {pasta.map((item,idx) => {
              return <SplideSlide key={idx}>
                  <Card>
                      <p>{item.title}</p>
                      <img src={item.image} alt={item.tile} />
                      <Gradient />
                  </Card>
              </SplideSlide>
          })}
      </Splide>
  </Wrapper>
}

const Wrapper = styled.div`
  margin : 4rem 0rem;
`;

export default Pasta;