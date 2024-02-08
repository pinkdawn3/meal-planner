import React from "react";
import { RecipeContext, RecipeTypeContext } from "../contexts/RecipesContext";
import { Recipe } from "../types/Recipe";

type RecipeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function RecipeProvider(props: RecipeProviderProps) {
  const { children } = props;

  let recipeDefault: Recipe = {
    name: "",
    keyIngredient: "",
    ingredients: [],
    description: "",
  };

  const [recipe, setRecipe] = React.useState(recipeDefault);
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  const defaultValue: RecipeTypeContext = {
    recipe,
    setRecipe,
    recipes,
    setRecipes,
  };

  return (
    <RecipeContext.Provider value={defaultValue}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
