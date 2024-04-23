import { useEffect } from "react";
import Card from "../components/Card.jsx";
import api from "../api/api";
import { useState } from "react";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const AllFood = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isPopup, setIsPopup] = useState(false);

  useEffect(() => {
    const FoodData = async () => {
      setLoading(true);
      try {
        const res = await api.get("/api/get");
        if (res.status === 200) {
          setData(res.data);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    FoodData();
  }, []);

  const handlePopup = () => {
    setIsPopup(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/api/delete/${id}`);
      if (res.status === 200) {
        setData(data.filter((item) => item._id !== id));
        toast.success("Item deleted");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-4/5 ml-[20%]">
      <div className="separator h-[10vh] border-b border-border"></div>

      <div className="menu mt-10 container">
        <p className="text-text text-[18px] font-medium">All Food List</p>

        {loading && (
          <div className="mt-6 grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Loading />
          </div>
        )}

        {!loading &&
          (data?.length !== 0 ? (
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data?.map((item) => {
                return (
                  <Card food={item} key={item?._id} onDelete={handleDelete} onPopup={handlePopup} isPopup={isPopup}/>
                );
              })}
            </div>
          ) : (
            <div className="mt-6">
              <p>No data found</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllFood;
