const Input = ({ type, id, placeholder }) => {
  return (
    <input
      name={id}
      placeholder={placeholder}
      id={id}
      type={type}
      className="border-b-2 border-b-gray-200 focus:border-b-blue-500 w-full"
    />
  );
};

export default Input;
