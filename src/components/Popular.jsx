import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getPopularService } from '../service/recipes.service';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/splide.min.css';
import Gradient from './ui/Gradient';
import Card from './ui/Card';
import { Link } from 'react-router-dom';

const Popular = () => {

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
            const data = await getPopularService();
            console.log(data);
            if(data && data.recipes){
                localStorage.setItem(localStorageKey, JSON.stringify(data.recipes))
                setPopular(data.recipes);
            }
        }
    }

    return <Wrapper>
        <h3>Popular</h3>
        <Splide aria-label="Popular" options={{
            perPage : 4,
            arrows : false,
            pagination : false,
            drag : 'free',
            gap : "5rem"
        }}>
            {popular.map((item,idx) => {
                return <SplideSlide key={idx}>
                    <Card>
                        <Link to={`/detail/${item.id}`}>
                            <p>{item.title}</p>
                            <img src={item.image} alt={item.tile} />
                            <Gradient />
                        </Link>
                    </Card>
                </SplideSlide>
            })}
        </Splide>
    </Wrapper>
}

const Wrapper = styled.div`
    margin : 4rem 0rem;
`;

export default Popular;