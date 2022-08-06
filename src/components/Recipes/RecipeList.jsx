const RecipeList = ({ recipeData }) => {
  if (recipeData.length === 0) {
    <p>레시피 로딩중..</p>;
  }
  return (
    <ul>
      {recipeData.map((recipe) => (
        <li key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt="foodImage" />
          <ul>
            {recipe.dishTypes.map((type, index) => (
              <li key={index}>#{type}</li>
            ))}
          </ul>
          <a href={recipe.spoonacularSourceUrl}>자세히보기 ✔</a>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
