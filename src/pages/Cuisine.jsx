import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getRecipesComplexSearchService } from '../service/recipes.service';
import _ from 'lodash';


const Cuisine = () => {

  const {type} = useParams();
  const [cuisine,setCuisine] = useState([]);
  
  /* useEffect(() => {
    getCuisine();
  }, [type]); */

  const getCuisine = async () => {
      const data = await getRecipesComplexSearchService(_.capitalize(type));
      if(data && data.results){
          setCuisine(data.results);
      }
  }

  return (
    <div>
        <hr></hr>
        {_.capitalize(type)}
        <hr></hr>
        {JSON.stringify(cuisine)}
    </div>
  )
}

export default Cuisine;
