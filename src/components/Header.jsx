import { useState } from "react";
import NavLink from "./ui/NavLink";
import RegistrForm from "./RegistrFrom.jsx";
import LoginForm from "./LoginForm.jsx";

const Header = () => {
  const fullDate = new Date();
  const currDate =
    fullDate.getDate() +
    "." +
    fullDate.getMonth() +
    "." +
    fullDate.getFullYear();

  const [isNewUser, setNewUser] = useState(true);
  return (
    <>
      <header className="p-2 bg-slate-700 text-stone-900 font-bold flex justify-between">
        <nav>
          <ul className="flex flex-row gap-3">
            <NavLink
              text={"Registration"}
              onClick={() => {
                setNewUser(true);
              }}
            />
            <NavLink
              text={"Login"}
              onClick={() => {
                setNewUser(false);
              }}
            />
          </ul>
        </nav>
        <time dateTime={currDate}>{currDate}</time>
      </header>
      {isNewUser ? <RegistrForm /> : <LoginForm />}
    </>
  );
};

export default Header;
