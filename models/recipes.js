import { Schema, model, models } from 'mongoose';

const postSchema = new Schema(
  {
    food: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      emun: ['breafast', 'lunch', 'supper'],
    },
    type: {
      type: String,
      emun: [
        'beef',
        'chicken',
        'lamb',
        'pork',
        'seaFood',
        'side Dish',
        'vegetarian',
        'dessert',
        'miscellaneous',
      ],
    },
    area: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const recipes = models.Post || model('Post', postSchema);
export default recipes;
