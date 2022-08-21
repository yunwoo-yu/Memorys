import RecipeList from "../../components/Recipes/RecipeList";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import RecipeCategory from "../../components/Recipes/RecipeCategory";

const RecipeListContainer = () => {
  const [loading, setLoading] = useState(false);
  const [itemNumber, setItemNumber] = useState(9);
  const [item, setItem] = useState([]);
  const [error, setError] = useState(false);

  const getRecipe = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch/?apiKey=077376e33b6d4e028d91ac53455e7d7e&number=${itemNumber}`
      );
      setItem(res.data.results);
      console.log(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);

      setError(err.message);
    }
  }, [itemNumber]);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  console.log(item);

  return (
    <>
      <RecipeCategory />
      <RecipeList
        recipeData={item}
        error={error}
        loading={loading}
        number={setItemNumber}
      />
    </>
  );
};

export default RecipeListContainer;
