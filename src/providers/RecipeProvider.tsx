import React from "react";
import { RecipeContext, RecipeTypeContext } from "../contexts/RecipesContext";
import { MenuItem, Recipe } from "../types/RecipeType";
import recipesData from "../testing/items/recipeDataBase.json";

type RecipeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function RecipeProvider(props: RecipeProviderProps) {
  const { children } = props;

  let recipeDefault: Recipe = {
    name: "AAA",
    type: "KKK",
    ingredients: [],
    steps: [],
  };

  const [recipe, setRecipe] = React.useState(recipeDefault);
  const [todaysRecipe, setTodaysRecipe] = React.useState(recipeDefault);
  const [recipes, setRecipes] = React.useState<Recipe[]>(recipesData);
  const [currentMenu, setCurrentMenu] = React.useState<MenuItem[]>([]);

  const defaultValue: RecipeTypeContext = {
    recipe,
    setRecipe,
    todaysRecipe,
    setTodaysRecipe,
    recipes,
    setRecipes,
    currentMenu,
    setCurrentMenu,
  };

  return (
    <RecipeContext.Provider value={defaultValue}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
