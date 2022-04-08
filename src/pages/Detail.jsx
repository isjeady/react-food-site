import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesInformationService } from '../service/recipes.service';

const Detail = () => {
  const {id} = useParams();
  const [detail,setDetail] = useState([]);

  useEffect(() => {
    getInfo();
  }, [id]);

  const getInfo = async () => {
      const data = await getRecipesInformationService(id);
      if(data){
        setDetail(data);
      }
  }

  return (
    <div>
      Detail : {id } 
      <hr></hr>
      {JSON.stringify(detail)}
    </div>
  )
}

export default Detail