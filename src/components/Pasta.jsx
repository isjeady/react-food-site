import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getRecipesComplexSearchService } from '../service/recipes.service';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';

const Pasta = () => {
  const localStorageKey = "popular"
  const [popular,setPopular] = useState([]);
  
  useEffect(() => {
      getPopular();
  }, []);

  const getPopular = async () => {
      const localStore = localStorage.getItem(localStorageKey);

      if(localStore){
          setPopular(JSON.parse(localStore));
      }else{
          const data = await getRecipesComplexSearchService('pasta');
          console.log(data);
          if(data && data.recipes){
              localStorage.setItem(localStorageKey, JSON.stringify(data.recipes))
              setPopular(data.recipes);
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
          {popular.map((item,idx) => {
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

const Card = styled.div`
  min-height : 23rem;
  border-radius: 2rem;
  overflow : hidden;
  position : relative;

  img {
      border-radius: 2rem;
      position: absolute;
      left: 0;
      width : 100%,
      height : 100%;
      object-fit: cover;
  }

  p {
      position: absolute;
      z-index: 10;
      left: 50%;
      bottom: 0%;
      transform: translate(-50%,0%);
      color: white;
      display: flex; 
      width: 100%;
      text-align: center;
      font-weight: 600;
      font-size: 1rem;
      height: 40%;
      justify-content: center;
      align-items: center;    
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;


export default Pasta;