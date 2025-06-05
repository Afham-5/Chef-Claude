import React from "react";
import RecipeSection from "../components/recipesection"
import IngredientsList from "../components/IngredientsList"
import {getRecipeFromGemini} from "../src/ai"

export default function Main() {
  const [ingredients, setingredients] = React.useState([
    
  ]);
  const [recipeShown,setrecipeShown] = React.useState(false);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addingredients(formData) {
    const newIngredient = formData.get("ingredient");
    if(newIngredient !== ""){
      setingredients((prev) => [...prev, newIngredient]);
    }
  }
  const [result,setresult] = React.useState("");
  async function showrecipe(){
    if(recipeShown === false){
      const recipemarkdown = await getRecipeFromGemini(ingredients);
      setresult(recipemarkdown);
    }
    setrecipeShown(true);
  }
  return (
    <main>
      <form action={addingredients} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <IngredientsList length= {ingredients.length} items = {ingredientsListItems} showrecipefunc = {showrecipe} />
      <RecipeSection boolrecipe = {recipeShown} result = {result} />
    </main>
  );
}
