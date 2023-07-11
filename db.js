const mongoose = require("mongoose");

const conectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000,
    });
    console.log("database connected successfully");
    const collection_foodItems =
      mongoose.connection.db.collection("food_items");
    global.food_items = await collection_foodItems.find({}).toArray();
    // console.log(food_items);
    const collection_foodCategory =
      mongoose.connection.db.collection("foodCategory");
    global.food_category = await collection_foodCategory.find({}).toArray();
    // console.log(food_category)
  } catch (error) {
    console.log(error);
  }
};

module.exports = conectDatabase;
