import foodModel from "../models/foodModel.js";


export const createFoodItem = async (req, res) => {
  try {
    await foodModel.create(req.body);
    res.json({ status: "Item created successfully" });
  } catch (err) {
    res.json({ status: "Something went Wrong" });
  }
};

export const getFoodList = async (req, res) => {
  const data = await foodModel.find();
  res.send(data);
};

export const updateFoodItem = async (req, res) => {
  const { id } = req.params;

  await foodModel.findOneAndUpdate({ _id: id }, req.body);
  res.json({ message: "Item Updated" });
};

export const deleteFoodItem = async (req, res) => {
  const { id } = req.params;

  await foodModel.findByIdAndDelete(id);
  res.json({ status: "Item Deleted" });
};
