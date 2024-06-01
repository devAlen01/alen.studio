import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 z-30">
      <div className="py-[20px] bg-slate-400 text-slate-900">
        <div className="flex justify-between items-center ">
          <h1 className="text-bold text-2xl font-bold  px-9">A.Studio</h1>
          <nav className="flex justify-evenly w-full top-0 sticky z-20 ">
            <NavLink to="/">Расписание</NavLink>
            <NavLink to="/titles">Список аниме</NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
