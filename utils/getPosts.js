import axios from 'axios';

export const getPosts = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE - URL}/api/recipes`
  );
  const recipes = await res.data;

  if (id) {
    const recipes = recipes.find((post) => recipes._id === id);
    return recipes;
  }
  return recipes;
};
