import mongoose from "mongoose";

const foodApi = mongoose.Schema(
  {
    foodName: {
      type: String,
      require: true,
    },
    foodCode: {
      type: String,
      require: true,
    },
    foodImg: {
      type: String,
      require: true,
    },
    foodCategory: {
      type: String,
      require: true,
    },
    foodNumber: {
      type: Number,
      require: true,
    },
    foodPrice: {
      type: Number,
      require: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const foodModel = mongoose.model("FoodTable", foodApi);

export default foodModel;
