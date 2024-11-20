const Button = ({ text }) => {
  return (
    <button className="rounded-md uppercase font-bold shadow-slate-800 shadow-md w-full p-3 bg-blue-700">
      {text}
    </button>
  );
};

export default Button;
