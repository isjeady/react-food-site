import React, { useEffect, useState } from 'react'
import { getPopularService } from '../service/recipes.service';

const Popular = () => {

    const [popular,setPopular] = useState([]);
    
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const data = await getPopularService();
        if(data && data.recipes){
            setPopular(data.recipes);

        }
        console.log(data);
    }

    return <div>
        {popular.map((item,idx) => {
            return <div key={idx}>
                N:{idx+1}
                <pre>
                    <code>
                        {JSON.stringify(item.title,undefined,2)}
                    </code>
                </pre>
                <hr></hr>
            </div>
        })}
    </div>
}

export default Popular;