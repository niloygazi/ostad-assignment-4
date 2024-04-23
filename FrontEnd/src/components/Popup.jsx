const Popup = ({ foodName, id, onDelete, isShow, setIsShow }) => {
  return (
    <div
      className={`w-3/4 md:w-auto absolute z-30 left-1/2 -translate-x-1/2 py-6 px-4 md:px-10 bg-white rounded-lg border border-border  transition-all duration-300 ${
        isShow ? "top-6 opacity-100 " : "-top-12 opacity-0"
      }`}
    >
      <p className="text-sm md:text-base">
        Do you want to delete{" "}
        <span className="font-semibold">{`"${foodName}"`}</span>
      </p>

      <div className="mt-3 flex justify-end gap-2">
        <button className="" onClick={() => setIsShow(false)}>
          Cancel
        </button>
        <button className="text-red-500" onClick={() => onDelete(id)}>
          Yes
        </button>
      </div>
    </div>
  );
};

export default Popup;
