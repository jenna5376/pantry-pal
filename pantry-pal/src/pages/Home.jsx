import Recipes from "../components/Recipes";
import RecipePreview from "../components/RecipePreview";
import React from 'react'

function Home() {
  return (
    <div>
        <Recipes />
        <RecipePreview />
    </div>
  )
}

export default Home