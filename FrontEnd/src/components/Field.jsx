const Field = ({ label, inpID, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inpID} className="">
        {label}
      </label>
      {children}
    </div>
  );
};

export default Field;
