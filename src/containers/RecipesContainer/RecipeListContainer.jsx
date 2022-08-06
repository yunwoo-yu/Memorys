import RecipeList from "../../components/Recipes/RecipeList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { recipeThunk } from "../../Reducer/Slice/RecipeSlice";

const RecipeListContainer = () => {
  const dispatch = useDispatch();
  const recipeData = useSelector((state) => state.recipe.data);

  useEffect(() => {
    dispatch(recipeThunk());
  }, [dispatch]);

  return <RecipeList recipeData={recipeData} />;
};

export default RecipeListContainer;
