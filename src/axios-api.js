import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  headers: { "Content-Type": "application/json" },
});

export const apis = {
  createPost: (content) =>
    instance.post(
      "/accounts:signInWithPassword?key=AIzaSyAzWdv8N5eIaLBRsRyn72jCngr5AQPQs4k",
      content
    ),
};
