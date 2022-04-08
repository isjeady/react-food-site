import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'; 
import {FiHome} from 'react-icons/fi'; 
import {GiNoodles, GiChopsticks} from 'react-icons/gi'; 
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Category = () => {
  return (
    <List>
        <NavLink to={"/"} >
            <FiHome />
            <h4>Home</h4>
        </NavLink>
        <NavLink to={"/cuisine/italian"} >
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink to={"/cuisine/american"} >
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink to={"/cuisine/thai"} >
            <GiNoodles />
            <h4>Thai</h4>
        </NavLink>
        <NavLink to={"/cuisine/japanese"} >
            <GiChopsticks />
            <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    maragin: 2rem 0rem;
`;

export default Category