import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'

function Recipe() {

  
  const params = useParams();
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        console.log(detailData)
        setDetails(detailData);
  }

  useEffect(() => {
      fetchDetails();
  }, [params.name]);

  return (
    <div>
        <h1>RECIPE</h1>
        <img src={details.image}/>
        <h1>{details.title}</h1>
        <div>
            <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
        </div>
        <ul>
            {details.extendedIngredients.map((ingredient) => 
                <li key={ingredient.id}>{ingredient.original}</li>
            )}
        </ul>
    </div>
  )
}

export default Recipe