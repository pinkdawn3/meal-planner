export type Recipe = {
  name: string;
  keyIngredient: string;
  ingredients: string[];
  description: string;
};

export type MenuItem = {
  day: string;
  recipe: Recipe;
};
