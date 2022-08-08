import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "./RecipeList.module.scss";

const RecipeList = ({ recipeData, loading, number, error }) => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && !loading) {
      number((prev) => prev + 9);
    }
  }, [inView, number]);

  return (
    <>
      <ul className={styled.list}>
        {recipeData.map((recipe) => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt="foodImage" />
            <ul>
              {recipe.dishTypes.map((type, index) => (
                <li key={index}>#{type}</li>
              ))}
            </ul>
          </li>
        ))}
        <div ref={ref} />
      </ul>
      {error && <h1>레시피를 불러오는데 실패했습니다.</h1>}
    </>
  );
};

export default RecipeList;
