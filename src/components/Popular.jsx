import React, { useEffect, useState } from 'react'

const Popular = () => {

    const [popular,setPopular] = useState([]);
    
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=${process.env.REACT_APP_API_KEY}`);

        const data = await api.json();

        setPopular(data.recipes);

        console.log(data);
    }

    return <div>
        {popular.map((item,idx) => {
            return <div>
                N:{idx+1}
                <pre>
                    <code>
                        {JSON.stringify(item,undefined,2)}
                    </code>
                </pre>
                <hr></hr>
            </div>
        })}
    </div>
}

export default Popular;