const Input = ({ type, id }) => {
  return (
    <input
      type={type}
      className="border-b-2 border-b-gray-200 active:border-b-blue-500  w-full "
    />
  );
};

const Button = ({ text }) => {
  return (
    <button className="rounded-md uppercase font-bold shadow-slate-800 shadow-md w-full p-3 bg-blue-700">
      {text}
    </button>
  );
};

const LoginForm = () => {
  return (
    <form className="absolute p-5 rounded-md flex flex-col gap-4 items-center bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <label className="font-medium w-full text-center">Login form</label>
      <Input type={"text"} />
      <Input type={"password"} />
      <Button text={"login"} />
    </form>
  );
};

export default LoginForm;
