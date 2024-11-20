const Input = ({ type, id, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      id={id}
      type={type}
      className="border-b-2 border-b-gray-200 active:border-b-blue-500  w-full "
    />
  );
};

export default Input;
