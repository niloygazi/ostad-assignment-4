import { useParams } from "react-router-dom";
import Form from "../components/Form";
import { useEffect, useState } from "react";
import api from "../api/api";

const CreateFood = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id !== undefined) {
      const fetchData = async () => {
        try {
          const res = await api.get("/api/get");
          if (res.status === 200) {
            setData(res.data.find((item) => item._id === id));
          }
        } catch (err) {
          console.error(err);
        }
      };

      fetchData();
    } else {
      setData(null);
    }
  }, [id]);

  return (
    <>
      <div className="w-4/5 ml-[20%]">
        <div className="separator h-[10vh] border-b border-border"></div>

        <div className="menu mt-10 container">
          <p className="text-text text-[18px] font-medium">
            {data !== null ? "Update" : "Create"} Food Item
          </p>

          <div className="mt-6">
            <Form editedItem={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateFood;
