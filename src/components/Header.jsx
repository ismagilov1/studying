const Header = () => {
  const fullDate = new Date();
  const currDate =
    fullDate.getDate() +
    "." +
    fullDate.getMonth() +
    "." +
    fullDate.getFullYear();
  return (
    <header className="p-2 bg-slate-700 text-stone-900 font-bold flex justify-end">
      <time dateTime={currDate}>{currDate}</time>
    </header>
  );
};

export default Header;
