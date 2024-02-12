export type Recipe = {
  name: string;
  type: string;
  ingredients: string[];
  steps: string[];
};

export type MenuItem = {
  day: string;
  recipe: Recipe;
};
