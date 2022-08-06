import axios from "axios";

const apikey = "077376e33b6d4e028d91ac53455e7d7e";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  headers: { "Content-Type": "application/json" },
});

const instanceRecipes = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: "Content-Type: application/json",
});

const apis = {
  createPost: (content) =>
    instance.post(
      "/accounts:signInWithPassword?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k",
      content
    ),
  getRecipe: () =>
    instanceRecipes.get(
      "/recipes/random?apiKey=077376e33b6d4e028d91ac53455e7d7e&number=1"
    ),
};

export default apis;
