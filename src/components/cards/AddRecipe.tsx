import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { RecipeContext } from "../../contexts/RecipesContext";
import { Recipe } from "../../types/RecipeType";

interface AddRecipeProps {
  setShowAddRecipe: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRecipe: React.FC<AddRecipeProps> = ({ setShowAddRecipe }) => {
  const { recipe, setRecipe, recipes, setRecipes } =
    React.useContext(RecipeContext);

  const handleInputChange = async (field: string, value: string) => {
    console.log(recipe);

    setRecipe({
      ...recipe,
      [field]: value,
    });
  };

  const addRecipe = () => {
    setRecipes((prevState: Recipe[]) => [...prevState, recipe]);
    console.log(recipes);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text>Nombre</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Inserte nombre..."
          onChangeText={(value) => handleInputChange("name", value)}
          value={recipe.name}
        />
        <Text>Ingrediente</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Inserte ingrediente..."
          onChangeText={(value) => handleInputChange("keyIngredient", value)}
          value={recipe.keyIngredient}
        />
        <Text>Descripción</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Inserte descripción..."
          onChangeText={(value) => handleInputChange("description", value)}
          value={recipe.description}
        />
      </View>

      <Pressable style={styles.button} onPress={() => addRecipe()}>
        <Text>Añadir receta</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => setShowAddRecipe(false)}>
        <Text>Cerrar</Text>
      </Pressable>
    </View>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    backgroundColor: "#f8d7d2",
  },

  inputs: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
});
