import Button from "./ui/Button";
import Input from "./ui/Input";

const LoginForm = () => {
  function login(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log("username:" + data.get("username"));
    console.log("password:" + data.get("password"));
  }
  return (
    <form
      onSubmit={login}
      className="absolute p-5 rounded-md flex flex-col gap-4 items-center bg-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
    >
      <label className="font-medium w-full text-center">Login form</label>
      <Input placeholder={"username"} id={"username"} type={"text"} />
      <Input placeholder={"password"} id={"password"} type={"password"} />
      <Button text={"login"} />
    </form>
  );
};

export default LoginForm;
