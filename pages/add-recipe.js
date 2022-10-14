import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

function AddRecipe() {
  const [data, setData] = useState({
    food: '',
    area: '',
    time: '',
    type: '',
    ingredients: '',
    instructions: '',
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { food, area, time, type, ingredients, instructions } = data;
    if (
      food === '' 
      && area === '' 
      && time === '' 
      && type === '' 
      && ingredients === '' 
      && instructions === ''
    ) {
      setError('Please provide all the information');
      return;
    }
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/recipes`, data
      );
      router.push('/savedMeals');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <div className="grid h-full place-items-center mb-7 mt-3">
        <div className=" text-2xl p-4 w-full max-w-5xl min-h-fit bg-white rounded-lg border border-gray-200 shadow-2xl sm:p-6 md:p-8 dark:bg-transparent dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-6" action="#">
            {error && <p className="text-2xl text-red-600">{error}</p>}
            <div className="p-6 pl-0 pt-2 text-7xl text-gray-900 dark:text-white font-semibold">
              <h2>
                <span className="text-orange-500">Frace</span>
                Recipes🍂
              </h2>
            </div>
            <h5 className=" p-6 pl-0 pb-10 text-4xl font-medium text-gray-900 dark:text-white">
              Add Your Menu Recipe
            </h5>
            <div className="flex flex-col gap-x-2 lg:flex-row">
              <div className="flex-1">
                <label
                  htmlFor="food"
                  className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  Food
                </label>
                <input
                  type="string"
                  name="food"
                  id="food"
                  value={data.food}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="food"
                  required=""
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="area"
                  className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  Area / Country
                </label>
                <input
                  type="string"
                  name="area"
                  id="area"
                  value={data.area}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 pb-6 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="area"
                  required=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-x-2 lg:flex-row">
              <div className="flex-1">
                <label
                  htmlFor="time"
                  className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected="">Select a Time of the Day</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="supper">Supper</option>
                </select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="type"
                  className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
                >
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-4xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected="">Select a type of food</option>
                  <option value="beef">Beef</option>
                  <option value="chicken">Chicken</option>
                  <option value="lamb">Lamb</option>
                  <option value="pork">Pork</option>
                  <option value="seaFood">Sea Food</option>
                  <option value="side Dish">Side Dish</option>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="dessert">Dessert</option>
                  <option value="miscellaneous">Miscellaneous</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="ingredients"
                className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Ingredients
              </label>
              {/* Ingridients Section For text Area */}
              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                  <label htmlFor="ingredients" className="sr-only">
                    Your ingredients
                  </label>
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={data.ingredients}
                    onChange={handleChange}
                    rows="4"
                    className="px-0 w-full text-3xl text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Type ingredients here"
                    required=""
                  ></textarea>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="instructions"
                className=" text-4xl block mb-2 font-medium text-gray-900 dark:text-gray-300"
              >
                Instructions
              </label>
              {/* Recipes Section For text Area */}
              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div className="py-2 px-4 bg-white rounded-t-lg dark:bg-gray-800">
                  <label htmlFor="instructionst" className="sr-only">
                    Your Recipes
                  </label>
                  <textarea
                    id="instructions"
                    value={data.instructions}
                    onChange={handleChange}
                    name="instructions"
                    rows="4"
                    className="px-0 w-full text-3xl text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Type Your instructions here"
                    required=""
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-40 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-5 py-2.5 text-center dark:bg-orange-400 dark:hover:bg-orange-500 dark:focus:ring-orange-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe;
