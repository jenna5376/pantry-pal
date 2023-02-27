import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';

function Recipes() {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {

        const check = localStorage.getItem('popular');
        if (check){
            setRecipes(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
            const api2 = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)

            const data = await api.json();
            setRecipes(data.recipes);
            console.log(recipes)
            //key={recipe.id}

            //u can only store strings in local storage
            localStorage.setItem("popular", JSON.stringify(data.recipes));
            setRecipes(data.recipes);
            console.log(data.recipes)
        }
    }  

    //add link to every single card

    return (
        <div>
            <Wrapper>
                <h3>Popular Picks</h3>
                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem"
                }}>
                {recipes.map((recipe)=>{
                    return(
                        <SplideSlide key={recipe.id}>
                        <Card>
                            <Link to={"/recipe/" + recipe.id}>
                                <p>{recipe.title}</p>
                                <img src = {recipe.image} alt = {recipe.title} />
                            </Link>
                        </Card>
                        </SplideSlide>
                    )
                })}
                </Splide>
            </Wrapper>
        </div>
    )
}

//u can add thrse to file + import
const Wrapper = styled.div`
margin: 4rem 0rem;
`

const Card = styled.div`
    min-height: 25-rem;
    border-radius: 2rem;

    img{
        border-radius: 2rem;
    }
`

export default Recipes
