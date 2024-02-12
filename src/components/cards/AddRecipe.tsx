import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import React from "react";
import { RecipeContext } from "../../contexts/RecipesContext";
import { Recipe } from "../../types/RecipeType";
import { Button, Menu, PaperProvider } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../AppStack";

type Props = NativeStackScreenProps<RootStackParamList, "NewRecipe">;

const AddRecipe = ({ navigation }: Props) => {
  const { setRecipes } = React.useContext(RecipeContext);

  const addRecipe = () => {
    setRecipes((prevState: Recipe[]) => [...prevState, recipe]);

    navigation.goBack();
  };

  const [recipe, setRecipe] = React.useState<Recipe>({
    name: "",
    type: "",
    ingredients: [""],
    steps: [""],
  });

  const [typeMenuVisible, setTypeMenuVisible] = React.useState(false);

  const addIngredient = () => {
    setRecipe((prevState) => ({
      ...prevState,
      ingredients: [...prevState.ingredients, ""],
    }));
  };

  const addStep = () => {
    setRecipe((prevState) => ({
      ...prevState,
      steps: [...prevState.steps, ""],
    }));
  };

  const handleChangeIngredient = (text: string, index: number) => {
    setRecipe((prevState) => {
      const newIngredients = [...prevState.ingredients];
      newIngredients[index] = text;
      return { ...prevState, ingredients: newIngredients };
    });
  };

  const handleChangeStep = (text: string, index: number) => {
    setRecipe((prevState) => {
      const newSteps = [...prevState.steps];
      newSteps[index] = text;
      return { ...prevState, steps: newSteps };
    });
  };

  const handleTypeSelect = (type: string) => {
    setRecipe((prevState) => ({
      ...prevState,
      type,
    }));
    setTypeMenuVisible(false);
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text>Nombre</Text>
        <TextInput
          style={styles.inputs}
          placeholder="Inserte nombre..."
          value={recipe.name}
          onChangeText={(text) =>
            setRecipe((prevState) => ({ ...prevState, name: text }))
          }
        />
        <Text>Tipo</Text>
        <Menu
          visible={typeMenuVisible}
          onDismiss={() => setTypeMenuVisible(false)}
          anchor={
            <Pressable
              style={styles.inputs}
              onPress={() => setTypeMenuVisible(true)}
            >
              <Text>{recipe.type ? recipe.type : "Seleccionar tipo"}</Text>
            </Pressable>
          }
        >
          <Menu.Item
            onPress={() => handleTypeSelect("Proteína")}
            title="Proteína"
          />
          <Menu.Item onPress={() => handleTypeSelect("Fibra")} title="Fibra" />
          <Menu.Item
            onPress={() => handleTypeSelect("Hidratos")}
            title="Hidratos"
          />
        </Menu>
        <Text>Ingredientes</Text>
        {recipe.ingredients.map((ingredient, index) => (
          <View key={`ingredient-${index}`}>
            <TextInput
              style={styles.inputs}
              placeholder="Inserte un ingrediente..."
              value={ingredient}
              onChangeText={(text) => handleChangeIngredient(text, index)}
            />

            {index > 0 && (
              <Button
                onPress={() =>
                  setRecipe((prevState) => ({
                    ...prevState,
                    ingredients: prevState.ingredients.filter(
                      (_, i) => i !== index
                    ),
                  }))
                }
              >
                Delete
              </Button>
            )}
          </View>
        ))}
        <Button onPress={addIngredient}>Add Ingredient</Button>
        <Text>Pasos</Text>
        {recipe.steps.map((step, index) => (
          <View key={`step-${index}`}>
            <TextInput
              style={styles.inputs}
              placeholder="Inserte paso..."
              value={step}
              onChangeText={(text) => handleChangeStep(text, index)}
            />
            {index > 0 && (
              <Button
                onPress={() =>
                  setRecipe((prevState) => ({
                    ...prevState,
                    steps: prevState.steps.filter((_, i) => i !== index),
                  }))
                }
              >
                Delete
              </Button>
            )}
          </View>
        ))}
        <Button onPress={addStep}>Add Step</Button>
        <Pressable style={styles.button} onPress={addRecipe}>
          <Text>Añadir receta</Text>
        </Pressable>
      </View>
    </PaperProvider>
  );
};

export default AddRecipe;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    margin: 50,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 10,
    backgroundColor: "#f8d7d2",
  },
  inputs: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
});
