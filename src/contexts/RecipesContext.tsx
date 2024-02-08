import { createContext } from "react";
import { Recipe } from "../types/Recipe";

export type RecipeTypeContext = {
  recipe: Recipe;
  setRecipe: Function;
  recipes: Recipe[];
  setRecipes: Function;
};

export const RecipeContext = createContext({} as RecipeTypeContext);
