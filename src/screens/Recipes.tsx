import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { RecipeContext } from "../contexts/RecipesContext";
import { ScrollView } from "react-native-gesture-handler";
import AddRecipe from "../components/cards/AddRecipe";
import { Modal, PaperProvider, Portal } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../components/AppStack";

type Props = NativeStackScreenProps<RootStackParamList, "Recetas">;

const Recipes: React.FC<Props> = ({ navigation }: Props) => {
  const { recipes } = useContext(RecipeContext);

  const [showAddRecipe, setShowAddRecipe] = React.useState(false);

  return (
    <PaperProvider>
      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("NewRecipe")}
        >
          <Text>Añadir receta</Text>
        </Pressable>

        <ScrollView>
          {recipes.map((recipe, index) => (
            <View key={index} style={styles.card}>
              <Text>{recipe.name}</Text>
              <Text>{recipe.type}</Text>
              <Text>{recipe.steps}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </PaperProvider>
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
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "#f8d7d2",
  },
});
