import React from "react";
import { RecipeContext, RecipeTypeContext } from "../contexts/RecipesContext";
import { MenuItem, Recipe } from "../types/RecipeType";

type RecipeProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function RecipeProvider(props: RecipeProviderProps) {
  const { children } = props;

  let recipeDefault: Recipe = {
    name: "AAA",
    keyIngredient: "KKK",
    ingredients: [],
    description: "BBB",
  };

  const [recipe, setRecipe] = React.useState(recipeDefault);
  const [todaysRecipe, setTodaysRecipe] = React.useState(recipeDefault);
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
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
