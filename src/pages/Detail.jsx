import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getRecipesInformationService } from '../service/recipes.service';

const Detail = () => {
  const {id} = useParams();
  const [detail,setDetail] = useState({
    title : "Titolo",
    image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    summary : "lorem Ipsum",
    instructions : "lorem Ipsum",
    extendedIngredients: [
      { id : 1, original : "lorem Ipsum"},
      { id : 1, original : "lorem Ipsum"},
      { id : 1, original : "lorem Ipsum"},
      { id : 1, original : "lorem Ipsum"},
      { id : 1, original : "lorem Ipsum"},
    ]
  });
  const [tab,setTab] = useState(1);

  useEffect(() => {
    getInfo();
  }, [id]);

  const getInfo = async () => {
      const data = await getRecipesInformationService(id);
      if(data && data.title){
        setDetail(data);
      }
  }

  return <>
    {detail && <DetailWrapper>
      <div>
        <h2>{detail.title}</h2>
        <img src={detail.image} alt="" />
      </div>
      <Info>
        <Button className={tab == 1 ? "active"  :""} onClick={() => setTab(1)}>Instructions</Button>
        <Button className={tab == 2 ? "active"  :""} onClick={() => setTab(2)}>Ingedients</Button>
        
        {tab == 1 && <div>
          <h3 dangerouslySetInnerHTML={{__html : detail.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html : detail.instructions}}></h3>
        </div>}
        {tab == 2 && <ul>
          {detail.extendedIngredients.map((ing) => {
            return <li key={ing.id}>{ing.original}</li>
          })}
        </ul>}
      </Info>
    </DetailWrapper>}
  </>
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
      background: linear-gradient(35deg, #66ffcc, #313131);
      color:white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`

export default Detail