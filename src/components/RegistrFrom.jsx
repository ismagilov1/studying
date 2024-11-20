import Button from "./ui/Button";
import Input from "./ui/Input";

const RegistrForm = () => {
  return (
    <form className="absolute p-5 rounded-md flex flex-col gap-4 items-center bg-slate-100 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
      <label className="font-medium w-full text-center">
        Registration form
      </label>
      <Input placeholder={"username"} id="username" type={"text"} />
      <Input placeholder={"password"} id={"password"} type={"password"} />
      <Input placeholder={"password"} id={"password"} type={"password"} />
      <Button text={"registration"} />
    </form>
  );
};

export default RegistrForm;
