import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipesContext";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Recipe } from "../types/RecipeType";
import AddRecipe from "../components/cards/AddRecipe";

const Recipes = () => {
  const { recipes } = useContext(RecipeContext);

  const [showAddRecipe, setShowAddRecipe] = React.useState(false);

  return (
    <View>
      <Pressable style={styles.button} onPress={() => setShowAddRecipe(true)}>
        <Text>Añadir receta</Text>
      </Pressable>

      {showAddRecipe && (
        <View style={styles.floatingCard}>
          <AddRecipe setShowAddRecipe={setShowAddRecipe} />
        </View>
      )}

      <ScrollView>
        {recipes.map((recipe, index) => (
          <View key={index} style={styles.card}>
            <Text>{recipe.name}</Text>
            <Text>{recipe.keyIngredient}</Text>
            <Text>{recipe.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Recipes;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    backgroundColor: "#f8d7d2",
    borderColor: "gray",
    borderWidth: 1,
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
  floatingCard: {
    position: "absolute",
    marginTop: 75,

    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    alignContent: "center",
    padding: 50,

    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "gray",
  },
});
