import styled from "styled-components";

const Card = styled.div`
  min-height: 25rem;
  border-radious: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left:50%;
    bottom: 0%;
    transform: translateY(-50%,0%);
    color: white;
    display:flex;
    width: 100%;
    text-align:center;
    font-weight:600;
    font-size: 1rem;
    height: 40%;
    justify-content: center;
    align-items: center;
  }
`

export default Card;