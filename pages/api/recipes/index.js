import Recipe from '../../../models/recipes';
import db from '../../../lib/dbConnect';

export default async function handler(req, res) {
  // if (req.method === "GET" || req.method !=="POST" ) {
  //     res.status(405).json({error: "only POST and GETmethods are allowed "});
  // }
  if (req.method === 'GET') {
    await db.connect();

    const recipes = await Recipe.find({});

    await db.disconnect();

    res.status(200).json({ recipes });
  } else if (req.method === 'POST') {
    await db.connect();
    console.log(req.body);

    const { food, area, ingredients, instructions } = req.body;

    const recipe = await Recipe.create({
      food,
      area,
      ingredients,
      instructions,
    });
    await db.disconnect();

    res.status(201).json({ recipe });
  } else {
    res.status(405).json({ error: 'Only POST and GET methods are allowed' });
  }
}
