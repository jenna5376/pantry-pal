import { useEffect, useState } from "react";

function Recipes() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        const data = await api.json();
        setRecipes(data.recipes);
        console.log(recipes)
    }  

    return (
        <div>
            {recipes.map((recipe) => {
                return(
                    <div key={recipe.id}>
                        {recipe.title} 
                    </div>
                );
            })}
        </div>
    )
}

export default Recipes