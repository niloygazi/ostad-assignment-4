import { useState } from "react";
import Field from "./Field";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const initValue = {
  foodName: "",
  foodCode: "",
  foodCat: "",
  foodImg: "",
  foodQTY: "",
  foodPrice: "",
};

const Form = ({ editedItem }) => {
  const [formData, setFormData] = useState(initValue);

  useEffect(() => {
    if (editedItem !== null) {
      setFormData(editedItem);
    } else {
      setFormData(initValue);
    }
  }, [editedItem]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editedItem !== null) {
        api.put(`/update/${editedItem._id}`, formData);
        toast.success("Food item updated");
      } else {
        api.post("/create", formData);
        toast.success("Food item added");
      }
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <Field label="Food Name" inpID="foodName">
        <input
          type="text"
          name="foodName"
          className="inpField"
          value={formData.foodName}
          onChange={(e) => handleChange(e)}
          required
        />
      </Field>

      <Field label="Food Code" inpID="foodCode">
        <input
          type="number"
          name="foodCode"
          className="inpField"
          value={formData.foodCode}
          onChange={(e) => handleChange(e)}
          required
        />
      </Field>

      <Field label="Food Image (url)" inpID="foodImg">
        <input
          type="text"
          name="foodImg"
          className="inpField"
          value={formData.foodImg}
          onChange={(e) => handleChange(e)}
          required
        />
      </Field>

      <Field label="Food Category" inpID="foodCat">
        <input
          type="text"
          name="foodCat"
          className="inpField"
          value={formData.foodCat}
          onChange={(e) => handleChange(e)}
          required
        />
      </Field>

      <Field label="QTY" inpID="foodQTY">
        <input
          type="number"
          name="foodQTY"
          className="inpField"
          value={formData.foodQTY}
          onChange={(e) => handleChange(e)}
          required
        />
      </Field>

      <Field label="Price" inpID="foodPrice">
        <input
          type="number"
          name="foodPrice"
          className="inpField"
          value={formData.foodPrice}
          onChange={(e) => handleChange(e)}
          required
        />
      </Field>

      <button className="mt-6 bg-brand py-4 w-40 text-white rounded-lg duration-200 hover:bg-opacity-90">
        {editedItem !== null ? "Update Item" : "Add Item"}
      </button>
    </form>
  );
};

export default Form;
