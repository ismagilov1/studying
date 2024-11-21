const NavLink = ({ text, onClick }) => {
  return (
    <li
      onClick={onClick}
      className="hover:underline active:text-slate-800 cursor-pointer"
    >
      {text}
    </li>
  );
};

export default NavLink;
